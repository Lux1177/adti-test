import type { Question, Locale } from "~/types/quiz"

export const lyceumDentOrtQuestions: Record<Locale, Question[]> = {

	en: [
		{
			questionText: "Ko‘rsatilgan nervlardan qaysi biri nog‘ora pardaga sezuvchi tola beradi?",
			options: ["Quloq-chakka nervi", "Pastki katakchali nerv", "Lunj nervi", "Chakka nervi"],
			correctAnswer: "Quloq-chakka nervi"
		},
		{
			questionText: "Poliklinika sharoitida bolalarda qaysi gurux dorilar premedikatsiya uchun ishlatiladi?",
			options: ["trankvilizatorlar", "analgetiklar", "antigistamin dorilar", "uxlatuvchi dorilar"],
			correctAnswer: "trankvilizatorlar"
		},
		{
			questionText: "Maxalliy anestetiklarga qaysi yoshdan adrenalin qo‘shish mumkin?",
			options: ["5 yoshdan", "3 yoshdan", "10 yoshdan", "8 yoshdan"],
			correctAnswer: "5 yoshdan"
		},
		{
			questionText: "Quyidagi dorilarning qaysi biri aplikatsion og‘riqsizlantirishda qo‘llanilmaydi?",
			options: ["0,5% - novokain", "2% - lidokain", "1% - piromekain", "10% - lidokain-aerozoli"],
			correctAnswer: "0,5% - novokain"
		},
		{
			questionText: "5-6 yoshli bolaga palatinal (tanglay) og‘riqsizlantirishda qancha miqdor novokain yuboriladi?",
			options: ["0,5-1 ml", "0,25 ml", "1,0-1,5 ml", "0,1-0,3 ml"],
			correctAnswer: "0,5-1 ml"
		},
		{
			questionText: "Bolada tanglayni og‘riqsizlantirish vaqtida ko‘p miqdorda anestetik eritmasi yuborilganda qanday asorat paydo bo‘ladi?",
			options: ["qusish refleksi", "bo‘g‘ilish (asfiksiya)", "laringo va bronxospazm", "yutqin paresteziyasi"],
			correctAnswer: "qusish refleksi"
		},
		{
			questionText: "Xloretil bilan muzlatilganda bolalarda og‘riqsizlantirish davomiyligi qancha?",
			options: ["1-2 daqiqa", "3-5 daqiqa", "5-7 daqiqa", "7-9 daqiqa"],
			correctAnswer: "1-2 daqiqa"
		},
		{
			questionText: "Bolalarda maxalliy anestetiklarning qaysi biri ko‘proq allergik holat chaqiradi?",
			options: ["novokain", "dikain", "trimekain", "lidokain"],
			correctAnswer: "novokain"
		},
		{
			questionText: "Bolalarda tish olish maqsadida 2% li lidokain eritmasiga distillangan suv qanday nisbatda aralashtiriladi?",
			options: ["1:4", "1:1", "1:0,5", "1:2"],
			correctAnswer: "1:4"
		},
		{
			questionText: "5 yoshli bolada mandibulyar og‘riqsizlantirishda ignaning sanchish nuqtasi:",
			options: ["pastki molyar tishlar sathida", "pastki molyar tishlar sathidan 0,25 sm pastda", "pastki molyar tishlar sathidan 0,5 sm yuqorida", "qanotsimon-jag‘ burmasi o‘rta qismida"],
			correctAnswer: "pastki molyar tishlar sathida"
		},
		{
			questionText: "Premedikatsiyani qo‘llab erishilmaydi:",
			options: ["Operatsiya maydonidagi og‘riqni olishga", "bemorni tinchlantirishga", "his-xayajonni olishga (psixoemotsional zo‘riqishni olish)", "qo‘rquvni olishga"],
			correctAnswer: "Operatsiya maydonidagi og‘riqni olishga"
		},
		{
			questionText: "Xloretil bilan muzlatish bolalarda qo‘llaniladi:",
			options: ["teri osti abssesslarini yorishda", "jarohatga birlamchi jarrohlik ishlovi berishda", "shina qo‘yishda", "yuz terisidagi kichkina o‘smalarni olishda"],
			correctAnswer: "teri osti abssesslarini yorishda"
		},
		{
			questionText: "Bolalarda mandibulyar og‘riqsizlantirishda qaysi nerv og‘riqsizlanadi?",
			options: ["pastki alveolyar va til nervi", "mandibulyar nerv", "pastki alveolyar va lunj nervi", "mandibulyar va til nervi"],
			correctAnswer: "pastki alveolyar va til nervi"
		},
		{
			questionText: "Bolalarda qaysi o‘tkazuvchi og‘riqsizlantirish deyarli qo‘llanilmaydi?",
			options: ["infraorbital anesteziya", "tanglay anesteziyasi", "ko‘rak tishlar anesteziyasi", "mandibulyar anesteziya"],
			correctAnswer: "infraorbital anesteziya"
		},
		{
			questionText: "Ko‘rak tishlari anesteziyasida qaysi nerv og‘riqsizlantiriladi?",
			options: ["burun-tanglay nervi", "ko‘rak tishlar nervi", "oldingi tanglay nervi", "qanot-tanglay nervi"],
			correctAnswer: "burun-tanglay nervi"
		},
		{
			questionText: "Maxalliy og‘riqsizlantirishni kuchaytirish (potensirovanie) deganda nima tushuniladi?",
			options: ["Premedikatsiya ostida maxalliy og‘riqsizlantirish", "maxalliy anestetikka adrenalin qo‘shib og‘riqsizlantirish", "narkotik dorilar yordamida og‘riqsizlantirish", "trankvilizatorlar yordamida og‘riqsizlantirish"],
			correctAnswer: "Premedikatsiya ostida maxalliy og‘riqsizlantirish"
		},
		{
			questionText: "Bolalarda ko‘rak tish anesteziyasida qanday anatomik hosila mo‘ljal bo‘lib hisoblanadi?",
			options: ["ko‘rak tishlar orti surgichi", "ko‘rak tishlar uchburchagi", "ko‘rak tishlar egati", "tanglayning markaziy choki"],
			correctAnswer: "ko‘rak tishlar orti surgichi"
		},
		{
			questionText: "Bolalarda o‘tkazilgan mandibulyar og‘riqsizlantirish natijasida qaysi sohada flegmona rivojlanishi mumkin?",
			options: ["qanotsimon-jag‘ sohasida", "jag‘ osti sohasida", "yutqin oldi sohasida", "submaseterial sohasida"],
			correctAnswer: "qanotsimon-jag‘ sohasida"
		},
		{
			questionText: "Bolalarda tuberal anesteziya qaysi soha abssessi bilan asoratlanishi mumkin?",
			options: ["chakka osti chuqurchasi", "quloq oldi - chaynov sohasi", "yutqin oldi sohasi", "qanotsimon jag‘ sohasi"],
			correctAnswer: "chakka osti chuqurchasi"
		},
		{
			questionText: "Bolalardagi flegmona va abssessda dezintoksikatsion davo maqsadida ishlatilmaydi:",
			options: ["Antistafilokokk gamma-globulin", "0,9% natriy xlor", "reosorbilakt", "5% li glyukoza"],
			correctAnswer: "Antistafilokokk gamma-globulin"
		},
		{
			questionText: "Bolalarda jag‘ osti flegmonasida qanday klinik belgi kuzatilmaydi?",
			options: ["og‘izni ochilishining chegaralanishi", "flyuktuatsiya", "to‘qimalar infiltratsiyasi", "tana haroratini ko‘tarilishi"],
			correctAnswer: "og‘izni ochilishining chegaralanishi"
		},
		{
			questionText: "Bolalarda jag‘ osti sohasi flegmonasida kesim uzunligi:",
			options: ["Infiltrat o‘lchamida", "Yoshga bog‘liq", "1-1,5 sm", "5-6 sm"],
			correctAnswer: "Infiltrat o‘lchamida"
		},
		{
			questionText: "Abssess va flegmonalar davosiga tayinlanmaydigan dori guruhi:",
			options: ["qayt qilishga qarshi", "antibakterial", "dezintoksikatsion", "desensibillovchi"],
			correctAnswer: "qayt qilishga qarshi"
		},
		{
			questionText: "Quyidagi flegmonada quloq oldi so‘lak bezi chiqaruv yo‘liga parallel kesim o‘tkaziladi:",
			options: ["lunj sohasi", "yonak sohasi", "ko‘z osti sohasi", "chaynov osti sohasi"],
			correctAnswer: "lunj sohasi"
		},
		{
			questionText: "Yuqori jag‘ga tegishli bo‘lmagan abssess va flegmonalar:",
			options: ["yutqin oldi sohasi", "ko‘z osti sohasi", "chakka sohasi", "chakka osti chuqurchasi"],
			correctAnswer: "yutqin oldi sohasi"
		}
	],
	ru: [
		{
			questionText: "Ko‘rsatilgan nervlardan qaysi biri nog‘ora pardaga sezuvchi tola beradi?",
			options: ["Quloq-chakka nervi", "Pastki katakchali nerv", "Lunj nervi", "Chakka nervi"],
			correctAnswer: "Quloq-chakka nervi"
		},
		{
			questionText: "Poliklinika sharoitida bolalarda qaysi gurux dorilar premedikatsiya uchun ishlatiladi?",
			options: ["trankvilizatorlar", "analgetiklar", "antigistamin dorilar", "uxlatuvchi dorilar"],
			correctAnswer: "trankvilizatorlar"
		},
		{
			questionText: "Maxalliy anestetiklarga qaysi yoshdan adrenalin qo‘shish mumkin?",
			options: ["5 yoshdan", "3 yoshdan", "10 yoshdan", "8 yoshdan"],
			correctAnswer: "5 yoshdan"
		},
		{
			questionText: "Quyidagi dorilarning qaysi biri aplikatsion og‘riqsizlantirishda qo‘llanilmaydi?",
			options: ["0,5% - novokain", "2% - lidokain", "1% - piromekain", "10% - lidokain-aerozoli"],
			correctAnswer: "0,5% - novokain"
		},
		{
			questionText: "5-6 yoshli bolaga palatinal (tanglay) og‘riqsizlantirishda qancha miqdor novokain yuboriladi?",
			options: ["0,5-1 ml", "0,25 ml", "1,0-1,5 ml", "0,1-0,3 ml"],
			correctAnswer: "0,5-1 ml"
		},
		{
			questionText: "Bolada tanglayni og‘riqsizlantirish vaqtida ko‘p miqdorda anestetik eritmasi yuborilganda qanday asorat paydo bo‘ladi?",
			options: ["qusish refleksi", "bo‘g‘ilish (asfiksiya)", "laringo va bronxospazm", "yutqin paresteziyasi"],
			correctAnswer: "qusish refleksi"
		},
		{
			questionText: "Xloretil bilan muzlatilganda bolalarda og‘riqsizlantirish davomiyligi qancha?",
			options: ["1-2 daqiqa", "3-5 daqiqa", "5-7 daqiqa", "7-9 daqiqa"],
			correctAnswer: "1-2 daqiqa"
		},
		{
			questionText: "Bolalarda maxalliy anestetiklarning qaysi biri ko‘proq allergik holat chaqiradi?",
			options: ["novokain", "dikain", "trimekain", "lidokain"],
			correctAnswer: "novokain"
		},
		{
			questionText: "Bolalarda tish olish maqsadida 2% li lidokain eritmasiga distillangan suv qanday nisbatda aralashtiriladi?",
			options: ["1:4", "1:1", "1:0,5", "1:2"],
			correctAnswer: "1:4"
		},
		{
			questionText: "5 yoshli bolada mandibulyar og‘riqsizlantirishda ignaning sanchish nuqtasi:",
			options: ["pastki molyar tishlar sathida", "pastki molyar tishlar sathidan 0,25 sm pastda", "pastki molyar tishlar sathidan 0,5 sm yuqorida", "qanotsimon-jag‘ burmasi o‘rta qismida"],
			correctAnswer: "pastki molyar tishlar sathida"
		},
		{
			questionText: "Premedikatsiyani qo‘llab erishilmaydi:",
			options: ["Operatsiya maydonidagi og‘riqni olishga", "bemorni tinchlantirishga", "his-xayajonni olishga (psixoemotsional zo‘riqishni olish)", "qo‘rquvni olishga"],
			correctAnswer: "Operatsiya maydonidagi og‘riqni olishga"
		},
		{
			questionText: "Xloretil bilan muzlatish bolalarda qo‘llaniladi:",
			options: ["teri osti abssesslarini yorishda", "jarohatga birlamchi jarrohlik ishlovi berishda", "shina qo‘yishda", "yuz terisidagi kichkina o‘smalarni olishda"],
			correctAnswer: "teri osti abssesslarini yorishda"
		},
		{
			questionText: "Bolalarda mandibulyar og‘riqsizlantirishda qaysi nerv og‘riqsizlanadi?",
			options: ["pastki alveolyar va til nervi", "mandibulyar nerv", "pastki alveolyar va lunj nervi", "mandibulyar va til nervi"],
			correctAnswer: "pastki alveolyar va til nervi"
		},
		{
			questionText: "Bolalarda qaysi o‘tkazuvchi og‘riqsizlantirish deyarli qo‘llanilmaydi?",
			options: ["infraorbital anesteziya", "tanglay anesteziyasi", "ko‘rak tishlar anesteziyasi", "mandibulyar anesteziya"],
			correctAnswer: "infraorbital anesteziya"
		},
		{
			questionText: "Ko‘rak tishlari anesteziyasida qaysi nerv og‘riqsizlantiriladi?",
			options: ["burun-tanglay nervi", "ko‘rak tishlar nervi", "oldingi tanglay nervi", "qanot-tanglay nervi"],
			correctAnswer: "burun-tanglay nervi"
		},
		{
			questionText: "Maxalliy og‘riqsizlantirishni kuchaytirish (potensirovanie) deganda nima tushuniladi?",
			options: ["Premedikatsiya ostida maxalliy og‘riqsizlantirish", "maxalliy anestetikka adrenalin qo‘shib og‘riqsizlantirish", "narkotik dorilar yordamida og‘riqsizlantirish", "trankvilizatorlar yordamida og‘riqsizlantirish"],
			correctAnswer: "Premedikatsiya ostida maxalliy og‘riqsizlantirish"
		},
		{
			questionText: "Bolalarda ko‘rak tish anesteziyasida qanday anatomik hosila mo‘ljal bo‘lib hisoblanadi?",
			options: ["ko‘rak tishlar orti surgichi", "ko‘rak tishlar uchburchagi", "ko‘rak tishlar egati", "tanglayning markaziy choki"],
			correctAnswer: "ko‘rak tishlar orti surgichi"
		},
		{
			questionText: "Bolalarda o‘tkazilgan mandibulyar og‘riqsizlantirish natijasida qaysi sohada flegmona rivojlanishi mumkin?",
			options: ["qanotsimon-jag‘ sohasida", "jag‘ osti sohasida", "yutqin oldi sohasida", "submaseterial sohasida"],
			correctAnswer: "qanotsimon-jag‘ sohasida"
		},
		{
			questionText: "Bolalarda tuberal anesteziya qaysi soha abssessi bilan asoratlanishi mumkin?",
			options: ["chakka osti chuqurchasi", "quloq oldi - chaynov sohasi", "yutqin oldi sohasi", "qanotsimon jag‘ sohasi"],
			correctAnswer: "chakka osti chuqurchasi"
		},
		{
			questionText: "Bolalardagi flegmona va abssessda dezintoksikatsion davo maqsadida ishlatilmaydi:",
			options: ["Antistafilokokk gamma-globulin", "0,9% natriy xlor", "reosorbilakt", "5% li glyukoza"],
			correctAnswer: "Antistafilokokk gamma-globulin"
		},
		{
			questionText: "Bolalarda jag‘ osti flegmonasida qanday klinik belgi kuzatilmaydi?",
			options: ["og‘izni ochilishining chegaralanishi", "flyuktuatsiya", "to‘qimalar infiltratsiyasi", "tana haroratini ko‘tarilishi"],
			correctAnswer: "og‘izni ochilishining chegaralanishi"
		},
		{
			questionText: "Bolalarda jag‘ osti sohasi flegmonasida kesim uzunligi:",
			options: ["Infiltrat o‘lchamida", "Yoshga bog‘liq", "1-1,5 sm", "5-6 sm"],
			correctAnswer: "Infiltrat o‘lchamida"
		},
		{
			questionText: "Abssess va flegmonalar davosiga tayinlanmaydigan dori guruhi:",
			options: ["qayt qilishga qarshi", "antibakterial", "dezintoksikatsion", "desensibillovchi"],
			correctAnswer: "qayt qilishga qarshi"
		},
		{
			questionText: "Quyidagi flegmonada quloq oldi so‘lak bezi chiqaruv yo‘liga parallel kesim o‘tkaziladi:",
			options: ["lunj sohasi", "yonak sohasi", "ko‘z osti sohasi", "chaynov osti sohasi"],
			correctAnswer: "lunj sohasi"
		},
		{
			questionText: "Yuqori jag‘ga tegishli bo‘lmagan abssess va flegmonalar:",
			options: ["yutqin oldi sohasi", "ko‘z osti sohasi", "chakka sohasi", "chakka osti chuqurchasi"],
			correctAnswer: "yutqin oldi sohasi"
		}
	],
	uz: [
		{
			questionText: "Ko‘rsatilgan nervlardan qaysi biri nog‘ora pardaga sezuvchi tola beradi?",
			options: ["Quloq-chakka nervi", "Pastki katakchali nerv", "Lunj nervi", "Chakka nervi"],
			correctAnswer: "Quloq-chakka nervi"
		},
		{
			questionText: "Poliklinika sharoitida bolalarda qaysi gurux dorilar premedikatsiya uchun ishlatiladi?",
			options: ["trankvilizatorlar", "analgetiklar", "antigistamin dorilar", "uxlatuvchi dorilar"],
			correctAnswer: "trankvilizatorlar"
		},
		{
			questionText: "Maxalliy anestetiklarga qaysi yoshdan adrenalin qo‘shish mumkin?",
			options: ["5 yoshdan", "3 yoshdan", "10 yoshdan", "8 yoshdan"],
			correctAnswer: "5 yoshdan"
		},
		{
			questionText: "Quyidagi dorilarning qaysi biri aplikatsion og‘riqsizlantirishda qo‘llanilmaydi?",
			options: ["0,5% - novokain", "2% - lidokain", "1% - piromekain", "10% - lidokain-aerozoli"],
			correctAnswer: "0,5% - novokain"
		},
		{
			questionText: "5-6 yoshli bolaga palatinal (tanglay) og‘riqsizlantirishda qancha miqdor novokain yuboriladi?",
			options: ["0,5-1 ml", "0,25 ml", "1,0-1,5 ml", "0,1-0,3 ml"],
			correctAnswer: "0,5-1 ml"
		},
		{
			questionText: "Bolada tanglayni og‘riqsizlantirish vaqtida ko‘p miqdorda anestetik eritmasi yuborilganda qanday asorat paydo bo‘ladi?",
			options: ["qusish refleksi", "bo‘g‘ilish (asfiksiya)", "laringo va bronxospazm", "yutqin paresteziyasi"],
			correctAnswer: "qusish refleksi"
		},
		{
			questionText: "Xloretil bilan muzlatilganda bolalarda og‘riqsizlantirish davomiyligi qancha?",
			options: ["1-2 daqiqa", "3-5 daqiqa", "5-7 daqiqa", "7-9 daqiqa"],
			correctAnswer: "1-2 daqiqa"
		},
		{
			questionText: "Bolalarda maxalliy anestetiklarning qaysi biri ko‘proq allergik holat chaqiradi?",
			options: ["novokain", "dikain", "trimekain", "lidokain"],
			correctAnswer: "novokain"
		},
		{
			questionText: "Bolalarda tish olish maqsadida 2% li lidokain eritmasiga distillangan suv qanday nisbatda aralashtiriladi?",
			options: ["1:4", "1:1", "1:0,5", "1:2"],
			correctAnswer: "1:4"
		},
		{
			questionText: "5 yoshli bolada mandibulyar og‘riqsizlantirishda ignaning sanchish nuqtasi:",
			options: ["pastki molyar tishlar sathida", "pastki molyar tishlar sathidan 0,25 sm pastda", "pastki molyar tishlar sathidan 0,5 sm yuqorida", "qanotsimon-jag‘ burmasi o‘rta qismida"],
			correctAnswer: "pastki molyar tishlar sathida"
		},
		{
			questionText: "Premedikatsiyani qo‘llab erishilmaydi:",
			options: ["Operatsiya maydonidagi og‘riqni olishga", "bemorni tinchlantirishga", "his-xayajonni olishga (psixoemotsional zo‘riqishni olish)", "qo‘rquvni olishga"],
			correctAnswer: "Operatsiya maydonidagi og‘riqni olishga"
		},
		{
			questionText: "Xloretil bilan muzlatish bolalarda qo‘llaniladi:",
			options: ["teri osti abssesslarini yorishda", "jarohatga birlamchi jarrohlik ishlovi berishda", "shina qo‘yishda", "yuz terisidagi kichkina o‘smalarni olishda"],
			correctAnswer: "teri osti abssesslarini yorishda"
		},
		{
			questionText: "Bolalarda mandibulyar og‘riqsizlantirishda qaysi nerv og‘riqsizlanadi?",
			options: ["pastki alveolyar va til nervi", "mandibulyar nerv", "pastki alveolyar va lunj nervi", "mandibulyar va til nervi"],
			correctAnswer: "pastki alveolyar va til nervi"
		},
		{
			questionText: "Bolalarda qaysi o‘tkazuvchi og‘riqsizlantirish deyarli qo‘llanilmaydi?",
			options: ["infraorbital anesteziya", "tanglay anesteziyasi", "ko‘rak tishlar anesteziyasi", "mandibulyar anesteziya"],
			correctAnswer: "infraorbital anesteziya"
		},
		{
			questionText: "Ko‘rak tishlari anesteziyasida qaysi nerv og‘riqsizlantiriladi?",
			options: ["burun-tanglay nervi", "ko‘rak tishlar nervi", "oldingi tanglay nervi", "qanot-tanglay nervi"],
			correctAnswer: "burun-tanglay nervi"
		},
		{
			questionText: "Maxalliy og‘riqsizlantirishni kuchaytirish (potensirovanie) deganda nima tushuniladi?",
			options: ["Premedikatsiya ostida maxalliy og‘riqsizlantirish", "maxalliy anestetikka adrenalin qo‘shib og‘riqsizlantirish", "narkotik dorilar yordamida og‘riqsizlantirish", "trankvilizatorlar yordamida og‘riqsizlantirish"],
			correctAnswer: "Premedikatsiya ostida maxalliy og‘riqsizlantirish"
		},
		{
			questionText: "Bolalarda ko‘rak tish anesteziyasida qanday anatomik hosila mo‘ljal bo‘lib hisoblanadi?",
			options: ["ko‘rak tishlar orti surgichi", "ko‘rak tishlar uchburchagi", "ko‘rak tishlar egati", "tanglayning markaziy choki"],
			correctAnswer: "ko‘rak tishlar orti surgichi"
		},
		{
			questionText: "Bolalarda o‘tkazilgan mandibulyar og‘riqsizlantirish natijasida qaysi sohada flegmona rivojlanishi mumkin?",
			options: ["qanotsimon-jag‘ sohasida", "jag‘ osti sohasida", "yutqin oldi sohasida", "submaseterial sohasida"],
			correctAnswer: "qanotsimon-jag‘ sohasida"
		},
		{
			questionText: "Bolalarda tuberal anesteziya qaysi soha abssessi bilan asoratlanishi mumkin?",
			options: ["chakka osti chuqurchasi", "quloq oldi - chaynov sohasi", "yutqin oldi sohasi", "qanotsimon jag‘ sohasi"],
			correctAnswer: "chakka osti chuqurchasi"
		},
		{
			questionText: "Bolalardagi flegmona va abssessda dezintoksikatsion davo maqsadida ishlatilmaydi:",
			options: ["Antistafilokokk gamma-globulin", "0,9% natriy xlor", "reosorbilakt", "5% li glyukoza"],
			correctAnswer: "Antistafilokokk gamma-globulin"
		},
		{
			questionText: "Bolalarda jag‘ osti flegmonasida qanday klinik belgi kuzatilmaydi?",
			options: ["og‘izni ochilishining chegaralanishi", "flyuktuatsiya", "to‘qimalar infiltratsiyasi", "tana haroratini ko‘tarilishi"],
			correctAnswer: "og‘izni ochilishining chegaralanishi"
		},
		{
			questionText: "Bolalarda jag‘ osti sohasi flegmonasida kesim uzunligi:",
			options: ["Infiltrat o‘lchamida", "Yoshga bog‘liq", "1-1,5 sm", "5-6 sm"],
			correctAnswer: "Infiltrat o‘lchamida"
		},
		{
			questionText: "Abssess va flegmonalar davosiga tayinlanmaydigan dori guruhi:",
			options: ["qayt qilishga qarshi", "antibakterial", "dezintoksikatsion", "desensibillovchi"],
			correctAnswer: "qayt qilishga qarshi"
		},
		{
			questionText: "Quyidagi flegmonada quloq oldi so‘lak bezi chiqaruv yo‘liga parallel kesim o‘tkaziladi:",
			options: ["lunj sohasi", "yonak sohasi", "ko‘z osti sohasi", "chaynov osti sohasi"],
			correctAnswer: "lunj sohasi"
		},
		{
			questionText: "Yuqori jag‘ga tegishli bo‘lmagan abssess va flegmonalar:",
			options: ["yutqin oldi sohasi", "ko‘z osti sohasi", "chakka sohasi", "chakka osti chuqurchasi"],
			correctAnswer: "yutqin oldi sohasi"
		}
	],

}
