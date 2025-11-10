import type { Locale, Question } from "~/types/quiz"

const questions = [
	{
		questionText: "Oshqozon-ichak traktining yuqumli bo‘lmagan patologiyasi tufayli kelib chiqadigan ko‘ngil aynishi va qusish sabablari",
		options: ["Ovqatdan zaharlanish", "O‘tkir qorin", "Homiladorlar toksikozi", "Enterobioz"],
		correctAnswer: "Homiladorlar toksikozi",
	},
	{
		questionText: "Ko‘ngil aynishi va qusishning metabolik sabablari",
		options: ["Migren", "Dori vositalaridan zaharlanish", "Mener kasalligi", "Uremiya"],
		correctAnswer: "Uremiya",
	},
	{
		questionText: "Ko‘ngil aynishi va qusishda davolash taktikasi quyidagilarni o‘z ichiga OLMAYDI",
		options: ["Anamnezni sinchiklab yig‘ish", "Najas tahlili", "Yosh ayollarda homiladorlik testi", "Qat’iy yotoq rejimi"],
		correctAnswer: "Qat’iy yotoq rejimi",
	},
	{
		questionText: "Yara kasalligi terapiyasi quyidagilarni o‘z ichiga oladi",
		options: ["Yotoq tartibi va maxsus parhez", "H. Pylori eradikatsiyasi uchun uch komponentli terapiya", "Aminoglikozid antibiotiklar", "12–18 haftaga omeprazol"],
		correctAnswer: "H. Pylori eradikatsiyasi uchun uch komponentli terapiya",
	},
	{
		questionText: "Yarani jarrohlik yo‘li bilan davolashga ko‘rsatma",
		options: ["Malignizatsiya", "Kamqonlik", "TVI < 27", "Tez-tez zarda qaynashi"],
		correctAnswer: "Malignizatsiya",
	},
	{
		questionText: "Yarani jarrohlik yo‘li bilan davolash asorati",
		options: ["Giperglikemiya", "Temir tanqisligi anemiyasi", "Demping sindromi", "Kuchli kekirish"],
		correctAnswer: "Demping sindromi",
	},
	{
		questionText: "Takroriy qusishda zarur bo‘lgan harakat",
		options: ["Serukal tavsiya qilish", "Oshqozonni yuvish", "Sababini aniqlash uchun anamnez yig‘ish", "(Homilador bo‘lsa) umumiy siydik tahlili"],
		correctAnswer: "Sababini aniqlash uchun anamnez yig‘ish",
	},
	{
		questionText: "Ta’sirlangan ichak sindromida eng ko‘p uchraydigan belgi",
		options: ["Asosan ich qotishi", "Defekatsiya chastotasining o‘zgarishi", "Defekatsiyadan oldin va keyin qorin og‘rig‘i", "Sutli parhezdan keyin belgilarning yaxshilanishi"],
		correctAnswer: "Defekatsiyadan oldin va keyin qorin og‘rig‘i",
	},
	{
		questionText: "Ta’sirlangan ichak sindromi tashxis mezoni",
		options: ["Ertalab ko‘ngil aynishi", "Belbog‘simon og‘riq", "Malina jelesi ko‘rinishidagi axlat", "To‘liq bo‘shatilmaganlik hissi"],
		correctAnswer: "To‘liq bo‘shatilmaganlik hissi",
	},
	{
		questionText: "Bolalarda qabziyatni keltirib chiqaruvchi omillar",
		options: ["Ratsionda fruktozaning ko‘pligi", "Laktoza yetishmovchiligi", "Ichak rivojlanishining tug‘ma patologiyasi", "Seliakiya"],
		correctAnswer: "Ichak rivojlanishining tug‘ma patologiyasi",
	},
	{
		questionText: "Bolalarda qizilo‘ngach-oshqozon reflyuksi qanday kechadi?",
		options: ["Ovqat regurgitatsiyasi va vazn ortishining yetarli emasligi", "Stridor va normal rivojlanish", "Nafas yo‘llari kasalliklari xavfi", "Ovqat regurgitatsiyasi va normal rivojlanish"],
		correctAnswer: "Ovqat regurgitatsiyasi va vazn ortishining yetarli emasligi",
	},
	{
		questionText: "Gastrofibroduodenoskopiyaning afzalligi nimada?",
		options: ["Oshqozon-ichak trakti patologiyasini tasdiqlash yoki istisno qilish imkonini beradi", "Yara skriningi uchun ishlatiladi", "Onkologiya skriningi uchun ishlatiladi", "Apparatga ishlov berish shart emas"],
		correctAnswer: "Oshqozon-ichak trakti patologiyasini tasdiqlash yoki istisno qilish imkonini beradi",
	},
	{
		questionText: "Vismut sulfatning nojo‘ya ta’siri",
		options: ["Oshqozon shirasining gipersekretsiyasi", "Nefrokalsinoz", "Ich qotishi", "Axlatning to‘q rangda bo‘lishi"],
		correctAnswer: "Axlatning to‘q rangda bo‘lishi",
	},
	{
		questionText: "Quyidagilardan qaysi biri assitga xos emas?",
		options: ["Jigar sirrozining kam uchraydigan asorati", "Assit sariqlik bilan kechishi mumkin", "O‘ng qorincha yetishmovchiligi belgisi", "Yurak yetishmovchiligida kuzatiladi"],
		correctAnswer: "Jigar sirrozining kam uchraydigan asorati",
	},
	{
		questionText: "O‘ng qovurg‘a ostidagi og‘riq qaysi holatga xos emas?",
		options: ["O‘t-tosh kasalligi", "Splenit", "Xoletsistit", "O‘n ikki barmoqli ichak yarasi"],
		correctAnswer: "Splenit",
	},
	{
		questionText: "Sariqlik teri qichishi bilan kechadi",
		options: ["Propranolol bilan zaharlanishda", "Gemolitik sariqlikda", "Giperkarotinemiyada", "Alkogolli jigar sirrozida"],
		correctAnswer: "Gemolitik sariqlikda",
	},
	{
		questionText: "Pankreatitning klinik belgilariga nimalar kiradi?",
		options: ["Assit, qorin og‘rig‘i", "Sariqlik, isitma, kuchli belbog‘simon og‘riq", "Isitma, assit", "Diareya, belbog‘simon og‘riq"],
		correctAnswer: "Sariqlik, isitma, kuchli belbog‘simon og‘riq",
	},
	{
		questionText: "Epigastral og‘riqli bemorda birinchi tekshiruv",
		options: ["Oshqozon shirasi tahlili", "Oshqozon rentgenoskopiyasi", "EGDFS (ezofagogastroduodenofibroskopiya)", "Kolonoskopiya"],
		correctAnswer: "EGDFS (ezofagogastroduodenofibroskopiya)",
	},
	{
		questionText: "Jigar sirrozining klinik belgilariga kirmaydi",
		options: ["Ishtaha yo‘qolishi, qusish", "Qorin kattalashishi, assit", "Gepatomegaliya", "Qon tomir yulduzchalari, kaftlarning qizarishi"],
		correctAnswer: "Qon tomir yulduzchalari, kaftlarning qizarishi",
	},
	{
		questionText: "Jigar sirrozining asoratlariga kirmaydi",
		options: ["Portal gipertenziya", "Ensefalopatiya", "Jigar yetishmovchiligi", "O‘t kolikasi"],
		correctAnswer: "O‘t kolikasi",
	},
	{
		questionText: "Gipotireozning klinik belgilari",
		options: ["Qabziyat, yuzning shishinqirashi, rangparlik", "Bezovtalik, yurak urishi", "Diareya, terlash, ozish", "Ekzoftalm"],
		correctAnswer: "Qabziyat, yuzning shishinqirashi, rangparlik",
	},
	{
		questionText: "Tireotoksikozda ko‘z simptomlari",
		options: ["Ekzoftalm", "Tor ko‘z yoriqlari", "Enoftalm", "Anizokoriya"],
		correctAnswer: "Ekzoftalm",
	},
	{
		questionText: "Insulinga bog‘liq qandli diabet uchun xos holatlar",
		options: ["Kasallanishning eng yuqori cho‘qqisi 10–30 yosh", "Kasallanish cho‘qqisi 40 yoshdan keyin", "Ko‘pincha irsiy moyillik", "Kasallik asta-sekin boshlanadi (ketoatsidozsiz)"],
		correctAnswer: "Kasallanishning eng yuqori cho‘qqisi 10–30 yosh",
	},
	{
		questionText: "2-tur qandli diabet skriningi qaysi hollarda o‘tkaziladi",
		options: ["50 yoshdan oshgan barcha shaxslarga", "Ortiqcha tana vazniga ega bemorlar", "20–30 yoshdagi irsiy moyilliklilar", "40 yoshdan oshgan barcha shaxslarga"],
		correctAnswer: "Ortiqcha tana vazniga ega bemorlar",
	},
	{
		questionText: "2-tur qandli diabetни davolashda 1-qатор dori vositasi",
		options: ["Gliklazid", "Inson insulini", "Metformin", "Tiozolidindionlar"],
		correctAnswer: "Metformin",
	},
	{
		questionText: "Qandli diabet aniqlанган bemorларда glikemик nazorat qachon o‘tkaziladi",
		options: ["Har 3 oyда", "Har oy", "Har 2 oyда", "Qondagi glyukoza normallashganda yiliga bir marta"],
		correctAnswer: "Qondagi glyukoza normallashganda yiliga bir marta",
	},
	{
		questionText: "Qandli diabet bilan og‘rigan bemorlar uchun tavsiyalar",
		options: ["Vazn kamaytirish va kaloriyani cheklash", "Uglevod manbasi sifatida dona ekinzorlar", "Oftalmolog ko‘rigi va kuzatuvi", "Barcha javoblar to‘g‘ri"],
		correctAnswer: "Barcha javoblar to‘g‘ri",
	},
	{
		questionText: "Qandli diabet bilan og‘rigan bemorларда arterial bosimнинг maqsadli darajasi",
		options: ["140/90 mm simob ustunidan past", "130/80 mm simob ustunidan past", "100/70 mm simob ustunidan past", "90/60 mm simob ustunidan past"],
		correctAnswer: "130/80 mm simob ustunidan past",
	},
	{
		questionText: "Qandli diabetда o‘tkaziladigan glikozillangan gemoglobin ( HbA1c ) nazorat oraliği",
		options: ["Har oy", "Har 3 oy", "Har 6 oy", "Yiliga bir marta"],
		correctAnswer: "Har 6 oy",
	},
	{
		questionText: "Diabetik retinопatiyada ko‘rishni saqlab qолиш uchun asosiy profilaktik chora",
		options: ["Glikemik nazoratni barqaror ushlab turish", "Ko‘z mashqlari bilan shug‘ullanish", "Yog‘li ovqatlarni cheklash", "Qon bosimini sun’iy ko‘tarish"],
		correctAnswer: "Glikemik nazoratni barqaror ushlab turish",
	},
	{
		questionText: "Diabetik nefropatiyaning erta belgisi",
		options: ["Proteinuriya", "Giperurikemiya", "Mikroalbuminuriya", "Siydikda glyukoza"],
		correctAnswer: "Mikroalbuminuriya",
	},
	{
		questionText: "Diabetik nefropatiyada asosiy laborator ko‘rsatkich",
		options: ["Qondagi kreatinin", "Siydikdagi oqsil (albumin)", "Gemoglobin", "Leykotsitlar soni"],
		correctAnswer: "Siydikdagi oqsil (albumin)",
	},
	{
		questionText: "Diabetik oyoq sindromida profilaktika chorasiga kirmaydi",
		options: ["Har kuni oyoqni yuvish", "Maxsus oyoq kiyim kiyish", "Oyoqni issiq suvda bug‘lash", "Tirnoqlarni to‘g‘ri kesish"],
		correctAnswer: "Oyoqni issiq suvda bug‘lash",
	},
	{
		questionText: "Gipoglikemiyaning dastlabki belgisi",
		options: ["Isitma", "Ter bosishi, qo‘l titrashi", "Og‘iz qurishi", "Yurak og‘rishi"],
		correctAnswer: "Ter bosishi, qo‘l titrashi",
	},
	{
		questionText: "Gipoglikemiyada birinchi yordam nima?",
		options: ["Insulin yuborish", "Shirin choy yoki shakarli suyuqlik ichirish", "Diuretik berish", "Sovuq kompress qo‘yish"],
		correctAnswer: "Shirin choy yoki shakarli suyuqlik ichirish",
	},
	{
		questionText: "Qandli diabetda asoratlarning oldini olish uchun eng muhim chora",
		options: ["Qondagi glyukozani nazorat qilish", "Faol harakatni kamaytirish", "Ko‘proq oqsil iste’mol qilish", "Stressdan qochish"],
		correctAnswer: "Qondagi glyukozani nazorat qilish",
	},
	{
		questionText: "Gipertoniya bilan og‘rigan bemorlar uchun parhez tavsiyasi",
		options: ["Tuz iste’molini cheklash", "Suvni ko‘p ichish", "Yog‘li ovqatni oshirish", "Kofe ko‘p ichish"],
		correctAnswer: "Tuz iste’molini cheklash",
	},
	{
		questionText: "Arterial gipertoniya asoratlariga kirmaydi",
		options: ["Miokard infarkti", "Oshqozon yarasi", "Insult", "Yurak yetishmovchiligi"],
		correctAnswer: "Oshqozon yarasi",
	},
	{
		questionText: "Gipertoniya diagnostikasida muhim ko‘rsatkich",
		options: ["Yurak urish tezligi", "Arterial bosimning ko‘tarilishi", "Qon shakar darajasi", "Qon gemoglobin miqdori"],
		correctAnswer: "Arterial bosimning ko‘tarilishi",
	},
	{
		questionText: "Arterial gipertoniyaning xavf omillariga kirmaydi",
		options: ["Past jismoniy faollik", "Stress", "Semizlik", "Chekish"],
		correctAnswer: "Past jismoniy faollik",
	},
	{
		questionText: "Arterial gipertoniyaning klinik belgilariga nimalar kiradi?",
		options: ["Bosh og‘rishi, bosh aylanishi, yurak sohasida og‘riq", "Isitma, titroq", "Diareya, qorin og‘rishi", "Ko‘ngil aynishi, qusish"],
		correctAnswer: "Bosh og‘rishi, bosh aylanishi, yurak sohasida og‘riq",
	},
	{
		questionText: "Gipertonik krizda birinchi yordam nima?",
		options: ["Kuchli jismoniy mashq qilish", "Tinchlik, qon bosimini sekin tushiruvchi dori berish", "Shirin choy ichish", "Issiq vannaga tushish"],
		correctAnswer: "Tinchlik, qon bosimini sekin tushiruvchi dori berish",
	},
	{
		questionText: "Yurak ishemik kasalligining asosiy sababi",
		options: ["Ateroskleroz", "Yurak klapanlarining yallig‘lanishi", "Virusli infektsiya", "Yurak aritmiyasi"],
		correctAnswer: "Ateroskleroz",
	},
	{
		questionText: "Yurak ishemik kasalligining klinik belgisi",
		options: ["Ko‘krak orqasida og‘riq", "Qorin dam bo‘lishi", "Bosh aylanishi", "Qon ketish"],
		correctAnswer: "Ko‘krak orqasida og‘riq",
	},
	{
		questionText: "Stenokardiya xurujida yordam sifatida nimalar qo‘llaniladi?",
		options: ["Nitroglitserin", "Insulin", "Prednizolon", "Ibuprofen"],
		correctAnswer: "Nitroglitserin",
	},
	{
		questionText: "Miokard infarktining asosiy belgisi",
		options: ["Ko‘krak orqasida 20 daqiqadan ortiq og‘riq", "Qisqa muddatli bosh og‘rishi", "Haroratning ko‘tarilishi", "Sovuq terlashsiz og‘riq"],
		correctAnswer: "Ko‘krak orqasida 20 daqiqadan ortiq og‘riq",
	},
	{
		questionText: "Miokard infarktida birinchi yordam",
		options: ["Nitroglitserin va aspirin berish, shoshilinch yordam чақириш", "Issiq suv ичириш", "Yurak массажи қилиш", "Sovuq компресс"],
		correctAnswer: "Nitroglitserin va aspirin berish, shoshilinch yordam чақириш",
	},
	{
		questionText: "Yurak yetишmovchiligининг klinik белгиси",
		options: ["Nafas qisishi, oyoqlarda shish", "Bosh og‘rishi, isitма", "Oshқozон оғриғи", "Terда тошма"],
		correctAnswer: "Nafas qisishi, oyoqlarda shish",
	},
	{
		questionText: "Yurak yetишmovchiligида диуретиклар қандай мақсадда берилади?",
		options: ["Ortiqcha suyuqlikni chiqarish", "Yurak ишини тезлаштириш", "Qonni suyultirish", "Yurak tonусини ошириш"],
		correctAnswer: "Ortiqcha suyuqlikni chiqarish",
	},
	{
		questionText: "Miokard infarktidan keyingi reabilitatsiya тадбирларига nimalar киради?",
		options: ["Dori terapiyasi, LFK, parhez, psixologik yordam", "Faqat dori терапияси", "Faqat LFK", "Faqat psixологик mashg‘ulotлар"],
		correctAnswer: "Dori terapiyasi, LFK, parhez, psixologik yordam",
	},
];

export const lyceumFamilyDoctorQuestions: Record<Locale, Question[]> = {
	en: questions,
	ru: questions,
	uz: questions,
}