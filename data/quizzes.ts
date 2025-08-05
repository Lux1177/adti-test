import type { QuizInfo } from "~/types/quiz"

// Import all question sets
import { medicalPharmacyQuestions } from "./medical/pharmacy"
// import { medicalEnglishQuestions } from "./medical/english"
// import { studentEnglishQuestions } from "./student/english"
import { studentComputerScienceQuestions } from "./student/computerScience"
import { medicalNeonatologyQuestions } from "./medical/neonatology"
import { medicalDmedQuestions } from "./medical/dmed"
import { medicalXrayQuestions } from "./medical/xray"
import { applicantHistoryQuestions } from "./applicant/history"
import { lyceumTherapyQuestions } from "./lyceum/therapy"
import { lyceumNursingQuestions } from "./lyceum/nursing"


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
		subject: "pharmacy",
		categoryFolder: "medical",
	},
	{
		id: "medical-dmed",
		titleKey: "quiz.medical_dmed.title",
		descriptionKey: "quiz.medical_dmed.description",
		category: ["medical"],
		difficulty: "hard",
		questionCount: 20,
		available: true,
		icon: "⚕️",
		color: "from-orange-400 to-teal-500",
		subject: "dmed",
		categoryFolder: "medical",
	},
	{
		id: "medical-xray",
		titleKey: "quiz.medical_xray.title",
		descriptionKey: "quiz.medical_xray.description",
		category: ["medical"],
		difficulty: "medium",
		questionCount: 20,
		available: true,
		icon: "🩻",
		color: "from-orange-400 to-blue-600",
		subject: "xray",
		categoryFolder: "medical",
	},
	// {
	// 	id: "medical-english",
	// 	titleKey: "quiz.medical_english.title",
	// 	descriptionKey: "quiz.medical_english.description",
	// 	category: ["medical"],
	// 	difficulty: "medium",
	// 	questionCount: 20,
	// 	available: true,
	// 	icon: "🇬🇧",
	// 	color: "from-blue-400 to-indigo-500",
	// 	subject: "english",
	// 	categoryFolder: "medical",
	// },
	{
		id: "medical-neonatology",
		titleKey: "quiz.medical_neonatology.title",
		descriptionKey: "quiz.medical_neonatology.description",
		category: ["employee", "medical"],
		difficulty: "medium",
		questionCount: 20,
		available: true,
		icon: "🚼",
		color: "from-orange-400 to-red-500",
		subject: "neonatology",
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
	// {
	// 	id: "student-english",
	// 	titleKey: "quiz.student_english.title",
	// 	descriptionKey: "quiz.student_english.description",
	// 	category: ["student"],
	// 	difficulty: "easy",
	// 	questionCount: 20,
	// 	available: true,
	// 	icon: "📚",
	// 	color: "from-green-400 to-teal-500",
	// 	subject: "english",
	// 	categoryFolder: "student",
	// },

	// Professor Quizzes
	{
		id: "professor-computer-science",
		titleKey: "quiz.professor_computer_science.title",
		descriptionKey: "quiz.professor_computer_science.description",
		category: ["professor"],
		difficulty: "easy",
		questionCount: 20,
		available: true,
		icon: "💻",
		color: "from-orange-400 to-teal-500",
		subject: "computer science",
		categoryFolder: "student",
	},
	// {
	// 	id: "professor-english",
	// 	titleKey: "quiz.professor_english.title",
	// 	descriptionKey: "quiz.professor_english.description",
	// 	category: ["professor"],
	// 	difficulty: "easy",
	// 	questionCount: 20,
	// 	available: true,
	// 	icon: "📚",
	// 	color: "from-green-400 to-teal-500",
	// 	subject: "english",
	// 	categoryFolder: "student",
	// },
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
	{
		id: "lyceum-therapy",
		titleKey: "quiz.lyceum_therapy.title",
		descriptionKey: "quiz.lyceum_therapy.description",
		category: ["academic_lyceum"],
		difficulty: "medium",
		questionCount: 20,
		available: true,
		icon: "🩺",
		color: "from-indigo-600 to-purple-800",
		subject: "therapy",
		categoryFolder: "lyceum",
	},
	{
		id: "lyceum-nursing",
		titleKey: "quiz.lyceum_nursing.title",
		descriptionKey: "quiz.lyceum_nursing.description",
		category: ["academic_lyceum"],
		difficulty: "medium",
		questionCount: 20,
		available: true,
		icon: "💉",
		color: "from-orange-400 to-red-500",
		subject: "nursing",
		categoryFolder: "lyceum",
	},
]

export const getQuizInfoById = (quizId: string) => {
	for (let quiz of quizzes) {
		if (quiz.id === quizId) {
			return quiz;
		}
	} return
}

// Quiz questions data - organized by quiz ID
export const quizData = {
	"medical-pharmacy": medicalPharmacyQuestions,
	"medical-dmed": medicalDmedQuestions,
	"medical-xray": medicalXrayQuestions,
	// "medical-english": medicalEnglishQuestions,
	"medical-neonatology": medicalNeonatologyQuestions,
	// "student-english": studentEnglishQuestions,
	"student-computer-science": studentComputerScienceQuestions,
	"applicant-history": applicantHistoryQuestions,
	"professor-computer-science": studentComputerScienceQuestions,
	// "professor-english": studentEnglishQuestions,
	"lyceum-therapy": lyceumTherapyQuestions,
	"lyceum-nursing": lyceumNursingQuestions,
}
