import type { Question, Locale } from "~/types/quiz"

export const medicalPharmacyQuestions: Record<Locale, Question[]> = {
  en: [
    {
      questionText: "What are the functions of the Ministry of Health?",
      options: ["Developing prospective target programs", "Controlling the provision of medical care", "Developing demand balance and studying medical needs", "All answers are correct"],
      correctAnswer: "All answers are correct",
    },
    {
      questionText: "How long are prescription forms containing narcotic drugs stored in pharmacies?",
      options: ["5 years", "3 years", "8 years", "6 years"],
      correctAnswer: "5 years",
    },
    {
      questionText: "When prescribing complex compound drugs, which name should the doctor indicate in the prescription?",
      options: ["International nonproprietary name and trade name", "International nonproprietary name", "Trade name", "International name"],
      correctAnswer: "International nonproprietary name",
    },
    {
      questionText: "From which pharmacies are drugs like Zaleplon and Pregabalin dispensed by prescription?",
      options: ["Social and specially licensed pharmacies", "Private pharmacies", "Joint-stock pharmacies", "Pharmacies of treatment-prophylactic institutions"],
      correctAnswer: "Social and specially licensed pharmacies",
    },
    {
      questionText: "What is the formulary system?",
      options: ["A set of structures and management measures in healthcare", "Ensuring the highest quality of medical care under specific conditions", "Optimal use of available resources", "All answers are correct"],
      correctAnswer: "All answers are correct",
    },
    {
      questionText: "What is included in internal control?",
      options: ["SES sanitary-epidemiological service inspection", "Prosecutor's inspection", "By local authorities", "Pharmaceutical control, inventory, revision"],
      correctAnswer: "Pharmaceutical control, inventory, revision",
    },
    {
      questionText: "Which organizations perform external control of pharmacies?",
      options: ["Sanitary-epidemiological authorities", "Tax inspection, bank, local authorities", "Fire safety inspection, internal affairs, prosecutor's office", "All answers are correct"],
      correctAnswer: "All answers are correct",
    },
    {
      questionText: "What is the name of the document formalizing pharmaceutical control results?",
      options: ["Power of attorney", "Act", "Notification", "Demand note"],
      correctAnswer: "Act",
    },
    {
      questionText: "How many parts does the pharmaceutical control report consist of?",
      options: ["1", "3", "2", "4"],
      correctAnswer: "3",
    },
    {
      questionText: "What is the goal of pharmaceutical control?",
      options: ["Checking the pharmaceutical order in pharmacies", "Comparing actual stock with documented stock", "Checking tax payments", "Checking financial activity results"],
      correctAnswer: "Checking the pharmaceutical order in pharmacies",
    },
    {
      questionText: "For how long is a license issued to legal and natural persons?",
      options: ["5 years", "4 years", "8 years", "10 years"],
      correctAnswer: "5 years",
    },
    {
      questionText: "What kind of efficacy is identified in 'in vivo' experiments?",
      options: ["Biological efficacy", "Pharmaceutical efficacy", "Pathological efficacy", "Anatomical efficacy"],
      correctAnswer: "Biological efficacy",
    },
    {
      questionText: "What kind of efficacy is identified in 'in vitro' experiments?",
      options: ["Pharmaceutical efficacy", "Cytological efficacy", "Pathological efficacy", "Anatomical efficacy"],
      correctAnswer: "Pharmaceutical efficacy",
    },
    {
      questionText: "How is gelatin solution prepared?",
      options: ["First soaked in part of the water for 30–60 minutes, then dissolved by heating in the remaining water in a water bath", "Dissolved by heating in the calculated amount of water in a water bath", "First soaked in part of the water for 30–60 minutes, then dissolved in the remaining water", "Dissolved in the calculated amount of hot water"],
      correctAnswer: "First soaked in part of the water for 30–60 minutes, then dissolved by heating in the remaining water in a water bath",
    },
    {
      questionText: "What are the permissible deviations if the active ingredient content in concentrates is up to or more than 20%?",
      options: ["± 2 %, ± 1 %", "± 1 %, ± 2 %", "± 7.5 %, ± 5%", "± 9.8 %, ± 10.2 %"],
      correctAnswer: "± 2 %, ± 1 %",
    },
    {
      questionText: "If the concentration of hydrochloric acid is not specified in the prescription, what percentage is assumed?",
      options: ["8.2–8.4%", "0.242", "24.8–25.2%", "0.253"],
      correctAnswer: "8.2–8.4%",
    },
    {
      questionText: "If the concentration of ethyl alcohol is not specified in the prescription, what percentage is assumed?",
      options: ["0.9", "0.7", "0.6", "0.96"],
      correctAnswer: "0.7",
    },
    {
      questionText: "If the concentration of starch solution is not specified in the prescription, what percentage solution is prepared?",
      options: ["0.02", "0.03", "0.05", "0.07"],
      correctAnswer: "0.03",
    },
    {
      questionText: "How much perhydrol is required to prepare 100 ml of 3% hydrogen peroxide solution?",
      options: ["10 ml", "5 ml", "30 ml", "35 ml"],
      correctAnswer: "10 ml",
    },
    {
      questionText: "How much water and formalin are needed to prepare 200 ml of 5% formalin solution?",
      options: ["190 ml water and 10 ml formalin", "170 ml water and 30 ml formalin", "175 ml and 25 ml formalin", "150 ml water and 50 ml formalin"],
      correctAnswer: "190 ml water and 10 ml formalin",
    },
    {
      questionText: "To prepare 1000 ml of 20% sodium bromide concentrate (d = 1.1488 g/ml), how much sodium bromide and water are needed?",
      options: ["Sodium bromide 200 g, water 949 ml", "Sodium bromide 200 g, water 940 ml", "Sodium bromide 200 g, water 969 ml", "Sodium bromide 200 g, water 800 ml"],
      correctAnswer: "Sodium bromide 200 g, water 940 ml",
    },
    {
      questionText: "To prepare 1 liter of 10% sodium bromide solution, how much water is required? (XOK = 0.26)",
      options: ["974 ml", "900 ml", "1000 ml", "990 ml"],
      correctAnswer: "974 ml",
    },
    {
      questionText: "Calculate the volume of the mixture: Take: Codeine 0.12, Sodium bromide and Sodium bicarbonate 3.0 g each, Belladonna tincture 5 ml, Valerian tincture 20 ml, Purified water 200 ml. Mix. Give. Label.",
      options: ["225 ml", "233 ml", "220 ml", "231.12 ml"],
      correctAnswer: "225 ml",
    },
    {
      questionText: "According to the following prescription, how much water is needed: Take: Valerian root and rhizome tincture - 10.0, Mint leaf tincture 4.0 - 200 ml, Amidopyrine 0.6, Sodium bromide 3.0, Magnesium sulfate 0.8. Mix. Give. Label. Water absorption coefficient (SShK) valerian - 2.9, mint - 2.4",
      options: ["239 ml", "200 ml", "242 ml", "250 ml"],
      correctAnswer: "239 ml",
    },
    {
      questionText: "If the concentration of hydrogen peroxide solution is not specified in the prescription, what percentage is assumed?",
      options: ["0.03", "0.1", "0.2", "0.39"],
      correctAnswer: "0.03",
    },
    {
      questionText: "If the prescription states only 'glycerin', which type is meant?",
      options: ["Glycerin containing 10–16% water", "Diluted glycerin", "Concentrated glycerin", "Anhydrous glycerin"],
      correctAnswer: "Concentrated glycerin",
    },
    {
      questionText: "If the concentration of acetic acid solution is not specified in the prescription, what percentage is assumed?",
      options: ["30%", "10%", "98%", "100%"],
      correctAnswer: "10%",
    },
    {
      questionText: "At which technological stages are injection solutions checked for mechanical impurities?",
      options: ["After filtration and sterilization", "After sterilization", "After packaging and equipment", "After filtration"],
      correctAnswer: "After filtration and sterilization",
    },
    {
      questionText: "What are the sterile conditions for preparing 0.5% calcium chloride injection solution?",
      options: ["Aseptic condition, sterilization at 120°C for 8 minutes", "Aseptic condition", "Aseptic condition, sterilization at 100°C for 30 minutes", "Aseptic condition, sterilization at 180°C for 30 minutes"],
      correctAnswer: "Aseptic condition, sterilization at 120°C for 8 minutes",
    },
    {
      questionText: "Why is sodium chloride used in injection solutions sterilized at 180°C for 2 hours?",
      options: ["For dehydration", "To remove pyrogenic substances", "To increase pharmacological effect", "To reduce pharmacological effect"],
      correctAnswer: "To remove pyrogenic substances",
    },
    {
      questionText: "What is a medicinal plant?",
      options: ["Non-toxic medicinal plant", "Plant containing essential oils", "Plant containing biologically active substances used for treatment and prevention", "Plant used for treatment and prevention of diseases"],
      correctAnswer: "Plant containing biologically active substances used for treatment and prevention",
    },
    {
      questionText: "What is included in regulatory documents? Choose the most complete answer.",
      options: ["GOST, FM", "VFM, FM", "GOST, CST", "KFM, FM, GOST, Enterprise Standard"],
      correctAnswer: "KFM, FM, GOST, Enterprise Standard",
    },
    {
      questionText: "What types of phytopreparations are produced in pharmaceutical companies in Uzbekistan?",
      options: ["Mixtures, filter bags, granules, syrups, extracts, compressed tablets", "Tinctures, extracts, mixtures", "Mixtures, extracts", "Bricks, mixtures"],
      correctAnswer: "Mixtures, filter bags, granules, syrups, extracts, compressed tablets",
    },
    {
      questionText: "What is the chemical composition of plantain (Zubturum) product?",
      options: ["Cardiac glycosides", "Glycoside aucubin, bitter glycosides", "Glycoside aucubin, polysaccharides", "Flavonoids, glycoside aucubin"],
      correctAnswer: "Glycoside aucubin, polysaccharides",
    },
    {
      questionText: "In what form is the plantain product used in medicine?",
      options: ["As infusion for gastrointestinal diseases, plantaglucid preparation for ulcers", "As infusion for colds", "As decoction for pulmonary diseases", "As plantaglucid for tuberculosis"],
      correctAnswer: "As infusion for gastrointestinal diseases, plantaglucid preparation for ulcers",
    },
    {
      questionText: "What part of the flax plant is used?",
      options: ["Root", "Leaf", "Aboveground part", "Seed"],
      correctAnswer: "Seed",
    },
    {
      questionText: "Which part of the marshmallow (Gulxayri) is used medicinally?",
      options: ["Root", "Aboveground part", "Fruit", "Leaf and rhizome"],
      correctAnswer: "Root",
    },
    {
      questionText: "What is the chemical composition of dill pharmacy product?",
      options: ["Essential oils, saponins, tannins", "Essential oils (anethole), fats, proteins", "Alkaloids, vitamins, fats", "Proteins, fats, alkaloids"],
      correctAnswer: "Essential oils (anethole), fats, proteins",
    },
    {
      questionText: "What are acceptable impurities in plant raw materials?",
      options: ["Organic and mineral impurities", "Insect and animal remains", "Parts of poisonous plants", "Animal remains"],
      correctAnswer: "Organic and mineral impurities",
    },
    {
      questionText: "What are unacceptable impurities in plant raw materials?",
      options: ["Mineral impurities", "Organic and mineral impurities", "Parts of the plant not used as raw materials", "Animal and insect remains and parts of poisonous plants"],
      correctAnswer: "Animal and insect remains and parts of poisonous plants",
    },
    {
      questionText: "How is the authenticity of medicinal plant products determined?",
      options: ["Macroscopic and microscopic analysis, qualitative reactions", "Macroscopic analysis", "Biological standardization", "Chemical analysis"],
      correctAnswer: "Macroscopic and microscopic analysis, qualitative reactions",
    },
    {
      questionText: "What do the mineral impurities in products consist of?",
      options: ["Sand, clods, stones, iron particles", "Sand, clods, and straw of other plants", "Plant straw, chaff and charcoal", "Sand, clods and other plant debris"],
      correctAnswer: "Sand, clods, stones, iron particles",
    },
    {
      questionText: "What are the organic impurities in products?",
      options: ["Iron particles, straw, chaff and debris", "Straw of other plants, sand, clods", "Parts of the same plant not used as product, plant straw, chaff, debris", "Debris, chaff and sand of other plants"],
      correctAnswer: "Parts of the same plant not used as product, plant straw, chaff, debris",
    },
    {
      questionText: "Which antihistamine drugs are used for allergies?",
      options: ["Tavegil, Pipolphen", "Intal, Mexamin", "Zaditen, Bikarsen", "Potassium chloride"],
      correctAnswer: "Tavegil, Pipolphen",
    },
    {
      questionText: "Which drugs are used in allergic reactions?",
      options: ["Histoglobulin", "Gentamicin", "Calcium gluconate", "Suprastin"],
      correctAnswer: "Suprastin",
    },
    {
      questionText: "What is a side effect of diphenhydramine (Dimedrol)?",
      options: ["Drowsiness", "Constipation", "Fever", "Hair loss"],
      correctAnswer: "Drowsiness",
    },
    {
      questionText: "Which drugs are used in anaphylactic shock?",
      options: ["Atropine, Vikasol", "Adrenaline, Prednisolone", "Dibazol, Pentamine", "Corvalol, Nitroglycerin"],
      correctAnswer: "Adrenaline, Prednisolone",
    },
    {
      questionText: "What is a side effect of glucocorticosteroids?",
      options: ["Bronchospasm", "Hypotension", "Diabetes", "Drowsiness"],
      correctAnswer: "Diabetes",
    },
    {
      questionText: "When is the main daily dose of prednisolone prescribed?",
      options: ["Morning", "Afternoon", "Evening", "Night"],
      correctAnswer: "Morning",
    },
    {
      questionText: "Which drugs are used in urticaria?",
      options: ["Disaggregants", "Antibiotics", "Diuretics", "Antihistamines"],
      correctAnswer: "Disaggregants",
    },
    {
      questionText: "Which drug is used for hives (urticaria)?",
      options: ["Diphenhydramine (Dimedrol)", "Dibazol", "Lasix", "Euphyllin"],
      correctAnswer: "Diphenhydramine (Dimedrol)",
    },
  ],
  ru: [
    {
      questionText: "Каковы функции Министерства здравоохранения?",
      options: ["Разработка перспективных целевых программ", "Контроль за оказанием медицинской помощи", "Разработка баланса спроса и изучение медицинских потребностей", "Все ответы верны"],
      correctAnswer: "Все ответы верны",
    },
    {
      questionText: "Сколько времени хранятся рецептурные бланки с наркотическими средствами в аптеке?",
      options: ["5 лет", "3 года", "8 лет", "6 лет"],
      correctAnswer: "5 лет",
    },
    {
      questionText: "Какое название указывается врачом в рецепте при назначении сложносоставных лекарств?",
      options: ["Международное непатентованное и торговое", "Международное непатентованное", "Торговое", "Международное"],
      correctAnswer: "Международное непатентованное",
    },
    {
      questionText: "Из каких аптек отпускаются препараты Залеплон и Прегабалин по рецепту?",
      options: ["Социальных и лицензированных аптек", "Из частных аптек", "Из акционерных аптек", "Из аптек ЛПУ"],
      correctAnswer: "Социальных и лицензированных аптек",
    },
    {
      questionText: "Что такое формулярная система?",
      options: ["Комплекс мер управления в здравоохранении", "Обеспечение максимального качества медпомощи с учётом условий", "Оптимальное использование ресурсов", "Все ответы верны"],
      correctAnswer: "Все ответы верны",
    },
    {
      questionText: "К видам внутреннего контроля относятся:",
      options: ["Проверка СЭС", "Прокуратура", "Проверка хокимията", "Фармацевтический контроль, инвентаризация, ревизия"],
      correctAnswer: "Фармацевтический контроль, инвентаризация, ревизия",
    },
    {
      questionText: "Какие органы проводят внешний контроль аптек?",
      options: ["Санитарно-эпидемиологические органы", "Налоговая, банк, хокимият", "Пожарная инспекция, МВД, прокуратура", "Все ответы верны"],
      correctAnswer: "Все ответы верны",
    },
    {
      questionText: "Какой документ оформляется по результатам фармконтроля?",
      options: ["Доверенность", "Акт", "Уведомление", "Требование"],
      correctAnswer: "Акт",
    },
    {
      questionText: "Из скольких частей состоит акт фармконтроля?",
      options: ["1", "3", "2", "4"],
      correctAnswer: "3",
    },
    {
      questionText: "Цель фармацевтического контроля:",
      options: ["Проверка фармпорядка в аптеке", "Сравнение фактических остатков с документами", "Проверка уплаты налогов", "Анализ финансовой деятельности"],
      correctAnswer: "Проверка фармпорядка в аптеке",
    },
    {
      questionText: "На какой срок выдается лицензия юр. и физ. лицам?",
      options: ["5 лет", "4 года", "8 лет", "10 лет"],
      correctAnswer: "5 лет",
    },
    {
      questionText: "Какую эффективность определяют в опытах «in vivo»?",
      options: ["Биологическую", "Фармацевтическую", "Патологическую", "Анатомическую"],
      correctAnswer: "Биологическую",
    },
    {
      questionText: "Какую эффективность определяют в опытах «in vitro»?",
      options: ["Фармацевтическую", "Цитологическую", "Патологическую", "Анатомическую"],
      correctAnswer: "Фармацевтическую",
    },
    {
      questionText: "Как готовится желатиновый раствор?",
      options: ["Сначала замачивают в части воды 30–60 мин, затем растворяют в оставшейся воде на водяной бане", "Растворяют в расчётном количестве воды, нагревая", "Сначала замачивают, затем растворяют в воде", "Растворяют в горячей воде, помешивая"],
      correctAnswer: "Сначала замачивают в части воды 30–60 мин, затем растворяют в оставшейся воде на водяной бане",
    },
    {
      questionText: "Допустимые отклонения при содержании 20% и более действующего вещества в концентрате:",
      options: ["±2 %, ±1 %", "±1 %, ±2 %", "±7,5 %, ±5%", "±9,8 %, ±10,2 %"],
      correctAnswer: "±2 %, ±1 %",
    },
    {
      questionText: "Если в рецепте не указана концентрация соляной кислоты, какую принимают по умолчанию?",
      options: ["8,2–8,4%", "0,242", "24,8–25,2%", "0,253"],
      correctAnswer: "8,2–8,4%",
    },
    {
      questionText: "Если не указана концентрация этанола в рецепте, какую берут?",
      options: ["0,9", "0,7", "0,6", "0,96"],
      correctAnswer: "0,7",
    },
    {
      questionText: "Если не указана концентрация крахмального раствора, какой раствор готовится?",
      options: ["0,02%", "0,03%", "0,05%", "0,07%"],
      correctAnswer: "0,03%",
    },
    {
      questionText: "Сколько пергидроля нужно для приготовления 100 мл 3% раствора перекиси водорода?",
      options: ["10 мл", "5 мл", "30 мл", "35 мл"],
      correctAnswer: "10 мл",
    },
    {
      questionText: "Сколько нужно воды и формалина для приготовления 200 мл 5% формалина?",
      options: ["190 мл воды и 10 мл формалина", "170 мл воды и 30 мл формалина", "175 мл и 25 мл формалина", "150 мл воды и 50 мл формалина"],
      correctAnswer: "190 мл воды и 10 мл формалина",
    },
    {
      questionText: "Сколько натрия бромида и воды нужно для 1000 мл 20% раствора (d=1,1488 г/мл)?",
      options: ["Натрий бромид 200 г, вода 949 мл", "Натрий бромид 200 г, вода 940 мл", "Натрий бромид 200 г, вода 969 мл", "Натрий бромид 200 г, вода 800 мл"],
      correctAnswer: "Натрий бромид 200 г, вода 940 мл",
    },
    {
      questionText: "Сколько воды нужно для приготовления 1 л 10% раствора натрия бромида? (ХОК=0,26)",
      options: ["974 мл", "900 мл", "1000 мл", "990 мл"],
      correctAnswer: "974 мл",
    },
    {
      questionText: "Рассчитайте объем микстуры: Кодеин 0,12, Натрий бромид и гидрокарбонат по 3,0 г, настойка белладонны 5 мл, настойка валерианы 20 мл, вода очищенная 200 мл.",
      options: ["225 мл", "233 мл", "220 мл", "231,12 мл"],
      correctAnswer: "225 мл",
    },
    {
      questionText: "Сколько воды нужно взять по следующему рецепту? Валериана 10,0, Мята 4,0 – до 200 мл, Амидопирин 0,6, Натрий бромид 3,0, Магний сульфат 0,8. СШК вал – 2,9, мята – 2,4.",
      options: ["239 мл", "200 мл", "242 мл", "250 мл"],
      correctAnswer: "239 мл",
    },
    {
      questionText: "Если не указана концентрация перекиси водорода, какой раствор используется?",
      options: ["0,03%", "0,1%", "0,2%", "0,39%"],
      correctAnswer: "0,03%",
    },
    {
      questionText: "Если в рецепте указано «глицерин», что подразумевается?",
      options: ["Глицерин с 10–16% воды", "Разбавленный глицерин", "Концентрированный глицерин", "Безводный глицерин"],
      correctAnswer: "Концентрированный глицерин",
    },
    {
      questionText: "Если не указана концентрация уксусной кислоты, какой раствор берется?",
      options: ["30%", "10%", "98%", "100%"],
      correctAnswer: "10%",
    },
    {
      questionText: "На каких этапах проверяют инъекционные растворы на механические примеси?",
      options: ["После фильтрации и стерилизации", "После стерилизации", "После упаковки", "После фильтрации"],
      correctAnswer: "После фильтрации и стерилизации",
    },
    {
      questionText: "Какие условия обеспечивают стерильность 0,5% раствора кальция хлорида?",
      options: ["Асептика, стерилизация при 120°C, 8 мин", "Асептические условия", "Асептика и стерилизация при 100°C, 30 мин", "Асептика, 180°C, 30 мин"],
      correctAnswer: "Асептика, стерилизация при 120°C, 8 мин",
    },
    {
      questionText: "Зачем стерилизуют натрий хлорид при 180°C 2 часа при приготовлении инъекционного раствора?",
      options: ["Для обезвоживания", "Для удаления пирогенов", "Для усиления действия", "Для ослабления действия"],
      correctAnswer: "Для удаления пирогенов",
    },
    {
      questionText: "Что такое лекарственное растение?",
      options: ["Нетоксичное лекарственное растение", "Содержит эфирные масла", "Содержит БАВ и используется для лечения и профилактики", "Применяется при болезни и её профилактике"],
      correctAnswer: "Содержит БАВ и используется для лечения и профилактики",
    },
    {
      questionText: "Что входит в нормативные документы? Выберите полный ответ.",
      options: ["ГОСТ, ФМ", "ВФМ, ФМ", "ГОСТ, КСТ", "КФМ, ФМ, ГОСТ, стандарт предприятия"],
      correctAnswer: "КФМ, ФМ, ГОСТ, стандарт предприятия",
    },
    {
      questionText: "Какие фитопрепараты производят в Узбекистане из растительного сырья?",
      options: ["Сборы, фильтр-пакеты, гранулы, сиропы, экстракты, таблетки", "Настойки, экстракты, сборы", "Сборы, экстракты", "Брикеты, сборы"],
      correctAnswer: "Сборы, фильтр-пакеты, гранулы, сиропы, экстракты, таблетки",
    },
    {
      questionText: "Химический состав подорожника (Зубтурум)?",
      options: ["Сердечные гликозиды", "Аукубин и горькие гликозиды", "Аукубин и полисахариды", "Флавоноиды и аукубин"],
      correctAnswer: "Аукубин и полисахариды",
    },
    {
      questionText: "В какой форме применяют подорожник в медицине?",
      options: ["Настой – при заболеваниях ЖКТ, Плантаглюцид – при язве", "Настой – при простуде", "Отвар – при кашле", "Плантаглюцид – при туберкулёзе"],
      correctAnswer: "Настой – при заболеваниях ЖКТ, Плантаглюцид – при язве",
    },
    {
      questionText: "Какая часть льна используется?",
      options: ["Корень", "Лист", "Надземная часть", "Семя"],
      correctAnswer: "Семя",
    },
    {
      questionText: "Какая часть алтей используется?",
      options: ["Корень", "Надземная часть", "Плод", "Лист и корневище"],
      correctAnswer: "Корень",
    },
    {
      questionText: "Химический состав аптечного укропа?",
      options: ["Эфирные масла, сапонины, дубильные вещества", "Эфирные масла (анетол), жиры, белки", "Алкалоиды, витамины, жиры", "Белки, жиры, алкалоиды"],
      correctAnswer: "Эфирные масла (анетол), жиры, белки",
    },
    {
      questionText: "Какие допустимые примеси есть в растительном сырье?",
      options: ["Органические и минеральные", "Остатки насекомых и животных", "Части ядовитых растений", "Остатки животных"],
      correctAnswer: "Органические и минеральные",
    },
    {
      questionText: "Какие примеси недопустимы в растительном сырье?",
      options: ["Минеральные примеси", "Органические и минеральные", "Части неиспользуемые в сырье", "Остатки животных, насекомых и ядовитые растения"],
      correctAnswer: "Остатки животных, насекомых и ядовитые растения",
    },
    {
      questionText: "Методы установления подлинности растительного сырья?",
      options: ["Макро-, микроскопия, качественные реакции", "Макроскопия", "Биостандартизация", "Химический анализ"],
      correctAnswer: "Макро-, микроскопия, качественные реакции",
    },
    {
      questionText: "Что входит в минеральные примеси?",
      options: ["Песок, комки, камни, металлические части", "Песок, комки и солома других растений", "Солома, труха и уголь", "Песок, комки и мусор других растений"],
      correctAnswer: "Песок, комки, камни, металлические части",
    },
    {
      questionText: "Что входит в органические примеси?",
      options: ["Металлические части, солома, труха, мусор", "Солома других растений, песок, комки", "Части той же травы, не входящие в сырьё, солома, труха, мусор", "Мусор других растений, труха и песок"],
      correctAnswer: "Части той же травы, не входящие в сырьё, солома, труха, мусор",
    },
    {
      questionText: "Какие препараты с антигистаминным действием применяются при аллергии?",
      options: ["Тавегил, Пипольфен", "Интал, Мексамин", "Задитен, Бикарсен", "Калий хлорид"],
      correctAnswer: "Тавегил, Пипольфен",
    },
    {
      questionText: "Какие препараты назначают при аллергии?",
      options: ["Гистоглобулин", "Гентамицин", "Глюконат кальция", "Супрастин"],
      correctAnswer: "Супрастин",
    },
    {
      questionText: "Побочный эффект димедрола?",
      options: ["Сонливость", "Запор", "Жар", "Выпадение волос"],
      correctAnswer: "Сонливость",
    },
    {
      questionText: "Препараты, применяемые при анафилактическом шоке:",
      options: ["Атропин, Викасол", "Адреналин, Преднизолон", "Дибазол, Пентамин", "Корвалол, Нитроглицерин"],
      correctAnswer: "Адреналин, Преднизолон",
    },
    {
      questionText: "Побочный эффект глюкокортикостероидов?",
      options: ["Бронхоспазм", "Гипотензия", "Сахарный диабет", "Сонливость"],
      correctAnswer: "Сахарный диабет",
    },
    {
      questionText: "Когда назначается основная суточная доза преднизолона?",
      options: ["Утром", "Днём", "Вечером", "Ночью"],
      correctAnswer: "Утром",
    },
    {
      questionText: "Какие препараты применяют при крапивнице?",
      options: ["Дезагреганты", "Антибиотики", "Диуретики", "Антигистамины"],
      correctAnswer: "Дезагреганты",
    },
    {
      questionText: "Какой препарат применяют при крапивнице?",
      options: ["Димедрол", "Дибазол", "Лазикс", "Эуфиллин"],
      correctAnswer: "Димедрол",
    },
  ]
  ,
  uz: [
    {
      questionText: "1  Sog\u02bbliqni saqlash vazirligining funksiyalari:",
      options: ["istiqbolli maqsadli dasturlar ishlab chiqish", "tibbiy yordam ko\u02bbrsatishni nazorat qilish", "so\u02bbrov balansini ishlab chiqish va tibbiy ehtiyojni o\u02bbrganish", "barcha javoblar to\u02bbg\u02bbri"],
      correctAnswer: "barcha javoblar to\u02bbg\u02bbri",
    },
    {
      questionText: "2  Tarkibida giyohvand dori vositalar bo\u02bblgan retseptura blankalari dorixonada qaysi muddatgacha saqlanadi?",
      options: ["5 yil", "3 yil", "8 yil", "6 yil"],
      correctAnswer: "5 yil",
    },
    {
      questionText: "3  Murakkab tarkibli dori vositalari tayinlanganda retseptda shifokor tomonidan uning qanday nomi ko\u02bbrsatiladi?",
      options: ["xalqaro patentlanmagan nomi, savdo nomi", "xalqaro patentlanmagan nomi", "savdo nomi", "xalqaro nomi"],
      correctAnswer: "xalqaro patentlanmagan nomi",
    },
    {
      questionText: "4  Zaleplon va Pregabalin dori vositalari retsept asosida qaysi dorixonalardan beriladi?",
      options: ["ijtimoiy dorixona va maxsus litsenziyali dorixonadan", "xususiy dorixonalardan", "aksiyadorlik dorixonalardan", "dvolash-profilaktika muassasalari dorixonalaridan"],
      correctAnswer: "ijtimoiy dorixona va maxsus litsenziyali dorixonadan",
    },
    {
      questionText: "5  Formulyar tizim bu...........",
      options: ["sog\u02bbliqni saqlashdagi tuzilmalar va boshqaruv chora-tadbirlarining kompleksi", "tibbiy yordamni aniq shart-sharoitlarni hisobga olgan holda maksimal yuqori sifatini ta\u02bcminlash", "mavjud resurslardan imkon qadar yaxshirok foydalanish", "barcha javoblar to\u02bbg\u02bbri"],
      correctAnswer: "barcha javoblar to\u02bbg\u02bbri",
    },
    {
      questionText: "6  Ichki nazorat turiga kiradi:",
      options: ["SESsanitar-epidemiologik xizmat tekshiruvi", "prokuratura tekshiruvi", "hokimiyat tomonidan", "farmasevtik nazorat, inventarizatsiya, reviziya"],
      correctAnswer: "farmasevtik nazorat, inventarizatsiya, reviziya",
    },
    {
      questionText: "7  Tashqi nazoratda dorixonalarni qanday tashkilotlar tekshiradi?",
      options: ["sanitariya-epidemiologiya organlari", "soliq inspeksiyasi, bank, hokimiyat;", "yong\u02bbindan saqlash inspeksiyasi,ichki ishlar, prokuratura;", "hamma javob to\u02bbg\u02bbri"],
      correctAnswer: "hamma javob to\u02bbg\u02bbri",
    },
    {
      questionText: "8  Farmasevtik nazorat natijasi rasmiylashtiriladigan hujjat nomi:",
      options: ["ishonchnoma", "dalolatnoma", "bildirishnoma", "talabnoma"],
      correctAnswer: "dalolatnoma",
    },
    {
      questionText: "9  Farmasevtik nazorat dalolatnomasi necha qismdan iborat?",
      options: ["1", "3", "2", "4"],
      correctAnswer: "3",
    },
    {
      questionText: "10  Farmasevtik nazoratning maqsadi:",
      options: ["dorixonalardagi farmasevtik tartibni tekshirish", "haqiqiy mol qoldig\u02bbini hujjatlardagi qoldiq bilan taqqoslash", "soliqlarning to\u02bblanishini tekshirish", "moliyaviy faoliyat natijalarini tekshirish"],
      correctAnswer: "dorixonalardagi farmasevtik tartibni tekshirish",
    },
    {
      questionText: "11  Yuridik va jismoniy shaxslarga litsenziya qancha muddatga beriladi?",
      options: ["5 yilga", "4 yilga", "8 yilga", "10 yilga"],
      correctAnswer: "5 yilga",
    },
    {
      questionText: "12  \u201cIn vivo\u201d tajribalarida qanday samaradorlik aniqlanadi?",
      options: ["biologik samaradorlik", "farmasevtik samaradorlik", "patologik samaradorlik", "anatomik samaradorlik"],
      correctAnswer: "biologik samaradorlik",
    },
    {
      questionText: "13  \u201cIn vitro\u201d tajribalarida qanday samaradorlik aniqlanadi?",
      options: ["farmasevtik samaradorlik", "sitologik samaradorlik", "patologik samaradorlik", "anatomik samaradorlik"],
      correctAnswer: "farmasevtik samaradorlik",
    },
    {
      questionText: "14  Jelatin eritmasi qanday tayyorlanadi?",
      options: ["avval suvning bir qismida 30-60 daq davomida bo\u02bbktiriladi, keyin esa suvning qolgan qismida suv hammomida qizdirib eritiladi", "suv hammomida qizdirib turib hisoblangan miqdoridagi suvda eritiladi", "oldin suvning bir qismida 30-60 dak davomida bo\u02bbktiriladi, keyin esa suvning qolgan qismida eritiladi", "hisoblangan miqdoridagi issiq suvda aralashtirib eritiladi"],
      correctAnswer: "avval suvning bir qismida 30-60 daq davomida bo\u02bbktiriladi, keyin esa suvning qolgan qismida suv hammomida qizdirib eritiladi",
    },
    {
      questionText: "15  Konsentratlarda dori modda miqdori 20% gacha yoki 20% dan ko\u02bbp bo\u02bblsa, ruxsat etilgan og\u02bbish me\u02bcyorlari qancha bo\u02bbladi?",
      options: ["\u00b1 2 %, \u00b1 1 %", "\u00b1 1 %, \u00b1 2 %", "\u00b1 7,5 %, \u00b1 5%", "\u00b1 9,8 %, \u00b1 10,2 %"],
      correctAnswer: "\u00b1 2 %, \u00b1 1 %",
    },
    {
      questionText: "16  Agar retseptda xlorid kislotasining konsentratsiyasi ko\u02bbrsatilmagan bo\u02bblsa, necha foizligi tushuniladi?",
      options: ["8,2-8,4%", "0.242", "24,8-25,2%", "0.253"],
      correctAnswer: "8,2-8,4%",
    },
    {
      questionText: "17  Agar retseptda etil spirti konsentratsiyasi ko\u02bbrsatilmagan bo\u02bblsa, necha foizligi tushuniladi?",
      options: ["0.9", "0.7", "0.6", "0.96"],
      correctAnswer: "0.7",
    },
    {
      questionText: "18  Agar retseptda kraxmal eritmasi konsentratsiyasi ko\u02bbrsatilmagan bo\u02bblsa, necha foizli eritmasi tayyorlanadi?",
      options: ["0.02", "0.03", "0.05", "0.07"],
      correctAnswer: "0.03",
    },
    {
      questionText: "19  100 ml 3% li vodorod peroksid eritmasini tayyorlash uchun qancha pergidrol olinadi?",
      options: ["10 ml", "5 ml", "30 ml", "35 ml"],
      correctAnswer: "10 ml",
    },
    {
      questionText: "20  200 ml 5% formalin eritmasini tayyorlash uchun necha ml suv va formalin kerak bo\u02bbladi?",
      options: ["190 ml suv va 10 ml formalin", "170 ml suv va 30 ml formalin", "175 ml va 25 ml formalin", "150 ml suv va 50 ml formalin"],
      correctAnswer: "190 ml suv va 10 ml formalin",
    },
    {
      questionText: "21  1000 ml 20% natriy bromid konsentrlangan eritmasini (d=1,1488 g/ml) tayyorlash uchun qancha natriy bromid va suv kerak bo\u02bbladi?",
      options: ["Natriy bromid 200 g, suv 949 ml", "Natriy bromid 200 g, suv 940 ml", "Natriy bromid 200 g, suv 969 ml", "Natriy bromid 200 g, suv 800 ml"],
      correctAnswer: "Natriy bromid 200 g, suv 940 ml",
    },
    {
      questionText: "22  1 l 10% natriy bromid eritmasini tayyorlash uchun qancha suv kerakligini hisoblab toping? (XOK=0,26)",
      options: ["974 ml", "900 ml", "1000 ml", "990 ml"],
      correctAnswer: "974 ml",
    },
    {
      questionText: "23  Quyidagi mikstura hajmini hisoblang: Oling: Kodein 0,12, Natriy bromid, Natriy gidrokarbonat teng miqdorda 3,0 g dan, Belladonna tindirmasi 5 ml, Valeriana tindirmasi 20 ml, Tozalangan suv 200 ml, Aralashtiring. Bering. Belgilang",
      options: ["225 ml", "233 ml", "220 ml", "231,12 ml"],
      correctAnswer: "225 ml",
    },
    {
      questionText: "24  Quyidagi tarkib bo\u02bbyicha dori turini tayyorlash uchun qancha suv olish kerak? Oling: Valeriana ildiz va ildizpoyasi damlamasi - 10,0, Yalpiz bargi damlamasi 4,0 -200 ml, Amidopirini 0,6, Natriy bromid 3,0, Magniy sulfat 0,8, Aralashtiring. Bering. Belgilang. SShK (suv shimish koeffitsienti) val-2,9. SShK(suv shimish koeffitsienti) yalp-2,4",
      options: ["239 ml", "200 ml", "242 ml", "250 ml"],
      correctAnswer: "239 ml",
    },
    {
      questionText: "25  Agar retseptda vodorod peroksid eritmasining konsentratsiyasi ko\u02bbrsatilmagan bo\u02bblsa, necha % gi beriladi?",
      options: ["0.03", "0.1", "0.2", "0.39"],
      correctAnswer: "0.03",
    },
    {
      questionText: "26  Agar retseptda \u201cglitserin\u201d deb yozilgan bo\u02bblsa, qanday glitserin tushuniladi?",
      options: ["10-16% suv saqlagan glitserin", "suyultirilgan glitserin", "konsentrlangan glitserin", "suvsiz glitserin"],
      correctAnswer: "konsentrlangan glitserin",
    },
    {
      questionText: "27  Agar sirka kislotasi eritmasining konsentratsiyasi ko\u02bbrsatilmagan bo\u02bblsa, uning necha % eritmasi tushuniladi?",
      options: ["30% li", "10% li", "98% li", "100% li"],
      correctAnswer: "10% li",
    },
    {
      questionText: "28  In\u02bceksiya uchun eritmalar texnologik jarayonning qanday bosqichlarida mexanik qo\u02bbshilmalarga tekshiriladi?",
      options: ["filtrlash va sterilizatsiyadan keyin", "sterilizatsiyadan keyin", "qadoq va jihozlangan so\u02bbng", "filtrlashdan keyin"],
      correctAnswer: "filtrlash va sterilizatsiyadan keyin",
    },
    {
      questionText: "29  0,5% kalsiy xlorid in\u02bceksion eritmasini sterilligini ta\u02bcminlaydigan sharoitlarni ko\u02bbrsating?",
      options: ["aseptik sharoit, sterilizatsiya sharoiti 120\u00b0C, 8 daqiqa", "aseptik sharoit", "aseptik sharoit, sterilizatsiya sharoiti 100\u00b0C, 30 daqiqa", "aseptik sharoit, sterilizatsiya sharoiti 180\u00b0C, 30 daqiqa"],
      correctAnswer: "aseptik sharoit, sterilizatsiya sharoiti 120\u00b0C, 8 daqiqa",
    },
    {
      questionText: "30  In\u02bceksiya uchun eritma tayyorlashda ishlatiladigan natriy xlorid qanday maqsadda 180\u00b0C da 2 soat davomida sterilizatsiya qilinadi?",
      options: ["suvsizlantirish uchun", "pirogen moddalarni yo\u02bbqotish uchun", "farmakologik ta\u02bcsirini ortirish uchun", "farmakologik ta\u02bcsirini kamaytirish uchun"],
      correctAnswer: "pirogen moddalarni yo\u02bbqotish uchun",
    },
    {
      questionText: "31  Dorivor o\u02bbsimlik nima?",
      options: ["zaharsiz dorivor o\u02bbsimlik", "tarkibida efir moyi saqlagan o\u02bbsimlik", "tarkibida BFM saqlagan va biror kasallikni davolash va kasallikni oldini  olish uchun ishlatiladigan o\u02bbsimlik", "biror kasallikni davolash va shu kasallikni oldini olish uchun ishlatiladigan o\u02bbsimlik"],
      correctAnswer: "tarkibida BFM saqlagan va biror kasallikni davolash va kasallikni oldini  olish uchun ishlatiladigan o\u02bbsimlik",
    },
    {
      questionText: "32  Me\u02bcyoriy hujjatlarga nimalar kiradi? To\u02bbliq javob keltirilgan javobni tanlang.",
      options: ["DST, FM", "VFM, FM", "DST, KST", "KFM, FM, DST, Korxona standarti"],
      correctAnswer: "KFM, FM, DST, Korxona standarti",
    },
    {
      questionText: "33  O\u02bbzbekiston korxonalarida dorivor o\u02bbsimlik xomashyolaridan qanday fitopreparatlar turi ishlab chiqariladi?",
      options: ["yig\u02bbmalar, filtr-paketlar, granulalar, sharbatlar, qiyomlar, presslangan  tabletkalar", "nastoyka, ekstraktlar, yig\u02bbmalar", "yig\u02bbmalar, ekstraktlar", "briketlar, yig\u02bbmalar"],
      correctAnswer: "yig\u02bbmalar, filtr-paketlar, granulalar, sharbatlar, qiyomlar, presslangan  tabletkalar",
    },
    {
      questionText: "34  Zubturum mahsulotining kimyoviy tarkibi?",
      options: ["yurak glikozidlari", "glikozid aukubin, achchiq glikozidlar", "glikozid aukubin, polisaxaridlar", "flavonoidlar, glikozid aukubin"],
      correctAnswer: "glikozid aukubin, polisaxaridlar",
    },
    {
      questionText: "35  Zubturum mahsulotining tibbiyotda qanday shaklda ishlatililadi?",
      options: ["damlama shaklida me\u02bcda ichak kasalliklarida, plantaglyusid preparati shaklida me\u02bcda-ichak yara kasalliklarida", "damlama shaklida shamollashda ishlatiladi", "qaynatma shaklida o\u02bbpka shamollaganda", "plantaglyusid shaklida tuberkulyoz kasalligida"],
      correctAnswer: "damlama shaklida me\u02bcda ichak kasalliklarida, plantaglyusid preparati shaklida me\u02bcda-ichak yara kasalliklarida",
    },
    {
      questionText: "36  Zig\u02bbir mahsuloti?",
      options: ["ildizi", "bargi", "yer ustki qismi", "urug\u02bbi"],
      correctAnswer: "urug\u02bbi",
    },
    {
      questionText: "37  Dorivor Gulxayri mahsuloti?",
      options: ["ildizi", "yer ustki qismi", "mevasi;", "bargi va ildizpoyasi"],
      correctAnswer: "ildizi",
    },
    {
      questionText: "38  Dorixona ukropi maxsulotining kimyoviy tarkibi?",
      options: ["efir moylari, saponinlar, oshlovchi moddalar", "efir moylari (anetol), yog\u02bblar, oqsillar", "alkaloidlar, vitaminlar, yog\u02bblar", "oqsil moddalari, yog\u02bblar, alkaloidlar"],
      correctAnswer: "efir moylari (anetol), yog\u02bblar, oqsillar",
    },
    {
      questionText: "39  O\u02bbsimlik mahsulotida ruxsat etiladigan aralashmalarga nimalar kiradi?",
      options: ["organik va mineral aralashmalar", "hasharot va hayvonot qoldiqlari", "zaharli o\u02bbsimliklar qismi", "hayvonot qoldiqlari"],
      correctAnswer: "organik va mineral aralashmalar",
    },
    {
      questionText: "40  Ruxsat etilmaydigan aralashmalarga nimalar kiradi?",
      options: ["mineral aralashmalar", "organik va mineral aralashmalar", "o\u02bbsimlikning xomashyo bo\u02bblmagan qismlari", "hayvonot va hasharot qoldiqlari hamda zaharli o\u02bbsimliklar qismi"],
      correctAnswer: "hayvonot va hasharot qoldiqlari hamda zaharli o\u02bbsimliklar qismi",
    },
    {
      questionText: "41  Dorivor o\u02bbsimlik mahsulotlarini chinligini aniqlash usullari?",
      options: ["makroskopik va mikroskopik, sifat reaksiyalar", "makroskopik", "biologik standartizatsiya", "kimyoviy tahlil"],
      correctAnswer: "makroskopik va mikroskopik, sifat reaksiyalar",
    },
    {
      questionText: "42  Mahsulotlar tarkibidagi mineral aralashmalar nimalardan iborat?",
      options: ["qum, kesak, tosh, temir parchalari", "qum,kesak va boshqa o\u02bbsimliklarning somoni", "o\u02bbsimlik somoni, qipig\u02bbi va ko\u02bbmiri", "qum,kesak va boshqa o\u02bbsimlik xashagi"],
      correctAnswer: "qum, kesak, tosh, temir parchalari",
    },
    {
      questionText: "43  Mahsulotlar tarkibidagi organik aralashmalarga nimalar kirad?",
      options: ["temir parchalari, somon, qipiq va xashak", "boshqa o\u02bbsimlik somoni qum, kesak", "shu o\u02bbsimlikning mahsulot bo\u02bblmagan boshqa qismi, o\u02bbsimlik somoni, qipig\u02bbi, xashagi", "boshqa o\u02bbsimlik xashagi, qipig\u02bbi va qumlar"],
      correctAnswer: "shu o\u02bbsimlikning mahsulot bo\u02bblmagan boshqa qismi, o\u02bbsimlik somoni, qipig\u02bbi, xashagi",
    },
    {
      questionText: "44  Allergiyaga qarshi ishlatiladigan antigistamin ta\u02bcsirli preparatlarni ko\u02bbrsating.",
      options: ["tavegil, pipolfen", "intal, meksamin", "zaditen, bikarsen", "kaliy xlorid"],
      correctAnswer: "tavegil, pipolfen",
    },
    {
      questionText: "45  Allergiyada beriladigan preparatlarni ko\u02bbrsating:",
      options: ["gistoglobulin", "gentamitsin", "glyukonat kalsiy", "suprastin"],
      correctAnswer: "suprastin",
    },
    {
      questionText: "46  Dimedrolninig nojo\u02bbya ta\u02bcsiri:",
      options: ["uyquchanlik", "qabziyat", "isitma", "soch to\u02bbkilishi"],
      correctAnswer: "uyquchanlik",
    },
    {
      questionText: "47  Anafilaktik shokda qo\u02bbllaniladi:",
      options: ["atropin, vikasol", "adrenalin, prednizolon", "dibazol, pentamin", "korvalol, nitroglitserin"],
      correctAnswer: "adrenalin, prednizolon",
    },
    {
      questionText: "48  Glyukokortikosteroidlarninig nojo\u02bbya ta\u02bcsiri:",
      options: ["bronxospazm", "gipotenziya", "diabet", "uyquchanlik"],
      correctAnswer: "diabet",
    },
    {
      questionText: "49  Prednizolonning sutkalik dozasi asosiy qismi buyuriladi:",
      options: ["ertalab", "kunduzi", "kechqurun", "kechasi"],
      correctAnswer: "ertalab",
    },
    {
      questionText: "50  Eshakemida qo\u02bbllaniladigan preparatlar:",
      options: ["dezagregant", "antibiotik", "diuretik", "antigistamin"],
      correctAnswer: "dezagregant",
    },
    {
      questionText: "51  Krapivnitsada qaysi dori vositasi qo\u02bbllaniladi:",
      options: ["dimedrol", "dibazol", "laziks", "eufillin"],
      correctAnswer: "dimedrol",
    },
    {
      questionText: "52  Qaysi preparatlar alkaloidlar guruhiga kiradi?",
      options: ["adrenalin", "rezerpin, efedrin", "noradrenalin", "midantan"],
      correctAnswer: "rezerpin, efedrin",
    },
    {
      questionText: "53  Adrenalinning asosiy farmakologik ta\u02bcsirlarini ko\u02bbrsating:",
      options: ["qon bosimini oshiradi va yurak ishini tezlashtiradi", "noradrenalindan kuchsiz ta\u02bcsir etadi", "bilvosita adrenoblokator ta\u02bcsir etadi", "MNSni susaytiradi"],
      correctAnswer: "qon bosimini oshiradi va yurak ishini tezlashtiradi",
    },
    {
      questionText: "54  Dori vositalarining homilaga salbiy ta\u02bcsirini ko\u02bbrsating:",
      options: ["disbakterioz ta\u02bcsiri", "zaharli ta\u02bcsiri", "teratogen ta\u02bcsir", "blastomogen ta\u02bcsiri"],
      correctAnswer: "teratogen ta\u02bcsir",
    },
    {
      questionText: "55  Qariyalarda dorilarning qanday dozalash kerak:",
      options: ["50% ga kamaytirish", "10% ga oshirish", "50% ga oshirish", "10% ga kamaytirish"],
      correctAnswer: "10% ga kamaytirish",
    },
    {
      questionText: "56  Dorilarni parenteral yo\u02bbl bilan yuborishga kiradi:",
      options: ["to\u02bbg\u02bbri ichakka", "og\u02bbiz orqali", "til ostiga", "mushak orasiga"],
      correctAnswer: "mushak orasiga",
    },
    {
      questionText: "57  Dorilarni enteral yo\u02bbl bilan yuborishga kiradi:",
      options: ["to\u02bbg\u02bbri ichakka", "teri ostiga", "mushak orasiga", "teri orasiga"],
      correctAnswer: "to\u02bbg\u02bbri ichakka",
    },
    {
      questionText: "58  Dori vositalarini og\u02bbiz orqali yuborishga xos:",
      options: ["steril sharoitning talab etilishi", "ta\u02bcsirining tez yuzaga chiqishi", "dori vositasiga oshqozon-ichak-tizimi fermentlarining ta\u02bcsiri", "dozaning aniq bo\u02bblishi"],
      correctAnswer: "dori vositasiga oshqozon-ichak-tizimi fermentlarining ta\u02bcsiri",
    },
    {
      questionText: "59  Dori vositalarini parenteral yo\u02bbl bilan yuborishga xos:",
      options: ["oshqozon-ichak-tizimini chetlab o\u02bbtilishi", "dori vositasiga Oshqozon-ichak-tizimi fermentlarining ta\u02bcsiri", "ta\u02bcsirining tez yuzaga chiqmasligi", "steril sharoitning talab etilmasligi"],
      correctAnswer: "oshqozon-ichak-tizimini chetlab o\u02bbtilishi",
    },
    {
      questionText: "60  Shoshilinch tibbiy yordamda dori vositasini eng samarali yuborish yo\u02bblini aniqlang:",
      options: ["sublingval", "rektal", "peroral", "vena ichiga"],
      correctAnswer: "vena ichiga",
    },
    {
      questionText: "61  \u201cDori-darmon\u02bc Aksiyadorlik kompaniyasi faoliyatini muvofiqlashtirish qaysi tashkilot zimmasiga biriktirildi?",
      options: ["O\u02bbzbekiston Respublikasi Sog\u02bbliqni saqlash vazirligi", "Dori-darmon aksiyadorlik uyushmasi", "Tibbiy texnika sifatini nazorat qilish bo\u02bblimi", "Ilmiy profilaktika markazi"],
      correctAnswer: "O\u02bbzbekiston Respublikasi Sog\u02bbliqni saqlash vazirligi",
    },
    {
      questionText: "62  \u201cDori-darmon\u201d Aksiyadorlik kompaniyasining asosiy vazifalari:",
      options: ["sifatli dori vositalari va tibbiyot buyumlari bilan taminlash", "davlat rezervining dori vositalari bilan tibbiyot buyumlariga ehtiyojlarini qondirishni ta\u02bcminlash", "farmatsevtik mahsulotlari resurlari to\u02bbg\u02bbrisidagi yagona respublika", "axborotlar tizimini yaratish"],
      correctAnswer: "axborotlar tizimini yaratish",
    },
    {
      questionText: "barcha javoblar to\u02bbg\u02bbri",
      options: ["63  O\u02bbzbekiston Respublikasi Sog\u02bbliqni saqlash vazirligining asosiy vazifalari: aholi sog\u02bblig\u02bbini muhofaza qilish", "dori vositalari yaratish", "farmatsevtika sanoatini kompleks rivojlantirish", "dori vositalaini ishlab chiqarish"],
      correctAnswer: "63  O\u02bbzbekiston Respublikasi Sog\u02bbliqni saqlash vazirligining asosiy vazifalari: aholi sog\u02bblig\u02bbini muhofaza qilish",
    },
    {
      questionText: "64  Reseptda qaysi belgilardan foydalanish man etiladi?",
      options: ["ichish uchun", "ma\u02bclum", "qoida tariqasida", "barcha javoblar to\u02bbg\u02bbri"],
      correctAnswer: "barcha javoblar to\u02bbg\u02bbri",
    },
    {
      questionText: "65  Reseptning yirtma koreshogida qanday ma\u02bclumotlar aks ettiriladi?",
      options: ["bemorning familya ismi sharifi, yoshi", "resept yozilgan sana", "shifokorning familiya, ismi, sharifi, kasllik tarixining nomeri", "barcha javoblar to\u02bbg\u02bbri"],
      correctAnswer: "barcha javoblar to\u02bbg\u02bbri",
    },
    {
      questionText: "66  Retsept blankalari necha xil bo\u02bbladi?",
      options: ["6 xil", "2 xil", "4 xil", "3 xil"],
      correctAnswer: "6 xil",
    },
    {
      questionText: "67  Retsept tarkibida kuchli ta\u02bcsir etuvchi, giyohvand, psixotrop moddalar va prekursorlar bo\u02bblsa bunday dorilar retsepti nima qilinadi?",
      options: ["dorixonada qolmayadi", "dorixonada qoladi va bemorga signatura beriladi", "bemorlarga bepul dori vositasi beriladi", "to\u02bbg\u02bbri javob yo\u02bbq"],
      correctAnswer: "dorixonada qolmayadi",
    },
    {
      questionText: "68  Imtiyozli dori vositalari berish uchun retsept necha nusxada yoziladi?",
      options: ["faqat bitta", "2 nusxada", "2 va undan ortiq", "barcha javoblar to\u02bbg\u02bbri"],
      correctAnswer: "2 nusxada",
    },
    {
      questionText: "69  Tuzatishlar qilingan, bir-biriga to\u02bbg\u02bbri kelmaydigan dori vositalari yozilgan retseptlarni qanday yozuv bilan bekor qilinadi?",
      options: ["retsept haqiqiy emas", "retsept soxta", "retseptga tuzatish kiritish kerak", "retseptda xatolik mavjud"],
      correctAnswer: "retseptda xatolik mavjud",
    },
    {
      questionText: "70  Kuchli ta\u02bcsir etuvchi moddalari bo\u02bblgan dorilar bo\u02bbyicha yozilgan retseptlar necha kungacha yaroqli hisoblanadi?",
      options: ["10 kun", "6 kun", "2 kun", "4 kun"],
      correctAnswer: "10 kun",
    },
    {
      questionText: "71  Nazorat analitik laboratoriyasining tarozi xonasiga qanday asboblar joylashtiriladi?",
      options: ["analitik tarozi", "fotokolorimetr, potensiometr", "refraktometr", "spektrofotometr"],
      correctAnswer: "analitik tarozi",
    },
    {
      questionText: "72  Nazorat analitik laboratoriyasining optik xonasiga qanday asboblar joylashtiriladi?",
      options: ["refraktometr", "refraktometr, fotoelektrokolorimetr, analitik torozi, potensiometr, spektrofotometr", "potensiometr, spektrofotometr", "analitik tarozi"],
      correctAnswer: "refraktometr, fotoelektrokolorimetr, analitik torozi, potensiometr, spektrofotometr",
    },
    {
      questionText: "73  Aseptik blok dezinfeksiya qilinadi:",
      options: ["har kuni", "har smenada", "har soatda", "har hafta"],
      correctAnswer: "har kuni",
    },
    {
      questionText: "74  Aseptik blokda sanitariya holati tekshiriladi:",
      options: ["har kuni", "har smenada", "har soatda", "har hafta"],
      correctAnswer: "har kuni",
    },
    {
      questionText: "75  Shifoxonalararo dorixonaning asosiy vazifasi:",
      options: ["davolash profilaktika muassasasi va ulardan tashqari sog\u02bbliqni saqlash punktlari, maorif va ijtimoiy ta\u02bcminot, sanitariya va profilaktika muassasalarini ham dori vositalari bilan ta\u02bcminlash", "davolash profilaktika muassasasi larni dori vositalari bilan ta\u02bcminlash", "aholini dori vositalari bilan ta\u02bcminlash", "dori vositalari sifatini nazorat qilish"],
      correctAnswer: "davolash profilaktika muassasasi va ulardan tashqari sog\u02bbliqni saqlash punktlari, maorif va ijtimoiy ta\u02bcminot, sanitariya va profilaktika muassasalarini ham dori vositalari bilan ta\u02bcminlash",
    },
    {
      questionText: "76  Xo\u02bbjalik va maishiy xonalarga qaysi xonalar kiradi?",
      options: ["dam olish xonasi, shaxsiy gigiena xonalar", "yuvish xonasi", "shisha idishlar saqlanadigan xona", "yordamchi materiallar saqlanadigan xona"],
      correctAnswer: "dam olish xonasi, shaxsiy gigiena xonalar",
    },
    {
      questionText: "77  Aseptik blokda qanday jixozlar bo\u02bbladi?",
      options: ["mexanik aralashtirgichlar, turli tipdagi steril eritmalarni tozaligini  tekshiruvchi apparatlar, shisha idishlar og\u02bbzini alyumin qalpoqchalar bilan berkitishda ishlatiladigan stanokcha", "po\u02bbkak qopqoqlarni kichraytiradigan moslamalar", "analitik torozilar, turli tipdagi steril eritmalarni tozaligini tekshiruvchi apparatlar", "potensiometr, turli tipdagi steril eritmalarni tozaligini tekshiruvchi apparatlar"],
      correctAnswer: "mexanik aralashtirgichlar, turli tipdagi steril eritmalarni tozaligini  tekshiruvchi apparatlar, shisha idishlar og\u02bbzini alyumin qalpoqchalar bilan berkitishda ishlatiladigan stanokcha",
    },
    {
      questionText: "78  Shifoxonalararo dorixonalar boshqa dorixonalardan nimasi bilan farqlanadi?",
      options: ["yakka tartibda tayyorlanadigan dori vositalarining asosiy qismini 60-90%  ni suyuq dorilar, in\u02bceksiya uchun ishlatiladigan eritmalar tashkil qiladi", "dorixona retsepturasining 50% ni in\u02bceksiya eritmalari tashkil qiladi", "dorixona retsepturasining 60%ini poroshoklar tashkil qiladi", "dorixona retsepturasining 100% ini damlamalar tashkil qiladi"],
      correctAnswer: "yakka tartibda tayyorlanadigan dori vositalarining asosiy qismini 60-90%  ni suyuq dorilar, in\u02bceksiya uchun ishlatiladigan eritmalar tashkil qiladi",
    },
    {
      questionText: "79  Farmatsevt texnologning asosiy vazifalari:",
      options: ["bo\u02bblimlardan talabnomalarni qabul qilish, dorilar sifatini nazorat qilish,aseptik xonada tayyorlangan dori vositalar sifatini nazorat qilish", "dori vositalarini saqlash, dorilar sifatini nazorat qilish", "dori vositalirini guruxlariga ajratish, dori vositalar sifatini nazorat qilish", "dori vositalarini nazorat qilish, bo\u02bblimlardan talabnomalarni qabul qilish"],
      correctAnswer: "bo\u02bblimlardan talabnomalarni qabul qilish, dorilar sifatini nazorat qilish,aseptik xonada tayyorlangan dori vositalar sifatini nazorat qilish",
    },
    {
      questionText: "80  Giyohvand dori vositalari uchun talabnomalar shifoxonalararo dorixonada necha yil saqlanadi?",
      options: ["1 oy", "1 yil", "3 yil", "5 yil"],
      correctAnswer: "5 yil",
    },
    {
      questionText: "81  Nomi bo\u02bbyicha miqdoriy hisobdagi dori vositalari uchun talabnomalar shifoxonalararo dorixonada necha yil saqlanadi?",
      options: ["5 yil", "4 yil", "1 yil", "2 yil"],
      correctAnswer: "2 yil",
    },
    {
      questionText: "82  Shifoxonalararo dorixonaning ishlab chiqarish xonalariga qanday xonalar kiradi?",
      options: ["talabnomani qabul qiladigan xona, retseptura, assistentlar. konsentrat va  yarim fabrikatlarni tayyorlash, distilyasiya xonalari", "tayyor dori vositalari xonalari", "mudirning xonasi", "xodimlarning dam olish xonasi"],
      correctAnswer: "talabnomani qabul qiladigan xona, retseptura, assistentlar. konsentrat va  yarim fabrikatlarni tayyorlash, distilyasiya xonalari",
    },
    {
      questionText: "83  Dorixonada maxsus litsenziyasiz qanday dori vositalarini tayyorlash, qabul qilish, saqlash va sotish taqiqlanadi?",
      options: ["kuchli ta\u02bcsir etuvchi moddalarni, giyohvand dori vositalarini", "zardoblarni", "vaksinalarni", "dorivor o\u02bbsimliklarni"],
      correctAnswer: "kuchli ta\u02bcsir etuvchi moddalarni, giyohvand dori vositalarini",
    },
    {
      questionText: "84  Dorixona shaxobchasini davolash profilaktika muassasasi maydonida ochishiga ruxsat etiladimi?",
      options: ["bosh vrachning ruxsati bilan", "ruxsat etiladi", "dorixona rahbari tashabbusi bilan", "ruxsat etilmaydi"],
      correctAnswer: "bosh vrachning ruxsati bilan",
    },
    {
      questionText: "85  Kuchli ta\u02bcsir etuvchi dori vositalariga yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["1 oy", "2 oy", "1 yil", "5 yil"],
      correctAnswer: "1 yil",
    },
    {
      questionText: "86  Atropin sulfat 0,1% li eritmasi uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["2 oy", "1 yil", "3 yil", "5 yil"],
      correctAnswer: "3 yil",
    },
    {
      questionText: "87  Dikain uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["1 oy", "2 oy", "1 yil", "3 yil"],
      correctAnswer: "1 yil",
    },
    {
      questionText: "88  Promedol 2% - 1,0 eritmasi uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["2 oy", "1 yil", "3 yil", "5 yil"],
      correctAnswer: "5 yil",
    },
    {
      questionText: "89  Etil spirtiga yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["1 oy", "2 oy", "1 yil", "5 yil"],
      correctAnswer: "1 yil",
    },
    {
      questionText: "90  Morfin uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["1 oy", "1 yil", "3 yil", "5 yil"],
      correctAnswer: "5 yil",
    },
    {
      questionText: "91  Omnopon uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["1 oy", "2 oy", "1 yil", "5 yil"],
      correctAnswer: "5 yil",
    },
    {
      questionText: "92  Imtiyozli beriladigan dori retseptlarini dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["1 oy", "2 oy", "3 yil", "5 yil"],
      correctAnswer: "5 yil",
    },
    {
      questionText: "93  Kumush nitrat uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["1 yil", "3 yil", "4 yil", "5 yil"],
      correctAnswer: "3 yil",
    },
    {
      questionText: "94  Strixnin nitrat 0,1% li eritmasi uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating.",
      options: ["1 oy", "2 oy", "1 yil", "3 yil"],
      correctAnswer: "3 yil",
    },
    {
      questionText: "95  Mishyak oksidi uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["1 yil", "3 yil", "4 yil", "5 yil"],
      correctAnswer: "5 yil",
    },
    {
      questionText: "96  Simob sianid uchun yozilgan dori retseptning dorixonada saqqash muddatini ko\u02bbrsating:",
      options: ["1 oy", "1 yil", "3 yil", "5 yil"],
      correctAnswer: "5 yil",
    },
    {
      questionText: "97  Simob oksitsianid uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["1 oy", "2 oy", "1 yil", "5 yil"],
      correctAnswer: "5 yil",
    },
    {
      questionText: "98  Kodein fosfat uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating.",
      options: ["2 oy", "1 yil", "3 yil", "5 yil"],
      correctAnswer: "5 yil",
    },
    {
      questionText: "99  Kokain gidroxlorid uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["1 oy", "2 oy", "1 yil", "5 yil"],
      correctAnswer: "5 yil",
    },
    {
      questionText: "100  Noksiron uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["1 yil", "3 yil", "5 yil", "10 y il"],
      correctAnswer: "5 yil",
    },
  ],
};
