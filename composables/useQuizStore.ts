import { reactive, computed, readonly } from "vue"
import type { Question, Locale, QuizState, QuizResult } from "~/types/quiz"
import { quizzes } from "~/data/quizzes"

// Create reactive state
const state = reactive<QuizState>({
	activeQuiz: {
		currentQuestions: [],
		currentQuestionIndex: 0,
		score: 0,
		userAnswers: [],
		currentQuizId: null,
	},
	resultsHistory: [],
	isLoading: false,
	error: null,
})

// localStorage keys
const STORAGE_KEYS = {
	ACTIVE_QUIZ_STATE: "quiz-active-state",
	RESULTS_HISTORY: "quiz-results-history",
	QUIZ_CACHE: "quiz-cache",
}

// --- State Management ---

const saveActiveState = () => {
	if (typeof window !== "undefined") {
		localStorage.setItem(STORAGE_KEYS.ACTIVE_QUIZ_STATE, JSON.stringify(state.activeQuiz))
	}
}

const loadActiveState = (): boolean => {
	if (typeof window !== "undefined") {
		const savedState = localStorage.getItem(STORAGE_KEYS.ACTIVE_QUIZ_STATE)
		if (savedState) {
			try {
				const parsed = JSON.parse(savedState)
				if (parsed.currentQuizId) {
					state.activeQuiz = parsed
					return true
				}
			} catch (e) {
				console.error("Error loading active quiz state:", e)
			}
		}
	}
	return false
}

const clearActiveState = () => {
	state.activeQuiz = {
		currentQuestions: [],
		currentQuestionIndex: 0,
		score: 0,
		userAnswers: [],
		currentQuizId: null,
	}
	if (typeof window !== "undefined") {
		localStorage.removeItem(STORAGE_KEYS.ACTIVE_QUIZ_STATE)
	}
}

const saveResultsHistory = () => {
	if (typeof window !== "undefined") {
		localStorage.setItem(STORAGE_KEYS.RESULTS_HISTORY, JSON.stringify(state.resultsHistory))
	}
}

const loadResultsHistory = () => {
	if (typeof window !== "undefined") {
		const savedHistory = localStorage.getItem(STORAGE_KEYS.RESULTS_HISTORY)
		if (savedHistory) {
			try {
				state.resultsHistory = JSON.parse(savedHistory)
			} catch (e) {
				console.error("Error loading results history:", e)
			}
		}
	}
}

// --- Cache Management ---

const saveQuizCache = (quizId: string, locale: Locale, questions: Question[]) => {
	if (typeof window !== "undefined") {
		const cache = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUIZ_CACHE) || "{}")
		cache[`${quizId}-${locale}`] = { questions, timestamp: Date.now() }
		localStorage.setItem(STORAGE_KEYS.QUIZ_CACHE, JSON.stringify(cache))
	}
}

const loadQuizCache = (quizId: string, locale: Locale): Question[] | null => {
	if (typeof window !== "undefined") {
		const cache = JSON.parse(localStorage.getItem(STORAGE_KEYS.QUIZ_CACHE) || "{}")
		const cached = cache[`${quizId}-${locale}`]
		if (cached && Date.now() - cached.timestamp < 3600000) {
			return cached.questions
		}
	}
	return null
}

// --- Computed Properties ---

const getCurrentQuestion = computed(() => state.activeQuiz.currentQuestions[state.activeQuiz.currentQuestionIndex])
const getProgress = computed(() =>
		state.activeQuiz.currentQuestions.length > 0
				? (state.activeQuiz.currentQuestionIndex / state.activeQuiz.currentQuestions.length) * 100
				: 0,
)
const isLastQuestion = computed(
		() => state.activeQuiz.currentQuestionIndex === state.activeQuiz.currentQuestions.length - 1,
)
const isTestComplete = computed(
		() =>
				state.activeQuiz.currentQuestions.length > 0 &&
				state.activeQuiz.currentQuestionIndex >= state.activeQuiz.currentQuestions.length,
)
const hasActiveQuiz = computed(() => state.activeQuiz.currentQuestions.length > 0 && !isTestComplete.value)

// --- Actions ---

const loadQuestions = async (quizId: string, locale: Locale) => {
	state.isLoading = true
	state.error = null
	try {
		const cachedQuestions = loadQuizCache(quizId, locale)
		if (cachedQuestions) {
			return cachedQuestions
		}
		const response = await $fetch(`/api/questions/${quizId}`)
		if (!response || !response.data) throw new Error(`No data for quiz ${quizId}`)
		const questions = response.data[locale] || []
		if (questions.length === 0) throw new Error(`No questions for quiz '${quizId}' in '${locale}'`)
		saveQuizCache(quizId, locale, questions)
		return questions
	} catch (error) {
		console.error("Error loading questions:", error)
		state.error = error instanceof Error ? error.message : "Failed to load questions"
		return []
	} finally {
		state.isLoading = false
	}
}

const startTest = async (quizId: string, locale: Locale) => {
	const allQuestions = await loadQuestions(quizId, locale)
	if (state.error || allQuestions.length === 0) {
		return false
	}

	clearActiveState()
	state.activeQuiz.currentQuizId = quizId

	const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
	state.activeQuiz.currentQuestions = shuffled.map((q) => ({
		...q,
		options: [...q.options].sort(() => Math.random() - 0.5),
	}))

	saveActiveState()
	return true
}

const selectAnswer = (userAnswerText: string) => {
	if (!hasActiveQuiz.value) return
	const currentQuestion = getCurrentQuestion.value
	const isCorrect = userAnswerText === currentQuestion.correctAnswer
	if (isCorrect) {
		state.activeQuiz.score++
	}
	state.activeQuiz.userAnswers.push({
		question: currentQuestion.questionText,
		selected: userAnswerText,
		correct: currentQuestion.correctAnswer,
		isCorrect,
	})
	saveActiveState()
}

const nextQuestion = () => {
	if (hasActiveQuiz.value) {
		state.activeQuiz.currentQuestionIndex++
		saveActiveState()
	}
}

const finishTest = () => {
	const quizInfo = quizzes.find((q) => q.id === state.activeQuiz.currentQuizId)
	if (!quizInfo) return

	const result: QuizResult = {
		id: `${state.activeQuiz.currentQuizId}-${Date.now()}`,
		quizId: state.activeQuiz.currentQuizId!,
		quizTitleKey: quizInfo.titleKey,
		score: state.activeQuiz.score,
		totalQuestions: state.activeQuiz.currentQuestions.length,
		percentage: (state.activeQuiz.score / state.activeQuiz.currentQuestions.length) * 100,
		userAnswers: state.activeQuiz.userAnswers,
		completedAt: Date.now(),
	}

	state.resultsHistory.unshift(result) // Add to the beginning of the array
	saveResultsHistory()
	clearActiveState()
}

const getResultById = (resultId: string) => {
	return state.resultsHistory.find((r) => r.id === resultId)
}

// Export the composable
export const useQuizStore = () => {
	// Load initial state from localStorage
	if (typeof window !== "undefined") {
		loadActiveState()
		loadResultsHistory()
	}

	return {
		state: readonly(state),
		getCurrentQuestion,
		getProgress,
		isLastQuestion,
		isTestComplete,
		hasActiveQuiz,
		loadQuestions,
		startTest,
		selectAnswer,
		nextQuestion,
		finishTest,
		getResultById,
		clearActiveState,
	}
}
