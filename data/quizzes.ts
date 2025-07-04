import type { QuizInfo } from "~/types/quiz"

// Import all question sets
import { medicalPharmacyQuestions } from "./medical/pharmacy"
import { medicalEnglishQuestions } from "./medical/english"
import { medicalTerminologyQuestions } from "./medical/terminology"
import { medicalAnatomyQuestions } from "./medical/anatomy"
import { studentEnglishQuestions } from "./student/english"
import { studentComputerScienceQuestions } from "./student/computerScience"
import { professorManagementQuestions } from "./professor/management"
import { applicantEntranceQuestions } from "./applicant/entrance"
import { applicantHistoryQuestions } from "./applicant/history"
import { lyceumPhysicsQuestions } from "./lyceum/physics"

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
	{
		id: "medical-terminology",
		titleKey: "quiz.medical_terminology.title",
		descriptionKey: "quiz.medical_terminology.description",
		category: ["medical"],
		difficulty: "hard",
		questionCount: 20,
		available: true,
		icon: "🏥",
		color: "from-red-400 to-pink-500",
		subject: "terminology",
		categoryFolder: "medical",
	},
	{
		id: "medical-anatomy",
		titleKey: "quiz.medical_anatomy.title",
		descriptionKey: "quiz.medical_anatomy.description",
		category: ["medical", "student"],
		difficulty: "medium",
		questionCount: 20,
		available: true,
		icon: "🫀",
		color: "from-purple-400 to-pink-500",
		subject: "anatomy",
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
		id: "professor-management",
		titleKey: "quiz.professor_management.title",
		descriptionKey: "quiz.professor_management.description",
		category: ["professor", "employee"],
		difficulty: "medium",
		questionCount: 20,
		available: true,
		icon: "📊",
		color: "from-orange-400 to-red-500",
		subject: "management",
		categoryFolder: "professor",
	},

	// Applicant Quizzes
	{
		id: "applicant-entrance",
		titleKey: "quiz.applicant_entrance.title",
		descriptionKey: "quiz.applicant_entrance.description",
		category: ["applicant"],
		difficulty: "hard",
		questionCount: 20,
		available: true,
		icon: "🎓",
		color: "from-yellow-400 to-orange-500",
		subject: "entrance",
		categoryFolder: "applicant",
	},
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
	{
		id: "lyceum-physics",
		titleKey: "quiz.lyceum_physics.title",
		descriptionKey: "quiz.lyceum_physics.description",
		category: ["academic_lyceum"],
		difficulty: "medium",
		questionCount: 20,
		available: true,
		icon: "⚛️",
		color: "from-indigo-400 to-purple-500",
		subject: "physics",
		categoryFolder: "lyceum",
	},
]

// Quiz questions data - organized by quiz ID
export const quizData = {
	"medical-pharmacy": medicalPharmacyQuestions,
	"medical-english": medicalEnglishQuestions,
	"medical-terminology": medicalTerminologyQuestions,
	"medical-anatomy": medicalAnatomyQuestions,
	"student-english": studentEnglishQuestions,
	"student-computer-science": studentComputerScienceQuestions,
	"professor-management": professorManagementQuestions,
	"applicant-entrance": applicantEntranceQuestions,
	"applicant-history": applicantHistoryQuestions,
	"lyceum-physics": lyceumPhysicsQuestions,
}
