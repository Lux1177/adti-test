export interface Question {
	questionText: string
	options: string[]
	correctAnswer: string
}

export interface UserAnswer {
	question: string
	selected: string
	correct: string
	isCorrect: boolean
}

export interface QuizState {
	allQuestions: Question[]
	currentQuestions: Question[]
	currentQuestionIndex: number
	score: number
	userAnswers: UserAnswer[]
	isLoading: boolean
	error: string | null
}
