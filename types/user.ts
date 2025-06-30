export type UserCategory = "professor" | "employee" | "student" | "medical" | "applicant"

export interface Quiz {
	id: string
	title: string
	description: string
	category: UserCategory[]
	difficulty: "easy" | "medium" | "hard"
	questionCount: number
	available: boolean
}
