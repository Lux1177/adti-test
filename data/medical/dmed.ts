import type { Question, Locale } from "~/types/quiz"

export const medicalDmedQuestions: Record<Locale, Question[]> = {
	en: [
			{
		questionText: "Which sections are available to an employee with the Director role?",
		options: [
			"Appointments/Analytics/Documents/Patients",
			"Inpatient/Hospitalization/Cash/Users",
			"Orders/Accounting/Warehouse/Settings",
			"All answers are correct",
		],
		correctAnswer: "All answers are correct",
	},
		{
			questionText: "Where can all journals be viewed?",
			options: [
				"Documents - Data entry for journals section",
				"Documents - Ministry of Health reports section",
				"Documents - Journals section",
				"This is not available in the system",
			],
			correctAnswer: "Documents - Journals section",
		},
		{
			questionText: "Can two accounts be created for one employee with the same role and specialty?",
			options: ["Yes, possible", "No, not possible"],
			correctAnswer: "No, not possible",
		},
		{
			questionText: "Which sections are available to a laboratory technician?",
			options: [
				"Orders/Tests/Templates",
				"Orders/Tests/Ref.groups",
				"Orders/Tests/Templates/Ref.groups",
				"Only Tests section",
			],
			correctAnswer: "Orders/Tests/Templates/Ref.groups",
		},
		{
			questionText: "Can a laboratory technician cancel a test?",
			options: ["Yes", "No"],
			correctAnswer: "Yes",
		},
		{
			questionText: "After entering test results, what must a lab technician do for the doctor and patient to see them?",
			options: [
				"Confirm the test",
				"Print the test",
				"Send the test to the doctor",
				"Send the test to the patient",
			],
			correctAnswer: "Confirm the test",
		},
		{
			questionText: "Can a lab technician change test results after confirmation?",
			options: ["Yes", "No"],
			correctAnswer: "No",
		},
		{
			questionText: "What is the correct sequence of actions for a lab technician?",
			options: [
				"Collect biomaterial - Finish collection - Confirm - Enter result",
				"Collect biomaterial - Finish collection - Enter result - Confirm",
				"Enter result - Collect biomaterial - Confirm",
				"Confirm - Collect biomaterial - Finish collection - Enter result",
			],
			correctAnswer: "Collect biomaterial - Finish collection - Enter result - Confirm",
		},
		{
			questionText: "Which sections are available to a nurse?",
			options: [
				"Appointments/Patients/Patronage/Inpatient",
				"Appointments/Patients/Patronage/Warehouse",
				"Appointments/Patients/Patronage",
				"Appointments/Patients/Patronage/Inpatient/Warehouse",
			],
			correctAnswer: "Appointments/Patients/Patronage/Inpatient/Warehouse",
		},
		{
			questionText: "Which mandatory fields must a nurse fill when conducting a physiotherapy course?",
			options: [
				"Specify date/duration",
				"Specify date/duration/procedure unit",
				"Specify date/time",
				"No correct answer",
			],
			correctAnswer: "Specify date/duration/procedure unit",
		},
		{
			questionText: "Which warehouse sections are available to a nurse?",
			options: [
				"Accounting/Consumption/Sterilization",
				"Accounting/Nomenclature/Sterilization",
				"Accounting/Nomenclature/Consumption",
				"Accounting/Consumption/Nomenclature/Sterilization",
			],
			correctAnswer: "Accounting/Consumption/Nomenclature/Sterilization",
		},
		{
			questionText: "Which sections are available to a statistician?",
			options: [
				"Patients",
				"Journals",
				"Documents",
				"All answers are correct",
			],
			correctAnswer: "All answers are correct",
		},
		{
			questionText: "What types of reports does the statistician generate?",
			options: [
				"Form 039 reports",
				"Ministry of Health reports",
				"Journal reports",
				"No correct answer",
			],
			correctAnswer: "Ministry of Health reports",
		},
		{
			questionText: "How many types of Ministry of Health reports exist?",
			options: [
				"25 MOH and 1 urgent report",
				"27 MOH and 1 urgent report",
				"28 MOH and 1 urgent report",
				"20 MOH and 1 urgent report",
			],
			correctAnswer: "28 MOH and 1 urgent report",
		},
		{
			questionText: "What check must a file pass before uploading to the system?",
			options: [
				"\"directory\" check",
				"\"LogKontr\" check",
				"\"Destroy\" check",
				"Check is not required",
			],
			correctAnswer: "\"LogKontr\" check",
		},
		{
			questionText: "Which sections are available to the pharmacist (warehouse manager)?",
			options: [
				"Warehouses/Accounting",
				"Warehouses/Directories",
				"Warehouses/Accounting/Directories",
				"No correct answer",
			],
			correctAnswer: "Warehouses/Accounting/Directories",
		},
		{
			questionText: "What mandatory fields must be filled when adding an item with unit of measurement to the nomenclature?",
			options: [
				"Type/name/country/form of release",
				"Manufacturer/container/form of release",
				"Quantity in form/unit/dosage",
				"All answers are correct",
			],
			correctAnswer: "All answers are correct",
		},
		{
			questionText: "What fields are mandatory when adding an item without unit of measurement to the nomenclature?",
			options: [
				"Type/name/country/manufacturer",
				"Type/name/country/manufacturer/container/quantity in form",
				"Type/name/country/manufacturer/unit",
				"Type/name/country/manufacturer/unit/dosage",
			],
			correctAnswer: "Type/name/country/manufacturer/container/quantity in form",
		},
		{
			questionText: "What mandatory fields must be filled when adding contracts?",
			options: [
				"Supplier name/contract number/contract duration",
				"Supplier name/contract number/phone number",
				"Supplier name/INN/account number",
				"Supplier name/INN/phone number",
			],
			correctAnswer: "Supplier name/contract number/contract duration",
		},
		{
			questionText: "In which section can you view the remaining stock of drugs in the warehouse?",
			options: [
				"Warehouses - Stock",
				"Accounting - Stock",
				"Directory - Stock",
				"This is not available in the system",
			],
			correctAnswer: "Warehouses - Stock",
		},
			{
			questionText: "How is the appointment registration done when a patient first visits a medical institution?",
			options: [
				"By passport data/birth certificate/FaceID",
				"By patient's full name/MedID",
				"By MedID",
				"By MyID",
			],
			correctAnswer: "By passport data/birth certificate/FaceID",
		},
		{
			questionText: "What information is required to book a follow-up appointment?",
			options: [
				"MedID/FaceID",
				"MedID/birth certificate/passport",
				"FaceID/MedID/patient's full name",
				"Passport/birth certificate",
			],
			correctAnswer: "FaceID/MedID/patient's full name",
		},
		{
			questionText: "How should the patient's photo be properly taken during the first visit?",
			options: [
				"Go to the MyID section and click 'Take photo of patient'",
				"Find the patient and click 'Update', then take a photo",
				"Find the patient and click 'Update photo'",
				"All answers are correct",
			],
			correctAnswer: "Find the patient and click 'Update photo'",
		},
		{
			questionText: "Which sections are available in the 'Manager' role?",
			options: [
				"Appointments/Documents/Patients/Inpatient",
				"Appointments/Documents/Patients/Inpatient/Cash/Orders/Settings",
				"Appointments/Inpatient/Cash/Orders/Settings",
				"Inpatient/Cash/Orders/Settings",
			],
			correctAnswer: "Appointments/Documents/Patients/Inpatient/Cash/Orders/Settings",
		},
		{
			questionText: "How are non-residents added to the system?",
			options: [
				"Without documents by providing full name/date of birth/gender",
				"Without documents by providing full name only",
				"By passport data",
				"This is not possible",
			],
			correctAnswer: "Without documents by providing full name/date of birth/gender",
		},
		{
			questionText: "How is the search for non-residents conducted?",
			options: [
				"By passport data",
				"By full name or medical card",
				"By MyID",
				"No correct answer",
			],
			correctAnswer: "By full name or medical card",
		},
		{
			questionText: "What statuses are available in the Active Appointments section?",
			options: [
				"Invited/In consultation",
				"Invited/In consultation/In queue",
				"In queue/In consultation",
				"Completed/Cancelled",
			],
			correctAnswer: "Invited/In consultation/In queue",
		},
		{
			questionText: "What is the difference between a reimbursement prescription and a regular prescription?",
			options: [
				"Patients get regular prescriptions for free, but pay for reimbursement prescriptions themselves",
				"Both are free through the Insurance Fund",
				"Reimbursement prescriptions are covered by the Insurance Fund; patients pay for regular prescriptions",
				"No correct answer",
			],
			correctAnswer: "Reimbursement prescriptions are covered by the Insurance Fund; patients pay for regular prescriptions",
		},
		{
			questionText: "Can medicines from the medical institution's warehouse be added to a treatment course?",
			options: ["Yes", "No"],
			correctAnswer: "Yes",
		},
		{
			questionText: "Where can doctors create their own examination templates?",
			options: [
				"Settings - Profile section",
				"Settings - Examination headers section",
				"Settings - Examination templates section",
				"This is not possible",
			],
			correctAnswer: "Settings - Examination templates section",
		},
		{
			questionText: "How are supplies for free prescriptions used from the medical institution's pharmacy?",
			options: [
				"Click 'Edit billing' in the patient's profile",
				"In the appointment episode under 'Patient consumption'",
				"This is not possible in the system",
			],
			correctAnswer: "In the appointment episode under 'Patient consumption'",
		},
		{
			questionText: "What information can be viewed in the patient's profile?",
			options: [
				"Personal info/passport/address/other",
				"Work info/contact/documents",
				"Attachment/surveys/relatives/death info",
				"All answers are correct",
			],
			correctAnswer: "All answers are correct",
		},
		{
			questionText: "Can a doctor view the patient's examination history?",
			options: [
				"Yes, in the patient's medical card under 'Current examination'",
				"Yes, in the medical card under 'Diagnostics'",
				"Yes, in the medical card under 'Examinations'",
				"No, cannot view",
			],
			correctAnswer: "Yes, in the medical card under 'Examinations'",
		},
		{
			questionText: "Can a doctor view the history of test results?",
			options: [
				"Yes, in the medical card under 'Tests'",
				"Yes, in the medical card under 'Diagnostics'",
				"Yes, in the medical card under 'Examinations'",
				"No, cannot view",
			],
			correctAnswer: "Yes, in the medical card under 'Tests'",
		},
		{
			questionText: "Can a doctor continue an episode created by another doctor?",
			options: [
				"Yes, possible",
				"No, only a new episode can be created",
			],
			correctAnswer: "Yes, possible",
		},
		{
			questionText: "Which doctors can write reimbursement prescriptions?",
			options: [
				"Family doctors",
				"Specialists",
				"All doctors",
			],
			correctAnswer: "All doctors",
		},
		{
			questionText: "Which doctors can write regular prescriptions?",
			options: [
				"Family doctors",
				"Specialists",
				"All doctors",
			],
			correctAnswer: "All doctors",
		},
		{
			questionText: "What should a doctor do if the reimbursement button is inactive when writing a prescription?",
			options: [
				"Set the appropriate D-account",
				"Enter a diagnosis according to ICD-10",
				"Select the privileged category",
			],
			correctAnswer: "Select the privileged category",
		},
		{
			questionText: "What steps are needed to add a patient to the patronage plan?",
			options: [
				"Go to Patronage-Planning, find the patient, select nurse, specify goal, mark",
				"Go to Patronage-Planned, find the patient, select nurse, mark",
				"Go to Patronage-Planning, find the patient, select patronage nurse, specify goal, mark",
				"Go to Patronage-Planned, find the patient, select patronage nurse, specify goal, mark",
			],
			correctAnswer: "Go to Patronage-Planning, find the patient, select nurse, specify goal, mark",
		},
		{
			questionText: "What health groups can a patient be assigned to?",
			options: [
				"Group I-II",
				"Group I-II-III",
				"Group I-II-III-IV",
				"No correct answer",
			],
			correctAnswer: "Group I-II-III-IV",
		},
		{
			questionText: "What analytical data is available to the director?",
			options: [
				"Appointments/Attached population",
				"Appointments/Attached population/Referrals/Inpatient",
				"Attached population/Referrals/Inpatient",
				"Appointments/Referrals/Inpatient",
			],
			correctAnswer: "Appointments/Attached population/Referrals/Inpatient",
		},
		{
			questionText: "How is a new user added to the system?",
			options: [
				"In the Accounting section",
				"In Users/Doctors section",
				"In Users/Staff section",
				"Staff are added automatically",
			],
			correctAnswer: "In Users/Staff section",
		},
		{
			questionText: "Where can confirmed hospitalizations of patients be viewed?",
			options: [
				"In Hospitalization - Confirmed section",
				"In Hospitalization - In process section",
				"In Hospitalization - Created section",
				"In Hospitalization - Approved section",
			],
			correctAnswer: "In Hospitalization - Confirmed section",
		},
],
	ru: [
		{
			questionText: "Какие разделы доступны сотруднику с ролью Директор?",
			options: [
				"Приёмы/Аналитика/Документы/Пациенты",
				"Стационар/Госпитализация/Касса/Пользователи",
				"Заказы/Бухгалтерия/Склад/Настройки",
				"Все ответы верны",
			],
			correctAnswer: "Все ответы верны",
		},
		{
			questionText: "В каком разделе можно просматривать все журналы?",
			options: [
				"Документы – Ввод данных для журналов",
				"Документы – Отчёты МЗ",
				"Документы – Журналы",
				"В системе такой возможности нет",
			],
			correctAnswer: "Документы – Журналы",
		},
		{
			questionText: "Можно ли создать два аккаунта с одной ролью и специальностью для одного сотрудника?",
			options: ["Да, можно", "Нет, нельзя"],
			correctAnswer: "Нет, нельзя",
		},
		{
			questionText: "Какие разделы доступны лаборанту?",
			options: [
				"Заказы/Анализы/Шаблоны",
				"Заказы/Анализы/Справ.группы",
				"Заказы/Анализы/Шаблоны/Справ.группы",
				"Только раздел Анализы",
			],
			correctAnswer: "Заказы/Анализы/Шаблоны/Справ.группы",
		},
		{
			questionText: "Может ли лаборант отменить анализ?",
			options: ["Да", "Нет"],
			correctAnswer: "Да",
		},
		{
			questionText: "Что должен сделать лаборант после ввода результатов, чтобы врач и пациент могли их видеть?",
			options: [
				"Подтвердить анализ",
				"Распечатать анализ",
				"Отправить анализ врачу",
				"Отправить анализ пациенту",
			],
			correctAnswer: "Подтвердить анализ",
		},
		{
			questionText: "Может ли лаборант изменить результаты анализа после подтверждения?",
			options: ["Да", "Нет"],
			correctAnswer: "Нет",
		},
		{
			questionText: "Укажите правильную последовательность действий лаборанта:",
			options: [
				"Забор материала – Завершить забор – Подтвердить – Ввести результат",
				"Забор материала – Завершить забор – Ввести результат – Подтвердить",
				"Ввести результат – Забор материала – Подтвердить",
				"Подтвердить – Забор материала – Завершить забор – Ввести результат",
			],
			correctAnswer: "Забор материала – Завершить забор – Ввести результат – Подтвердить",
		},
		{
			questionText: "Какие разделы доступны медсестре?",
			options: [
				"Приёмы/Пациенты/Патронаж/Стационар",
				"Приёмы/Пациенты/Патронаж/Склад",
				"Приёмы/Пациенты/Патронаж",
				"Приёмы/Пациенты/Патронаж/Стационар/Склад",
			],
			correctAnswer: "Приёмы/Пациенты/Патронаж/Стационар/Склад",
		},
		{
			questionText: "Какие обязательные поля должна заполнить медсестра при проведении курса физиотерапии?",
			options: [
				"Указать дату/продолжительность",
				"Указать дату/продолжительность/единицу процедуры",
				"Указать дату/время",
				"Нет правильного ответа",
			],
			correctAnswer: "Указать дату/продолжительность/единицу процедуры",
		},
		{
			questionText: "Какие складские разделы доступны медсестре?",
			options: [
				"Учёт/Расход/Стерилизация",
				"Учёт/Номенклатура/Стерилизация",
				"Учёт/Номенклатура/Расход",
				"Учёт/Расход/Номенклатура/Стерилизация",
			],
			correctAnswer: "Учёт/Расход/Номенклатура/Стерилизация",
		},
		{
			questionText: "Какие разделы доступны статисту?",
			options: [
				"Пациенты",
				"Журналы",
				"Документы",
				"Все ответы верны",
			],
			correctAnswer: "Все ответы верны",
		},
		{
			questionText: "Какие виды отчётов формирует статист?",
			options: [
				"Отчёты по форме 039",
				"Отчёты Министерства здравоохранения (МЗ)",
				"Отчёты по журналам",
				"Нет правильного ответа",
			],
			correctAnswer: "Отчёты Министерства здравоохранения (МЗ)",
		},
		{
			questionText: "Сколько видов отчётов Министерства здравоохранения существует?",
			options: [
				"25 отчётов МЗ и 1 срочный",
				"27 отчётов МЗ и 1 срочный",
				"28 отчётов МЗ и 1 срочный",
				"20 отчётов МЗ и 1 срочный",
			],
			correctAnswer: "28 отчётов МЗ и 1 срочный",
		},
		{
			questionText: "Какую проверку должен пройти файл перед загрузкой в систему?",
			options: [
				"Проверка \"directory\"",
				"Проверка \"LogKontr\"",
				"Проверка \"Destroy\"",
				"Проверка не обязательна",
			],
			correctAnswer: "Проверка \"LogKontr\"",
		},
		{
			questionText: "Какие разделы доступны провизору (заведующему складом)?",
			options: [
				"Склады/Учёт",
				"Склады/Справочники",
				"Склады/Учёт/Справочники",
				"Нет правильного ответа",
			],
			correctAnswer: "Склады/Учёт/Справочники",
		},
		{
			questionText: "Какие обязательные поля нужно заполнить при добавлении товара с единицей измерения в номенклатуру?",
			options: [
				"Тип/наименование/страна/форма выпуска",
				"Производитель/упаковка/форма выпуска",
				"Количество в форме/единица/дозировка",
				"Все ответы верны",
			],
			correctAnswer: "Все ответы верны",
		},
		{
			questionText: "Какие поля обязательны при добавлении товара без единицы измерения в номенклатуру?",
			options: [
				"Тип/наименование/страна/производитель",
				"Тип/наименование/страна/производитель/упаковка/кол-во в форме выпуска",
				"Тип/наименование/страна/производитель/единица измерения",
				"Тип/наименование/страна/производитель/единица измерения/дозировка",
			],
			correctAnswer: "Тип/наименование/страна/производитель/упаковка/кол-во в форме выпуска",
		},
		{
			questionText: "Какие обязательные поля нужно заполнить при добавлении договора?",
			options: [
				"Название поставщика/номер договора/срок действия",
				"Название поставщика/номер договора/телефон",
				"Название поставщика/ИНН/счёт",
				"Название поставщика/ИНН/телефон",
			],
			correctAnswer: "Название поставщика/номер договора/срок действия",
		},
		{
			questionText: "В каком разделе можно просматривать остатки препаратов на складе?",
			options: [
				"Склады – Остаток",
				"Учёт – Остаток",
				"Справочники – Остаток",
				"Такой возможности в системе нет",
			],
			correctAnswer: "Склады – Остаток",
		},
			{
			questionText: "Как осуществляется запись на приём при первом обращении пациента в медицинское учреждение?",
			options: [
				"По паспортным данным/свидетельству о рождении/FaceID",
				"По ФИО пациента/MedID",
				"По MedID",
				"По MyID",
			],
			correctAnswer: "По паспортным данным/свидетельству о рождении/FaceID",
		},
		{
			questionText: "Какая информация требуется для записи на повторный приём?",
			options: [
				"MedID/FaceID",
				"MedID/свидетельство о рождении/паспорт",
				"FaceID/MedID/ФИО пациента",
				"Паспорт/свидетельство о рождении",
			],
			correctAnswer: "FaceID/MedID/ФИО пациента",
		},
		{
			questionText: "Как правильно сделать фото пациента при первом визите?",
			options: [
				"Зайти в раздел MyID и нажать кнопку \"Сделать фото пациента\"",
				"Найти пациента, нажать кнопку \"Обновить\", затем сделать фото",
				"Найти пациента и нажать кнопку \"Обновить фото\"",
				"Все ответы верны",
			],
			correctAnswer: "Найти пациента и нажать кнопку \"Обновить фото\"",
		},
		{
			questionText: "Какие разделы доступны в роли \"Менеджер\"?",
			options: [
				"Приёмы/Документы/Пациенты/Стационар",
				"Приёмы/Документы/Пациенты/Стационар/Касса/Заказы/Настройки",
				"Приёмы/Стационар/Касса/Заказы/Настройки",
				"Стационар/Касса/Заказы/Настройки",
			],
			correctAnswer: "Приёмы/Документы/Пациенты/Стационар/Касса/Заказы/Настройки",
		},
		{
			questionText: "Как добавить нерезидента в систему?",
			options: [
				"Без документов, указав ФИО/дату рождения/пол",
				"Без документов, указав только ФИО",
				"По паспортным данным",
				"Такой возможности нет",
			],
			correctAnswer: "Без документов, указав ФИО/дату рождения/пол",
		},
		{
			questionText: "Как осуществляется поиск нерезидента?",
			options: [
				"По паспортным данным",
				"По ФИО или медкарте",
				"По MyID",
				"Нет правильного ответа",
			],
			correctAnswer: "По ФИО или медкарте",
		},
		{
			questionText: "Какие статусы доступны в разделе \"Активные приёмы\"?",
			options: [
				"Приглашён/На приёме",
				"Приглашён/На приёме/В очереди",
				"В очереди/На приёме",
				"Завершён/Отменён",
			],
			correctAnswer: "Приглашён/На приёме/В очереди",
		},
		{
			questionText: "В чём разница между рецептом на компенсацию и обычным рецептом?",
			options: [
				"Обычные рецепты пациент получает бесплатно, а за компенсационные платит сам",
				"Оба рецепта предоставляются бесплатно за счёт страхового фонда",
				"Компенсационные рецепты покрываются страховым фондом, за обычные пациент платит сам",
				"Нет правильного ответа",
			],
			correctAnswer: "Компенсационные рецепты покрываются страховым фондом, за обычные пациент платит сам",
		},
		{
			questionText: "Можно ли добавить лекарства со склада медучреждения в курс лечения?",
			options: ["Да", "Нет"],
			correctAnswer: "Да",
		},
		{
			questionText: "В каком разделе врач может создать шаблоны осмотров?",
			options: [
				"Настройки - Профиль",
				"Настройки - Заголовки осмотров",
				"Настройки - Шаблоны осмотров",
				"Такой возможности нет",
			],
			correctAnswer: "Настройки - Шаблоны осмотров",
		},
		{
			questionText: "Как использовать расходные материалы по бесплатным рецептам из аптеки медучреждения?",
			options: [
				"В профиле пациента нажать \"Изменить счёт\"",
				"В эпизоде обращения — в разделе \"Расход для пациента\"",
				"Такой возможности в системе нет",
			],
			correctAnswer: "В эпизоде обращения — в разделе \"Расход для пациента\"",
		},
		{
			questionText: "Какие данные можно увидеть в профиле пациента?",
			options: [
				"Личные данные/паспорт/адрес/другое",
				"Информация о работе/контакты/документы",
				"Прикрепление/анкеты/родственники/сведения о смерти",
				"Все ответы верны",
			],
			correctAnswer: "Все ответы верны",
		},
		{
			questionText: "Может ли врач просматривать историю осмотров пациента?",
			options: [
				"Да, в медкарте пациента в разделе \"Текущий осмотр\"",
				"Да, в медкарте пациента в разделе \"Диагностика\"",
				"Да, в медкарте пациента в разделе \"Осмотры\"",
				"Нет, не может",
			],
			correctAnswer: "Да, в медкарте пациента в разделе \"Осмотры\"",
		},
		{
			questionText: "Может ли врач просматривать историю анализов пациента?",
			options: [
				"Да, в медкарте пациента в разделе \"Анализы\"",
				"Да, в медкарте пациента в разделе \"Диагностика\"",
				"Да, в медкарте пациента в разделе \"Осмотры\"",
				"Нет, не может",
			],
			correctAnswer: "Да, в медкарте пациента в разделе \"Анализы\"",
		},
		{
			questionText: "Может ли один врач продолжить эпизод, созданный другим врачом?",
			options: [
				"Да, может",
				"Нет, можно только создать новый эпизод",
			],
			correctAnswer: "Да, может",
		},
		{
			questionText: "Какие врачи могут выписывать компенсационные рецепты?",
			options: [
				"Семейные врачи",
				"Узкие специалисты",
				"Все врачи",
			],
			correctAnswer: "Все врачи",
		},
		{
			questionText: "Какие врачи могут выписывать обычные рецепты?",
			options: [
				"Семейные врачи",
				"Узкие специалисты",
				"Все врачи",
			],
			correctAnswer: "Все врачи",
		},
		{
			questionText: "Что должен сделать врач, если кнопка \"Компенсация\" не активна при выписке рецепта?",
			options: [
				"Указать нужный D-счёт",
				"Указать диагноз по МКБ-10",
				"Выбрать льготную категорию",
			],
			correctAnswer: "Выбрать льготную категорию",
		},
		{
			questionText: "Что нужно сделать, чтобы добавить пациента в план патронажа?",
			options: [
				"Зайти в Патронаж - Планирование, найти пациента, выбрать медсестру, указать цель, поставить отметку",
				"Зайти в Патронаж - Запланировано, найти пациента, выбрать медсестру, поставить отметку",
				"Зайти в Патронаж - Планирование, найти пациента, выбрать патронажную медсестру, указать цель, поставить отметку",
				"Зайти в Патронаж - Запланировано, найти пациента, выбрать патронажную медсестру, указать цель, поставить отметку",
			],
			correctAnswer: "Зайти в Патронаж - Планирование, найти пациента, выбрать медсестру, указать цель, поставить отметку",
		},
		{
			questionText: "В какие группы здоровья можно отнести пациента?",
			options: [
				"I-II группы",
				"I-II-III группы",
				"I-II-III-IV группы",
				"Нет правильного ответа",
			],
			correctAnswer: "I-II-III-IV группы",
		},
		{
			questionText: "Какая аналитическая информация доступна директору?",
			options: [
				"Приёмы/Прикреплённое население",
				"Приёмы/Прикреплённое население/Направления/Стационар",
				"Прикреплённое население/Направления/Стационар",
				"Приёмы/Направления/Стационар",
			],
			correctAnswer: "Приёмы/Прикреплённое население/Направления/Стационар",
		},
		{
			questionText: "Как добавить нового пользователя в систему?",
			options: [
				"В разделе Бухгалтерия",
				"В разделе Пользователи/Врачи",
				"В разделе Пользователи/Сотрудники",
				"Сотрудники добавляются автоматически",
			],
			correctAnswer: "В разделе Пользователи/Сотрудники",
		},
		{
			questionText: "Где можно просмотреть подтверждённые госпитализации пациентов?",
			options: [
				"Госпитализация - Подтверждённые",
				"Госпитализация - В процессе",
				"Госпитализация - Созданные",
				"Госпитализация - Одобренные",
			],
			correctAnswer: "Госпитализация - Подтверждённые",
		},
],
	uz: [
			{
			questionText: "Bemor birinchi marta Tibbiyot muassasiga murojaat qilganda qabul uchun yozilish qanday amalga oshiriladi?",
			options: [
				"Pasport ma'lumotlari/metirka/ FaceID bo'yicha",
				"Bemorning FIO/MedId bo'yicha",
				"MedID bo'yicha",
				"Myid bo'yicha",
			],
			correctAnswer: "Pasport ma'lumotlari/metirka/ FaceID bo'yicha",
		},
		{
			questionText: "Takroriy qabulga yozilish uchun qanday ma'lumotlar talab qilinadi?",
			options: [
				"MedID/FaceID",
				"MedId/metirika/pasport",
				"FaceID/MedID/bemorning FIO",
				"Pasport/metrika",
			],
			correctAnswer: "FaceID/MedID/bemorning FIO",
		},
		{
			questionText: "Birinchi tashrif paytida bemorning fotosuratini qanday to'g'ri chiqarish kerak?",
			options: [
				"MyId bo'limiga o'tib \"bemorni suratga olish\" tugmasini bosish",
				"Bemorni topib \"yangilash\" tugmasini bosib, keyin bemorni suratga olish",
				"Bemorni topib \"fotoni yangilash\" tugmasini bosish",
				"Barcha javoblar to'g'ri",
			],
			correctAnswer: "Bemorni topib \"fotoni yangilash\" tugmasini bosish",
		},
		{
			questionText: "\"Menejer\" rolida qanday bo'limlar mavjud?",
			options: [
				"Qabullar/hujjatlar/bemorlar/statsionar",
				"Qabullar/hujjatlar/bemorlar/statsionar/kassa/buyurtmalar/sozlamalar",
				"Qabullar/statsionar/kassa/buyurtmalar/sozlamalar",
				"Statsionar/kassa/buyurtmalar/sozlamalar",
			],
			correctAnswer: "Qabullar/hujjatlar/bemorlar/statsionar/kassa/buyurtmalar/sozlamalar",
		},
		{
			questionText: "Norezidentlar tizimga qanday qo'shiladi?",
			options: [
				"Hujjatlarsiz FIO/tug'ilgan sana/jinsni ko'rsatib",
				"Hujjatlarsiz faqat FIOni ko'rsatib",
				"Pasport ma'lumotlari bo'yicha",
				"Bunday imkoniyat yo'q",
			],
			correctAnswer: "Hujjatlarsiz FIO/tug'ilgan sana/jinsni ko'rsatib",
		},
		{
			questionText: "Norezident qidiruvi qanday amalga oshiriladi?",
			options: [
				"Pasport ma'lumotlari bo'yicha",
				"FIO yoki medkarta bo'yicha",
				"Myid bo'yicha",
				"To'g'ri javob yo'q",
			],
			correctAnswer: "FIO yoki medkarta bo'yicha",
		},
		{
			questionText: "Qabullar-Faol (Aktiv) bo'limida bemorlarning qanday statuslari mavjud?",
			options: [
				"Taklif qilingan/qabulda",
				"Taklif qilingan/qabulda/navbatda",
				"Navbatda/qabulda",
				"Tugatilgan/bekor qilingan",
			],
			correctAnswer: "Taklif qilingan/qabulda/navbatda",
		},
		{
			questionText: "Kompensatsiya (reimbursatsiya) retsepti bilan oddiy retsept o'rtasidagi farq nimada?",
			options: [
				"Oddiy retseptlarni bemor bepul oladi, kompensatsiya retseptlarini o'z hisobidan sotib oladi",
				"Ikkala retseptni ham bemor Sug'urta fondi hisobidan bepul asosda oladi",
				"Kompensatsiya retseptlari Sug'urta Jamg‘arma hisobidan qoplanadi, oddiy retseptlarni bemor o'z hisobidan sotib oladi.",
				"To'g'ri javob yo'q",
			],
			correctAnswer: "Kompensatsiya retseptlari Sug'urta Jamg‘arma hisobidan qoplanadi, oddiy retseptlarni bemor o'z hisobidan sotib oladi.",
		},
		{
			questionText: "Tibbiyot muassasasi omboridan dori vositalarini davolash kursiga qo'shish mumkinmi?",
			options: ["Ha", "Yo'q"],
			correctAnswer: "Ha",
		},
		{
			questionText: "Shifokor qaysi bo'limda o'ziga ko'rik shablonlarini yarata oladi?",
			options: [
				"Sozlamalar - profil bo'limida",
				"Sozlamalar - ko'riklar sarlavhasi bo'limida",
				"Sozlamalar - ko'rik shablonlari bo'limida",
				"Bunday imkoniyat yo'q",
			],
			correctAnswer: "Sozlamalar - ko'rik shablonlari bo'limida",
		},
		{
			questionText: "Tibbiyot muassasasi dorixonasidan bepul retseptlar bo'yicha sarflanadigan vositalar qanday ishlatiladi?",
			options: [
				"Bemorning profilida \"hisoblarni o'zgartirish\"ga bosib",
				"Murojaat epizodida \"bemor uchun sarf\" bo'limida",
				"Tizimda bunday imkoniyat yo'q",
			],
			correctAnswer: "Murojaat epizodida \"bemor uchun sarf\" bo'limida",
		},
		{
			questionText: "Bemorning profilida qanday ma'lumotlarni ko'rish mumkin?",
			options: [
				"Shaxsiy ma'lumotlar/pasport ma'lumotlari/manzil/boshqa",
				"Ish haqida/aloqa ma'lumotlari/hujjatlar",
				"Biriktirish/so'rovnomalar/qarindoshlar/o'lim haqida ma'lumot",
				"Barcha javoblar to'g'ri",
			],
			correctAnswer: "Barcha javoblar to'g'ri",
		},
		{
			questionText: "Shifokor bemorning ko'riklar tarixini ko'ra oladimi?",
			options: [
				"Ha, bemorning Medkartasida \"joriy ko'rik\" bo'limida",
				"Ha, bemorning Medkartasida \"Diagnostika\" bo'limida",
				"Ha, bemorning Medkartasida \"Ko'riklar\" bo'limida",
				"Yo'q, ko'ra olmaydi",
			],
			correctAnswer: "Ha, bemorning Medkartasida \"Ko'riklar\" bo'limida",
		},
		{
			questionText: "Shifokor tahlillar natijalarining tarixini ko'ra oladimi?",
			options: [
				"Ha, bemorning Medkartasida \"tahlillar\" bo'limida",
				"Ha, bemorning Medkartasida \"Diagnostika\" bo'limida",
				"Ha, bemorning Medkartasida \"Ko'riklar\" bo'limida",
				"Yo'q, ko'ra olmaydi",
			],
			correctAnswer: "Ha, bemorning Medkartasida \"tahlillar\" bo'limida",
		},
		{
			questionText: "Shifokor boshqa shifokor yaratgan murojaat epizodini davom ettira oladimi?",
			options: [
				"Ha, mumkin",
				"Yo'q, faqat yangi murojaat epizodini yarata oladi",
			],
			correctAnswer: "Ha, mumkin",
		},
		{
			questionText: "Shifokorlarning qaysilari kompensatsiya (reimbursatsiya) retseptlarini yoza oladi?",
			options: ["Oila shifokorlari", "Tor mutaxassislar", "Barcha shifokorlar"],
			correctAnswer: "Barcha shifokorlar",
		},
		{
			questionText: "Shifokorlarning qaysilari oddiy retseptlarni yoza oladi?",
			options: ["Oila shifokorlari", "Tor mutaxassislar", "Barcha shifokorlar"],
			correctAnswer: "Barcha shifokorlar",
		},
		{
			questionText: "Retsept yozishda kompensatsiya (reimbursatsiya) tugmasi faol bo'lmasa, shifokor nima qilishi kerak?",
			options: [
				"Kerakli D-hisobni qo'yish",
				"MKB-10 bo'yicha tashxis qo'yish",
				"Imtiyozli toifani ko'rsatish",
			],
			correctAnswer: "Imtiyozli toifani ko'rsatish",
		},
		{
			questionText: "Bemorni patronaj rejasiga qo'shish uchun qanday harakatlar qilish kerak?",
			options: [
				"Patronaj-Rejalashtirish bo'limida bemorni topib, amaliyotchi hamshirani tanlash, patronaj maqsadini ko'rsatish, belgi qo'yish",
				"Patronaj-Rejalashtirilgan bo'limida bemorni topib, amaliyotchi hamshirani tanlash, belgi qo'yish",
				"Patronaj-Rejalashtirish bo'limida bemorni topib, patronaj hamshirasini tanlash, patronaj maqsadini ko'rsatish, belgi qo'yish",
				"Patronaj-Rejalashtirilgan bo'limida bemorni topib, patronaj hamshirasini tanlash, patronaj maqsadini ko'rsatish, belgi qo'yish",
			],
			correctAnswer: "Patronaj-Rejalashtirish bo'limida bemorni topib, amaliyotchi hamshirani tanlash, patronaj maqsadini ko'rsatish, belgi qo'yish",
		},
		{
			questionText: "Bemorni qanday sog'liq guruhlariga qo'yish mumkin?",
			options: [
				"I-II guruh",
				"I-II-III guruhlar",
				"I-II-III-IV guruhlar",
				"To'g'ri javob yo'q",
			],
			correctAnswer: "I-II-III-IV guruhlar",
		},
		{
			questionText: "Direktor uchun qanday analitik ma'lumotlar mavjud?",
			options: [
				"Qabullar/biriktirilgan aholi",
				"Qabullar/biriktirilgan aholi/yo'nalishlar/statsionar",
				"Biriktirilgan aholi/yo'nalishlar/statsionar",
				"Qabullar/yo'nalishlar/statsionar",
			],
			correctAnswer: "Qabullar/biriktirilgan aholi/yo'nalishlar/statsionar",
		},
		{
			questionText: "Tizimga yangi foydalanuvchi qanday qo'shiladi?",
			options: [
				"Buxgalteriya bo'limida",
				"Foydalanuvchilar/shifokorlar bo'limida",
				"Foydalanuvchilar/xodimlar bo'limida",
				"Xodimlar tizimga avtomatik qo'shiladi",
			],
			correctAnswer: "Foydalanuvchilar/xodimlar bo'limida",
		},
		{
			questionText: "Bemorlarning tasdiqlangan gospitalizatsiyalarini qanday ko'rish mumkin?",
			options: [
				"Gospitalizatsiya - tasdiqlangan bo'limida",
				"Gospitalizatsiya - jarayonda bo'limida",
				"Gospitalizatsiya - yaratilgan bo'limida",
				"Gospitalizatsiya - ma'qullangan bo'limida",
			],
			correctAnswer: "Gospitalizatsiya - tasdiqlangan bo'limida",
		},
		{
			questionText: "Direktor rolidagi xodimga qanday bo'limlar ochiq?",
			options: [
				"Qabullar/analitika/hujjatlar/bemorlar",
				"Statsionar/gospitalizatsiya/kassa/foydalanuvchilar",
				"Buyurtmalar/buxgalteriya/ombor/sozlamalar",
				"Barcha javoblar to'g'ri",
			],
			correctAnswer: "Barcha javoblar to'g'ri",
		},
		{
			questionText: "Barcha jurnallarni qaysi bo'limda ko'rish mumkin?",
			options: [
				"Hujjatlar - jurnallar uchun ma'lumot kirish bo'limida",
				"Hujjatlar - SSV hisobotlari bo'limida",
				"Hujjatlar - jurnallar bo'limida",
				"Tizimda bunday imkoniyat yo'q",
			],
			correctAnswer: "Hujjatlar - jurnallar bo'limida",
		},
		{
			questionText: "Bir xodim uchun bir xil rol va mutaxassislik bilan ikkita hisob yaratish mumkinmi?",
			options: ["Ha, mumkin", "Yo'q, mumkin emas"],
			correctAnswer: "Yo'q, mumkin emas",
		},
		{
			questionText: "Laborantga qanday bo'limlar ochiq?",
			options: [
				"Buyurtmalar/tahlillar/shablonlar",
				"Buyurtmalar/tahlillar/ref.guruhlar",
				"Buyurtmalar/tahlillar/shablonlar/ref.guruhlar",
				"Faqat tahlillar bo'limi",
			],
			correctAnswer: "Buyurtmalar/tahlillar/shablonlar/ref.guruhlar",
		},
		{
			questionText: "Laborant tahlilni bekor qila oladimi?",
			options: ["Ha", "Yo'q"],
			correctAnswer: "Ha",
		},
		{
			questionText: "Laborant tizimga tahlil natijalarini kiritgandan so'ng, shifokor va bemor natijalarni ko'rishlari uchun nima qilishi kerak?",
			options: [
				"Tahlilni tasdiqlash",
				"Tahlilni chop etish",
				"Tahlilni shifokorga yuborish",
				"Tahlilni bemorga yuborish",
			],
			correctAnswer: "Tahlilni tasdiqlash",
		},
		{
			questionText: "Laborant tasdiqlagandan so'ng tahlil natijalarini o'zgartira oladimi?",
			options: ["Ha", "Yo'q"],
			correctAnswer: "Yo'q",
		},
		{
			questionText: "Laborantning harakat tartibini ko'rsating",
			options: [
				"Biomaterial olish - olishni tugatish - tasdiqlash - natijani kiritish",
				"Biomaterial olish - olishni tugatish - natijani kiritish - tasdiqlash",
				"Natijani kiritish - biomaterial olish - tasdiqlash",
				"Tasdiqlash - biomaterial olish - olishni tugatish - natijani kiritish",
			],
			correctAnswer: "Biomaterial olish - olishni tugatish - natijani kiritish - tasdiqlash",
		},
		{
			questionText: "Hamshiraga qanday bo'limlar ochiq?",
			options: [
				"Qabullar/bemorlar/patronaj/statsionar",
				"Qabullar/bemorlar/patronaj/ombor",
				"Qabullar/bemorlar/patronaj",
				"Qabullar/bemorlar/patronaj/statsionar/ombor",
			],
			correctAnswer: "Qabullar/bemorlar/patronaj/statsionar/ombor",
		},
		{
			questionText: "Fizioterapiya kursini o'tkazishda hamshira qanday majburiy maydonlarni to'ldirishi kerak?",
			options: [
				"Sana/davomiylikni ko'rsatish",
				"Sana/davomiylik/protsedura birligini ko'rsatish",
				"Sana/vaqtni ko'rsatish",
				"To'g'ri javob yo'q",
			],
			correctAnswer: "Sana/davomiylik/protsedura birligini ko'rsatish",
		},
		{
			questionText: "Ombordan hamshiraga qanday bo'limlar ochiq?",
			options: [
				"Hisob/sarf/sterilizatsiya",
				"Hisob/nomenklatura/sterilizatsiya",
				"Hisob/nomenklatura/sarf",
				"Hisob/sarf/nomenklatura/sterilizatsiya",
			],
			correctAnswer: "Hisob/sarf/nomenklatura/sterilizatsiya",
		},
		{
			questionText: "Statistga qanday bo'limlar ochiq?",
			options: [
				"Bemorlar",
				"Jurnallar",
				"Hujjatlar",
				"Barcha javoblar to'g'ri",
			],
			correctAnswer: "Barcha javoblar to'g'ri",
		},
		{
			questionText: "Statist qanday hisobot turlarini shakllantiradi?",
			options: [
				"039 shaklidagi hisobotlar",
				"SSV hisobotlari",
				"Jurnallar hisobotlari",
				"To'g'ri javob yo'q",
			],
			correctAnswer: "SSV hisobotlari",
		},
		{
			questionText: "SSV hisobotlarining necha turi mavjud?",
			options: [
				"25 SSV va 1 tezkor hisobot",
				"27 SSV va 1 tezkor hisobot",
				"28 SSV va 1 tezkor hisobot",
				"20 SSV va 1 tezkor hisobot",
			],
			correctAnswer: "28 SSV va 1 tezkor hisobot",
		},
		{
			questionText: "Fayl tizimga yuklashdan oldin qanday tekshiruvdan o'tishi kerak?",
			options: [
				"\"directory\" tekshiruvi",
				"\"LogKontr\" tekshiruvi",
				"\"Destroy\" tekshiruvi",
				"Tekshiruv o'tkazish majburiy emas",
			],
			correctAnswer: "\"LogKontr\" tekshiruvi",
		},
		{
			questionText: "Provizor (ombor mudiri)ga qanday bo'limlar ochiq?",
			options: [
				"Omborlar/hisob",
				"Omborlar/ma'lumotnomalar",
				"Omborlar/hisob/ma'lumotnomalar",
				"To'g'ri javob yo'q",
			],
			correctAnswer: "Omborlar/hisob/ma'lumotnomalar",
		},
		{
			questionText: "O'lchov birligi bilan tovarni nomenklaturaga qo'shishda qanday majburiy maydonlarni to'ldirish kerak?",
			options: [
				"Tur/nomi/mamlakat/chiqarish shakli",
				"Ishlab chiqaruvchi/idish/chiqarish shakli",
				"Chiqarish shaklida miqdor/o'lchov birligi/dozalash",
				"Barcha javoblar to'g'ri",
			],
			correctAnswer: "Barcha javoblar to'g'ri",
		},
		{
			questionText: "O'lchov birligi bo'lmagan tovarni nomenklaturaga qo'shishda qanday majburiy maydonlarni to'ldirish kerak?",
			options: [
				"Tur/nomi/mamlakat/ishlab chiqaruvchi",
				"Tur/nomi/mamlakat/ishlab chiqaruvchi/idish/chiqarish shaklida miqdor",
				"Tur/nomi/mamlakat/ishlab chiqaruvchi/o'lchov birligi",
				"Tur/nomi/mamlakat/ishlab chiqaruvchi/o'lchov birligi/dozalash",
			],
			correctAnswer: "Tur/nomi/mamlakat/ishlab chiqaruvchi/idish/chiqarish shaklida miqdor",
		},
		{
			questionText: "Shartnomalar qo'shishda qanday majburiy maydonlarni to'ldirish kerak?",
			options: [
				"Yetkazib beruvchi nomi/shartnoma raqami/shartnoma muddati",
				"Yetkazib beruvchi nomi/shartnoma raqami/telefon raqam",
				"Yetkazib beruvchi nomi/INN/hisob raqam",
				"Yetkazib beruvchi nomi/INN/telefon raqam",
			],
			correctAnswer: "Yetkazib beruvchi nomi/shartnoma raqami/shartnoma muddati",
		},
		{
			questionText: "Ombordan preparatlar qoldiqlarini qaysi bo'limda ko'rish mumkin?",
			options: [
				"Omborlar - qoldiq",
				"Hisob - qoldiq",
				"Ma'lumotnoma - qoldiq",
				"Tizimda bunday imkoniyat yo'q",
			],
			correctAnswer: "Omborlar - qoldiq",
		},
],
}
