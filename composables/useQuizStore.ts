import { reactive, computed, readonly } from "vue"
import type { Question, UserAnswer, Locale } from "~/types/quiz"

interface QuizState {
	allQuestions: Question[]
	currentQuestions: Question[]
	currentQuestionIndex: number
	score: number
	userAnswers: UserAnswer[]
	isLoading: boolean
	error: string | null
	currentQuizId: string | null
}

// Create reactive state
const state = reactive<QuizState>({
	allQuestions: [],
	currentQuestions: [],
	currentQuestionIndex: 0,
	score: 0,
	userAnswers: [],
	isLoading: false,
	error: null,
	currentQuizId: null,
})

// localStorage keys
const STORAGE_KEYS = {
	QUIZ_STATE: "quiz-state",
	QUIZ_CACHE: "quiz-cache",
}

// Save state to localStorage
const saveState = () => {
	if (typeof window !== "undefined") {
		const stateToSave = {
			currentQuestions: state.currentQuestions,
			currentQuestionIndex: state.currentQuestionIndex,
			score: state.score,
			userAnswers: state.userAnswers,
			currentQuizId: state.currentQuizId,
			timestamp: Date.now(),
		}
		localStorage.setItem(STORAGE_KEYS.QUIZ_STATE, JSON.stringify(stateToSave))
	}
}

// Load state from localStorage
const loadState = (): boolean => {
	if (typeof window !== "undefined") {
		const savedState = localStorage.getItem(STORAGE_KEYS.QUIZ_STATE)
		if (savedState) {
			try {
				const parsed = JSON.parse(savedState)
				if (parsed.currentQuestions && parsed.currentQuestions.length > 0) {
					state.currentQuestions = parsed.currentQuestions
					state.currentQuestionIndex = parsed.currentQuestionIndex || 0
					state.score = parsed.score || 0
					state.userAnswers = parsed.userAnswers || []
					state.currentQuizId = parsed.currentQuizId || null
					return true
				}
			} catch (error) {
				console.error("Error loading quiz state:", error)
				clearState()
			}
		}
	}
	return false
}

// Clear saved state
const clearState = () => {
	if (typeof window !== "undefined") {
		localStorage.removeItem(STORAGE_KEYS.QUIZ_STATE)
	}
}

// Save quiz data to cache
const saveQuizCache = (quizId: string, locale: Locale, questions: Question[]) => {
	if (typeof window !== "undefined") {
		const cache = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUIZ_CACHE) || "{}")
		cache[`${quizId}-${locale}`] = {
			questions,
			timestamp: Date.now(),
		}
		localStorage.setItem(STORAGE_KEYS.QUIZ_CACHE, JSON.stringify(cache))
	}
}

// Load quiz data from cache
const loadQuizCache = (quizId: string, locale: Locale): Question[] | null => {
	if (typeof window !== "undefined") {
		const cache = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUIZ_CACHE) || "{}")
		const cached = cache[`${quizId}-${locale}`]
		if (cached && Date.now() - cached.timestamp < 3600000) {
			// 1 hour cache
			return cached.questions
		}
	}
	return null
}

// Shuffle array in place
const shuffleArray = (array: any[]): void => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
}

// Computed properties
const getCurrentQuestion = computed(() => {
	return state.currentQuestions[state.currentQuestionIndex]
})

const getProgress = computed(() => {
	return state.currentQuestions.length > 0 ? (state.currentQuestionIndex / state.currentQuestions.length) * 100 : 0
})

const getPercentage = computed(() => {
	return state.currentQuestions.length > 0 ? (state.score / state.currentQuestions.length) * 100 : 0
})

const isLastQuestion = computed(() => {
	return state.currentQuestionIndex === state.currentQuestions.length - 1
})

const isTestComplete = computed(() => {
	return state.currentQuestionIndex >= state.currentQuestions.length
})

const hasActiveQuiz = computed(() => {
	return state.currentQuestions.length > 0 && state.currentQuestionIndex < state.currentQuestions.length
})

// Actions
const loadQuestions = async (quizId: string, locale: Locale) => {
	state.isLoading = true
	state.error = null

	try {
		// Try to load from cache first
		const cachedQuestions = loadQuizCache(quizId, locale)
		if (cachedQuestions && cachedQuestions.length > 0) {
			state.allQuestions = cachedQuestions
			state.isLoading = false
			return
		}

		// Fetch from API if no cache
		const response = await $fetch(`/api/questions/${quizId}`)
		const questions = response.data[locale] || []

		if (questions.length === 0) {
			throw new Error("No questions found for this quiz and language")
		}

		state.allQuestions = questions
		saveQuizCache(quizId, locale, questions) // Cache the questions
	} catch (error) {
		state.error = error instanceof Error ? error.message : "Failed to load questions"
		console.error("Error loading questions:", error)
	} finally {
		state.isLoading = false
	}
}

const startTest = (quizId: string): boolean => {
	if (state.allQuestions.length === 0) {
		state.error = "No questions loaded. Please load questions first."
		return false
	}

	state.score = 0
	state.currentQuestionIndex = 0
	state.userAnswers = []
	state.currentQuizId = quizId

	// Create a copy and shuffle
	const shuffledQuestions = [...state.allQuestions]
	shuffleArray(shuffledQuestions)

	// Take all questions or limit based on quiz configuration
	state.currentQuestions = shuffledQuestions

	if (state.currentQuestions.length === 0) {
		state.error = "No questions available to start the test"
		return false
	}

	// Shuffle options for each question
	state.currentQuestions.forEach((q) => shuffleArray(q.options))

	saveState()
	return true
}

const selectAnswer = (userAnswerText: string) => {
	const currentQuestion = getCurrentQuestion.value
	const isCorrect = userAnswerText === currentQuestion.correctAnswer

	if (isCorrect) {
		state.score++
	}

	state.userAnswers.push({
		question: currentQuestion.questionText,
		selected: userAnswerText,
		correct: currentQuestion.correctAnswer,
		isCorrect: isCorrect,
	})

	saveState()
}

const nextQuestion = () => {
	state.currentQuestionIndex++
	saveState()
}

const resetTest = () => {
	clearState()
	state.currentQuestions = []
	state.currentQuestionIndex = 0
	state.score = 0
	state.userAnswers = []
	state.currentQuizId = null
}

// Export the composable
export const useQuizStore = () => {
	return {
		// Readonly state
		state: readonly(state),

		// Computed properties
		getCurrentQuestion,
		getProgress,
		getPercentage,
		isLastQuestion,
		isTestComplete,
		hasActiveQuiz,

		// Actions
		loadQuestions,
		startTest,
		selectAnswer,
		nextQuestion,
		resetTest,
		loadState,
		saveState,
		clearState,
	}
}
