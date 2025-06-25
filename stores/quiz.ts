import { defineStore } from "pinia"
import { $fetch } from "ofetch"
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

export const useQuizStore = defineStore("quiz", {
	state: (): QuizState => ({
		allQuestions: [],
		currentQuestions: [],
		currentQuestionIndex: 0,
		score: 0,
		userAnswers: [],
		isLoading: false,
		error: null,
	}),

	getters: {
		getCurrentQuestion: (state) => {
			return state.currentQuestions[state.currentQuestionIndex]
		},

		getProgress: (state) => {
			return state.currentQuestions.length > 0 ? (state.currentQuestionIndex / state.currentQuestions.length) * 100 : 0
		},

		getPercentage: (state) => {
			return state.currentQuestions.length > 0 ? (state.score / state.currentQuestions.length) * 100 : 0
		},

		isLastQuestion: (state) => {
			return state.currentQuestionIndex === state.currentQuestions.length - 1
		},

		isTestComplete: (state) => {
			return state.currentQuestionIndex >= state.currentQuestions.length
		},

		hasActiveQuiz: (state) => {
			return state.currentQuestions.length > 0 && state.currentQuestionIndex < state.currentQuestions.length
		},
	},

	actions: {
		// Save state to localStorage
		saveState() {
			if (process.client) {
				const stateToSave = {
					currentQuestions: this.currentQuestions,
					currentQuestionIndex: this.currentQuestionIndex,
					score: this.score,
					userAnswers: this.userAnswers,
					isActive: this.hasActiveQuiz,
					isComplete: this.isTestComplete,
				}
				localStorage.setItem("quizState", JSON.stringify(stateToSave))
			}
		},

		// Load state from localStorage
		loadState(): boolean {
			if (process.client) {
				const savedState = localStorage.getItem("quizState")
				if (savedState) {
					try {
						const parsed = JSON.parse(savedState)
						if (parsed.currentQuestions && parsed.currentQuestions.length > 0) {
							this.currentQuestions = parsed.currentQuestions
							this.currentQuestionIndex = parsed.currentQuestionIndex || 0
							this.score = parsed.score || 0
							this.userAnswers = parsed.userAnswers || []
							return true // Quiz state was loaded
						}
					} catch (error) {
						console.error("Error loading quiz state:", error)
						this.clearState()
					}
				}
			}
			return false // No quiz state found
		},

		// Clear saved state
		clearState() {
			if (process.client) {
				localStorage.removeItem("quizState")
			}
		},

		// Parse questions from text format
		parseQuestions(data: string): Question[] {
			const questions: Question[] = []
			const questionBlocks = data.trim().split(/\s*\+{3,}\s*/)

			questionBlocks.forEach((block) => {
				if (block.trim() === "") return

				const parts = block.split(/\n\s*={3,}\s*/)
				if (parts.length < 2) {
					console.warn("Skipping block: no separator found between question and options")
					return
				}

				const question = parts[0].trim()

				if (!question) {
					console.warn("Skipping block: empty question text")
					return
				}

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
				} else {
					console.warn(`Skipping question: insufficient options or no correct answer found`)
				}
			})

			return questions
		},

		// Shuffle array in place
		shuffleArray<T>(array: T[]): void {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1))
				;[array[i], array[j]] = [array[j], array[i]]
			}
		},

		// Load questions from API
		async loadQuestions() {
			this.isLoading = true
			this.error = null

			try {
				const response = await $fetch("/api/questions")
				this.allQuestions = this.parseQuestions(response.data)

				if (this.allQuestions.length === 0) {
					throw new Error("No questions loaded or incorrect format")
				}
			} catch (error) {
				this.error = error instanceof Error ? error.message : "Failed to load questions"
				console.error("Error loading questions:", error)
			} finally {
				this.isLoading = false
			}
		},

		// Start a new test
		startTest(): boolean {
			const questionsPerTest = 20

			this.score = 0
			this.currentQuestionIndex = 0
			this.userAnswers = []

			// Create a copy of allQuestions and shuffle it
			const shuffledQuestions = [...this.allQuestions]
			this.shuffleArray(shuffledQuestions)

			this.currentQuestions = shuffledQuestions.slice(0, Math.min(questionsPerTest, shuffledQuestions.length))

			if (this.currentQuestions.length === 0) {
				this.error = "No questions available to start the test"
				return false
			}

			// Shuffle options for each question
			this.currentQuestions.forEach((q) => this.shuffleArray(q.options))

			this.saveState() // Save initial state
			return true
		},

		// Select an answer for current question
		selectAnswer(userAnswerText: string) {
			const currentQuestion = this.getCurrentQuestion
			const isCorrect = userAnswerText === currentQuestion.correctAnswer

			if (isCorrect) {
				this.score++
			}

			this.userAnswers.push({
				question: currentQuestion.questionText,
				selected: userAnswerText,
				correct: currentQuestion.correctAnswer,
				isCorrect: isCorrect,
			})

			this.saveState() // Save after answer selection
		},

		// Move to next question
		nextQuestion() {
			this.currentQuestionIndex++
			this.saveState() // Save after moving to next question
		},

		// Finish the test
		finishTest() {
			this.saveState()
		},

		// Reset the test
		resetTest() {
			this.clearState() // Clear state when test is reset
			this.currentQuestions = []
			this.currentQuestionIndex = 0
			this.score = 0
			this.userAnswers = []
		},
	},
})
