import type { Question, Locale } from "~/types/quiz"

export const questions = [
	{
		questionText: "Bolalarda quloq oldi chaynov soxasi flegmonasi uchun xos bo‘lmagan belgi:",
		options: ["yutinishda og‘riq", "ogiz ochilishi chegaralanishi", "og‘riqli infiltrat bo‘lishi", "lunj shillik qavati shishi"],
		correctAnswer: "yutinishda og‘riq"
	},
	{
		questionText: "Bolalarda yutqin oldi soxasi flegmonasi uchun xos emas:",
		options: ["jag osti soxasidagi flyuktuatsiya", "ogiz ochilishi chegaralanishi", "yutinishda og‘riq", "kanotsimon jag burmasi bo‘ylab shillik qavat shishi va giperemiyasi"],
		correctAnswer: "jag osti soxasidagi flyuktuatsiya"
	},
	{
		questionText: "Bolalarda yuqori jag‘ periostiti uchun xos bo‘lmagan belgi:",
		options: ["tishning og‘riqli bo‘lishi", "yumshoq to‘qimalarda infiltrat bo‘lishi", "ogiz ochilishi chegaralanishi", "shishning qovoq soxasiga tarqalishi"],
		correctAnswer: "tishning og‘riqli bo‘lishi"
	},
	{
		questionText: "Bolalarda o‘tkir gematogen osteomiyelit uchun xos bo‘lmagan belgi:",
		options: ["kuchli umumiy intoksikatsiya", "og‘ir umumiy xolat", "to‘satdan boshlanishi", "og‘riqli infiltrat bo‘lishi"],
		correctAnswer: "og‘riqli infiltrat bo‘lishi"
	},
	{
		questionText: "Bolalarda o‘tkir gematogen osteomiyelit ko‘pincha qaysi soxada uchraydi:",
		options: ["pastki jag‘ tanasida", "yuqori jag‘da", "pastki jag‘ shoxida", "pastki jag‘ tishlarida"],
		correctAnswer: "pastki jag‘ tanasida"
	},
	{
		questionText: "Bolalarda odontogen yiringli limfadenit uchun xos bo‘lmagan belgi:",
		options: ["tana xaroratining 40° gacha ko‘tarilishi", "limfa tugunining kattalashishi", "og‘riqli bo‘lishi", "yumshoq to‘qimalarda shish"],
		correctAnswer: "tana xaroratining 40° gacha ko‘tarilishi"
	},
	{
		questionText: "Bolalarda o‘tkir odontogen periostit uchun xos bo‘lmagan belgi:",
		options: ["to‘satdan boshlanishi", "og‘riqli shish", "og‘izdan yoqimsiz xid kelishi", "tana xaroratining ko‘tarilishi"],
		correctAnswer: "to‘satdan boshlanishi"
	},
	{
		questionText: "Bolalarda o‘tkir odontogen osteomiyelit uchun xos bo‘lmagan belgi:",
		options: ["tana xaroratining 40° gacha ko‘tarilishi", "tishning o‘zgarishi", "og‘riqli infiltrat", "intoksikatsiya"],
		correctAnswer: "tana xaroratining 40° gacha ko‘tarilishi"
	},
	{
		questionText: "Bolalarda o‘tkir odontogen osteomiyelit ko‘pincha qaysi yoshda uchraydi:",
		options: ["5–10 yoshda", "10–15 yoshda", "1–3 yoshda", "15–18 yoshda"],
		correctAnswer: "5–10 yoshda"
	},
	{
		questionText: "Bolalarda o‘tkir odontogen osteomiyelitning asoratlaridan biri:",
		options: ["sepsis", "karies", "gingivit", "stomatit"],
		correctAnswer: "sepsis"
	},
	{
		questionText: "Bolalarda surunkali osteomiyelit uchun xos bo‘lmagan belgi:",
		options: ["yumshoq to‘qimalarda shish bo‘lishi", "fistula bo‘lishi", "tana xaroratining doimiy yuqori bo‘lishi", "suyakda sekvestr bo‘lishi"],
		correctAnswer: "tana xaroratining doimiy yuqori bo‘lishi"
	},
	{
		questionText: "Bolalarda surunkali osteomiyelit ko‘pincha qaysi yoshda uchraydi:",
		options: ["5–10 yoshda", "10–15 yoshda", "1–3 yoshda", "15–18 yoshda"],
		correctAnswer: "5–10 yoshda"
	},
	{
		questionText: "Bolalarda surunkali osteomiyelit uchun xos bo‘lgan belgi:",
		options: ["fistula bo‘lishi", "yumshoq to‘qimalarda shish bo‘lishi", "og‘izdan yoqimsiz xid kelishi", "tana xaroratining ko‘tarilishi"],
		correctAnswer: "fistula bo‘lishi"
	},
	{
		questionText: "Bolalarda surunkali osteomiyelitning asoratlaridan biri:",
		options: ["sepsis", "gingivit", "karies", "stomatit"],
		correctAnswer: "sepsis"
	},
	{
		questionText: "Bolalarda o‘tkir yiringli limfadenit ko‘pincha qaysi yoshda uchraydi:",
		options: ["5–10 yoshda", "10–15 yoshda", "1–3 yoshda", "15–18 yoshda"],
		correctAnswer: "5–10 yoshda"
	},
	{
		questionText: "Bolalarda o‘tkir yiringli limfadenit uchun xos belgi:",
		options: ["limfa tugunining kattalashishi", "limfa tugunining yo‘qolishi", "og‘izdan yoqimsiz xid kelishi", "tishning o‘zgarishi"],
		correctAnswer: "limfa tugunining kattalashishi"
	},
	{
		questionText: "Bolalarda o‘tkir yiringli limfadenit uchun xos bo‘lmagan belgi:",
		options: ["limfa tugunining yo‘qolishi", "og‘riqli bo‘lishi", "yumshoq to‘qimalarda shish", "tana xaroratining ko‘tarilishi"],
		correctAnswer: "limfa tugunining yo‘qolishi"
	},
	{
		questionText: "Bolalarda surunkali limfadenit uchun xos bo‘lmagan belgi:",
		options: ["limfa tugunining og‘riqli bo‘lishi", "limfa tugunining kattalashishi", "yumshoq to‘qimalarda shish", "limfa tugunining konsistensiyasi o‘zgarishi"],
		correctAnswer: "limfa tugunining og‘riqli bo‘lishi"
	},
	{
		questionText: "Bolalarda surunkali limfadenit uchun xos belgi:",
		options: ["limfa tugunining kattalashishi", "limfa tugunining yo‘qolishi", "tishning o‘zgarishi", "og‘izdan yoqimsiz xid kelishi"],
		correctAnswer: "limfa tugunining kattalashishi"
	},
	{
		questionText: "Bolalarda surunkali limfadenit ko‘pincha qaysi yoshda uchraydi:",
		options: ["5–10 yoshda", "10–15 yoshda", "1–3 yoshda", "15–18 yoshda"],
		correctAnswer: "5–10 yoshda"
	},
	{
		questionText: "Bolalarda o‘tkir odontogen periostit ko‘pincha qaysi yoshda uchraydi:",
		options: ["5–10 yoshda", "10–15 yoshda", "1–3 yoshda", "15–18 yoshda"],
		correctAnswer: "5–10 yoshda"
	},
	{
		questionText: "Bolalarda o‘tkir odontogen periostit uchun xos belgi:",
		options: ["yumshoq to‘qimalarda shish bo‘lishi", "fistula bo‘lishi", "og‘izdan yoqimsiz xid kelishi", "limfa tugunining yo‘qolishi"],
		correctAnswer: "yumshoq to‘qimalarda shish bo‘lishi"
	},
	{
		questionText: "Bolalarda o‘tkir odontogen periostit uchun xos bo‘lmagan belgi:",
		options: ["og‘izdan yoqimsiz xid kelishi", "tana xaroratining ko‘tarilishi", "tishning o‘zgarishi", "og‘riqli shish"],
		correctAnswer: "og‘izdan yoqimsiz xid kelishi"
	},
	{
		questionText: "Bolalarda o‘tkir odontogen periostitning asoratlaridan biri:",
		options: ["osteomiyelit", "karies", "gingivit", "stomatit"],
		correctAnswer: "osteomiyelit"
	},
	{
		questionText: "Bolalarda o‘tkir odontogen periostit ko‘pincha qaysi tishdan rivojlanadi:",
		options: ["6-chi tish", "1-chi tish", "2-chi tish", "3-chi tish"],
		correctAnswer: "6-chi tish"
	},
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
	},
	{
		questionText: "O‘tkir odontogen osteomielitni kiyosiy tashxislash kerak:",
		options: ["Yuing Sarkomasi bilan", "Ameloblastoma bilan", "Osteoblastoklastoma bilan", "Radikulyary kista bilan"],
		correctAnswer: "Yuing Sarkomasi bilan",
	},
	{
		questionText: "O‘tkir odontogen osteomielitni kuprok ma’lumot beruvchi tashxislash usuli:",
		options: ["UZD", "Sulak RN ni ulchash", "EOD", "Rentgenografiya"],
		correctAnswer: "UZD",
	},
	{
		questionText: "Pastki jag 6|6 tishlar sababli O‘tkir odontogen osteomielitda rivojlanishi mumkin bo‘lgan flegmona:",
		options: ["Jag osti soxasi", "kuz kosasi", "Chakka", "Kuz osti soxasi"],
		correctAnswer: "Jag osti soxasi",
	},
	{
		questionText: "Yuqori jagning O‘tkir osteomielitining asorati bulishi mumkin:",
		options: ["Odontogennыy sepsis", "O‘tkir parotit", "Patologik sinish", "Surunkalik limfadenit"],
		correctAnswer: "Odontogennыy sepsis",
	},
	{
		questionText: "Rentgen tasvirida katta xajmdagi sekvestrlar kuyida aniklanadi:",
		options: ["Surunkali osteomielitni destruktiv shaklida", "Surunkali osteomielitni produktiv shaklida", "Surunkali perostitda", "O‘tkir osteomielitda"],
		correctAnswer: "Surunkali osteomielitni destruktiv shaklida",
	},
	{
		questionText: "Rentgen tasvirida urta va kichik xajmi sekvestrlar kuyida aniklanadi:",
		options: ["Surunkali osteomielitni destruktiv-produkti shaklida", "O‘tkir osteomielitda", "Surunkali periostitda"],
		correctAnswer: "Surunkali osteomielitni destruktiv-produkti shaklida",
	},
	{
		questionText: "Pastki jagning surunkali osteomieliti nimadan kelib chikadi:",
		options: ["O‘tkir odontogen osteomielitdan", "ameloblastomadan", "radikulyar kistadan", "fibroz displaziyadan"],
		correctAnswer: "O‘tkir odontogen osteomielitdan",
	},
	{
		questionText: "Yiringli ajralma okma yuldan kuzatiladi:",
		options: ["Surunkali osteomielitni destruktiv-produktiv, destruktiv shaklida", "surunkali parotit", "surunkali periostitda", "surunkali sialodenitda"],
		correctAnswer: "Surunkali osteomielitni destruktiv-produktiv, destruktiv shaklida",
	},
	{
		questionText: "Pastki jagni qaysi soxasidagi surunkali osteomieliti natijasida mikrogeniya rivojlanadi:",
		options: ["Bugim usigi", "daxan soxasi", "jag tanasi"],
		correctAnswer: "Bugim usigi",
	},
	{
		questionText: "Surunkali osteomielitning destruktiv shakli kuprok uchraydi:",
		options: ["3-5 yeshda", "7-12 yeshda", "12-15 yeshda", "1-3 yeshda"],
		correctAnswer: "3-5 yeshda",
	},
	{
		questionText: "Surunkali osteomielit shakli ko‘proq uchraydi:",
		options: ["12-15 yeshda", "3-5 yeshda", "1", "7-12 yoshda"],
		correctAnswer: "12-15 yeshda",
	},
	{
		questionText: "Bolalarda yuqori jagda sekvestrektomiya operatsiyasi utkaziladi:",
		options: ["kuprok sekvestr bulaklari xar-xil muddatda uzi ajralib chikadi", "15-30 kundan sung", "5-15 kundan sung", "1,5 oydan sung"],
		correctAnswer: "kuprok sekvestr bulaklari xar-xil muddatda uzi ajralib chikadi",
	},
	{
		questionText: "Bolalarda sekvestrektomiya operatsiyasi utkazish uchun asosiy kursatma bulib xisoblanadi:",
		options: ["erkin yetuvchi sekvestrlar va zararlangan soxada ikkilamchi suyak xosil bulishi", "pastki jagni yakkol deformatsiyasi", "yiringli ajralmali okma aniklanishi", "pastki jagni patologik sinishi"],
		correctAnswer: "erkin yetuvchi sekvestrlar va zararlangan soxada ikkilamchi suyak xosil bulishi",
	},
	{
		questionText: "Bolalarda pastki jagni patologik sinishi kuyida yuzaga keladi:",
		options: ["Surunkali osteomielitning destruktiv shaklida", "surunkali osteomielit produktiv shaklida", "O‘tkir osteomielitda"],
		correctAnswer: "Surunkali osteomielitning destruktiv shaklida",
	},
	{
		questionText: "Bolalarda surunkali osteomielitni davolashda yetakchi prinsip bulib xisoblanadi:",
		options: ["Yallig‘lanishga karshi va umumiy kuvvatlovchi davo", "ximioterapiya", "fitoterapiya", "rentgenoterapiya"],
		correctAnswer: "Yallig‘lanishga karshi va umumiy kuvvatlovchi davo",
	},
	{
		questionText: "Bolalar gematogen osteomielitida kuprok zararlanadi:",
		options: ["yukori jag", "pastki jag", "enok va peshona suyagi", "bir vaktda yukori va pastki jag"],
		correctAnswer: "yukori jag",
	},
	{
		questionText: "Yangi tugilgan chakalokda infeksiya o‘chog‘i xisoblanmaydi:",
		options: ["Kariesdan buzilgan tish", "tanglay va alveolyar usiklar", "terishi yiringli zararlanishi", "onada mastit bulishi"],
		correctAnswer: "Kariesdan buzilgan tish",
	},
	{
		questionText: "Yukori jagni gematogen osteomielitida kup zararlanuvchi soxa:",
		options: ["yukori jag va yenok usigi", "yonok - alveolyar usik va alveolyar usik", "peshona va tanglay usiklar", "tanglay va alveolyar usiklar"],
		correctAnswer: "yukori jag va yenok usigi",
	},
	{
		questionText: "Pastki jagda gematogen osteomielit kuprok qaysi soxada kechadi:",
		options: ["bugim usigida", "toj usigida", "daxan soxasida", "jag tanasida"],
		correctAnswer: "bugim usigida",
	},
	{
		questionText: "Gematogen osteomielit kuprok uchraydi:",
		options: ["chakaloklarda", "7-10 yeshda", "4-7 yeshda", "xar kanday yeshda"],
		correctAnswer: "chakaloklarda",
	},
]


export const lyceumDentOrtQuestions: Record<Locale, Question[]> = {
	en: questions,
	ru: questions,
	uz: questions,
}
