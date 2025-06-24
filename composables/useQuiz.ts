import type { Question, QuizState } from "~/types/quiz"
import { reactive } from "vue"

export const useQuiz = () => {
	const state = reactive<QuizState>({
		allQuestions: [],
		currentQuestions: [],
		currentQuestionIndex: 0,
		score: 0,
		userAnswers: [],
		isLoading: false,
		error: null
	})

	const questionsPerTest = 20

	const parseQuestions = (data: string): Question[] => {
		const questions: Question[] = []
		const questionBlocks = data.trim().split(/\s*\+{3,}\s*/)

		questionBlocks.forEach(block => {
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
			let correctAnswerText = ''
			let correctAnswerFound = false

			for (let i = 1; i < parts.length; i++) {
				const optionText = parts[i].trim()
				if (optionText === "") continue

				if (optionText.startsWith('#')) {
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
					correctAnswer: correctAnswerText
				})
			} else {
				console.warn(`Skipping question: insufficient options or no correct answer found`)
			}
		})

		return questions
	}

	const shuffleArray = <T>(array: T[]): void => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
	    [array[i], array[j]] = [array[j], array[i]]
    }
	}

	const loadQuestions = async () => {
		state.isLoading = true
    state.error = null

		try {
      const response = await $fetch('/api/questions')
			state.allQuestions = parseQuestions(response.data)

			if (state.allQuestions.length === 0) {
        throw new Error("No questions loaded or incorrect format")
			}
		} catch (error: any) {
			state.error = error instanceof Error ? error.message : 'Failed to load questions'
      console.error('Error loading questions:', error)
		} finally {
			state.isLoading = false
		}
	}

	const startTest = () => {
		state.score = 0
    state.currentQuestionIndex = 0
		state.userAnswers = []

		shuffleArray(state.allQuestions)
		state.currentQuestions = state.allQuestions.slice(0, Math.min(questionsPerTest, state.allQuestions.length))

		if (state.currentQuestions.length === 0) {
			state.error = "No questions available to start the test"
      return false
		}

		state.currentQuestions.forEach(q => shuffleArray(q.options))
		return true
	}

	const selectAnswer = (userAnswerText: string) => {
    const currentQuestion = state.currentQuestions[state.currentQuestionIndex]
		const isCorrect = userAnswerText === currentQuestion.correctAnswer

		if (isCorrect) {
			state.score++
		}

		state.userAnswers.push({
      question: currentQuestion.questionText,
		      selected: userAnswerText,
				correct: currentQuestion.correctAnswer,
				isCorrect: isCorrect
	})
	}

	const nextQuestion = () => {
		state.currentQuestionIndex++
	}

	const getCurrentQuestion = () => {
    return state.currentQuestions[state.currentQuestionIndex]
	}

	const getProgress = () => {
    return (state.currentQuestionIndex / state.currentQuestions.length) * 100
	}

	const getPercentage = () => {
    return state.currentQuestions.length > 0 ? (state.score / state.currentQuestions.length) * 100 : 0
	}

	const isLastQuestion = () => {
    return state.currentQuestionIndex === state.currentQuestions.length - 1
	}

	const isTestComplete = () => {
    return state.currentQuestionIndex >= state.currentQuestions.length
	}

	return {
    state: readonly(state),
		    loadQuestions,
		    startTest,
		    selectAnswer,
		    nextQuestion,
		    getCurrentQuestion,
		    getProgress,
		    getPercentage,
		    isLastQuestion,
		    isTestComplete
}
}
