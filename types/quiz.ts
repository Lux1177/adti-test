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

export type UserCategory = "professor" | "employee" | "student" | "medical" | "applicant"
export type Locale = "en" | "ru" | "uz"

export interface QuizInfo {
	id: string
	titleKey: string
	descriptionKey: string
	category: UserCategory[]
	difficulty: "easy" | "medium" | "hard"
	questionCount: number
	available: boolean
	icon: string
	color: string
	subject: string
	categoryFolder: string
}

export interface QuizData {
	[quizId: string]: {
		[locale in Locale]: Question[]
	}
}
