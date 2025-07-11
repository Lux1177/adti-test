import type { QuizInfo } from "~/types/quiz"

// Import all question sets
import { medicalPharmacyQuestions } from "./medical/pharmacy"
import { medicalEnglishQuestions } from "./medical/english"
import { studentEnglishQuestions } from "./student/english"
import { studentComputerScienceQuestions } from "./student/computerScience"
import { professorNeonatologyQuestions } from "./professor/neonatology"
import { applicantHistoryQuestions } from "./applicant/history"


// Quiz metadata
export const quizzes: QuizInfo[] = [
	// Medical Worker Quizzes
	{
		id: "medical-pharmacy",
		titleKey: "quiz.medical_pharmacy.title",
		descriptionKey: "quiz.medical_pharmacy.description",
		category: ["medical"],
		difficulty: "hard",
		questionCount: 20,
		available: true,
		icon: "💊",
		color: "from-green-500 to-indigo-600",
		subject: "english",
		categoryFolder: "medical",
	},
	{
		id: "medical-english",
		titleKey: "quiz.medical_english.title",
		descriptionKey: "quiz.medical_english.description",
		category: ["medical"],
		difficulty: "medium",
		questionCount: 20,
		available: true,
		icon: "🇬🇧",
		color: "from-blue-400 to-indigo-500",
		subject: "english",
		categoryFolder: "medical",
	},

	// Student Quizzes
	{
		id: "student-computer-science",
		titleKey: "quiz.student_computer_science.title",
		descriptionKey: "quiz.student_computer_science.description",
		category: ["student"],
		difficulty: "easy",
		questionCount: 20,
		available: true,
		icon: "💻",
		color: "from-orange-400 to-teal-500",
		subject: "computer science",
		categoryFolder: "student",
	},
	{
		id: "student-english",
		titleKey: "quiz.student_english.title",
		descriptionKey: "quiz.student_english.description",
		category: ["student"],
		difficulty: "easy",
		questionCount: 20,
		available: true,
		icon: "📚",
		color: "from-green-400 to-teal-500",
		subject: "english",
		categoryFolder: "student",
	},

	// Professor Quizzes
	{
		id: "professor-neonatology",
		titleKey: "quiz.professor_neonatology.title",
		descriptionKey: "quiz.professor_neonatology.description",
		category: ["professor", "employee"],
		difficulty: "medium",
		questionCount: 20,
		available: true,
		icon: "🚼",
		color: "from-orange-400 to-red-500",
		subject: "neonatology",
		categoryFolder: "professor",
	},

	// Applicant Quizzes
	{
		id: "applicant-history",
		titleKey: "quiz.applicant_history.title",
		descriptionKey: "quiz.applicant_history.description",
		category: ["applicant"],
		difficulty: "easy",
		questionCount: 20,
		available: true,
		icon: "📜",
		color: "from-indigo-400 to-purple-500",
		subject: "history",
		categoryFolder: "applicant",
	},

	// Academic Lyceum Quizzes

]

// Quiz questions data - organized by quiz ID
export const quizData = {
	"medical-pharmacy": medicalPharmacyQuestions,
	"medical-english": medicalEnglishQuestions,
	"student-english": studentEnglishQuestions,
	"student-computer-science": studentComputerScienceQuestions,
	"professor-neonatology": professorNeonatologyQuestions,
	"applicant-history": applicantHistoryQuestions,

}
