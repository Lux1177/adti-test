import type { Question, Locale } from "~/types/quiz"

export const lyceumTherapyQuestions: Record<Locale, Question[]> = {
	en: [
		{
			questionText: "In which condition are beta-blockers contraindicated?",
			options: ["Bronchial asthma", "Exertional angina", "Hypertension", "Progressive angina"],
			correctAnswer: "Bronchial asthma"
		},
		{
			questionText: "What is seen on echocardiography in dilated cardiomyopathy?",
			options: ["Dilation of the ventricles", "Interventricular septum hypertrophy", "Left ventricular hypertrophy", "Right ventricular hypertrophy"],
			correctAnswer: "Dilation of the ventricles"
		},
		{
			questionText: "Method for diagnosing prostate adenoma:",
			options: ["Digital rectal examination", "Catheterization", "Cystoscopy", "Pneumocystography"],
			correctAnswer: "Digital rectal examination"
		},
		{
			questionText: "Early signs of chronic kidney disease (CKD):",
			options: ["Hypoisosthenuria, polyuria, hypertension", "Hyperkalemia, anemia, oliguria", "Hypocalcemia, bleeding, encephalopathy", "Oliguria, edema, anemia"],
			correctAnswer: "Hypoisosthenuria, polyuria, hypertension"
		},
		{
			questionText: "What is the primary pathological basis in acute leukemia?",
			options: ["Blasts", "Erythrocytes", "Band neutrophils", "Monocytes"],
			correctAnswer: "Blasts"
		},
		{
			questionText: "Drugs in class I antiarrhythmics include:",
			options: ["Quinidine, Procainamide", "Cordarone", "Obzidan, Trasicor", "Verapamil, Corinfar"],
			correctAnswer: "Quinidine, Procainamide"
		},
		{
			questionText: "A 23-year-old woman has swelling and pain in small joints of the hands, ESR 38 mm/h, CRP ++++. Likely diagnosis?",
			options: ["Rheumatoid arthritis", "Rheumatism", "SLE", "Gout"],
			correctAnswer: "Rheumatoid arthritis"
		},
		{
			questionText: "Alpha-1 antitrypsin deficiency most commonly predisposes to:",
			options: ["Bronchial asthma", "Bronchiectasis", "Pulmonary atelectasis", "Lung cancer"],
			correctAnswer: "Bronchial asthma"
		},
		{
			questionText: "If fungal infection causes interstitial pneumonia, the drug of choice is:",
			options: ["Fluconazole", "Erythromycin", "Kanamycin", "Streptomycin"],
			correctAnswer: "Fluconazole"
		},
		{
			questionText: "Which is NOT a feature of aortic stenosis?",
			options: ["Accentuated first heart sound", "Small weak pulse", "Systolic murmur", "Systolic murmur radiating to carotids"],
			correctAnswer: "Accentuated first heart sound"
		},
		{
			questionText: "Unlike osteoarthritis, rheumatoid arthritis is characterized by:",
			options: ["Morning stiffness", "Osteophytes", "Sharp onset of pain", "Osteosclerosis"],
			correctAnswer: "Morning stiffness"
		},
		{
			questionText: "Second stage of status asthmaticus is indicated by:",
			options: ["Decrease of FEV to 30%", "Hypocapnia", "Hyperventilation", "Respiratory acidosis"],
			correctAnswer: "Decrease of FEV to 30%"
		},
		{
			questionText: "A 36-year-old with severe bone pain, weight loss, immobility. Urine: alkaline, low density, proteinuria with Bence-Jones proteins. Diagnosis?",
			options: ["Multiple myeloma", "Chronic glomerulonephritis", "Acute glomerulonephritis", "Renal amyloidosis"],
			correctAnswer: "Multiple myeloma"
		},
		{
			questionText: "If a patient is not responding to broad-spectrum antibiotics, next step is:",
			options: ["Check for immune deficiency", "X-ray", "Bronchoscopy", "Sputum microscopy"],
			correctAnswer: "Check for immune deficiency"
		},
		{
			questionText: "What causes tachycardia in status asthmaticus?",
			options: ["High blood CO₂", "Acid-base imbalance", "Euphylline overdose", "Cardiac glycoside overdose"],
			correctAnswer: "High blood CO₂"
		},
		{
			questionText: "Chronic cough with copious foul sputum (~500 ml/day) suggests:",
			options: ["Bronchiectasis", "Chronic bronchitis", "Bronchial asthma", "Pneumonia"],
			correctAnswer: "Bronchiectasis"
		},
		{
			questionText: "Critically ill patient with fetid gray purulent sputum and amphoric breathing likely has:",
			options: ["Acute lung abscess", "Lung gangrene", "Acute pneumonia", "Suppurated hydatid cyst"],
			correctAnswer: "Acute lung abscess"
		},
		{
			questionText: "Widespread goiter in a geographic area is called:",
			options: ["Endemic goiter", "Sporadic goiter", "Strumitis", "Autoimmune"],
			correctAnswer: "Endemic goiter"
		},
		{
			questionText: "Which corticosteroid is safe in bronchial asthma with peptic ulcer?",
			options: ["Urbazon", "Prednisolone", "Triamcinolone", "Hydrocortisone"],
			correctAnswer: "Urbazon"
		},
		{
			questionText: "Common M-cholinoblocker used in bronchial asthma:",
			options: ["Intal", "Atrovent", "Zaditen", "Teotard"],
			correctAnswer: "Atrovent"
		},
		{
			questionText: "Bronchography is:",
			options: ["X-ray with contrast in bronchi", "Contrast into bronchial artery", "Endoscopy", "Layered lung imaging"],
			correctAnswer: "X-ray with contrast in bronchi"
		},
		{
			questionText: "Bronchiectasis most often affects:",
			options: ["Left lower lobe", "Right upper lobe", "Left upper lobe", "Right lower lobe"],
			correctAnswer: "Left lower lobe"
		},
		{
			questionText: "Which drug is NOT used in renal amyloidosis:",
			options: ["Albumin", "Delagil", "Azathioprine", "Colchicine"],
			correctAnswer: "Albumin"
		},
		{
			questionText: "Which condition does NOT lead to secondary renal amyloidosis?",
			options: ["Chronic alcoholism", "Rheumatoid arthritis", "Ulcerative colitis", "Suppurative lung disease"],
			correctAnswer: "Chronic alcoholism"
		},
		{
			questionText: "Drugs contraindicated in hemorrhagic stroke:",
			options: ["Heparin", "Aminocaproic acid", "Calcium chloride", "Vikasol"],
			correctAnswer: "Heparin"
		},
		{
			questionText: "Most effective drugs in hypertensive crisis:",
			options: ["Corinfar, Reserpine", "Pentamin, Dibazol, Lasix", "Captopril, Obzidan", "Obzidan, Dopegit"],
			correctAnswer: "Captopril, Obzidan"
		},
		{
			questionText: "All of the following are complications of hypertension EXCEPT:",
			options: ["Aortic stenosis", "Hypertensive crisis", "Myocardial infarction", "Stroke"],
			correctAnswer: "Aortic stenosis"
		},
		{
			questionText: "All of the following are complications of hypertension EXCEPT:",
			options: ["Aortic stenosis", "Hypertensive crisis", "Myocardial infarction", "Stroke"],
			correctAnswer: "Aortic stenosis"
		},
		{
			questionText: "Dilated cardiomyopathy is characterized by:",
			options: ["Dyspnea, edema, arrhythmia", "Chest pain, syncope", "Edema, fever", "Hypotension and arrhythmia"],
			correctAnswer: "Dyspnea, edema, arrhythmia"
		},
		{
			questionText: "Persistent, radiating epigastric pain suggests which ulcer complication?",
			options: ["Pancreatic penetration", "Perforation", "Recurrent ulcers", "Bleeding ulcer"],
			correctAnswer: "Pancreatic penetration"
		},
		{
			questionText: "Main symptom of biliary liver cirrhosis:",
			options: ["Jaundice and itching", "Encephalopathy", "Splenomegaly", "Hypersplenism"],
			correctAnswer: "Jaundice and itching"
		},
		{
			questionText: "Loss of liver dullness in ulcer disease indicates:",
			options: ["Perforation of the ulcer", "Pyloric stenosis", "Malignancy", "Ulcer penetrating to other organ"],
			correctAnswer: "Perforation of the ulcer"
		},
		{
			questionText: "NOT typical for chronic colitis in irrigoscopy:",
			options: ["Narrow rectal ampulla", "String sign", "Spastic asymmetry", "Loss of haustration"],
			correctAnswer: "Loss of haustration"
		},
		{
			questionText: "Drugs used to treat intestinal dysbiosis:",
			options: ["Coli, bifidum and lactobacteria", "Diflucan", "Duphalac", "Smecta"],
			correctAnswer: "Coli, bifidum and lactobacteria"
		},
		{
			questionText: "Cause of alveolar pulmonary edema in cardiogenic shock:",
			options: [
				"Sudden drop in blood pressure",
				"Increased pressure in pulmonary veins",
				"Decreased left ventricular pressure",
				"Increased resistance in pulmonary capillaries"
			],
			correctAnswer: "Increased pressure in pulmonary veins"
		},
		{
			questionText: "Most common cause of community-acquired pneumonia:",
			options: ["Streptococcus pneumoniae", "Staphylococcus aureus", "Mycoplasma pneumoniae", "Chlamydia pneumoniae"],
			correctAnswer: "Streptococcus pneumoniae"
		},
		{
			questionText: "Most common cause of nephrotic syndrome in adults:",
			options: ["Primary membranous glomerulonephritis", "Diabetes mellitus", "Renal cancer", "Amyloidosis"],
			correctAnswer: "Primary membranous glomerulonephritis"
		},
		{
			questionText: "Drugs poorly tolerated in elderly patients with bronchial asthma:",
			options: ["Ganglioblockers", "Corticosteroids", "Salbutamol", "Aminazine"],
			correctAnswer: "Ganglioblockers"
		},
		{
			questionText: "Which symptom is NOT seen in elderly with bronchiolitis?",
			options: [
				"Fever and leukocytosis",
				"Respiratory failure",
				"Heart failure",
				"Agitation progressing to apathy and drowsiness"
			],
			correctAnswer: "Heart failure"
		},
		{
			questionText: "Which lung morphological/functional change is NOT seen in elderly?",
			options: [
				"Increased cough reflex",
				"Atrophy of bronchial ciliated epithelium",
				"Atrophy of bronchial muscles",
				"Reduced mucus secretion"
			],
			correctAnswer: "Increased cough reflex"
		},
		{
			questionText: "How to reduce pressure in pulmonary circulation?",
			options: ["Euphylline", "Ganglioblockers", "Calcium antagonists", "Diuretics"],
			correctAnswer: "Euphylline"
		},
		{
			questionText: "Most specific test for pulmonary embolism:",
			options: [
				"Pulmonary angiography",
				"Arterial blood gas analysis",
				"Chest X-ray",
				"Sputum examination"
			],
			correctAnswer: "Pulmonary angiography"
		},
		{
			questionText: "Vomiting blood mixed with clots suggests:",
			options: [
				"Variceal bleeding from esophagus or stomach cardia",
				"Duodenal ulcer",
				"Gastric ulcer",
				"Mallory-Weiss tear"
			],
			correctAnswer: "Variceal bleeding from esophagus or stomach cardia"
		},
		{
			questionText: "Chronic dry cough with hemoptysis indicates:",
			options: ["Bronchial cancer", "Cavernous pulmonary TB", "Bronchiectasis", "Pneumoconiosis"],
			correctAnswer: "Bronchial cancer"
		},
		{
			questionText: "In which disease is atrial fibrillation NOT typical?",
			options: ["Thyrotoxicosis", "Aortic insufficiency", "Ischemic heart disease", "Mitral stenosis"],
			correctAnswer: "Aortic insufficiency"
		},
		{
			questionText: "Which is NOT a type of functional proteinuria?",
			options: ["Renal", "Exercise-induced", "Orthostatic", "Dietary (high-oxalate)"],
			correctAnswer: "Renal"
		},
		{
			questionText: "In which pulmonary edema cause are fast-acting cardiac glycosides allowed?",
			options: [
				"Ventricular paroxysmal tachycardia",
				"Acute myocardial infarction",
				"Hypertensive crisis type II",
				"Atrial paroxysmal tachycardia"
			],
			correctAnswer: "Ventricular paroxysmal tachycardia"
		},
		{
			questionText: "Pancytopenia is NOT typical for which syndrome?",
			options: [
				"Vitamin B12 deficiency anemia",
				"Myelodysplasia",
				"Aplastic anemia",
				"Acute leukemia"
			],
			correctAnswer: "Vitamin B12 deficiency anemia"
		},
		{
			questionText: "Cholesterol increase is typical for:",
			options: ["Lipoid hepatitis", "Chronic persistent hepatitis", "Biliary cirrhosis", "Liver echinococcosis"],
			correctAnswer: "Lipoid hepatitis"
		},
		{
			questionText: "Severe abdominal pain, fever, constipation, DIC syndrome, amylasuria indicate:",
			options: ["Acute pancreatitis", "Crohn’s disease", "Chronic ulcerative colitis", "Acute cholecystitis"],
			correctAnswer: "Acute pancreatitis"
		}
]
	,
	ru: [
		{
			questionText: "Бета-адреноблокаторы противопоказаны при:",
			options: ["Бронхиальной астме", "Стенокардии напряжения", "Артериальной гипертензии", "Прогрессирующей стенокардии"],
			correctAnswer: "Бронхиальной астме"
		},
		{
			questionText: "Изменение при дилатационной кардиомиопатии на ЭХО-КГ:",
			options: ["Расширение полостей желудочков", "Гипертрофия межжелудочковой перегородки", "Гипертрофия левого желудочка", "Гипертрофия правого желудочка"],
			correctAnswer: "Расширение полостей желудочков"
		},
		{
			questionText: "Диагностика аденомы предстательной железы:",
			options: ["Пальпация простаты через прямую кишку", "Катетеризация", "Цистоскопия", "Пневмоцистография"],
			correctAnswer: "Пальпация простаты через прямую кишку"
		},
		{
			questionText: "Ранние признаки хронической почечной недостаточности:",
			options: ["Гипоизостенурия, полиурия, артериальная гипертензия", "Гиперкалиемия, анемия, олигурия", "Гипокальциемия, кровотечение, энцефалопатия", "Олигурия, отеки, анемия"],
			correctAnswer: "Гипоизостенурия, полиурия, артериальная гипертензия"
		},
		{
			questionText: "Основной патогенетический фактор острого лейкоза:",
			options: ["Бласты", "Эритроциты", "Палочкоядерные нейтрофилы", "Моноциты"],
			correctAnswer: "Бласты"
		},
		{
			questionText: "К антиаритмикам I класса относятся:",
			options: ["Хинидин, новокаинамид", "Кордарон", "Обзидан, Тразикор", "Верапамил, Коринфар"],
			correctAnswer: "Хинидин, новокаинамид"
		},
		{
			questionText: "У женщины 23 лет отек и боль в суставах кистей, СОЭ 38 мм/ч, С-реактивный белок ++++ — заболевание:",
			options: ["Ревматоидный артрит", "Ревматизм", "СКВ", "Подагра"],
			correctAnswer: "Ревматоидный артрит"
		},
		{
			questionText: "Дефицит α1-антитрипсина предрасполагает к:",
			options: ["Бронхиальной астме", "Бронхоэктазам", "Ателектазу легких", "Раку легких"],
			correctAnswer: "Бронхоэктазам"
		},
		{
			questionText: "Препарат выбора при грибковой интерстициальной пневмонии:",
			options: ["Флуконазол", "Эритромицин", "Канамицин", "Стрептомицин"],
			correctAnswer: "Флуконазол"
		},
		{
			questionText: "Признак, нехарактерный для стеноза аортального отверстия:",
			options: ["Усиливающийся I тон", "Слабый пульс", "Систолический шум в мышце", "Проведение шума на сонную артерию"],
			correctAnswer: "Систолический шум в мышце"
		},
		{
			questionText: "Признак, отличающий ревматоидный артрит от артроза:",
			options: ["Утренняя скованность", "Наличие остеофитов", "Острая боль", "Остеосклероз"],
			correctAnswer: "Утренняя скованность"
		},
		{
			questionText: "Признак II стадии астматического статуса:",
			options: ["Снижение ОФВ до 30%", "Гипокапния", "Гипервентиляция", "Дыхательный ацидоз"],
			correctAnswer: "Снижение ОФВ до 30%"
		},
		{
			questionText: "Боль в костях, потеря веса, положительный белок Бенс-Джонса — диагноз:",
			options: ["Миеломная болезнь", "Хронический гломерулонефрит", "Острый гломерулонефрит", "Амилоидоз почек"],
			correctAnswer: "Миеломная болезнь"
		},
		{
			questionText: "Отсутствие эффекта от антибиотика — что проверить:",
			options: ["Иммунодефицит", "Рентген", "Бронхоскопия", "Микроскопия мокроты"],
			correctAnswer: "Иммунодефицит"
		},
		{
			questionText: "Причина тахикардии при астматическом статусе:",
			options: ["Повышение СО2 в крови", "Нарушение кислотно-щелочного баланса", "Передозировка эуфиллина", "Передозировка гликозидов"],
			correctAnswer: "Нарушение кислотно-щелочного баланса"
		},
		{
			questionText: "Хронический кашель, зловонная мокрота до 500 мл в день — диагноз:",
			options: ["Бронхоэктатическая болезнь", "Хронический бронхит", "Бронхиальная астма", "Пневмония"],
			correctAnswer: "Бронхоэктатическая болезнь"
		},
		{
			questionText: "Гектическая лихорадка, амфорическое дыхание, гнойная мокрота — диагноз:",
			options: ["Абсцесс легкого", "Гангрена легкого", "Острая пневмония", "Гнойный эхинококк легкого"],
			correctAnswer: "Абсцесс легкого"
		},
		{
			questionText: "Распространенность зоба в регионе — термин:",
			options: ["Эндемический зоб", "Спорадический зоб", "Струмит", "Аутоиммунный тиреоидит"],
			correctAnswer: "Эндемический зоб"
		},
		{
			questionText: "Кортикостероид при бронхиальной астме с язвенной болезнью:",
			options: ["Урбазон", "Преднизолон", "Триамсинолон", "Гидрокортизон"],
			correctAnswer: "Урбазон"
		},
		{
			questionText: "M-холиноблокатор при бронхиальной астме:",
			options: ["Интал", "Атровент", "Задитен", "Теотард"],
			correctAnswer: "Атровент"
		},
		{
			questionText: "Бронхография — это:",
			options: ["Контраст в бронхи для исследования", "Контраст в бронхиальную артерию", "Эндоскопия", "Пошаговая визуализация легкого"],
			correctAnswer: "Контраст в бронхи для исследования"
		},
		{
			questionText: "Чаще всего бронхоэктазы встречаются в:",
			options: ["Левом нижнем долевом бронхе", "Правом верхнем", "Левом верхнем", "Правом нижнем"],
			correctAnswer: "Левом нижнем долевом бронхе"
		},
		{
			questionText: "Препарат, не применяемый при амилоидозе почек:",
			options: ["Альбумин", "Делагил", "Азатиоприн", "Колхицин"],
			correctAnswer: "Альбумин"
		},
		{
			questionText: "Заболевание, не вызывающее вторичный амилоидоз почек:",
			options: ["Хронический алкоголизм", "Ревматоидный артрит", "Язвенный колит", "Гнойные болезни легких"],
			correctAnswer: "Хронический алкоголизм"
		},
		{
			questionText: "Противопоказанные препараты при геморрагическом инсульте:",
			options: ["Гепарин", "Аминокапроновая кислота", "Хлорид кальция", "Викасол"],
			correctAnswer: "Гепарин"
		},
		{
			questionText: "Наиболее эффективная группа при гипертоническом кризе:",
			options: ["Коринфар, резерпин", "Пентамин, дибазол, лазикс", "Каптоприл, обзидан", "Обзидан, допегит"],
			correctAnswer: "Каптоприл, обзидан"
		},
		{
			questionText: "Все осложнения гипертонии, кроме одного:",
			options: ["Стеноз аортального отверстия", "Гипертонический криз", "Инфаркт миокарда", "Инсульт"],
			correctAnswer: "Стеноз аортального отверстия"
		},
		{
			questionText: "Характерные симптомы дилатационной кардиомиопатии:",
			options: ["Одышка, отеки, аритмия", "Боль при ходьбе, обмороки", "Отеки, лихорадка", "Гипотензия и аритмия"],
			correctAnswer: "Одышка, отеки, аритмия"
		},
		{
			questionText: "Постоянная боль, иррадиирующая в спину — осложнение язвы:",
			options: ["Пенетрация в поджелудочную", "Перфорация", "Частые рецидивы", "Кровотечение"],
			correctAnswer: "Пенетрация в поджелудочную"
		},
		{
			questionText: "Основной симптом билиарного цирроза печени:",
			options: ["Желтушность и кожный зуд", "Энцефалопатия", "Гиперспленизм", "Асцит"],
			correctAnswer: "Желтушность и кожный зуд"
		},
		{
			questionText: "При исчезновении тупости печени при язве подозревают:",
			options: ["Перфорацию язвы", "Стеноз привратника", "Малигнизацию", "Метастазирование язвы"],
			correctAnswer: "Перфорацию язвы"
		},
		{
			questionText: "Признак, не характерный для хронического колита при ирригоскопии:",
			options: ["Сужение ампулы прямой кишки", "Струнный симптом", "Гаустрация", "Спастическая асимметрия"],
			correctAnswer: "Гаустрация"
		},
		{
			questionText: "Препараты для лечения дисбактериоза кишечника:",
			options: ["Коли-, бифидо- и лактобактерии", "Дифлюкан", "Дюфалак", "Смекта"],
			correctAnswer: "Коли-, бифидо- и лактобактерии"
		},
		{
			questionText: "Причина альвеолярного отека легких при кардиогенном шоке:",
			options: ["Резкое снижение АД", "Повышение венозного давления в легких", "Снижение давления наполнения левого желудочка", "Повышение сопротивления в капиллярах легких"],
			correctAnswer: "Повышение венозного давления в легких"
		},
		{
			questionText: "Частый возбудитель внебольничной пневмонии:",
			options: ["Streptococcus pneumoniae", "Staphylococcus aureus", "Mycoplasma pneumoniae", "Chlamydia pneumoniae"],
			correctAnswer: "Streptococcus pneumoniae"
		},
		{
			questionText: "Наиболее частая причина нефротического синдрома у взрослых:",
			options: ["Первичный мембранозный гломерулонефрит", "Сахарный диабет", "Рак почек", "Амилоидоз"],
			correctAnswer: "Первичный мембранозный гломерулонефрит"
		},
		{
			questionText: "Препарат, не показанный при бронхиальной астме у пожилых:",
			options: ["Ганглиоблокаторы", "Кортикостероиды", "Сальбутамол", "Аминазин"],
			correctAnswer: "Ганглиоблокаторы"
		},
		{
			questionText: "Признак, не характерный для бронхиолита у пожилых:",
			options: ["Лихорадка и лейкоцитоз", "Дыхательная недостаточность", "Сердечная недостаточность", "Апатия и сонливость с беспокойством"],
			correctAnswer: "Сердечная недостаточность"
		},
		{
			questionText: "Изменения, не характерные для дыхательной системы у пожилых:",
			options: ["Усиление кашлевого рефлекса", "Атрофия мерцательного эпителия бронхов", "Атрофия мышц бронхов", "Снижение секреции слизи"],
			correctAnswer: "Усиление кашлевого рефлекса"
		},
		{
			questionText: "Для снижения давления в малом круге кровообращения используют:",
			options: ["Эуфиллин", "Ганглиоблокаторы", "Блокаторы кальциевых каналов", "Мочегонные"],
			correctAnswer: "Эуфиллин"
		},
		{
			questionText: "Наиболее специфичный метод диагностики ТЭЛА:",
			options: ["Ангиография легочной артерии", "Анализ газов крови", "Рентгенография грудной клетки", "Анализ мокроты"],
			correctAnswer: "Ангиография легочной артерии"
		},
		{
			questionText: "Рвота с примесью большого количества сгустков крови указывает на:",
			options: ["Варикозное расширение вен пищевода", "Язву 12-перстной кишки", "Рак желудка", "Язву желудка"],
			correctAnswer: "Варикозное расширение вен пищевода"
		},
		{
			questionText: "Длительный сухой кашель с кровохарканьем — подозрение на:",
			options: ["Рак бронхов", "Кавернозный туберкулез", "Бронхоэктазы", "Пневмокониоз"],
			correctAnswer: "Рак бронхов"
		},
		{
			questionText: "Фибрилляция предсердий не характерна при:",
			options: ["Тиреотоксикозе", "Аортальной недостаточности", "ИБС", "Митральном стенозе"],
			correctAnswer: "Аортальной недостаточности"
		},
		{
			questionText: "Не входит в функциональную протеинурию:",
			options: ["Почечная", "Физическая нагрузка", "Ортостатическая", "Белковая пища"],
			correctAnswer: "Почечная"
		},
		{
			questionText: "Когда показано срочное назначение гликозидов при отеке легких:",
			options: ["Желудочковая тахикардия", "Острый трансмуральный инфаркт", "Гипертонический криз II типа", "Мерцательная тахикардия"],
			correctAnswer: "Желудочковая тахикардия"
		},
		{
			questionText: "Панцитопения не характерна для:",
			options: ["В12-дефицитной анемии", "Дисплазии гемопоэза", "Гипопластической анемии", "Острого лейкоза"],
			correctAnswer: "В12-дефицитной анемии"
		},
		{
			questionText: "Повышение холестерина характерно для:",
			options: ["Липоидного гепатита", "Хронического персистирующего гепатита", "Билиарного цирроза печени", "Эхинококка печени"],
			correctAnswer: "Липоидного гепатита"
		},
		{
			questionText: "Резкая боль в животе, лихорадка, запор, ДВС-синдром, амилазурия — диагноз:",
			options: ["Острый панкреатит", "Болезнь Крона", "Язвенный колит", "Острый холецистит"],
			correctAnswer: "Острый панкреатит"
		}
],
	uz: [
		{
			questionText: "V-adrenoblokatorlar qaysi kasallikda kullanmaydi:",
			options: ["bronxial astmada", "zurikish stenokardiyada", "gipertoniya kasalligida", "progressivlanuvchi stenokardiyada"],
			correctAnswer: "bronxial astmada"
		},
		{
			questionText: "Dilyatatsion kardiomiopatiyani EXOKS dagi uzgarishlar:",
			options: ["korinchalar bushligining kengayishi", "korinchaaro tusik gipertrofiyasi", "chap korincha gipertrofiyasi", "ung korincha gipertrofiyasi"],
			correctAnswer: "korinchalar bushligining kengayishi"
		},
		{
			questionText: "Prostata bezi adenomasi diagnostikasi:",
			options: ["prostata bezini barmok bilan paypaslash", "kateterlash", "sistoskopiya", "pnevmotsistografiya"],
			correctAnswer: "prostata bezini barmok bilan paypaslash"
		},
		{
			questionText: "SBE erta yuzaga chikaruvchi belgilar:",
			options: ["gipoizostinuriya, poliuriya, arterial gipertoniya", "giperkaliyemiya, anemiya, oliguriya", "gipokalsiyemiya, kon ketishi, ensefalopatiya", "oliguriya, shishlar, anemiya"],
			correctAnswer: "gipoizostinuriya, poliuriya, arterial gipertoniya"
		},
		{
			questionText: "Utkir leykozlarda kasallikning asosiy negizi nima:",
			options: ["blastlar", "eritrotsitlar", "tayekchayaderli neytrofillar", "monotsitlar"],
			correctAnswer: "blastlar"
		},
		{
			questionText: "1 guruxdagi aritmiyaga karshi dorilarga kiradi:",
			options: ["xinidin, novokainamid", "kordaron", "obzidan, trazikor", "verapamil, korinfar"],
			correctAnswer: "xinidin, novokainamid"
		},
		{
			questionText: "23 yeshli ayelda kaftlarining mayda bugimlarida shish, og‘riq, harakat cheklanishi, ECHT 38mm/soat, CRP ++++:",
			options: ["revmatoidli artrit", "revmatizm", "SKV podagra", "podagra"],
			correctAnswer: "revmatoidli artrit"
		},
		{
			questionText: "α1-antitripsin yetishmasligi natijasida qaysi kasallika moyillik kuproq uchraydi:",
			options: ["Bronxial astma", "Bronxoektaz", "Upka atelektaz", "Upka rak kasalligi"],
			correctAnswer: "Bronxial astma"
		},
		{
			questionText: "Agarda interstitsial pnevmoniyani zamburug‘lar chaqirgan bo‘lsa qaysi dorini tavsiya etish kerak:",
			options: ["Flukonazol", "Eritromitsin", "Kanamitsin", "Streptomitsin"],
			correctAnswer: "Flukonazol"
		},
		{
			questionText: "Aorta og‘zining torayishiga qaysi belgi xos emas:",
			options: ["karsilovchi 1 ton", "kichik sust puls", "sistolik mushik xirillash", "sistolik shovkinning uyqu arteriyasiga o‘tishi"],
			correctAnswer: "karsilovchi 1 ton"
		},
		{
			questionText: "Artrozdan farqli ravishda revmatoidli artrit uchun xos:",
			options: ["ertalabki karaxtlik mavjudligi", "osteofitlarni mavjudligi", "og‘riqlarning zo‘rayishiga safli", "osteoskleroz"],
			correctAnswer: "ertalabki karaxtlik mavjudligi"
		},
		{
			questionText: "Astmatik statusni ikkinchi stadiyasiga o‘tganligidan guvohlik beradi:",
			options: ["kerakli hajmdan OFV - 30% gacha pasayishi", "gipokapniya", "giperventilatsiya", "nafas atsidozi"],
			correctAnswer: "kerakli hajmdan OFV - 30% gacha pasayishi"
		},
		{
			questionText: "Bemor 36 yoshda, suyak og‘rig‘i, ozish, siydikda Bens-Jons oqsili, tashxis:",
			options: ["miyelom kasalligi", "surunkali glomerulonefrit", "o‘tkir glomerulonefrit", "buyrak amiloidozi"],
			correctAnswer: "miyelom kasalligi"
		},
		{
			questionText: "Keng ta’sir doirasiga ega antibiotik bilan davolanish samara bermasa nima tekshiriladi:",
			options: ["Immunitet holati", "Rentgen tekshiruvi", "Bronxoskopiya", "Balg‘amni mikroskopiya"],
			correctAnswer: "Immunitet holati"
		},
		{
			questionText: "Astmatik statusda taxikardiyaning sababi:",
			options: ["Konda R SO2 ni ko‘payishi", "Kislota-ishqor muvozanati", "Eufillin miqdorining ko‘payishi", "Yurak glikozidlarining ko‘payishi"],
			correctAnswer: "Konda R SO2 ni ko‘payishi"
		},
		{
			questionText: "Surunkali yutal, ko‘p miqdorda hidli balg‘am, sutkada 500 ml — tashxis:",
			options: ["Bronxoektatik kasallik", "Surunkali bronxit", "Bronxial astma", "Zatarcha"],
			correctAnswer: "Bronxoektatik kasallik"
		},
		{
			questionText: "Badbo‘y balg‘amli, gektik isitma, amforik nafas, xirillash — tashxis:",
			options: ["O‘pka abscessi", "O‘pka gangrenasi", "Zatarcha", "O‘pka ehinokokki"],
			correctAnswer: "O‘pka abscessi"
		},
		{
			questionText: "Geografik hududda bitta kasallikning ko‘p uchrashi nima deyiladi:",
			options: ["endemik bukok", "sporadik bukok", "strumit", "autoimmun"],
			correctAnswer: "endemik bukok"
		},
		{
			questionText: "Bronxial astma + yara kasalligi bo‘lsa beriladigan GK preparati:",
			options: ["Urbazon", "Prednizolon", "Triamsinalon", "Gidrokortizon"],
			correctAnswer: "Urbazon"
		},
		{
			questionText: "Bronxial astmada ishlatiladigan M-xolinoblokator dori:",
			options: ["intal", "atrovent", "zaditen", "teotard"],
			correctAnswer: "atrovent"
		},
		{
			questionText: "Bronxografiya bu:",
			options: ["bronxlarga kontrast modda yuborib tekshirish", "bronxial arteriyaga yuborish", "endoskopiya", "bronxoskopiya"],
			correctAnswer: "bronxlarga kontrast modda yuborib tekshirish"
		},
		{
			questionText: "Bronxoektaziyalar qaysi bo‘lakda ko‘p uchraydi:",
			options: ["Chap pastki bo‘lakda", "O‘ng yuqori bo‘lakda", "Chap yuqori bo‘lakda", "O‘ng pastki bo‘lakda"],
			correctAnswer: "Chap pastki bo‘lakda"
		},
		{
			questionText: "Buyrak amiloidozida foydalanilmaydigan dori:",
			options: ["albumin", "delagil", "azatioprin", "kolxitsin"],
			correctAnswer: "albumin"
		},
		{
			questionText: "Buyrak amiloidoziga olib kelmaydigan kasallik:",
			options: ["Surunkali alkogolizm", "Revmatoid artrit", "Yarali kolit", "O‘pka yiringli kasalliklari"],
			correctAnswer: "Surunkali alkogolizm"
		},
		{
			questionText: "Gemorragik insultda berilmaydigan dori:",
			options: ["geparin", "aminokapron kislotasi", "kalsiy xlorid", "vikasol"],
			correctAnswer: "geparin"
		},
		{
			questionText: "Gipertonik krizda samarali dorilar guruhi:",
			options: ["korinfar, rezerpin", "pentamin, dibazol, laziks", "kaptopril, obzidan", "obzidan, dopegit"],
			correctAnswer: "kaptopril, obzidan"
		},
		{
			questionText: "Gipertoniya asoratlari ichidan noto‘g‘ri ko‘rsatilgan:",
			options: ["aorta og‘zi stenozi", "gipertoniya xuruji", "miokard infarkti", "insult"],
			correctAnswer: "aorta og‘zi stenozi"
		},
		{
			questionText: "Dilate kardiomiopatiyaga xos belgilar:",
			options: ["xansirash, shish, aritmiya", "yurganda og‘riq", "isitma", "gipotoniya, aritmiya"],
			correctAnswer: "xansirash, shish, aritmiya"
		},
		{
			questionText: "Jigar biliar sirrozidagi asosiy belgi:",
			options: ["teridagi sariklik va qichishish", "ensefalopatiya", "gipersplenizm", "qon ketish"],
			correctAnswer: "teridagi sariklik va qichishish"
		},
		{
			questionText: "Jigar tumtoqligini yo‘qolishida yara kasalligining qaysi asorati to‘g‘risida o‘ylash mumkin:",
			options: ["yarani teshilishi", "privratnik torayishi", "malignizatsiya", "yarani boshqa a’zoga o‘tishi"],
			correctAnswer: "yarani teshilishi"
		},
		{
			questionText: "Irrigoskopiyada surunkali kolit uchun xos emas:",
			options: ["to‘g‘ri ichak ampulasi kichrayishi", "yo‘g‘on ichakning torga o‘xshashi (struna simptomi)", "spastik assimetrik", "gaustriya"],
			correctAnswer: "gaustriya"
		},
		{
			questionText: "Ichak disbakteriozini davolash uchun ishlatiladigan vositalar:",
			options: ["koli, bifidum va laktobakteriyalar", "diflukan", "dyufalak", "smekta"],
			correctAnswer: "koli, bifidum va laktobakteriyalar"
		},
		{
			questionText: "Kardiogen shokdagi alveolyar o‘pka shishining sababi:",
			options: ["AK bosimining keskin pasayishi", "o‘pkaning venoz tizimida bosimning ortishi", "chap qorinchani to‘lish bosimining pasayishi", "o‘pka kapillyarlarida qarshilikning ortishi"],
			correctAnswer: "o‘pkaning venoz tizimida bosimning ortishi"
		},
		{
			questionText: "Kasalxona tashqarisidagi zotiljamni eng ko‘p chaqiruvchi mikrob:",
			options: ["Streptococcus pneumoniae", "Staphylococcus aureus", "Mycoplasma pneumoniae", "Chlamydia pneumoniae"],
			correctAnswer: "Streptococcus pneumoniae"
		},
		{
			questionText: "Kattalarda uchraydigan nefrotik sindrom sabablari ichida ko‘proq:",
			options: ["birlamchi membranozli glomerulonefrit", "qandli diabet", "buyrak raki", "amiloidoz"],
			correctAnswer: "birlamchi membranozli glomerulonefrit"
		},
		{
			questionText: "Keksalarda bronxial astmada qaysi guruh preparatlari nomutanosib:",
			options: ["Ganglioblokatorlar", "Kortikosteroidlar", "Salbutamol", "Aminazin"],
			correctAnswer: "Ganglioblokatorlar"
		},
		{
			questionText: "Keksalarda bronxiolitda qaysi simptom kuzatilmaydi:",
			options: ["Isitma va leykotsitoz", "Nafas yetishmovchiligi", "Yurak yetishmovchiligi", "Apatiya va uyquchanlikka o‘tib ketuvchi bezovtalik"],
			correctAnswer: "Isitma va leykotsitoz"
		},
		{
			questionText: "Keksalarda bronx-o‘pka apparatida qanday morfo-funksional o‘zgarishlar kuzatilmaydi:",
			options: ["Yutal refleksining kuchayishi", "Bronx titroq epiteliy atrofiyasi", "Bronx muskullari atrofiyasi", "Shilimshiq ajralishining kamayishi"],
			correctAnswer: "Yutal refleksining kuchayishi"
		},
		{
			questionText: "Kichik qon aylanish doirasida bosimni kamaytirish uchun nima qilasiz:",
			options: ["eufillin", "ganglioblokatorlar", "kalsiy antagonistlari", "suv haydovchilar"],
			correctAnswer: "eufillin"
		},
		{
			questionText: "Quyidagi diagnostik metodlardan qaysi biri o‘pka arteriyasi tromboemboliyasida eng spetsifik:",
			options: ["o‘pka arteriyalari angiografiyasi", "arterial qondagi gazlar tahlili", "ko‘krak qafasi rentgenografiyasi", "balg‘amni tekshirish"],
			correctAnswer: "o‘pka arteriyalari angiografiyasi"
		},
		{
			questionText: "Ko‘p miqdorda qon laxtalari bilan aralashgan qusish nimani anglatadi:",
			options: ["oshqozon kardial qismi va qizilo‘ngach venalarining varikoz kengayishidan qon ketishi", "12 barmoqli ichak yarasi", "oshqozon yarasi", "me'da osti bezi nekrozi"],
			correctAnswer: "oshqozon kardial qismi va qizilo‘ngach venalarining varikoz kengayishidan qon ketishi"
		},
		{
			questionText: "Quruq yo‘tal bilan uzoq vaqt qon tupurib yursa, qaysi kasallik haqida o‘ylash kerak:",
			options: ["Bronxlar raki", "O‘pka sili kavernoz shakli", "Bronxoektatik kasallik", "Pnevmokoniya"],
			correctAnswer: "Bronxlar raki"
		},
		{
			questionText: "Qaysi kasallikda xilpillovchi aritmiya uchramaydi:",
			options: ["tireotoksikoz", "aortal yetishmovchilik", "Yurak ishemik kasalligi", "mitral stenoz"],
			correctAnswer: "aortal yetishmovchilik"
		},
		{
			questionText: "Qaysi proteinuriya funksional proteinuriyaga kirmaydi:",
			options: ["buyrak", "jismoniy zo‘riqish", "ortostatik", "oksilga boy oziqalar"],
			correctAnswer: "buyrak"
		},
		{
			questionText: "Qaysi sababdan kelib chiqqan o‘pka shishida tez ta’sir qiluvchi yurak glikozidlarini qo‘llash mumkin:",
			options: ["qorinchali taxikardiya paroksizmi", "o‘tkir transmural infarkt", "II tip gipertonik kriz", "paroksizmal bo‘lmachali taxikardiya"],
			correctAnswer: "qorinchali taxikardiya paroksizmi"
		},
		{
			questionText: "Qaysi sindromga pansitopeniya xos emas:",
			options: ["V12 yetishmovchilik kamqonligi", "gemopoetik displaziya", "gipoplastik kamqonlik", "o‘tkir leykoz"],
			correctAnswer: "V12 yetishmovchilik kamqonligi"
		},
		{
			questionText: "Qonda xolesterin oshishi xarakterli:",
			options: ["lipoid gepatit", "surunkali gepatit", "jigar biliar sirrozi", "jigar ehinokokki"],
			correctAnswer: "lipoid gepatit"
		},
		{
			questionText: "Qorinda kuchli og‘riq, isitma, DVS-sindrom, amilazuriya — qaysi kasallikka xos:",
			options: ["o‘tkir pankreatit", "Kron kasalligi", "surunkali nospetsifik yarali kolit", "o‘tkir xoletsistit"],
			correctAnswer: "o‘tkir pankreatit"
		}
],
};
