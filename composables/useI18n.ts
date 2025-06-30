import { ref, computed, watch } from "vue"

export type Locale = "en" | "ru" | "uz"

interface Translations {
	[key: string]: {
		[locale in Locale]: string
	}
}

const translations: Translations = {
	// Language Selection
	"language.select": {
		en: "Select Language",
		ru: "Выберите язык",
		uz: "Тилни танланг",
	},
	"language.continue": {
		en: "Continue",
		ru: "Продолжить",
		uz: "Давом этиш",
	},

	// Category Selection
	"category.select": {
		en: "Select Test Category",
		ru: "Выберите категорию теста",
		uz: "Тест категориясини танланг",
	},
	"category.test_collections": {
		en: "Test Collections",
		ru: "Коллекции тестов",
		uz: "Тестлар тўплами",
	},
	"category.professor": {
		en: "For Professors & Teachers",
		ru: "Для профессоров и преподавателей",
		uz: "Профессор-ўқитувчилар учун",
	},
	"category.employee": {
		en: "For Employees",
		ru: "Для сотрудников",
		uz: "Ходимлар учун",
	},
	"category.student": {
		en: "For Students",
		ru: "Для студентов",
		uz: "Талабалар учун",
	},
	"category.medical": {
		en: "For Medical Workers",
		ru: "Для медицинских работников",
		uz: "Шифокорлар учун",
	},
	"category.applicant": {
		en: "For Applicants",
		ru: "Для абитуриентов",
		uz: "Абитуриентлар учун",
	},

	// Navigation
	"nav.home": {
		en: "Home",
		ru: "Главная",
		uz: "Бош саҳифа",
	},
	"nav.test": {
		en: "Test",
		ru: "Тест",
		uz: "Тест",
	},
	"nav.results": {
		en: "Results",
		ru: "Результаты",
		uz: "Натижалар",
	},
	"nav.title": {
		en: "Medical Quiz",
		ru: "Медицинский Тест",
		uz: "Тиббий Тест",
	},

	// Quiz Selection
	"quiz.select": {
		en: "Available Tests",
		ru: "Доступные тесты",
		uz: "Мавжуд тестлар",
	},
	"quiz.start": {
		en: "Start Quiz",
		ru: "Начать тест",
		uz: "Тестни бошлаш",
	},
	"quiz.back_to_categories": {
		en: "Back to Categories",
		ru: "Назад к категориям",
		uz: "Категорияларга қайтиш",
	},

	// Quiz Titles and Descriptions
	"quiz.english.title": {
		en: "English Grammar Test",
		ru: "Тест по английской грамматике",
		uz: "Инглиз тили грамматикаси тести",
	},
	"quiz.english.description": {
		en: "Test your English grammar knowledge with selected questions.",
		ru: "Проверьте свои знания английской грамматики.",
		uz: "Инглиз тили грамматикаси билимингизни синаб кўринг.",
	},
	"quiz.medical_terminology.title": {
		en: "Medical Terminology",
		ru: "Медицинская терминология",
		uz: "Тиббий терминология",
	},
	"quiz.medical_terminology.description": {
		en: "Test your knowledge of medical terms and definitions.",
		ru: "Проверьте знание медицинских терминов и определений.",
		uz: "Тиббий атамалар ва таърифлар билимингизни синанг.",
	},
	"quiz.anatomy.title": {
		en: "Human Anatomy",
		ru: "Анатомия человека",
		uz: "Инсон анатомияси",
	},
	"quiz.anatomy.description": {
		en: "Test your knowledge of human body structure and systems.",
		ru: "Проверьте знания строения и систем человеческого тела.",
		uz: "Инсон танаси тузилиши ва тизимлари билимингизни синанг.",
	},
	"quiz.ethics.title": {
		en: "Medical Ethics",
		ru: "Медицинская этика",
		uz: "Тиббий этика",
	},
	"quiz.ethics.description": {
		en: "Test your understanding of medical ethics and professional conduct.",
		ru: "Проверьте понимание медицинской этики и профессионального поведения.",
		uz: "Тиббий этика ва касбий одоб-ахлоқ тушунчангизни синанг.",
	},
	"quiz.management.title": {
		en: "Healthcare Management",
		ru: "Управление здравоохранением",
		uz: "Соғлиқни сақлашни бошқариш",
	},
	"quiz.management.description": {
		en: "Test your knowledge of healthcare administration and management principles.",
		ru: "Проверьте знания администрирования и принципов управления здравоохранением.",
		uz: "Соғлиқни сақлаш бошқаруви ва принциплари билимингизни синанг.",
	},
	"quiz.entrance.title": {
		en: "Medical Entrance Exam",
		ru: "Вступительный медицинский экзамен",
		uz: "Тиббиёт кириш имтиҳони",
	},
	"quiz.entrance.description": {
		en: "Comprehensive test covering basic medical sciences for entrance preparation.",
		ru: "Комплексный тест по основным медицинским наукам для подготовки к поступлению.",
		uz: "Кириш тайёргарлиги учун асосий тиббий фанлар бўйича комплекс тест.",
	},

	// Quiz Features
	"feature.unlimited": {
		en: "Unlimited time",
		ru: "Неограниченное время",
		uz: "Вақт чекланмаган",
	},
	"feature.detailed": {
		en: "Detailed results",
		ru: "Подробные результаты",
		uz: "Батафсил натижалар",
	},
	"feature.retake": {
		en: "Retake available",
		ru: "Можно пересдать",
		uz: "Қайта топшириш мумкин",
	},

	// Quiz Progress
	"quiz.question": {
		en: "Question",
		ru: "Вопрос",
		uz: "Савол",
	},
	"quiz.total": {
		en: "total",
		ru: "всего",
		uz: "жами",
	},
	"quiz.completed": {
		en: "completed",
		ru: "выполнено",
		uz: "бажарилди",
	},
	"quiz.next": {
		en: "Next Question",
		ru: "Следующий вопрос",
		uz: "Кейинги савол",
	},
	"quiz.finish": {
		en: "Finish Quiz",
		ru: "Завершить тест",
		uz: "Тестни тугатиш",
	},

	// Results
	"results.title": {
		en: "Quiz Results",
		ru: "Результаты теста",
		uz: "Тест натижалари",
	},
	"results.score": {
		en: "You answered {score} out of {total} questions correctly",
		ru: "Вы правильно ответили на {score} из {total} вопросов",
		uz: "Сиз {total} тадан {score} тасига тўғри жавоб бердингиз",
	},
	"results.details": {
		en: "Answer Details",
		ru: "Детали ответов",
		uz: "Жавоблар тафсилоти",
	},
	"results.your_answer": {
		en: "Your answer:",
		ru: "Ваш ответ:",
		uz: "Сизнинг жавобингиз:",
	},
	"results.correct_answer": {
		en: "Correct answer:",
		ru: "Правильный ответ:",
		uz: "Тўғри жавоб:",
	},
	"results.restart": {
		en: "Restart Quiz",
		ru: "Перезапустить тест",
		uz: "Тестни қайта бошлаш",
	},
	"results.home": {
		en: "Back to Home",
		ru: "Вернуться на главную",
		uz: "Бош саҳифага қайтиш",
	},

	// Score Messages
	"score.excellent": {
		en: "Excellent! Amazing result!",
		ru: "Отлично! Потрясающий результат!",
		uz: "Зўр! Ажойиб натижа!",
	},
	"score.very_good": {
		en: "Very good! Congratulations!",
		ru: "Очень хорошо! Поздравляем!",
		uz: "Жуда яхши! Табриклаймиз!",
	},
	"score.good": {
		en: "Good job! Keep it up.",
		ru: "Хорошая работа! Продолжайте.",
		uz: "Яхши иш! Давом этинг.",
	},
	"score.average": {
		en: "Average result. Practice more.",
		ru: "Средний результат. Больше практикуйтесь.",
		uz: "Ўртача натижа. Кўпроқ машқ қилинг.",
	},
	"score.poor": {
		en: "Keep studying and try again.",
		ru: "Продолжайте изучать и попробуйте снова.",
		uz: "Ўқишни давом этинг ва қайта уриниб кўринг.",
	},

	// Alerts and Messages
	"alert.attention": {
		en: "Attention",
		ru: "Внимание",
		uz: "Диққат",
	},
	"alert.incomplete_test": {
		en: "You have an incomplete test. Starting a new test will delete the previous one.",
		ru: "У вас есть незавершенный тест. Начало нового теста удалит предыдущий.",
		uz: "Сизда тугалланмаган тест мавжуд. Янги тест бошлаш эскисини ўчириб ташлайди.",
	},
	"alert.continue_test": {
		en: "Continue Test",
		ru: "Продолжить тест",
		uz: "Тестни давом этиш",
	},
	"alert.new_test": {
		en: "Start New Test",
		ru: "Начать новый тест",
		uz: "Янги тест бошлаш",
	},
	"alert.no_active_test": {
		en: "No active test found",
		ru: "Активный тест не найден",
		uz: "Фаол тест топилмади",
	},
	"alert.start_test_first": {
		en: "You need to start a test first to take it.",
		ru: "Сначала нужно начать тест, чтобы его пройти.",
		uz: "Тест топшириш учун аввал тестни бошлашингиз керак.",
	},
	"alert.no_results": {
		en: "No results found",
		ru: "Результаты не найдены",
		uz: "Натижалар топилмади",
	},
	"alert.complete_test_first": {
		en: "You need to complete a test first to see results.",
		ru: "Сначала нужно завершить тест, чтобы увидеть результаты.",
		uz: "Натижаларни кўриш учун аввал тестни тугатишингиз керак.",
	},

	// Loading States
	"loading.questions": {
		en: "Loading questions...",
		ru: "Загрузка вопросов...",
		uz: "Саволлар юкланмоқда...",
	},
	"loading.results": {
		en: "Loading results...",
		ru: "Загрузка результатов...",
		uz: "Натижалар юкланмоқда...",
	},
	"loading.general": {
		en: "Loading...",
		ru: "Загрузка...",
		uz: "Юкланмоқда...",
	},

	// Errors
	"error.title": {
		en: "Error",
		ru: "Ошибка",
		uz: "Хатолик",
	},

	// No quizzes available
	"quiz.no_quizzes": {
		en: "No quizzes available for this category yet.",
		ru: "Пока нет тестов для этой категории.",
		uz: "Бу категория учун ҳали тестлар мавжуд эмас.",
	},
	"quiz.coming_soon": {
		en: "Coming soon!",
		ru: "Скоро будет!",
		uz: "Тез орада!",
	},
}

const currentLocale = ref<Locale>("en")

export const useI18n = () => {
	// Load saved locale from localStorage
	const loadLocale = () => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("quiz-locale") as Locale
			if (saved && ["en", "ru", "uz"].includes(saved)) {
				currentLocale.value = saved
			}
		}
	}

	// Save locale to localStorage
	const saveLocale = (locale: Locale) => {
		if (typeof window !== "undefined") {
			localStorage.setItem("quiz-locale", locale)
		}
	}

	// Set locale
	const setLocale = (locale: Locale) => {
		currentLocale.value = locale
		saveLocale(locale)
	}

	// Get translation
	const t = (key: string, params?: Record<string, string | number>) => {
		const translation = translations[key]?.[currentLocale.value] || key

		if (params) {
			return Object.entries(params).reduce((str, [key, value]) => {
				return str.replace(`{${key}}`, String(value))
			}, translation)
		}

		return translation
	}

	// Get current locale
	const locale = computed(() => currentLocale.value)

	// Watch for locale changes
	watch(currentLocale, (newLocale) => {
		if (typeof document !== "undefined") {
			document.documentElement.lang = newLocale
		}
	})

	return {
		locale,
		setLocale,
		loadLocale,
		t,
	}
}
