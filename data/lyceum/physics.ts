import type { Question, Locale } from "~/types/quiz"

export const lyceumPhysicsQuestions: Record<Locale, Question[]> = {
	en: [
		{
			questionText: "What is the unit of electric current?",
			options: ["Ampere", "Volt", "Ohm", "Watt"],
			correctAnswer: "Ampere",
		},
		{
			questionText: "Which law of motion states that for every action, there is an equal and opposite reaction?",
			options: ["Newton's Third Law", "Newton's First Law", "Newton's Second Law", "Law of Universal Gravitation"],
			correctAnswer: "Newton's Third Law",
		},
		{
			questionText: "What is the formula for calculating kinetic energy?",
			options: ["KE = 1/2 mv^2", "E = mc^2", "F = ma", "P = IV"],
			correctAnswer: "KE = 1/2 mv^2",
		},
	],
	ru: [
		{
			questionText: "Какова единица электрического тока?",
			options: ["Ампер", "Вольт", "Ом", "Ватт"],
			correctAnswer: "Ампер",
		},
		{
			questionText:
					"Какой закон движения гласит, что на каждое действие есть равное и противоположное противодействие?",
			options: ["Третий закон Ньютона", "Первый закон Ньютона", "Второй закон Ньютона", "Закон всемирного тяготения"],
			correctAnswer: "Третий закон Ньютона",
		},
		{
			questionText: "Какова формула для расчета кинетической энергии?",
			options: ["KE = 1/2 mv^2", "E = mc^2", "F = ma", "P = IV"],
			correctAnswer: "KE = 1/2 mv^2",
		},
	],
	uz: [
		{
			questionText: "Elektr tokining birligi nima?",
			options: ["Amper", "Volt", "Om", "Vatt"],
			correctAnswer: "Amper",
		},
		{
			questionText: "Harakatning qaysi qonuni har bir ta'sir uchun teng va qarama-qarshi reaksiya mavjudligini aytadi?",
			options: [
				"Nyutonning uchinchi qonuni",
				"Nyutonning birinchi qonuni",
				"Nyutonning ikkinchi qonuni",
				"Butun olam tortishish qonuni",
			],
			correctAnswer: "Nyutonning uchinchi qonuni",
		},
		{
			questionText: "Kinetik energiyani hisoblash formulasi qanday?",
			options: ["KE = 1/2 mv^2", "E = mc^2", "F = ma", "P = IV"],
			correctAnswer: "KE = 1/2 mv^2",
		},
	],
}
