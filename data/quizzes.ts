import type { QuizInfo, QuizData } from "~/types/quiz"

// Quiz metadata
export const quizzes: QuizInfo[] = [
	// English Grammar - Available for all
	{
		id: "english-grammar",
		titleKey: "quiz.english.title",
		descriptionKey: "quiz.english.description",
		category: ["student", "professor", "employee", "medical", "applicant"],
		difficulty: "medium",
		questionCount: 20,
		available: true,
		icon: "🇬🇧",
		color: "from-red-400 to-pink-500",
	},

	// Medical Terminology - For medical workers and students
	{
		id: "medical-terminology",
		titleKey: "quiz.medical_terminology.title",
		descriptionKey: "quiz.medical_terminology.description",
		category: ["medical", "student"],
		difficulty: "hard",
		questionCount: 15,
		available: true,
		icon: "🏥",
		color: "from-blue-400 to-cyan-500",
	},

	// Human Anatomy - For students and medical workers
	{
		id: "human-anatomy",
		titleKey: "quiz.anatomy.title",
		descriptionKey: "quiz.anatomy.description",
		category: ["student", "medical"],
		difficulty: "medium",
		questionCount: 15,
		available: true,
		icon: "🫀",
		color: "from-purple-400 to-pink-500",
	},

	// Medical Ethics - For professors and medical workers
	{
		id: "medical-ethics",
		titleKey: "quiz.ethics.title",
		descriptionKey: "quiz.ethics.description",
		category: ["professor", "medical"],
		difficulty: "medium",
		questionCount: 12,
		available: true,
		icon: "⚖️",
		color: "from-green-400 to-teal-500",
	},

	// Healthcare Management - For employees and professors
	{
		id: "healthcare-management",
		titleKey: "quiz.management.title",
		descriptionKey: "quiz.management.description",
		category: ["employee", "professor"],
		difficulty: "medium",
		questionCount: 15,
		available: true,
		icon: "📊",
		color: "from-orange-400 to-red-500",
	},

	// Medical Entrance Exam - For applicants
	{
		id: "medical-entrance",
		titleKey: "quiz.entrance.title",
		descriptionKey: "quiz.entrance.description",
		category: ["applicant"],
		difficulty: "hard",
		questionCount: 20,
		available: true,
		icon: "🎓",
		color: "from-yellow-400 to-orange-500",
	},
]

// Quiz questions data
export const quizData: QuizData = {
	"english-grammar": {
		en: [
			{
				questionText: "I ___ 16 years old. My brother ___ 13.",
				options: ["am/is", "am/are", "are/are", "is/am"],
				correctAnswer: "am/is",
			},
			{
				questionText: "Your books ___ on the table. They ___ in your bag.",
				options: ["are/aren't", "are/are", "is/aren't", "aren't/is"],
				correctAnswer: "are/aren't",
			},
			{
				questionText: "There ___ 5 students in the room.",
				options: ["are", "is", "was", "were"],
				correctAnswer: "are",
			},
			{
				questionText: "She ___ to school every day.",
				options: ["goes", "go", "going", "went"],
				correctAnswer: "goes",
			},
			{
				questionText: "They ___ football on Sundays.",
				options: ["play", "plays", "playing", "is played"],
				correctAnswer: "play",
			},
		],
		ru: [
			{
				questionText: "Мне ___ 16 лет. Моему брату ___ 13.",
				options: ["есть/есть", "было/было", "будет/будет", "нет/нет"],
				correctAnswer: "есть/есть",
			},
			{
				questionText: "Твои книги ___ на столе. Их ___ в твоей сумке.",
				options: ["лежат/нет", "лежат/есть", "есть/нет", "нет/есть"],
				correctAnswer: "лежат/нет",
			},
			{
				questionText: "В комнате ___ 5 студентов.",
				options: ["есть", "был", "было", "были"],
				correctAnswer: "есть",
			},
			{
				questionText: "Она ___ в школу каждый день.",
				options: ["идет", "иду", "идешь", "шла"],
				correctAnswer: "идет",
			},
			{
				questionText: "Они ___ в футбол по воскресеньям.",
				options: ["играют", "играет", "играя", "играл"],
				correctAnswer: "играют",
			},
		],
		uz: [
			{
				questionText: "Men ___ 16 yoshdaman. Akam ___ 13 yoshda.",
				options: ["man/u", "sen/men", "biz/ular", "u/men"],
				correctAnswer: "man/u",
			},
			{
				questionText: "Sizning kitoblaringiz ___ stolda. Ular ___ sumkangizda.",
				options: ["bor/yo'q", "yo'q/bor", "bor/bor", "yo'q/yo'q"],
				correctAnswer: "bor/yo'q",
			},
			{
				questionText: "Xonada ___ 5 ta talaba bor.",
				options: ["hozir", "kecha", "ertaga", "doim"],
				correctAnswer: "hozir",
			},
			{
				questionText: "U har kuni maktabga ___.",
				options: ["boradi", "boraman", "borasiz", "bordi"],
				correctAnswer: "boradi",
			},
			{
				questionText: "Ular yakshanba kunlari futbol ___.",
				options: ["o'ynaydi", "o'ynaydi", "o'ynab", "o'ynadi"],
				correctAnswer: "o'ynaydi",
			},
		],
	},

	"medical-terminology": {
		en: [
			{
				questionText: "What does 'Hypertension' mean?",
				options: ["High blood pressure", "Low blood pressure", "Heart disease", "Diabetes"],
				correctAnswer: "High blood pressure",
			},
			{
				questionText: "The medical term for inflammation of the liver is:",
				options: ["Hepatitis", "Nephritis", "Gastritis", "Arthritis"],
				correctAnswer: "Hepatitis",
			},
			{
				questionText: "What does 'Tachycardia' refer to?",
				options: ["Fast heart rate", "Slow heart rate", "Irregular heartbeat", "Heart attack"],
				correctAnswer: "Fast heart rate",
			},
			{
				questionText: "The prefix 'Brady-' means:",
				options: ["Slow", "Fast", "Above", "Below"],
				correctAnswer: "Slow",
			},
			{
				questionText: "What is 'Dyspnea'?",
				options: ["Difficulty breathing", "Chest pain", "Headache", "Nausea"],
				correctAnswer: "Difficulty breathing",
			},
			{
				questionText: "The suffix '-ectomy' means:",
				options: ["Surgical removal", "Inflammation", "Disease", "Treatment"],
				correctAnswer: "Surgical removal",
			},
			{
				questionText: "What does 'Anemia' indicate?",
				options: [
					"Low red blood cell count",
					"High white blood cell count",
					"Blood clotting disorder",
					"High blood sugar",
				],
				correctAnswer: "Low red blood cell count",
			},
			{
				questionText: "The medical term for kidney stone is:",
				options: ["Nephrolithiasis", "Nephritis", "Nephrosis", "Nephrology"],
				correctAnswer: "Nephrolithiasis",
			},
			{
				questionText: "What does 'Edema' mean?",
				options: ["Swelling due to fluid retention", "Skin rash", "Muscle pain", "Joint stiffness"],
				correctAnswer: "Swelling due to fluid retention",
			},
			{
				questionText: "The prefix 'Hypo-' means:",
				options: ["Below/Under", "Above/Over", "Around", "Through"],
				correctAnswer: "Below/Under",
			},
		],
		ru: [
			{
				questionText: "Что означает 'Гипертония'?",
				options: ["Высокое кровяное давление", "Низкое кровяное давление", "Болезнь сердца", "Диабет"],
				correctAnswer: "Высокое кровяное давление",
			},
			{
				questionText: "Медицинский термин для воспаления печени:",
				options: ["Гепатит", "Нефрит", "Гастрит", "Артрит"],
				correctAnswer: "Гепатит",
			},
			{
				questionText: "Что означает 'Тахикардия'?",
				options: [
					"Учащенное сердцебиение",
					"Замедленное сердцебиение",
					"Нерегулярное сердцебиение",
					"Сердечный приступ",
				],
				correctAnswer: "Учащенное сердцебиение",
			},
			{
				questionText: "Приставка 'Бради-' означает:",
				options: ["Медленный", "Быстрый", "Выше", "Ниже"],
				correctAnswer: "Медленный",
			},
			{
				questionText: "Что такое 'Диспноэ'?",
				options: ["Затрудненное дыхание", "Боль в груди", "Головная боль", "Тошнота"],
				correctAnswer: "Затрудненное дыхание",
			},
			{
				questionText: "Суффикс '-эктомия' означает:",
				options: ["Хирургическое удаление", "Воспаление", "Болезнь", "Лечение"],
				correctAnswer: "Хирургическое удаление",
			},
			{
				questionText: "Что указывает 'Анемия'?",
				options: [
					"Низкое количество эритроцитов",
					"Высокое количество лейкоцитов",
					"Нарушение свертываемости крови",
					"Высокий сахар в крови",
				],
				correctAnswer: "Низкое количество эритроцитов",
			},
			{
				questionText: "Медицинский термин для камня в почках:",
				options: ["Нефролитиаз", "Нефрит", "Нефроз", "Нефрология"],
				correctAnswer: "Нефролитиаз",
			},
			{
				questionText: "Что означает 'Отек'?",
				options: ["Опухоль из-за задержки жидкости", "Кожная сыпь", "Мышечная боль", "Скованность суставов"],
				correctAnswer: "Опухоль из-за задержки жидкости",
			},
			{
				questionText: "Приставка 'Гипо-' означает:",
				options: ["Ниже/Под", "Выше/Над", "Вокруг", "Через"],
				correctAnswer: "Ниже/Под",
			},
		],
		uz: [
			{
				questionText: "'Gipertoniya' nimani anglatadi?",
				options: ["Yuqori qon bosimi", "Past qon bosimi", "Yurak kasalligi", "Diabet"],
				correctAnswer: "Yuqori qon bosimi",
			},
			{
				questionText: "Jigar yallig'lanishining tibbiy atamasi:",
				options: ["Gepatit", "Nefrit", "Gastrit", "Artrit"],
				correctAnswer: "Gepatit",
			},
			{
				questionText: "'Taxikardiya' nimani anglatadi?",
				options: ["Tez yurak urishi", "Sekin yurak urishi", "Tartibsiz yurak urishi", "Yurak xurujи"],
				correctAnswer: "Tez yurak urishi",
			},
			{
				questionText: "'Bradi-' prefiksi nimani anglatadi:",
				options: ["Sekin", "Tez", "Yuqori", "Quyi"],
				correctAnswer: "Sekin",
			},
			{
				questionText: "'Dispnoe' nima?",
				options: ["Nafas olishda qiyinchilik", "Ko'krak og'rig'i", "Bosh og'rig'i", "Ko'ngil aynishi"],
				correctAnswer: "Nafas olishda qiyinchilik",
			},
			{
				questionText: "'-ektomiya' suffiksi nimani anglatadi:",
				options: ["Jarrohlik yo'li bilan olib tashlash", "Yallig'lanish", "Kasallik", "Davolash"],
				correctAnswer: "Jarrohlik yo'li bilan olib tashlash",
			},
			{
				questionText: "'Anemiya' nimani ko'rsatadi?",
				options: [
					"Qizil qon tanachalari kamayishi",
					"Oq qon tanachalari ko'payishi",
					"Qon ivishi buzilishi",
					"Qondagi shakar ko'payishi",
				],
				correctAnswer: "Qizil qon tanachalari kamayishi",
			},
			{
				questionText: "Buyrak toshining tibbiy atamasi:",
				options: ["Nefrolitiaz", "Nefrit", "Nefroz", "Nefrologiya"],
				correctAnswer: "Nefrolitiaz",
			},
			{
				questionText: "'Shish' nimani anglatadi?",
				options: ["Suyuqlik to'planishi tufayli shishish", "Teri toshmasi", "Mushak og'rig'i", "Bo'g'im qotishligi"],
				correctAnswer: "Suyuqlik to'planishi tufayli shishish",
			},
			{
				questionText: "'Gipo-' prefiksi nimani anglatadi:",
				options: ["Quyi/Osti", "Yuqori/Ustida", "Atrofida", "Orqali"],
				correctAnswer: "Quyi/Osti",
			},
		],
	},

	"human-anatomy": {
		en: [
			{
				questionText: "How many chambers does the human heart have?",
				options: ["4", "3", "2", "5"],
				correctAnswer: "4",
			},
			{
				questionText: "Which organ produces insulin?",
				options: ["Pancreas", "Liver", "Kidney", "Stomach"],
				correctAnswer: "Pancreas",
			},
			{
				questionText: "The largest bone in the human body is:",
				options: ["Femur", "Tibia", "Humerus", "Radius"],
				correctAnswer: "Femur",
			},
			{
				questionText: "How many pairs of ribs do humans have?",
				options: ["12", "11", "13", "10"],
				correctAnswer: "12",
			},
			{
				questionText: "Which part of the brain controls balance?",
				options: ["Cerebellum", "Cerebrum", "Medulla", "Pons"],
				correctAnswer: "Cerebellum",
			},
			{
				questionText: "The smallest bone in the human body is located in the:",
				options: ["Ear", "Nose", "Finger", "Toe"],
				correctAnswer: "Ear",
			},
			{
				questionText: "How many vertebrae are in the human spine?",
				options: ["33", "32", "34", "31"],
				correctAnswer: "33",
			},
			{
				questionText: "Which blood vessel carries oxygenated blood from the heart?",
				options: ["Aorta", "Vena cava", "Pulmonary vein", "Coronary artery"],
				correctAnswer: "Aorta",
			},
			{
				questionText: "The functional unit of the kidney is called:",
				options: ["Nephron", "Neuron", "Alveoli", "Hepatocyte"],
				correctAnswer: "Nephron",
			},
			{
				questionText: "Which muscle is responsible for breathing?",
				options: ["Diaphragm", "Intercostal", "Pectoralis", "Latissimus"],
				correctAnswer: "Diaphragm",
			},
		],
		ru: [
			{
				questionText: "Сколько камер имеет человеческое сердце?",
				options: ["4", "3", "2", "5"],
				correctAnswer: "4",
			},
			{
				questionText: "Какой орган вырабатывает инсулин?",
				options: ["Поджелудочная железа", "Печень", "Почка", "Желудок"],
				correctAnswer: "Поджелудочная железа",
			},
			{
				questionText: "Самая большая кость в человеческом теле:",
				options: ["Бедренная", "Большеберцовая", "Плечевая", "Лучевая"],
				correctAnswer: "Бедренная",
			},
			{
				questionText: "Сколько пар ребер у человека?",
				options: ["12", "11", "13", "10"],
				correctAnswer: "12",
			},
			{
				questionText: "Какая часть мозга контролирует равновесие?",
				options: ["Мозжечок", "Большой мозг", "Продолговатый мозг", "Мост"],
				correctAnswer: "Мозжечок",
			},
			{
				questionText: "Самая маленькая кость в человеческом теле находится в:",
				options: ["Ухе", "Носу", "Пальце", "Пальце ноги"],
				correctAnswer: "Ухе",
			},
			{
				questionText: "Сколько позвонков в позвоночнике человека?",
				options: ["33", "32", "34", "31"],
				correctAnswer: "33",
			},
			{
				questionText: "Какой кровеносный сосуд несет оксигенированную кровь от сердца?",
				options: ["Аорта", "Полая вена", "Легочная вена", "Коронарная артерия"],
				correctAnswer: "Аорта",
			},
			{
				questionText: "Функциональная единица почки называется:",
				options: ["Нефрон", "Нейрон", "Альвеола", "Гепатоцит"],
				correctAnswer: "Нефрон",
			},
			{
				questionText: "Какая мышца отвечает за дыхание?",
				options: ["Диафрагма", "Межреберная", "Грудная", "Широчайшая"],
				correctAnswer: "Диафрагма",
			},
		],
		uz: [
			{
				questionText: "Inson yuragida nechta kamera bor?",
				options: ["4", "3", "2", "5"],
				correctAnswer: "4",
			},
			{
				questionText: "Qaysi organ insulin ishlab chiqaradi?",
				options: ["Oshqozon osti bezi", "Jigar", "Buyrak", "Oshqozon"],
				correctAnswer: "Oshqozon osti bezi",
			},
			{
				questionText: "Inson tanasidagi eng katta suyak:",
				options: ["Son suyagi", "Boldir suyagi", "Yelka suyagi", "Bilek suyagi"],
				correctAnswer: "Son suyagi",
			},
			{
				questionText: "Insonda necha juft qovurg'a bor?",
				options: ["12", "11", "13", "10"],
				correctAnswer: "12",
			},
			{
				questionText: "Miyaning qaysi qismi muvozanatni nazorat qiladi?",
				options: ["Kichik miya", "Katta miya", "Cho'zilgan miya", "Ko'prik"],
				correctAnswer: "Kichik miya",
			},
			{
				questionText: "Inson tanasidagi eng kichik suyak qayerda joylashgan:",
				options: ["Quloqda", "Burnda", "Barmaqda", "Oyoq barmog'ida"],
				correctAnswer: "Quloqda",
			},
			{
				questionText: "Inson umurtqa pog'onasida nechta umurtqa bor?",
				options: ["33", "32", "34", "31"],
				correctAnswer: "33",
			},
			{
				questionText: "Qaysi qon tomiri yurakdan kislorodli qonni olib ketadi?",
				options: ["Aorta", "Ichi vena", "O'pka venasi", "Toj arteriyasi"],
				correctAnswer: "Aorta",
			},
			{
				questionText: "Buyrakning funksional birligi nima deb ataladi:",
				options: ["Nefron", "Neyron", "Alveola", "Gepatotsit"],
				correctAnswer: "Nefron",
			},
			{
				questionText: "Qaysi mushak nafas olish uchun javobgar?",
				options: ["Diafragma", "Qovurg'a orasi", "Ko'krak", "Eng keng"],
				correctAnswer: "Diafragma",
			},
		],
	},

	"medical-ethics": {
		en: [
			{
				questionText: "What is the principle of 'Autonomy' in medical ethics?",
				options: [
					"Patient's right to make decisions",
					"Doctor's authority",
					"Hospital policies",
					"Government regulations",
				],
				correctAnswer: "Patient's right to make decisions",
			},
			{
				questionText: "The principle 'Do no harm' is known as:",
				options: ["Non-maleficence", "Beneficence", "Justice", "Autonomy"],
				correctAnswer: "Non-maleficence",
			},
			{
				questionText: "Informed consent requires:",
				options: [
					"Patient understanding and voluntary agreement",
					"Only doctor's explanation",
					"Family approval",
					"Written documentation only",
				],
				correctAnswer: "Patient understanding and voluntary agreement",
			},
			{
				questionText: "Patient confidentiality can be breached when:",
				options: [
					"There's imminent danger to others",
					"Family requests information",
					"Insurance companies ask",
					"Colleagues are curious",
				],
				correctAnswer: "There's imminent danger to others",
			},
			{
				questionText: "The principle of 'Justice' in healthcare refers to:",
				options: [
					"Fair distribution of resources",
					"Punishment for wrongdoing",
					"Legal proceedings",
					"Hospital hierarchy",
				],
				correctAnswer: "Fair distribution of resources",
			},
			{
				questionText: "What is 'Beneficence' in medical practice?",
				options: [
					"Acting in patient's best interest",
					"Following protocols",
					"Avoiding mistakes",
					"Charging fair prices",
				],
				correctAnswer: "Acting in patient's best interest",
			},
			{
				questionText: "End-of-life care decisions should primarily consider:",
				options: [
					"Patient's wishes and values",
					"Family's financial situation",
					"Hospital bed availability",
					"Doctor's convenience",
				],
				correctAnswer: "Patient's wishes and values",
			},
			{
				questionText: "Research ethics requires:",
				options: [
					"Informed consent from participants",
					"Quick completion",
					"Profitable outcomes",
					"Minimal documentation",
				],
				correctAnswer: "Informed consent from participants",
			},
			{
				questionText: "Cultural competency in healthcare means:",
				options: [
					"Respecting diverse beliefs and practices",
					"Speaking multiple languages",
					"Knowing world geography",
					"Following one standard",
				],
				correctAnswer: "Respecting diverse beliefs and practices",
			},
			{
				questionText: "Professional boundaries in healthcare involve:",
				options: [
					"Maintaining appropriate relationships",
					"Being friends with patients",
					"Sharing personal problems",
					"Accepting expensive gifts",
				],
				correctAnswer: "Maintaining appropriate relationships",
			},
		],
		ru: [
			{
				questionText: "Что такое принцип 'Автономии' в медицинской этике?",
				options: [
					"Право пациента принимать решения",
					"Авторитет врача",
					"Политика больницы",
					"Государственные правила",
				],
				correctAnswer: "Право пациента принимать решения",
			},
			{
				questionText: "Принцип 'Не навреди' известен как:",
				options: ["Непричинение вреда", "Благодеяние", "Справедливость", "Автономия"],
				correctAnswer: "Непричинение вреда",
			},
			{
				questionText: "Информированное согласие требует:",
				options: [
					"Понимания пациента и добровольного согласия",
					"Только объяснения врача",
					"Одобрения семьи",
					"Только письменной документации",
				],
				correctAnswer: "Понимания пациента и добровольного согласия",
			},
			{
				questionText: "Конфиденциальность пациента может быть нарушена когда:",
				options: [
					"Есть непосредственная опасность для других",
					"Семья просит информацию",
					"Страховые компании спрашивают",
					"Коллеги любопытствуют",
				],
				correctAnswer: "Есть непосредственная опасность для других",
			},
			{
				questionText: "Принцип 'Справедливости' в здравоохранении означает:",
				options: [
					"Справедливое распределение ресурсов",
					"Наказание за проступки",
					"Судебные разбирательства",
					"Больничная иерархия",
				],
				correctAnswer: "Справедливое распределение ресурсов",
			},
			{
				questionText: "Что такое 'Благодеяние' в медицинской практике?",
				options: ["Действие в интересах пациента", "Следование протоколам", "Избежание ошибок", "Справедливые цены"],
				correctAnswer: "Действие в интересах пациента",
			},
			{
				questionText: "Решения по уходу в конце жизни должны учитывать:",
				options: [
					"Желания и ценности пациента",
					"Финансовое положение семьи",
					"Наличие больничных коек",
					"Удобство врача",
				],
				correctAnswer: "Желания и ценности пациента",
			},
			{
				questionText: "Этика исследований требует:",
				options: [
					"Информированного согласия участников",
					"Быстрого завершения",
					"Прибыльных результатов",
					"Минимальной документации",
				],
				correctAnswer: "Информированного согласия участников",
			},
			{
				questionText: "Культурная компетентность в здравоохранении означает:",
				options: [
					"Уважение к разным убеждениям и практикам",
					"Знание многих языков",
					"Знание мировой географии",
					"Следование одному стандарту",
				],
				correctAnswer: "Уважение к разным убеждениям и практикам",
			},
			{
				questionText: "Профессиональные границы в здравоохранении включают:",
				options: [
					"Поддержание подходящих отношений",
					"Дружба с пациентами",
					"Обмен личными проблемами",
					"Принятие дорогих подарков",
				],
				correctAnswer: "Поддержание подходящих отношений",
			},
		],
		uz: [
			{
				questionText: "Tibbiy etikada 'Avtonomiya' printsipi nima?",
				options: [
					"Bemorning qaror qabul qilish huquqi",
					"Shifokorning vakolati",
					"Kasalxona siyosati",
					"Davlat qoidalari",
				],
				correctAnswer: "Bemorning qaror qabul qilish huquqi",
			},
			{
				questionText: "'Zarar yetkazma' printsipi nima deb ataladi:",
				options: ["Zarar yetkazmaslik", "Yaxshilik qilish", "Adolat", "Avtonomiya"],
				correctAnswer: "Zarar yetkazmaslik",
			},
			{
				questionText: "Xabardor rozilik talab qiladi:",
				options: [
					"Bemorning tushunishi va ixtiyoriy roziligi",
					"Faqat shifokor tushuntirishi",
					"Oila roziligi",
					"Faqat yozma hujjat",
				],
				correctAnswer: "Bemorning tushunishi va ixtiyoriy roziligi",
			},
			{
				questionText: "Bemor maxfiyligi qachon buzilishi mumkin:",
				options: [
					"Boshqalarga bevosita xavf bo'lganda",
					"Oila ma'lumot so'raganda",
					"Sug'urta kompaniyalari so'raganda",
					"Hamkasblar qiziqsa",
				],
				correctAnswer: "Boshqalarga bevosita xavf bo'lganda",
			},
			{
				questionText: "Sog'liqni saqlashda 'Adolat' printsipi nimani anglatadi:",
				options: [
					"Resurslarni adolatli taqsimlash",
					"Noto'g'ri ish uchun jazo",
					"Sud jarayonlari",
					"Kasalxona ierarxiyasi",
				],
				correctAnswer: "Resurslarni adolatli taqsimlash",
			},
			{
				questionText: "Tibbiy amaliyotda 'Yaxshilik qilish' nima?",
				options: [
					"Bemor manfaatida harakat qilish",
					"Protokollarga rioya qilish",
					"Xatolardan qochish",
					"Adolatli narx qo'yish",
				],
				correctAnswer: "Bemor manfaatida harakat qilish",
			},
			{
				questionText: "Hayot oxiridagi parvarish qarorlari birinchi navbatda nimani hisobga olishi kerak:",
				options: [
					"Bemorning xohishi va qadriyatlari",
					"Oilaning moliyaviy ahvoli",
					"Kasalxona to'shak mavjudligi",
					"Shifokor qulayligi",
				],
				correctAnswer: "Bemorning xohishi va qadriyatlari",
			},
			{
				questionText: "Tadqiqot etikasi talab qiladi:",
				options: [
					"Ishtirokchilarning xabardor roziligi",
					"Tez tugatish",
					"Foydali natijalar",
					"Minimal hujjatlashtirish",
				],
				correctAnswer: "Ishtirokchilarning xabardor roziligi",
			},
			{
				questionText: "Sog'liqni saqlashda madaniy kompetentlik nimani anglatadi:",
				options: [
					"Turli e'tiqod va amaliyotlarni hurmat qilish",
					"Ko'p tillarni bilish",
					"Dunyo geografiyasini bilish",
					"Bitta standartga rioya qilish",
				],
				correctAnswer: "Turli e'tiqod va amaliyotlarni hurmat qilish",
			},
			{
				questionText: "Sog'liqni saqlashdagi professional chegaralar nimani o'z ichiga oladi:",
				options: [
					"Mos munosabatlarni saqlash",
					"Bemorlar bilan do'stlik",
					"Shaxsiy muammolarni baham ko'rish",
					"Qimmat sovg'alarni qabul qilish",
				],
				correctAnswer: "Mos munosabatlarni saqlash",
			},
		],
	},

	"healthcare-management": {
		en: [
			{
				questionText: "What is the primary goal of healthcare quality management?",
				options: ["Improve patient outcomes", "Reduce costs only", "Increase staff numbers", "Expand facilities"],
				correctAnswer: "Improve patient outcomes",
			},
			{
				questionText: "Which leadership style is most effective in healthcare crisis management?",
				options: ["Transformational", "Autocratic", "Laissez-faire", "Bureaucratic"],
				correctAnswer: "Transformational",
			},
			{
				questionText: "Patient safety initiatives should focus on:",
				options: ["System improvements", "Individual blame", "Cost reduction", "Speed of service"],
				correctAnswer: "System improvements",
			},
			{
				questionText: "Effective healthcare communication requires:",
				options: ["Clear, empathetic dialogue", "Medical jargon", "Brief interactions", "Written notes only"],
				correctAnswer: "Clear, empathetic dialogue",
			},
			{
				questionText: "Healthcare resource allocation should be based on:",
				options: ["Evidence-based priorities", "Personal preferences", "Political pressure", "Historical patterns"],
				correctAnswer: "Evidence-based priorities",
			},
			{
				questionText: "What is the key component of healthcare risk management?",
				options: [
					"Proactive identification and mitigation",
					"Reactive responses",
					"Insurance coverage",
					"Legal compliance only",
				],
				correctAnswer: "Proactive identification and mitigation",
			},
			{
				questionText: "Healthcare team collaboration is enhanced by:",
				options: [
					"Shared goals and open communication",
					"Hierarchical structure",
					"Individual competition",
					"Separate departments",
				],
				correctAnswer: "Shared goals and open communication",
			},
			{
				questionText: "Performance improvement in healthcare should be:",
				options: ["Continuous and data-driven", "Annual and subjective", "Crisis-triggered", "Cost-focused only"],
				correctAnswer: "Continuous and data-driven",
			},
			{
				questionText: "Healthcare strategic planning involves:",
				options: [
					"Long-term vision with measurable goals",
					"Short-term fixes",
					"Copying competitors",
					"Maintaining status quo",
				],
				correctAnswer: "Long-term vision with measurable goals",
			},
			{
				questionText: "Change management in healthcare requires:",
				options: [
					"Stakeholder engagement and training",
					"Top-down mandates",
					"Minimal communication",
					"Rapid implementation",
				],
				correctAnswer: "Stakeholder engagement and training",
			},
		],
		ru: [
			{
				questionText: "Какова основная цель у��равления качеством здравоохранения?",
				options: [
					"Улучшить результаты лечения пациентов",
					"Только снизить затраты",
					"Увеличить штат",
					"Расширить помещения",
				],
				correctAnswer: "Улучшить результаты лечения пациентов",
			},
			{
				questionText: "Какой стиль руководства наиболее эффективен в кризисном управлении здравоохранением?",
				options: ["Трансформационный", "Автократический", "Либеральный", "Бюрократический"],
				correctAnswer: "Трансформационный",
			},
			{
				questionText: "Инициативы по безопасности пациентов должны сосредоточиться на:",
				options: ["Улучшении системы", "Индивидуальном обвинении", "Снижении затрат", "Скорости обслуживания"],
				correctAnswer: "Улучшении системы",
			},
			{
				questionText: "Эффективная коммуникация в здравоохранении требует:",
				options: [
					"Ясного, эмпатичного диалога",
					"Медицинского жаргона",
					"Кратких взаимодействий",
					"Только письменных заметок",
				],
				correctAnswer: "Ясного, эмпатичного диалога",
			},
			{
				questionText: "Распределение ресурсов здравоохранения должно основываться на:",
				options: [
					"Приоритетах, основанных на доказательствах",
					"Личных предпочтениях",
					"Политическом давлении",
					"Исторических образцах",
				],
				correctAnswer: "Приоритетах, основанных на доказательствах",
			},
			{
				questionText: "Что является ключевым компонентом управления рисками в здравоохранении?",
				options: [
					"Проактивная идентификация и смягчение",
					"Реактивные ответы",
					"Страховое покрытие",
					"Только правовое соответствие",
				],
				correctAnswer: "Проактивная идентификация и смягчение",
			},
			{
				questionText: "Сотрудничество медицинской команды улучшается благодаря:",
				options: [
					"Общим целям и открытому общению",
					"Иерархической структуре",
					"Индивидуальной конкуренции",
					"Отдельным отделам",
				],
				correctAnswer: "Общим целям и открытому общению",
			},
			{
				questionText: "Улучшение производительности в здравоохранении должно быть:",
				options: [
					"Непрерывным и основанным на данных",
					"Ежегодным и субъективным",
					"Вызванным кризисом",
					"Сосредоточенным только на затратах",
				],
				correctAnswer: "Непрерывным и основанным на данных",
			},
			{
				questionText: "Стратегическое планирование здравоохранения включает:",
				options: [
					"Долгосрочное видение с измеримыми целями",
					"Краткосрочные исправления",
					"Копирование конкурентов",
					"Поддержание статус-кво",
				],
				correctAnswer: "Долгосрочное видение с измеримыми целями",
			},
			{
				questionText: "Управление изменениями в здравоохранении требует:",
				options: [
					"Вовлечения заинтересованных сторон и обучения",
					"Мандатов сверху вниз",
					"Минимального общения",
					"Быстрого внедрения",
				],
				correctAnswer: "Вовлечения заинтересованных сторон и обучения",
			},
		],
		uz: [
			{
				questionText: "Sog'liqni saqlash sifatini boshqarishning asosiy maqsadi nima?",
				options: [
					"Bemor natijalarini yaxshilash",
					"Faqat xarajatlarni kamaytirish",
					"Xodimlar sonini ko'paytirish",
					"Binolarni kengaytirish",
				],
				correctAnswer: "Bemor natijalarini yaxshilash",
			},
			{
				questionText: "Sog'liqni saqlash inqiroz boshqaruvida qaysi rahbarlik uslubi eng samarali?",
				options: ["Transformatsion", "Avtokratik", "Liberal", "Byurokratik"],
				correctAnswer: "Transformatsion",
			},
			{
				questionText: "Bemor xavfsizligi tashabbuslari nimaga e'tibor qaratishi kerak:",
				options: ["Tizimni yaxshilash", "Shaxsiy ayblov", "Xarajatlarni kamaytirish", "Xizmat tezligi"],
				correctAnswer: "Tizimni yaxshilash",
			},
			{
				questionText: "Sog'liqni saqlashda samarali muloqot talab qiladi:",
				options: ["Aniq, hamdard muloqot", "Tibbiy jargon", "Qisqa muloqot", "Faqat yozma eslatmalar"],
				correctAnswer: "Aniq, hamdard muloqot",
			},
			{
				questionText: "Sog'liqni saqlash resurslarini taqsimlash nimaga asoslanishi kerak:",
				options: ["Dalillarga asoslangan ustuvorliklar", "Shaxsiy afzalliklar", "Siyosiy bosim", "Tarixiy naqshlar"],
				correctAnswer: "Dalillarga asoslangan ustuvorliklar",
			},
			{
				questionText: "Sog'liqni saqlashda xavflarni boshqarishning asosiy komponenti nima?",
				options: ["Faol aniqlash va yumshatish", "Reaktiv javoblar", "Sug'urta qamrovi", "Faqat qonuniy muvofiqlik"],
				correctAnswer: "Faol aniqlash va yumshatish",
			},
			{
				questionText: "Tibbiy jamoa hamkorligi nimalar bilan yaxshilanadi:",
				options: ["Umumiy maqsadlar va ochiq muloqot", "Ierarxik tuzilma", "Shaxsiy raqobat", "Alohida bo'limlar"],
				correctAnswer: "Umumiy maqsadlar va ochiq muloqot",
			},
			{
				questionText: "Sog'liqni saqlashda samaradorlikni oshirish qanday bo'lishi kerak:",
				options: [
					"Uzluksiz va ma'lumotlarga asoslangan",
					"Yillik va sub'ektiv",
					"Inqiroz sabab bo'lgan",
					"Faqat xarajatlarga qaratilgan",
				],
				correctAnswer: "Uzluksiz va ma'lumotlarga asoslangan",
			},
			{
				questionText: "Sog'liqni saqlash strategik rejalashtirishida nima mavjud:",
				options: [
					"O'lchanadigan maqsadlar bilan uzoq muddatli ko'rish",
					"Qisqa muddatli tuzatishlar",
					"Raqobatchilarni nusxalash",
					"Status-kvoni saqlash",
				],
				correctAnswer: "O'lchanadigan maqsadlar bilan uzoq muddatli ko'rish",
			},
			{
				questionText: "Sog'liqni saqlashda o'zgarishlarni boshqarish talab qiladi:",
				options: [
					"Manfaatdor tomonlarni jalb qilish va o'qitish",
					"Yuqoridan pastga mandatlar",
					"Minimal muloqot",
					"Tez joriy etish",
				],
				correctAnswer: "Manfaatdor tomonlarni jalb qilish va o'qitish",
			},
		],
	},

	"medical-entrance": {
		en: [
			{
				questionText: "Which of the following is NOT a function of the liver?",
				options: ["Producing insulin", "Detoxification", "Bile production", "Protein synthesis"],
				correctAnswer: "Producing insulin",
			},
			{
				questionText: "The process of cell division that produces gametes is called:",
				options: ["Meiosis", "Mitosis", "Binary fission", "Budding"],
				correctAnswer: "Meiosis",
			},
			{
				questionText: "Which vitamin deficiency causes scurvy?",
				options: ["Vitamin C", "Vitamin D", "Vitamin B12", "Vitamin A"],
				correctAnswer: "Vitamin C",
			},
			{
				questionText: "The normal pH range of human blood is:",
				options: ["7.35-7.45", "7.0-7.2", "6.8-7.0", "7.5-7.8"],
				correctAnswer: "7.35-7.45",
			},
			{
				questionText: "Which hormone regulates blood sugar levels?",
				options: ["Insulin", "Thyroxine", "Adrenaline", "Growth hormone"],
				correctAnswer: "Insulin",
			},
			{
				questionText: "The powerhouse of the cell is:",
				options: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic reticulum"],
				correctAnswer: "Mitochondria",
			},
			{
				questionText: "Which blood type is considered the universal donor?",
				options: ["O negative", "AB positive", "A positive", "B negative"],
				correctAnswer: "O negative",
			},
			{
				questionText: "The study of heredity is called:",
				options: ["Genetics", "Anatomy", "Physiology", "Pathology"],
				correctAnswer: "Genetics",
			},
			{
				questionText: "Which part of the nervous system controls involuntary actions?",
				options: [
					"Autonomic nervous system",
					"Central nervous system",
					"Peripheral nervous system",
					"Somatic nervous system",
				],
				correctAnswer: "Autonomic nervous system",
			},
			{
				questionText: "The exchange of gases in the lungs occurs in:",
				options: ["Alveoli", "Bronchi", "Trachea", "Bronchioles"],
				correctAnswer: "Alveoli",
			},
		],
		ru: [
			{
				questionText: "Что из следующего НЕ является функцией печени?",
				options: ["Производство инсулина", "Детоксикация", "Производство желчи", "Синтез белков"],
				correctAnswer: "Производство инсулина",
			},
			{
				questionText: "Процесс деления клеток, который производит гаметы, называется:",
				options: ["Мейоз", "Митоз", "Бинарное деление", "Почкование"],
				correctAnswer: "Мейоз",
			},
			{
				questionText: "Дефицит какого витамина вызывает цингу?",
				options: ["Витамин C", "Витамин D", "Витамин B12", "Витамин A"],
				correctAnswer: "Витамин C",
			},
			{
				questionText: "Нормальный диапазон pH человеческой крови:",
				options: ["7.35-7.45", "7.0-7.2", "6.8-7.0", "7.5-7.8"],
				correctAnswer: "7.35-7.45",
			},
			{
				questionText: "Какой гормон регулирует уровень сахара в крови?",
				options: ["Инсулин", "Тироксин", "Адреналин", "Гормон роста"],
				correctAnswer: "Инсулин",
			},
			{
				questionText: "Электростанция клетки это:",
				options: ["Митохондрии", "Ядро", "Рибосома", "Эндоплазматический ретикулум"],
				correctAnswer: "Митохондрии",
			},
			{
				questionText: "Какая группа крови считается универсальным донором?",
				options: ["O отрицательная", "AB положительная", "A положительная", "B отрицательная"],
				correctAnswer: "O отрицательная",
			},
			{
				questionText: "Изучение наследственности называется:",
				options: ["Генетика", "Анатомия", "Физиология", "Патология"],
				correctAnswer: "Генетика",
			},
			{
				questionText: "Какая часть нервной системы контролирует непроизвольные действия?",
				options: [
					"Автономная нервная система",
					"Центральная нервная система",
					"Периферическая нервная система",
					"Соматическая нервная система",
				],
				correctAnswer: "Автономная нервная система",
			},
			{
				questionText: "Обмен газов в легких происходит в:",
				options: ["Альвеолах", "Бронхах", "Трахее", "Бронхиолах"],
				correctAnswer: "Альвеолах",
			},
		],
		uz: [
			{
				questionText: "Quyidagilardan qaysi biri jigarning vazifasi EMAS?",
				options: ["Insulin ishlab chiqarish", "Zaharlanishdan tozalash", "O't ishlab chiqarish", "Oqsil sintezi"],
				correctAnswer: "Insulin ishlab chiqarish",
			},
			{
				questionText: "Gametalarni hosil qiluvchi hujayra bo'linish jarayoni nima deb ataladi:",
				options: ["Meyoz", "Mitoz", "Ikkilik bo'linish", "Kurtaklanish"],
				correctAnswer: "Meyoz",
			},
			{
				questionText: "Qaysi vitamin yetishmasligi skorbut kasalligini keltirib chiqaradi?",
				options: ["C vitamini", "D vitamini", "B12 vitamini", "A vitamini"],
				correctAnswer: "C vitamini",
			},
			{
				questionText: "Inson qonining normal pH diapazoni:",
				options: ["7.35-7.45", "7.0-7.2", "6.8-7.0", "7.5-7.8"],
				correctAnswer: "7.35-7.45",
			},
			{
				questionText: "Qon shakar darajasini qaysi gormon tartibga soladi?",
				options: ["Insulin", "Tiroksin", "Adrenalin", "O'sish gormoni"],
				correctAnswer: "Insulin",
			},
			{
				questionText: "Hujayra elektr stantsiyasi nima:",
				options: ["Mitoxondriya", "Yadro", "Ribosoma", "Endoplazmatik retikulum"],
				correctAnswer: "Mitoxondriya",
			},
			{
				questionText: "Qaysi qon guruhi universal donor hisoblanadi?",
				options: ["O manfiy", "AB musbat", "A musbat", "B manfiy"],
				correctAnswer: "O manfiy",
			},
			{
				questionText: "Irsiyat o'rganish nima deb ataladi:",
				options: ["Genetika", "Anatomiya", "Fiziologiya", "Patologiya"],
				correctAnswer: "Genetika",
			},
			{
				questionText: "Nerv tizimining qaysi qismi ixtiyorsiz harakatlarni nazorat qiladi?",
				options: ["Avtonom nerv tizimi", "Markaziy nerv tizimi", "Periferik nerv tizimi", "Somatik nerv tizimi"],
				correctAnswer: "Avtonom nerv tizimi",
			},
			{
				questionText: "O'pkada gaz almashinuvi qayerda sodir bo'ladi:",
				options: ["Alveolalarda", "Bronxlarda", "Traxeyada", "Bronxiolalarda"],
				correctAnswer: "Alveolalarda",
			},
		],
	},
}
