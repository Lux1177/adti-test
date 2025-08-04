import { ref, computed, watch } from "vue"

export type Locale = "en" | "ru" | "uz"

interface Translations {
	[key: string]: {
		[locale in Locale]: string
	}
}

const translations: Translations = {
	// Main Page
	"main.welcome_title": {
		en: "ASMI Test Center",
		ru: "АГМИ Тестовый Центр",
		uz: "АДТИ Тест Маркази",
	},
	"main.welcome_subtitle": {
		en: "Choose a category and test your knowledge.",
		ru: "Выберите категорию и проверьте свои знания.",
		uz: "Категорияни танланг ва билимингизни синаб кўринг.",
	},
	"main.start_button": {
		en: "Choose a Test",
		ru: "Выбрать тест",
		uz: "Тестни танлаш",
	},

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
	"category.academic_lyceum": {
		en: "For Academic Lyceums",
		ru: "Для учителей академических лицеев",
		uz: "Академик лицей ўкитувчилари учун",
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
		en: "ASMI",
		ru: "АГМИ",
		uz: "АДТИ",
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

	"quiz.student_computer_science.title": {
		en: "Computer science for students",
		ru: "Компьютерные технологии для студентов",
		uz: "Талабалар учун компьютер фанлари",
	},
	"quiz.student_computer_science.description": {
		en: "Fundamental Computer science for students.",
		ru: "Основные концепции компьютерных технологий для студентов.",
		uz: "Талабалар учун фундаментал компьютер фанлари тушунчалари.",
	},
	"quiz.medical_pharmacy.title": {
		en: "Pharmacy test",
		ru: "Тест по фармации",
		uz: "Фармациядан тест",
	},
	"quiz.medical_pharmacy.description": {
		en: "Test your Pharmacy knowledge with selected questions.",
		ru: "Проверьте свои знания по Фармации.",
		uz: "Фармациядан билимингизни синаб кўринг.",
	},
	"quiz.medical_dmed.title": {
		en: "DMED Test",
		ru: "DMED Тест",
		uz: "DMED Тест",
	},
	"quiz.medical_dmed.description": {
		en: "DMED Test (manager).",
		ru: "DMED Тест (менеджер).",
		uz: "DMED Тест (менежер).",
	},
	"quiz.medical_xray.title": {
		en: "Test on X-ray Laboratory",
		ru: "Тест по рентгенологической лаборатории",
		uz: "Рентген лабораторияси бўйича тест",
	},
	"quiz.medical_xray.description": {
		en: "Knowledge of X-ray equipment and safety.",
		ru: "Знания об оборудовании и безопасности рентгена.",
		uz: "Рентген ускуналари ва хавфсизлик бўйича билимлар.",
	},
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
	"quiz.medical_english.title": {
		en: "Medical English",
		ru: "Медицинский английский",
		uz: "Тиббий инглиз тили",
	},
	"quiz.medical_english.description": {
		en: "English language skills for medical professionals.",
		ru: "Навыки английского языка для медицинских работников.",
		uz: "Тиббий ходимлар учун инглиз тили кўникмалари.",
	},
	"quiz.medical_neonatology.title": {
		en: "Neonatology specialty",
		ru: "Специальность неонатология",
		uz: "Неонатология мутахассислиги",
	},
	"quiz.medical_neonatology.description": {
		en: "Test of knowledge in neonatology.",
		ru: "Тест на знания в области неонатологии.",
		uz: "Неонатология соҳаси бўйича билимлар тести.",
	},
	"quiz.student_english.title": {
		en: "Student English",
		ru: "Английский для студентов",
		uz: "Талабалар учун инглиз тили",
	},
	"quiz.student_english.description": {
		en: "Basic English grammar for students.",
		ru: "Основы английской грамматики для студентов.",
		uz: "Талабалар учун инглиз тили грамматикаси асослари.",
	},
	"quiz.professor_computer_science.title": {
		en: "Information Technologies for Certification",
		ru: "Информационные технологии для аттестации",
		uz: "Аттестация учун ахборот технологиялари",
	},
	"quiz.professor_computer_science.description": {
		en: "Covers basic IT skills for certification.",
		ru: "Основы ИТ для прохождения аттестации.",
		uz: "Аттестация учун асосий ИТ билимлар.",
	},
	"quiz.professor_english.title": {
		en: "English Language for Certification",
		ru: "Английский язык для аттестации",
		uz: "Аттестация учун инглиз тили",
	},
	"quiz.professor_english.description": {
		en: "Grammar, vocabulary, and basic communication skills.",
		ru: "Грамматика, лексика и базовое общение.",
		uz: "Грамматика, луғат ва мулоқот кўникмалари.",
	},
	"quiz.lyceum_therapy.title": {
		en: "Therapy Test for Academic Lyceums",
		ru: "Тест по терапии для лицеев",
		uz: "Терапия тести (лицейлар учун)",
	},
	"quiz.lyceum_therapy.description": {
		en: "Covers internal diseases and treatment basics.",
		ru: "Основы терапии и внутренних болезней.",
		uz: "Ички касалликлар ва даволаш асослари.",
	},
	"quiz.lyceum_nursing.title": {
		en: "Nursing Test",
		ru: "Тест по сестринскому делу",
		uz: "Ҳамширалик иши тести",
	},
	"quiz.lyceum_nursing.description": {
		en: "Covers basic nursing care and practice.",
		ru: "Основы ухода и сестринской практики.",
		uz: "Асосий парвариш ва амалийот саволлари.",
	},
	"quiz.applicant_history.title": {
		en: "History for applicants",
		ru: "История для абитуриентов",
		uz: "Абитуриентлар учун тарих",
	},
	"quiz.applicant_history.description": {
		en: "History subject basics for applicants.",
		ru: "Базовые знания по истории для абитуриентов.",
		uz: "Абитуриентлар учун тарих фанидан асосий билилар.",
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
	"results.history": {
		en: "Results History",
		ru: "История результатов",
		uz: "Натижалар тарихи",
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
	"results.all_results": {
		en: "All Results",
		ru: "Все результаты",
		uz: "Барча натижалар",
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
	"alert.result_not_found": {
		en: "The requested result could not be found.",
		ru: "Запрошенный результат не найден.",
		uz: "Сўралган натижа топилмади.",
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

const currentLocale = ref<Locale>("uz")

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
