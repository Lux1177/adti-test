import { reactive, computed, readonly } from "vue"
import type { Question, UserAnswer } from "~/types/quiz"

interface QuizState {
	allQuestions: Question[]
	currentQuestions: Question[]
	currentQuestionIndex: number
	score: number
	userAnswers: UserAnswer[]
	isLoading: boolean
	error: string | null
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
})

// localStorage keys
const STORAGE_KEYS = {
	QUIZ_STATE: "quiz-state",
	ALL_QUESTIONS: "quiz-questions",
}

// Save state to localStorage
const saveState = () => {
	if (typeof window !== "undefined") {
		const stateToSave = {
			currentQuestions: state.currentQuestions,
			currentQuestionIndex: state.currentQuestionIndex,
			score: state.score,
			userAnswers: state.userAnswers,
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

// Save questions to localStorage for caching
const saveQuestions = (questions: Question[]) => {
	if (typeof window !== "undefined") {
		localStorage.setItem(
				STORAGE_KEYS.ALL_QUESTIONS,
				JSON.stringify({
					questions,
					timestamp: Date.now(),
				}),
		)
	}
}

// Load cached questions from localStorage
const loadCachedQuestions = (): Question[] | null => {
	if (typeof window !== "undefined") {
		const cached = localStorage.getItem(STORAGE_KEYS.ALL_QUESTIONS)
		if (cached) {
			try {
				const parsed = JSON.parse(cached)
				// Cache for 1 hour
				if (Date.now() - parsed.timestamp < 3600000) {
					return parsed.questions
				}
			} catch (error) {
				console.error("Error loading cached questions:", error)
			}
		}
	}
	return null
}

// Parse questions from text format
const parseQuestions = (data: string): Question[] => {
	const questions: Question[] = []
	const questionBlocks = data.trim().split(/\s*\+{3,}\s*/)

	questionBlocks.forEach((block) => {
		if (block.trim() === "") return

		const parts = block.split(/\n\s*={3,}\s*/)
		if (parts.length < 2) return

		const question = parts[0].trim()
		if (!question) return

		const options: string[] = []
		let correctAnswerText = ""
		let correctAnswerFound = false

		for (let i = 1; i < parts.length; i++) {
			const optionText = parts[i].trim()
			if (optionText === "") continue

			if (optionText.startsWith("#")) {
				const actualAnswer = optionText.substring(1).trim()
				options.push(actualAnswer)
				if (!correctAnswerFound) {
					correctAnswerText = actualAnswer
					correctAnswerFound = true
				}
			} else {
				options.push(optionText)
			}
		}

		if (question && options.length >= 1 && correctAnswerFound) {
			questions.push({
				questionText: question,
				options: options,
				correctAnswer: correctAnswerText,
			})
		}
	})

	return questions
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
const loadQuestions = async () => {
	state.isLoading = true
	state.error = null

	try {
		// Try to load from cache first
		const cachedQuestions = loadCachedQuestions()
		if (cachedQuestions && cachedQuestions.length > 0) {
			state.allQuestions = cachedQuestions
			state.isLoading = false
			return
		}

		// Fetch from API if no cache
		const response = await $fetch("/api/questions")
		const questions = parseQuestions(response.data)

		if (questions.length === 0) {
			throw new Error("No questions loaded or incorrect format")
		}

		state.allQuestions = questions
		saveQuestions(questions) // Cache the questions
	} catch (error) {
		state.error = error instanceof Error ? error.message : "Failed to load questions"
		console.error("Error loading questions:", error)
	} finally {
		state.isLoading = false
	}
}

const startTest = (): boolean => {
	const questionsPerTest = 20

	state.score = 0
	state.currentQuestionIndex = 0
	state.userAnswers = []

	// Create a copy and shuffle
	const shuffledQuestions = [...state.allQuestions]
	shuffleArray(shuffledQuestions)

	state.currentQuestions = shuffledQuestions.slice(0, Math.min(questionsPerTest, shuffledQuestions.length))

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
