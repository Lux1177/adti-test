import type { Question, Locale } from "~/types/quiz"

export const medicalXrayQuestions: Record<Locale, Question[]> = {
	en: [
		{
			questionText: "What is the role of protective clothing in radiation safety?",
			options: [
				"Reduces radiation exposure",
				"Completely blocks radiation",
				"Used only in emergencies",
				"Only for decoration",
			],
			correctAnswer: "Reduces radiation exposure",
		},
		{
			questionText: "Which law governs the use of ionizing radiation in Uzbekistan?",
			options: [
				"Law on Radiation Safety",
				"Law on Health Protection",
				"Law on Medical Institutions",
				"Labor Code",
			],
			correctAnswer: "Law on Radiation Safety",
		},
		{
			questionText: "When was X-ray radiation discovered?",
			options: [
				"1895",
				"1901",
				"1920",
				"1870",
			],
			correctAnswer: "1895",
		},
		{
			questionText: "What organs are most sensitive to radiation?",
			options: [
				"Thyroid, gonads, bone marrow",
				"Liver and stomach",
				"Skin and hair",
				"Heart and lungs",
			],
			correctAnswer: "Thyroid, gonads, bone marrow",
		},
		{
			questionText: "What is the unit for measuring radiation dose?",
			options: [
				"Sievert",
				"Volt",
				"Watt",
				"Ampere",
			],
			correctAnswer: "Sievert",
		},
		{
			questionText: "Which one is a non-ionizing radiation?",
			options: [
				"Ultraviolet",
				"Gamma",
				"X-ray",
				"Beta",
			],
			correctAnswer: "Ultraviolet",
		},
		{
			questionText: "What is the function of a collimator in an X-ray machine?",
			options: [
				"To direct and shape the X-ray beam",
				"To increase the dose",
				"To amplify the image",
				"To cool the tube",
			],
			correctAnswer: "To direct and shape the X-ray beam",
		},
		{
			questionText: "What is the main danger of radiation exposure?",
			options: [
				"Damage to living tissues and DNA",
				"Weight loss",
				"Temporary fatigue",
				"Low blood sugar",
			],
			correctAnswer: "Damage to living tissues and DNA",
		},
		{
			questionText: "Which professionals are required to wear personal dosimeters?",
			options: [
				"Radiology staff",
				"Cleaning staff",
				"All doctors",
				"Administrative personnel",
			],
			correctAnswer: "Radiology staff",
		},
		{
			questionText: "What is a thermoluminescent dosimeter (TLD) used for?",
			options: [
				"Measuring cumulative radiation dose",
				"Measuring blood pressure",
				"Monitoring heart rate",
				"Checking temperature",
			],
			correctAnswer: "Measuring cumulative radiation dose",
		},
		{
			questionText: "How often should dosimeters be checked?",
			options: [
				"Monthly",
				"Yearly",
				"Daily",
				"Every 5 years",
			],
			correctAnswer: "Monthly",
		},
		{
			questionText: "Who regulates radiation safety in medical facilities?",
			options: [
				"Sanitary and Epidemiological Services",
				"Ministry of Energy",
				"Police Department",
				"Ministry of Finance",
			],
			correctAnswer: "Sanitary and Epidemiological Services",
		},
		{
			questionText: "What is the primary purpose of shielding in X-ray rooms?",
			options: [
				"To protect staff and patients from scatter radiation",
				"To decorate the room",
				"To make images clearer",
				"To reduce electricity use",
			],
			correctAnswer: "To protect staff and patients from scatter radiation",
		},
		{
			questionText: "Where should radiation warning signs be posted?",
			options: [
				"At the entrance of the X-ray room",
				"In the restroom",
				"On patient files",
				"On medical instruments",
			],
			correctAnswer: "At the entrance of the X-ray room",
		},
		{
			questionText: "How does radiation affect children compared to adults?",
			options: [
				"Children are more sensitive",
				"No difference",
				"Adults are more sensitive",
				"Only elderly are affected",
			],
			correctAnswer: "Children are more sensitive",
		},
		{
			questionText: "Which materials are commonly used for radiation shielding?",
			options: [
				"Lead and concrete",
				"Wood and plastic",
				"Glass and steel",
				"Copper and rubber",
			],
			correctAnswer: "Lead and concrete",
		},
		{
			questionText: "Which factor does NOT affect radiation dose?",
			options: [
				"Hair color",
				"Distance from source",
				"Exposure time",
				"Shielding used",
			],
			correctAnswer: "Hair color",
		},
		{
			questionText: "What is the ALARA principle?",
			options: [
				"As Low As Reasonably Achievable",
				"Always Leave A Room Alone",
				"Average Level And Reasoning Approach",
				"Allowing Low Activity Radiation",
			],
			correctAnswer: "As Low As Reasonably Achievable",
		},
		{
			questionText: "What is a dosimetry card?",
			options: [
				"Record of individual radiation exposure",
				"Hospital ID card",
				"Patient appointment card",
				"X-ray film label",
			],
			correctAnswer: "Record of individual radiation exposure",
		},
		{
			questionText: "What type of protection is a lead apron?",
			options: [
				"Personal protective equipment",
				"Mechanical tool",
				"Measuring device",
				"Pharmaceutical",
			],
			correctAnswer: "Personal protective equipment",
		},
		{
			questionText: "Why are control tests important in radiology?",
			options: [
				"To ensure radiation safety compliance",
				"To make staff busy",
				"To increase electricity bills",
				"They are not important",
			],
			correctAnswer: "To ensure radiation safety compliance",
		},
		{
			questionText: "What is scatter radiation?",
			options: [
				"Radiation deflected from the primary beam",
				"Main directed radiation",
				"Non-harmful light",
				"Noise in images",
			],
			correctAnswer: "Radiation deflected from the primary beam",
		},
		{
			questionText: "What should be done if a dosimeter is lost?",
			options: [
				"Report immediately to safety officer",
				"Ignore it",
				"Buy a new one personally",
				"Wait for inspection",
			],
			correctAnswer: "Report immediately to safety officer",
		},
		{
			questionText: "Who is responsible for maintaining radiation safety rules?",
			options: [
				"All personnel in radiology departments",
				"Only nurses",
				"Only patients",
				"Only chief doctor",
			],
			correctAnswer: "All personnel in radiology departments",
		},
		{
			questionText: "What is the purpose of a radiation diary?",
			options: [
				"To track individual exposure and safety measures",
				"To write down shift schedule",
				"To plan vacations",
				"To document patient feedback",
			],
			correctAnswer: "To track individual exposure and safety measures",
		},
{
			questionText: "Which factors increase the biological effects of X-ray radiation?",
			options: [
				"Type of radiation, dose, radiation sensitivity, tissue oxygen saturation",
				"Only tissue oxygen saturation",
				"Only type of radiation",
				"Only radiation doses",
			],
			correctAnswer: "Type of radiation, dose, radiation sensitivity, tissue oxygen saturation",
		},
		{
			questionText: "How is X-ray radiation produced?",
			options: [
				"Using electrons",
				"Using ions",
				"Using protons",
				"Using neutrons",
			],
			correctAnswer: "Using electrons",
		},
		{
			questionText: "Who must follow radiation safety rules?",
			options: [
				"All staff working in the X-ray room",
				"Only the technical X-ray staff",
				"Only the doctor",
				"Only the nurse",
			],
			correctAnswer: "All staff working in the X-ray room",
		},
		{
			questionText: "What is called the radiation control zone?",
			options: [
				"Area where radiation protection measures are applied",
				"Area without ionizing radiation",
				"Patient room",
				"Only the corridor",
			],
			correctAnswer: "Area where radiation protection measures are applied",
		},
		{
			questionText: "What types of ionizing radiation exist?",
			options: [
				"X-ray, gamma, beta, alpha radiation",
				"Only X-ray radiation",
				"Only gamma radiation",
				"Only beta radiation",
			],
			correctAnswer: "X-ray, gamma, beta, alpha radiation",
		},
		{
			questionText: "Who discovered X-ray radiation?",
			options: [
				"W.C. Roentgen",
				"M. Curie",
				"A. Einstein",
				"I. Newton",
			],
			correctAnswer: "W.C. Roentgen",
		},
		{
			questionText: "What is the allowed annual dose in medical institutions?",
			options: [
				"20 mSv",
				"10 mSv",
				"30 mSv",
				"40 mSv",
			],
			correctAnswer: "20 mSv",
		},
		{
			questionText: "How often do staff working constantly with radiation undergo medical exams?",
			options: [
				"Twice a year",
				"Once a year",
				"Four times a year",
				"Not conducted",
			],
			correctAnswer: "Twice a year",
		},
		{
			questionText: "What effects can X-ray radiation have on the human body?",
			options: [
				"General and local",
				"Only general",
				"Only local",
				"No effect",
			],
			correctAnswer: "General and local",
		},
		{
			questionText: "How are rays directed in modern X-ray machines?",
			options: [
				"Through a sealed tube",
				"Through a semi-open tube",
				"Through an open tube",
				"Directly",
			],
			correctAnswer: "Through a sealed tube",
		},
		{
			questionText: "How much can body exposure be reduced using protective equipment?",
			options: [
				"90%",
				"50%",
				"25%",
				"100%",
			],
			correctAnswer: "90%",
		},
		{
			questionText: "How is X-ray exposure conducted for children and pregnant women?",
			options: [
				"Only if vitally necessary",
				"Always",
				"Optional",
				"Not allowed for them",
			],
			correctAnswer: "Only if vitally necessary",
		},
		{
			questionText: "What is the main component of a modern X-ray machine?",
			options: [
				"Sealed X-ray tube",
				"Transformer",
				"Tomograph",
				"Capacitor",
			],
			correctAnswer: "Sealed X-ray tube",
		},
		{
			questionText: "How is the operating voltage of an X-ray machine measured?",
			options: [
				"kV (kilovolt)",
				"mA (milliampere)",
				"Hz (hertz)",
				"W (watt)",
			],
			correctAnswer: "kV (kilovolt)",
		},
		{
			questionText: "Who is responsible for ensuring radiation safety?",
			options: [
				"All medical personnel",
				"Only the radiologist",
				"Only the nurse",
				"Only the pharmacist",
			],
			correctAnswer: "All medical personnel",
		},
		{
			questionText: "Which cells are most sensitive to ionizing radiation?",
			options: [
				"Hematopoietic (blood-forming) cells",
				"Heart cells",
				"Skin cells",
				"Lung cells",
			],
			correctAnswer: "Hematopoietic (blood-forming) cells",
		},
		{
			questionText: "What is the name of the device that records continuous radiation exposure?",
			options: [
				"Dosimeter",
				"Barometer",
				"Manometer",
				"Thermometer",
			],
			correctAnswer: "Dosimeter",
		},
		{
			questionText: "What is the primary tool for radiation monitoring?",
			options: [
				"Dosimeter",
				"Thermometer",
				"Manometer",
				"Barometer",
			],
			correctAnswer: "Dosimeter",
		},
		{
			questionText: "Should the radiation control zone be marked?",
			options: [
				"Yes",
				"No",
				"Only when needed",
				"Only with a doctor’s prescription",
			],
			correctAnswer: "Yes",
		},
		{
			questionText: "What are examples of personal dosimetry control devices?",
			options: [
				"Dosimetry card, plate, thermoluminescent detector",
				"Thermometer, barometer, radiation diary",
				"Fax tape, board, phone",
				"Personal diary, pen, planner",
			],
			correctAnswer: "Dosimetry card, plate, thermoluminescent detector",
		},
		{
			questionText: "What is the main voltage source in an X-ray machine?",
			options: [
				"High-voltage generator",
				"Transformer",
				"Diode device",
				"Power supply",
			],
			correctAnswer: "High-voltage generator",
		},
		{
			questionText: "How is an image captured in a digital X-ray machine?",
			options: [
				"With a computer",
				"With a camera",
				"Drawn by hand",
				"With tape",
			],
			correctAnswer: "With a computer",
		},
		{
			questionText: "What is the advantage of digital X-ray machines?",
			options: [
				"Clear image with low radiation dose",
				"High power consumption",
				"Poor image quality",
				"Takes up a lot of space",
			],
			correctAnswer: "Clear image with low radiation dose",
		},
		{
			questionText: "What personal protective equipment is used by an X-ray technician?",
			options: [
				"Gloves, shield, cap, apron",
				"Only gloves",
				"Only shield",
				"Only apron",
			],
			correctAnswer: "Gloves, shield, cap, apron",
		},
		{
			questionText: "What happens if radiation safety rules are not followed?",
			options: [
				"Harm to health",
				"Loss of light",
				"Image disappears",
				"Headache",
			],
			correctAnswer: "Harm to health",
		},
],
	ru: [
		{
			questionText: "Какова роль защитной одежды в радиационной безопасности?",
			options: [
				"Снижает воздействие радиации",
				"Полностью блокирует радиацию",
				"Используется только при ЧС",
				"Только для украшения",
			],
			correctAnswer: "Снижает воздействие радиации",
		},
		{
			questionText: "Какой закон регулирует использование ионизирующего излучения в Узбекистане?",
			options: [
				"Закон о радиационной безопасности",
				"Закон о здравоохранении",
				"Закон о медицинских учреждениях",
				"Трудовой кодекс",
			],
			correctAnswer: "Закон о радиационной безопасности",
		},
		{
			questionText: "Когда было открыто рентгеновское излучение?",
			options: [
				"1895",
				"1901",
				"1920",
				"1870",
			],
			correctAnswer: "1895",
		},
		{
			questionText: "Какие органы наиболее чувствительны к радиации?",
			options: [
				"Щитовидная железа, половые железы, костный мозг",
				"Печень и желудок",
				"Кожа и волосы",
				"Сердце и лёгкие",
			],
			correctAnswer: "Щитовидная железа, половые железы, костный мозг",
		},
		{
			questionText: "В какой единице измеряется доза облучения?",
			options: [
				"Зиверт",
				"Вольт",
				"Ватт",
				"Ампер",
			],
			correctAnswer: "Зиверт",
		},
		{
			questionText: "Какой из перечисленных видов излучения является неионизирующим?",
			options: [
				"Ультрафиолет",
				"Гамма",
				"Рентген",
				"Бета",
			],
			correctAnswer: "Ультрафиолет",
		},
		{
			questionText: "Какова функция коллиматора в рентгеновском аппарате?",
			options: [
				"Направление и формирование рентгеновского пучка",
				"Увеличение дозы",
				"Усиление изображения",
				"Охлаждение трубки",
			],
			correctAnswer: "Направление и формирование рентгеновского пучка",
		},
		{
			questionText: "Какова основная опасность радиационного облучения?",
			options: [
				"Повреждение тканей и ДНК",
				"Потеря веса",
				"Временная усталость",
				"Низкий сахар в крови",
			],
			correctAnswer: "Повреждение тканей и ДНК",
		},
		{
			questionText: "Какие специалисты обязаны носить индивидуальные дозиметры?",
			options: [
				"Сотрудники рентгенологии",
				"Уборщики",
				"Все врачи",
				"Административный персонал",
			],
			correctAnswer: "Сотрудники рентгенологии",
		},
		{
			questionText: "Для чего используется термолюминесцентный дозиметр (ТЛД)?",
			options: [
				"Измерение накопленной дозы радиации",
				"Измерение артериального давления",
				"Мониторинг пульса",
				"Проверка температуры",
			],
			correctAnswer: "Измерение накопленной дозы радиации",
		},
		{
			questionText: "Как часто следует проверять дозиметры?",
			options: [
				"Ежемесячно",
				"Ежегодно",
				"Ежедневно",
				"Каждые 5 лет",
			],
			correctAnswer: "Ежемесячно",
		},
		{
			questionText: "Кто контролирует радиационную безопасность в медучреждениях?",
			options: [
				"Санитарно-эпидемиологическая служба",
				"Министерство энергетики",
				"Полиция",
				"Министерство финансов",
			],
			correctAnswer: "Санитарно-эпидемиологическая служба",
		},
		{
			questionText: "Какова основная цель экранирования в рентгеновских кабинетах?",
			options: [
				"Защита персонала и пациентов от рассеянного излучения",
				"Украшение помещения",
				"Улучшение изображения",
				"Снижение энергопотребления",
			],
			correctAnswer: "Защита персонала и пациентов от рассеянного излучения",
		},
		{
			questionText: "Где должны быть размещены знаки радиационного предупреждения?",
			options: [
				"На входе в рентген-кабинет",
				"В туалете",
				"На карточке пациента",
				"На медицинском оборудовании",
			],
			correctAnswer: "На входе в рентген-кабинет",
		},
		{
			questionText: "Как радиация влияет на детей по сравнению со взрослыми?",
			options: [
				"Дети более чувствительны",
				"Нет разницы",
				"Взрослые более чувствительны",
				"Только пожилые подвержены",
			],
			correctAnswer: "Дети более чувствительны",
		},
		{
			questionText: "Какие материалы чаще всего применяются для радиационной защиты?",
			options: [
				"Свинец и бетон",
				"Дерево и пластик",
				"Стекло и сталь",
				"Медь и резина",
			],
			correctAnswer: "Свинец и бетон",
		},
		{
			questionText: "Какой фактор НЕ влияет на дозу облучения?",
			options: [
				"Цвет волос",
				"Расстояние от источника",
				"Время воздействия",
				"Используемая защита",
			],
			correctAnswer: "Цвет волос",
		},
		{
			questionText: "Что означает принцип ALARA?",
			options: [
				"Наименьшая разумно достижимая доза",
				"Всегда покидать помещение",
				"Средний уровень и логичный подход",
				"Допустимый уровень слабой радиации",
			],
			correctAnswer: "Наименьшая разумно достижимая доза",
		},
		{
			questionText: "Что такое дозиметрическая карта?",
			options: [
				"Запись индивидуального облучения",
				"Пропуск в больницу",
				"Карточка приёма пациента",
				"Надпись на рентген-снимке",
			],
			correctAnswer: "Запись индивидуального облучения",
		},
		{
			questionText: "Что такое свинцовый фартук?",
			options: [
				"Средство индивидуальной защиты",
				"Механическое устройство",
				"Измерительный прибор",
				"Лекарственное средство",
			],
			correctAnswer: "Средство индивидуальной защиты",
		},
		{
			questionText: "Зачем проводятся контрольные тесты в рентгенологии?",
			options: [
				"Для соблюдения норм радиационной безопасности",
				"Чтобы занять персонал",
				"Для увеличения счета за свет",
				"Они не важны",
			],
			correctAnswer: "Для соблюдения норм радиационной безопасности",
		},
		{
			questionText: "Что такое рассеянное излучение?",
			options: [
				"Излучение, отклонённое от основного пучка",
				"Основной направленный пучок",
				"Безвредный свет",
				"Шумы на изображении",
			],
			correctAnswer: "Излучение, отклонённое от основного пучка",
		},
		{
			questionText: "Что делать при утере дозиметра?",
			options: [
				"Немедленно сообщить ответственному за безопасность",
				"Игнорировать",
				"Купить новый самостоятельно",
				"Ждать проверки",
			],
			correctAnswer: "Немедленно сообщить ответственному за безопасность",
		},
		{
			questionText: "Кто обязан соблюдать правила радиационной безопасности?",
			options: [
				"Весь персонал рентгенологических отделений",
				"Только медсёстры",
				"Только пациенты",
				"Только главный врач",
			],
			correctAnswer: "Весь персонал рентгенологических отделений",
		},
		{
			questionText: "Для чего нужен журнал радиационного контроля?",
			options: [
				"Для отслеживания индивидуального облучения и мер безопасности",
				"Для расписания смен",
				"Для планирования отпуска",
				"Для отзывов пациентов",
			],
			correctAnswer: "Для отслеживания индивидуального облучения и мер безопасности",
		},
{
			questionText: "Какие факторы усиливают биологическое воздействие рентгеновского излучения?",
			options: [
				"Тип излучения, доза, чувствительность к излучению, насыщенность тканей кислородом",
				"Только насыщенность тканей кислородом",
				"Только тип излучения",
				"Только дозы излучения",
			],
			correctAnswer: "Тип излучения, доза, чувствительность к излучению, насыщенность тканей кислородом",
		},
		{
			questionText: "С помощью чего получают рентгеновское излучение?",
			options: [
				"С помощью электронов",
				"С помощью ионов",
				"С помощью протонов",
				"С помощью нейтронов",
			],
			correctAnswer: "С помощью электронов",
		},
		{
			questionText: "Кто обязан соблюдать правила радиационной безопасности?",
			options: [
				"Все сотрудники, работающие в рентген-кабинете",
				"Только технический персонал рентген-кабинета",
				"Только врач",
				"Только медсестра",
			],
			correctAnswer: "Все сотрудники, работающие в рентген-кабинете",
		},
		{
			questionText: "Что называют зоной радиационного контроля?",
			options: [
				"Место, где применяются меры радиационной защиты",
				"Место, где отсутствует ионизирующее излучение",
				"Палата для пациентов",
				"Только коридор",
			],
			correctAnswer: "Место, где применяются меры радиационной защиты",
		},
		{
			questionText: "Какие виды ионизирующего излучения существуют?",
			options: [
				"Рентгеновское, гамма, бета, альфа излучения",
				"Только рентгеновское",
				"Только гамма",
				"Только бета",
			],
			correctAnswer: "Рентгеновское, гамма, бета, альфа излучения",
		},
		{
			questionText: "Кем было открыто рентгеновское излучение?",
			options: [
				"В.К. Рентгеном",
				"М. Кюри",
				"А. Эйнштейном",
				"И. Ньютоном",
			],
			correctAnswer: "В.К. Рентгеном",
		},
		{
			questionText: "Какова допустимая годовая доза излучения для медучреждений?",
			options: [
				"20 мЗв",
				"10 мЗв",
				"30 мЗв",
				"40 мЗв",
			],
			correctAnswer: "20 мЗв",
		},
		{
			questionText: "Сколько раз в год проходят медосмотр работники, постоянно контактирующие с радиацией?",
			options: [
				"2 раза в год",
				"1 раз в год",
				"4 раза в год",
				"Не проводится",
			],
			correctAnswer: "2 раза в год",
		},
		{
			questionText: "Как рентгеновское излучение влияет на организм человека?",
			options: [
				"Общее и локальное",
				"Только общее",
				"Только локальное",
				"Не влияет",
			],
			correctAnswer: "Общее и локальное",
		},
		{
			questionText: "Как направляются лучи в современных рентген-аппаратах?",
			options: [
				"Через закрытую трубку",
				"Через полуоткрытую трубку",
				"Через открытую трубку",
				"Прямо",
			],
			correctAnswer: "Через закрытую трубку",
		},
		{
			questionText: "Насколько можно уменьшить облучение тела с помощью защитных средств?",
			options: [
				"На 90%",
				"На 50%",
				"На 25%",
				"На 100%",
			],
			correctAnswer: "На 90%",
		},
		{
			questionText: "Как проводится рентгеновское исследование детям и беременным женщинам?",
			options: [
				"Только при жизненной необходимости",
				"Всегда",
				"По желанию",
				"Им нельзя проводить облучение",
			],
			correctAnswer: "Только при жизненной необходимости",
		},
		{
			questionText: "Основной компонент современного рентгеновского аппарата — это:",
			options: [
				"Закрытая рентгеновская трубка",
				"Трансформатор",
				"Томограф",
				"Конденсатор",
			],
			correctAnswer: "Закрытая рентгеновская трубка",
		},
		{
			questionText: "В чём измеряется рабочее напряжение рентген-аппарата?",
			options: [
				"кВ (киловольт)",
				"мА (миллиампер)",
				"Гц (герц)",
				"Вт (ватт)",
			],
			correctAnswer: "кВ (киловольт)",
		},
		{
			questionText: "Кто должен обеспечивать радиационную безопасность?",
			options: [
				"Все медицинские работники",
				"Только врач-рентгенолог",
				"Только медсестра",
				"Только провизор",
			],
			correctAnswer: "Все медицинские работники",
		},
		{
			questionText: "Какие клетки наиболее чувствительны к ионизирующему излучению?",
			options: [
				"Кроветворные клетки",
				"Клетки сердца",
				"Клетки кожи",
				"Клетки лёгких",
			],
			correctAnswer: "Кроветворные клетки",
		},
		{
			questionText: "Как называется прибор, фиксирующий постоянное облучение?",
			options: [
				"Дозиметр",
				"Барометр",
				"Манометр",
				"Термометр",
			],
			correctAnswer: "Дозиметр",
		},
		{
			questionText: "Основное средство радиационного контроля — это:",
			options: [
				"Дозиметр",
				"Термометр",
				"Манометр",
				"Барометр",
			],
			correctAnswer: "Дозиметр",
		},
		{
			questionText: "Должна ли быть обозначена зона радиационного контроля?",
			options: [
				"Да",
				"Нет",
				"Только при необходимости",
				"Только по медпоказаниям",
			],
			correctAnswer: "Да",
		},
		{
			questionText: "Какие индивидуальные средства дозиметрического контроля существуют?",
			options: [
				"Дозиметрическая карта, пластина, термолюминесцентный детектор",
				"Термометр, барометр, дневник облучения",
				"Факс-лента, доска, телефон",
				"Личный дневник, ручка, планировщик",
			],
			correctAnswer: "Дозиметрическая карта, пластина, термолюминесцентный детектор",
		},
		{
			questionText: "Основной источник напряжения в рентген-аппарате — это:",
			options: [
				"Высоковольтный генератор",
				"Трансформатор",
				"Диодное устройство",
				"Электропитание",
			],
			correctAnswer: "Высоковольтный генератор",
		},
		{
			questionText: "Как фиксируется изображение в цифровом рентгеновском аппарате?",
			options: [
				"С помощью компьютера",
				"С помощью камеры",
				"Рисуется вручную",
				"С помощью плёнки",
			],
			correctAnswer: "С помощью компьютера",
		},
		{
			questionText: "В чём преимущество цифрового рентгеновского аппарата?",
			options: [
				"Чёткое изображение при низкой дозе облучения",
				"Высокое потребление электроэнергии",
				"Низкое качество изображения",
				"Занимает много места",
			],
			correctAnswer: "Чёткое изображение при низкой дозе облучения",
		},
		{
			questionText: "Какие средства индивидуальной защиты используются рентген-лаборантом?",
			options: [
				"Перчатки, щит, шапочка, фартук",
				"Только перчатки",
				"Только щит",
				"Только фартук",
			],
			correctAnswer: "Перчатки, щит, шапочка, фартук",
		},
		{
			questionText: "К чему приводит несоблюдение правил радиационной безопасности?",
			options: [
				"Вред здоровью",
				"Потеря света",
				"Пропадает изображение",
				"Головная боль",
			],
			correctAnswer: "Вред здоровью",
		},
],
	uz: [
		{
			questionText: "Rengen nurlanishining biologik ta’sirini qanday omillar kuchaytiradi?",
			options: [
				"Nurlanish turi, doza, nurlanishga sezuvchanlik, to‘qimalarning kislorod bilan to‘yinganligi",
				"Faqat to‘qimalarning kislorod bilan to‘yinganligi",
				"Faqat nurlanish turi",
				"Faqat nurlanish dozalari",
			],
			correctAnswer: "Nurlanish turi, doza, nurlanishga sezuvchanlik, to‘qimalarning kislorod bilan to‘yinganligi",
		},
		{
			questionText: "Rentgen nurlari nima yordamida olinadi?",
			options: [
				"Elektronlar yordamida",
				"Ionlar yordamida",
				"Protonlar yordamida",
				"Neytronlar yordamida",
			],
			correctAnswer: "Elektronlar yordamida",
		},
		{
			questionText: "Radiatsiyaviy xavfsizlik qoidalariga kim amal qilishi shart?",
			options: [
				"Rentgen xonada ishlovchi barcha xodimlar",
				"Faqat rengen texnik xodimi",
				"Faqat shifokor",
				"Faqat hamshira",
			],
			correctAnswer: "Rentgen xonada ishlovchi barcha xodimlar",
		},
		{
			questionText: "Radiatsiyaviy nazorat zonasi deb nimaga aytiladi?",
			options: [
				"Radiatsiyadan himoya qilish choralari qo‘llaniladigan joyga",
				"Ionlashtiruvchi nurlanish bo‘lmaydigan joyga",
				"Bemorlar xonasiga",
				"Faqat koridorga",
			],
			correctAnswer: "Radiatsiyadan himoya qilish choralari qo‘llaniladigan joyga",
		},
		{
			questionText: "Ionlashtiruvchi nurlanish qanday turlari mavjud?",
			options: [
				"Rentgen, gamma, beta, alfa nurlari",
				"Faqat rentgen nurlari",
				"Faqat gamma nurlari",
				"Faqat beta nurlari",
			],
			correctAnswer: "Rentgen, gamma, beta, alfa nurlari",
		},
		{
			questionText: "Rentgen nurlari kim tomonidan kashf etilgan?",
			options: [
				"V.K.Rentgen",
				"M.Kyuri",
				"A.Eynshteyn",
				"I.Nyuton",
			],
			correctAnswer: "V.K.Rentgen",
		},
		{
			questionText: "Tibbiyot muassasalarida ruxsat etilgan doimiy yillik doza qancha?",
			options: [
				"20 mZv",
				"10 mZv",
				"30 mZv",
				"40 mZv",
			],
			correctAnswer: "20 mZv",
		},
		{
			questionText: "Doimiy ravishda radiatsiya bilan ishlovchi xodimlar uchun tibbiy ko‘rik necha marotaba o‘tkaziladi?",
			options: [
				"Yiliga 2 marotaba",
				"Yiliga 1 marotaba",
				"Yiliga 4 marotaba",
				"Chop etilmaydi",
			],
			correctAnswer: "Yiliga 2 marotaba",
		},
		{
			questionText: "Rentgen nurlanishining inson organizmiga ta’siri qanday bo‘lishi mumkin?",
			options: [
				"Umumiy va lokal",
				"Faqat umumiy",
				"Faqat lokal",
				"Ta’sir qilmaydi",
			],
			correctAnswer: "Umumiy va lokal",
		},
		{
			questionText: "Zamonaviy rentgen apparatlarida nurlar qanday yo‘naltiriladi?",
			options: [
				"Yopiq nay orqali",
				"Yarim ochiq nay orqali",
				"Och nay orqali",
				"To‘g‘ridan to‘g‘ri",
			],
			correctAnswer: "Yopiq nay orqali",
		},
		{
			questionText: "Himoya vositalari yordamida tana nurlanishini necha foizga kamaytirish mumkin?",
			options: [
				"90%",
				"50%",
				"25%",
				"100%",
			],
			correctAnswer: "90%",
		},
		{
			questionText: "Bolalar va homilador ayollar uchun rentgen nurlanishi qanday o‘tkaziladi?",
			options: [
				"Faqat hayotiy zarurat bo‘lsa",
				"Hamisha",
				"Ixtiyoriy",
				"Ular uchun nurlanish mumkin emas",
			],
			correctAnswer: "Faqat hayotiy zarurat bo‘lsa",
		},
		{
			questionText: "Zamonaviy rentgen apparatining asosiy tarkibiy qismi nima?",
			options: [
				"Yopiq rentgen nay",
				"Transformator",
				"Tomograf",
				"Kondensator",
			],
			correctAnswer: "Yopiq rentgen nay",
		},
		{
			questionText: "Rentgen apparatining ish bosimi qanday o‘lchanadi?",
			options: [
				"kV (kilovolt)",
				"mA (milliamper)",
				"Hz (gerts)",
				"Vt (vatt)",
			],
			correctAnswer: "kV (kilovolt)",
		},
		{
			questionText: "Radiatsion xavfsizlikni kim ta’minlashi lozim?",
			options: [
				"Barcha tibbiyot xodimlari",
				"Faqat rentgen shifokori",
				"Faqat hamshira",
				"Faqat provizor",
			],
			correctAnswer: "Barcha tibbiyot xodimlari",
		},
		{
			questionText: "Ionlashtiruvchi nurlanishga eng sezuvchan hujayralar qaysilar?",
			options: [
				"Qon yaratuvchi hujayralar",
				"Yurak hujayralari",
				"Teri hujayralari",
				"O‘pka hujayralari",
			],
			correctAnswer: "Qon yaratuvchi hujayralar",
		},
		{
			questionText: "Doimiy nurlanishni qayd qiluvchi vosita nima deb ataladi?",
			options: [
				"Dozimetr",
				"Barometr",
				"Manometr",
				"Termometr",
			],
			correctAnswer: "Dozimetr",
		},
		{
			questionText: "Radiatsiyaviy nazoratda asosiy vosita bu –",
			options: [
				"Dozimetr",
				"Termometr",
				"Manometr",
				"Barometr",
			],
			correctAnswer: "Dozimetr",
		},
		{
			questionText: "Radiatsiyaviy nazorat zonasi belgilanishi kerakmi?",
			options: [
				"Ha",
				"Yo‘q",
				"Faqat zarurat tug‘ilganda",
				"Faqat tibbiy ko‘rsatma bo‘lsa",
			],
			correctAnswer: "Ha",
		},
		{
			questionText: "Shaxsiy dozimetrik nazorat vositalari qaysilar?",
			options: [
				"Dozimetrik karta, plastinka, termolyuminestsentli detektor",
				"Termometr, barometr, nurlanish kundaligi",
				"Fakslovchi lenta, doska, telefon",
				"Shaxsiy kundalik, ruchka, rejalashtirgich",
			],
			correctAnswer: "Dozimetrik karta, plastinka, termolyuminestsentli detektor",
		},
		{
			questionText: "Rentgen apparatidagi asosiy kuchlanish manbai nima?",
			options: [
				"Yuqori kuchlanishli generator",
				"Transformator",
				"Diode qurilma",
				"Elektr manbai",
			],
			correctAnswer: "Yuqori kuchlanishli generator",
		},
		{
			questionText: "Zamonaviy raqamli rentgen apparatida tasvir qanday qayd etiladi?",
			options: [
				"Kompyuter yordamida",
				"Kamera yordamida",
				"Qo‘l bilan chiziladi",
				"Tasma yordamida",
			],
			correctAnswer: "Kompyuter yordamida",
		},
		{
			questionText: "Raqamli rentgen apparatlarining afzalligi nimada?",
			options: [
				"Kam nurlanish dozasida aniq tasvir olish",
				"Ko‘p elektr sarfi",
				"Tasvir sifatsiz",
				"Ko‘p joy egallaydi",
			],
			correctAnswer: "Kam nurlanish dozasida aniq tasvir olish",
		},
		{
			questionText: "Rentgen xodimining individual himoya vositalariga nimalar kiradi?",
			options: [
				"Qo‘lqop, qalqon, qalpoq, apron",
				"Faqat qo‘lqop",
				"Faqat qalqon",
				"Faqat apron",
			],
			correctAnswer: "Qo‘lqop, qalqon, qalpoq, apron",
		},
		{
			questionText: "Radiatsion xavfsizlik qoidalariga amal qilinmasa, bu nimaga olib keladi?",
			options: [
				"Salomatlikka zarar",
				"Yorug‘lik yo‘qoladi",
				"Tasvir o‘chadi",
				"Bosh og‘rig‘i",
			],
			correctAnswer: "Salomatlikka zarar",
		},
		{
			questionText: "Radiatsion xavfsizlikda himoya kiyimining vazifasi nima?",
			options: [
				"Nurlanish ta’sirini kamaytirish",
				"Nurlanishni to‘liq to‘sish",
				"Faqat favqulodda holatlarda ishlatiladi",
				"Faqat bezak uchun",
			],
			correctAnswer: "Nurlanish ta’sirini kamaytirish",
		},
		{
			questionText: "O‘zbekistonda ionlashtiruvchi nurlanishdan foydalanishni qaysi qonun tartibga soladi?",
			options: [
				"Radiatsion xavfsizlik to‘g‘risidagi qonun",
				"Sog‘liqni saqlash to‘g‘risidagi qonun",
				"Tibbiyot muassasalari to‘g‘risidagi qonun",
				"Mehnat kodeksi",
			],
			correctAnswer: "Radiatsion xavfsizlik to‘g‘risidagi qonun",
		},
		{
			questionText: "Rentgen nurlari qachon kashf etilgan?",
			options: [
				"1895-yilda",
				"1901-yilda",
				"1920-yilda",
				"1870-yilda",
			],
			correctAnswer: "1895-yilda",
		},
		{
			questionText: "Qaysi a’zolar nurlanishga eng sezuvchan hisoblanadi?",
			options: [
				"Qalqonsimon bez, jinsiy bezlar, suyak iligi",
				"Jigar va oshqozon",
				"Teri va soch",
				"Yurak va o‘pka",
			],
			correctAnswer: "Qalqonsimon bez, jinsiy bezlar, suyak iligi",
		},
		{
			questionText: "Nurlanish dozasini o‘lchash birligi nima?",
			options: [
				"Zivert",
				"Volt",
				"Vatt",
				"Amper",
			],
			correctAnswer: "Zivert",
		},
		{
			questionText: "Quyidagilardan qaysi biri ionlashtiruvchi nurlanish emas?",
			options: [
				"Ultrabinafsha",
				"Gamma",
				"Rentgen",
				"Beta",
			],
			correctAnswer: "Ultrabinafsha",
		},
		{
			questionText: "Rentgen apparatidagi kollimatorning vazifasi nima?",
			options: [
				"Nurlanish nurini yo‘naltirish va shakllantirish",
				"Dozani oshirish",
				"Tasnifni kuchaytirish",
				"Trubkani sovitish",
			],
			correctAnswer: "Nurlanish nurini yo‘naltirish va shakllantirish",
		},
		{
			questionText: "Nurlanishning asosiy xavfi nimada?",
			options: [
				"To‘qima va DNKga zarar yetkazish",
				"Vazn yo‘qotish",
				"Vaqtinchalik charchoq",
				"Qon shakarining tushishi",
			],
			correctAnswer: "To‘qima va DNKga zarar yetkazish",
		},
		{
			questionText: "Qaysi mutaxassislar shaxsiy dozimetr taqishlari shart?",
			options: [
				"Rentgenologiya xodimlari",
				"Tozalovchilar",
				"Barcha shifokorlar",
				"Ma’muriy hodimlar",
			],
			correctAnswer: "Rentgenologiya xodimlari",
		},
		{
			questionText: "Termolyuminestsentli dozimetr (TLD) nima uchun ishlatiladi?",
			options: [
				"Yig‘ilgan nurlanish dozasini o‘lchash uchun",
				"Qon bosimini o‘lchash uchun",
				"Yurak urishini nazorat qilish uchun",
				"Haroratni tekshirish uchun",
			],
			correctAnswer: "Yig‘ilgan nurlanish dozasini o‘lchash uchun",
		},
		{
			questionText: "Dozimetrlarni qanchalik tez-tez tekshirish kerak?",
			options: [
				"Har oyda",
				"Har yili",
				"Har kuni",
				"Har 5 yilda",
			],
			correctAnswer: "Har oyda",
		},
		{
			questionText: "Tibbiyot muassasalarida radiatsion xavfsizlikni kim nazorat qiladi?",
			options: [
				"Sanitariya-epidemiologiya xizmati",
				"Energetika vazirligi",
				"Ichki ishlar bo‘limi",
				"Moliya vazirligi",
			],
			correctAnswer: "Sanitariya-epidemiologiya xizmati",
		},
		{
			questionText: "Rentgen xonalarida ekranlashning asosiy maqsadi nima?",
			options: [
				"Xodimlar va bemorlarni tarqoq nurlanishdan himoya qilish",
				"Xonani bezash",
				"Tasnifni aniqlashtirish",
				"Elektr sarfini kamaytirish",
			],
			correctAnswer: "Xodimlar va bemorlarni tarqoq nurlanishdan himoya qilish",
		},
		{
			questionText: "Radiatsion ogohlantiruvchi belgilar qayerga osilishi kerak?",
			options: [
				"Rentgen xonasining kirish joyiga",
				"Hojatxonaga",
				"Bemor kartasiga",
				"Tibbiy asbob-uskunalarga",
			],
			correctAnswer: "Rentgen xonasining kirish joyiga",
		},
		{
			questionText: "Radyatsiya bolalarga kattalarga nisbatan qanday ta’sir qiladi?",
			options: [
				"Bolalar ko‘proq sezuvchan",
				"Hech qanday farq yo‘q",
				"Kattalar sezuvchanroq",
				"Faqat keksa odamlar ta’sir qiladi",
			],
			correctAnswer: "Bolalar ko‘proq sezuvchan",
		},
		{
			questionText: "Radiatsiyadan himoyalanishda qaysi materiallar ko‘p ishlatiladi?",
			options: [
				"Qo‘rg‘oshin va beton",
				"Yog‘och va plastmassa",
				"Shisha va po‘lat",
				"Mis va rezina",
			],
			correctAnswer: "Qo‘rg‘oshin va beton",
		},
		{
			questionText: "Qaysi omil nurlanish dozasiga ta’sir qilmaydi?",
			options: [
				"Soch rangi",
				"Manbadan masofa",
				"Ta’sir etish vaqti",
				"Himoya vositasi",
			],
			correctAnswer: "Soch rangi",
		},
		{
			questionText: "ALARA tamoyili nimani anglatadi?",
			options: [
				"Imkon qadar eng past daraja",
				"Doimo xonani tark etish",
				"O‘rtacha daraja va mantiqiy yondashuv",
				"Past darajadagi radiatsiyaga ruxsat berish",
			],
			correctAnswer: "Imkon qadar eng past daraja",
		},
		{
			questionText: "Dozimetrik karta nima?",
			options: [
				"Shaxsiy nurlanish yozuvi",
				"Shifoxona identifikatsion kartasi",
				"Bemor qabul kartasi",
				"Rentgen tasvir yorlig‘i",
			],
			correctAnswer: "Shaxsiy nurlanish yozuvi",
		},
		{
			questionText: "Qo‘rg‘oshin fartuk nima turdagi himoya vositasi hisoblanadi?",
			options: [
				"Shaxsiy himoya vositasi",
				"Mexanik vosita",
				"O‘lchov asbobi",
				"Dori vositasi",
			],
			correctAnswer: "Shaxsiy himoya vositasi",
		},
		{
			questionText: "Nega rentgenologiyada nazorat testlari muhim?",
			options: [
				"Radiatsion xavfsizlik talablariga rioya qilish uchun",
				"Xodimlarni band qilish uchun",
				"Elektr energiyasi to‘lovini oshirish uchun",
				"Ular muhim emas",
			],
			correctAnswer: "Radiatsion xavfsizlik talablariga rioya qilish uchun",
		},
		{
			questionText: "Tarqalgan nurlanish (scatter radiation) nima?",
			options: [
				"Asosiy nurdan chetga og‘gan nurlanish",
				"Asosiy yo‘naltirilgan nur",
				"Zararsiz yorug‘lik",
				"Tasvirdagi shovqin",
			],
			correctAnswer: "Asosiy nurdan chetga og‘gan nurlanish",
		},
		{
			questionText: "Agar dozimetr yo‘qolsa, nima qilish kerak?",
			options: [
				"Darhol xavfsizlik bo‘yicha mas’ulga xabar berish",
				"E’tibor bermaslik",
				"Shaxsiy mablag‘ga yangisini sotib olish",
				"Tekshiruvni kutish",
			],
			correctAnswer: "Darhol xavfsizlik bo‘yicha mas’ulga xabar berish",
		},
		{
			questionText: "Radiatsion xavfsizlik qoidalariga kim javobgar?",
			options: [
				"Radiologiya bo‘limining barcha xodimlari",
				"Faqat hamshiralar",
				"Faqat bemorlar",
				"Faqat bosh shifokor",
			],
			correctAnswer: "Radiologiya bo‘limining barcha xodimlari",
		},
		{
			questionText: "Radiatsion kundalik nima maqsadda yuritiladi?",
			options: [
				"Shaxsiy nurlanish va xavfsizlik choralarini kuzatish uchun",
				"Navbatchilik jadvalini yozish uchun",
				"Ta’tilni rejalashtirish uchun",
				"Bemor fikrlarini yozish uchun",
			],
			correctAnswer: "Shaxsiy nurlanish va xavfsizlik choralarini kuzatish uchun",
		},
],
}