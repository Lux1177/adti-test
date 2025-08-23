import type { Question, Locale } from "~/types/quiz"

export const questions = [
	{
		questionText: "Ameloblastoma qanday to‘qimadan rivojlanadi?",
		options: ["epitelial", "biriktiruvchi", "yog", "Fibroz"],
		correctAnswer: "epitelial"
	},
	{
		questionText: "Ameloblastomaga xos bo‘lmagan belgi?",
		options: ["tish ildiz uchini tekis emirilishi", "atrof to‘qimaga o‘sib kirishi", "Dyupyutiren simptomi", "tishlarni siljishi"],
		correctAnswer: "tish ildiz uchini tekis emirilishi"
	},
	{
		questionText: "Ameloblastomani kistoz formasi punksiyasida kuzatiladi:",
		options: ["tiniq yaltiragan suyuqliq", "qo‘ng‘ir rangli qonli suyuqliq", "kul rangli amorf massa", "shilimshiqsimon massa"],
		correctAnswer: "tiniq yaltiragan suyuqliq"
	},
	{
		questionText: "Ameloblastomaning eng ko‘p uchraydigan soxasi?",
		options: ["pastki jag‘ning shoxi va burchagi", "yuqori jag‘ning do‘mbog‘i", "pastki jag‘ning alveolyar o‘sig‘i", "yuqori jag‘ning alveolyar o‘sig‘i"],
		correctAnswer: "pastki jag‘ning shoxi va burchagi"
	},
	{
		questionText: "Ameloblastomaning rentgenologik xususiyatlari?",
		options: [
			"qo‘plab aniq chegarali emirilish uchoklari, 'sovun qo‘pigi pufaklari'",
			"noaniq chegarali emirilish uchoklari",
			"chegaralangan zichligi gomogen soyatish tojini eslatadi",
			"aniq bilinuvchi osteoskleroz, suyak moddasini sezilarli buzilishisiz"
		],
		correctAnswer: "qo‘plab aniq chegarali emirilish uchoklari, 'sovun qo‘pigi pufaklari'"
	},
	{
		questionText: "Angiomatoz epulisning klinik ko‘rinishi qaysi belgilar bilan harakterlanadi?",
		options: [
			"milkning qizil rangli dag‘al, og‘riqsiz hosilasi",
			"milkning chegaralangan mug‘uzlangan o‘chog‘i",
			"keng asosli zich, og‘riqsiz hosila",
			"qonashga va epitelizatsiyaga moyil bo‘lmagan 2-3 eroziya o‘chog‘i"
		],
		correctAnswer: "milkning qizil rangli dag‘al, og‘riqsiz hosilasi"
	},
	{
		questionText: "Angioneyrotrofik osteodistrofiya yuz–jag‘ soxasida qayerda uchraydi?",
		options: ["yuz gemiatrofiyasi", "jag‘lar odontogen osteomielit", "gaymoritda", "furunkul va karbunkulda"],
		correctAnswer: "yuz gemiatrofiyasi"
	},
	{
		questionText: "Ankilozni keltirib chiquvchi sabablar?",
		options: ["bo‘g‘im jaroxatlari", "Fibroz displaziya", "prikusns ko‘tarilishi", "prikusni pasayishi"],
		correctAnswer: "bo‘g‘im jaroxatlari"
	},
	{
		questionText: "Artritni davrlarini ko‘rsating.",
		options: ["o‘tkir", "klinik rivojlangan", "o‘rta", "boshlang‘ich"],
		correctAnswer: "o‘tkir"
	},
	{
		questionText: "Asosiy kesma yo‘nalishidagi to‘qimalar o‘sishi kuzatiladigan maxalliy plastika turi?",
		options: ["almashinuvchi uchburchak laxtakli", "jaroxat qirralari mobilizatsiyasi", "oyoqchali laxtak", "to‘g‘ri javob yo‘q"],
		correctAnswer: "almashinuvchi uchburchak laxtakli"
	},
	{
		questionText: "Ateroma - bu retension kista:",
		options: ["yog‘ bezi", "ter bezi", "so‘lak bezi", "shilliq bezlari"],
		correctAnswer: "yog‘ bezi"
	},
	{
		questionText: "Ateromada ajralma qanday bo‘ladi?",
		options: ["kashasimon", "seroz", "shilliq", "qon aralash"],
		correctAnswer: "kashasimon"
	},
	{
		questionText: "Atrofiyaga uchragan alveolyar o‘siq nima yordamida tiklanadi?",
		options: ["hamma javoblar to‘g‘ri", "autotransplantat", "allotransplantat", "gidroksiappatit"],
		correctAnswer: "hamma javoblar to‘g‘ri"
	},
	{
		questionText: "Antigenligi eng kam bo‘lgan to‘qima?",
		options: ["tog‘ay", "yog to‘qima", "teri", "nerv to‘qima"],
		correctAnswer: "tog‘ay"
	},
	{
		questionText: "BELL belgisi qaysi kasallikda kuzatiladi?",
		options: ["yuz nervi nevritida", "ko‘z olmasini harakatga keltiruvchi nervning parezida", "uch shoxli nerv nevralgiyasida", "uch shoxli nerv nevritida"],
		correctAnswer: "yuz nervi nevritida"
	},
	{
		questionText: "Bemorni maxsus tekshirishdan maqsad nima?",
		options: ["tashxis qo‘yish", "bemor psixikasini o‘rganish", "umumiy xolatini bilish", "ayrim organlarning xolatini aniqlash"],
		correctAnswer: "tashxis qo‘yish"
	},
	{
		questionText: "Bemorni tekshirish nimadan boshlanadi?",
		options: ["shikoyatini aniqlashdan", "pasport belgilarini yozishdan", "kasallik tarixini so‘rashdan", "ob’ektiv belgilarini aniqlashdan"],
		correctAnswer: "shikoyatini aniqlashdan"
	},
	{
		questionText: "Bernadskiy bo‘yicha usulda transplant qanday qayta ishlanadi?",
		options: ["minus 10’C da sovutish", "45 minut qaynatish", "liofilizatsiyalash", "kislota surtish"],
		correctAnswer: "minus 10’C da sovutish"
	},
	{
		questionText: "Egizaklardan olingan suyak transplantatsiyasi qaysi turga kiradi?",
		options: ["izotransplantatsiya", "allovitaltransplantatsiya", "eksplantatsiya", "autotransplantatsiya"],
		correctAnswer: "izotransplantatsiya"
	},
	{
		questionText: "Bo‘yin o‘rta oqma yo‘lini bartaraf qilishda rezeksiya qayerda o‘tkaziladi?",
		options: ["til osti suyagi tanasida", "qalqonsimon tog‘ayda", "to‘g‘ri javob yo‘q", "til osti suyagini katta shoxida"],
		correctAnswer: "til osti suyagi tanasida"
	},
	{
		questionText: "Bo‘yin o‘rta tug‘ma oqma yo‘lining ichki teshigi qaysi soxaga ochiladi?",
		options: ["til «ko‘r» teshigiga", "halqum orqa devoriga", "jag‘ osti soxasiga", "tanglay ko‘rtaklari asosiga"],
		correctAnswer: "til «ko‘r» teshigiga"
	},
	{
		questionText: "Bo‘yin soxasida ko‘p sonli limfa tugunlari kattalashishi qaysi kasallikka xos?",
		options: ["limfagranulematozga", "xemodektomaga", "neyrofibromatozga", "gemangiomaga"],
		correctAnswer: "limfagranulematozga"
	},
	{
		questionText: "Bo‘yin yon soxasi kista sini olib tashlash vaqtidagi eng xavfli asorat?",
		options: ["bo‘yin magistral tomirlarini jaroxati", "til osti suyagini sinishi", "yuz nervi parezi", "to‘g‘ri javob yo‘q"],
		correctAnswer: "bo‘yin magistral tomirlarini jaroxati"
	},
	{
		questionText: "Bo‘yin yon tug‘ma oqma yo‘lining ichki teshigi qaysi soxaga ochiladi?",
		options: ["tanglay ko‘rtaklari asosiga", "halqum orqa devoriga", "til 'ko‘r' teshigiga", "jag‘ osti soxasiga"],
		correctAnswer: "tanglay ko‘rtaklari asosiga"
	},
	{
		questionText: "“Qum soat”ga o‘xshab joylashadigan kista uchraydi:",
		options: ["til osti so‘lak bezida", "lablar kichik so‘lak bezlarida", "quloq oldi so‘lak bezida", "jag‘ osti so‘lak bezida"],
		correctAnswer: "til osti so‘lak bezida"
	},
	{
		questionText: "«Alkogolizatsiya» usulida qanday asallik davolanadi?",
		options: ["nevralgiyani", "parezni", "paralichni", "artritni"],
		correctAnswer: "nevralgiyani"
	},
	{
		questionText: "«Bo‘yin yon oqma yo‘li» ni tashxislashdagi asosiy tekshiruv usul:",
		options: ["kontrast fistulagrafiya", "radioizatop", "Vasserman reaksiyasi", "dinamik timol sinamasi"],
		correctAnswer: "kontrast fistulagrafiya"
	},
	{
		questionText: "«To‘lish» simptomi harakterli:",
		options: ["kavernoz gemangiomaga", "so‘lak bezi kista siga", "bo‘yin yon kista siga", "kapillyar gemangiomaga"],
		correctAnswer: "kavernoz gemangiomaga"
	},
	{
		questionText: "«Yuz-jag‘ soxasi xavfli o‘smasi» tashxisini aniqlashtirish uchun qo‘llaniladigan asosiy tekshirish usuli:",
		options: ["gistologik", "sitologik", "angiografik", "bioximik"],
		correctAnswer: "gistologik"
	},
	{
		questionText: "8!8 tishlarning qiyin chiqishidagi asoratlar:",
		options: ["retromolyar periostiti", "yiringli gaymorit", "kalkulyoz sialodenit", "marginal periodontit"],
		correctAnswer: "retromolyar periostiti"
	},
	{
		questionText: "8/8 tishlarning qiyin chiqishi sabablari:",
		options: ["hamma javoblar to‘g‘ri", "aql tishi sohasida shillik qavatning yallig‘lanishi, chiqish paytida jarohatlanishi", "aql tishi uchun jag‘da joy etishmasligi", "kapyushon ostida ovqat qoldiklarini kolishi"],
		correctAnswer: "hamma javoblar to‘g‘ri"
	},
	{
		questionText: "Abbe bo‘yicha hosil qilingan laktak qo‘yidagilarni qaysi biriga kiradi?",
		options: ["arteriyalashgan", "interpolyasion", "tranpozitsion", "to‘g‘ri javob yo‘q"],
		correctAnswer: "arteriyalashgan"
	},
	{
		questionText: "Abraziv prekanseroz Manganotti xeylitini asosiy davolash usuli:",
		options: ["kriodestuksiya", "ximioterapiya", "nur bilan davolash", "kombinirlangan"],
		correctAnswer: "kriodestuksiya"
	},
	{
		questionText: "Abraziv prekanseroz Manganotti xeylitini asosiy davolash usuli xisoblanadi:",
		options: ["kriodestuksiya", "ximioterapiya", "nur bilan davolash", "kombinirlangan"],
		correctAnswer: "kriodestuksiya"
	},
	{
		questionText: "Adenokistoz karsinoma sinonimlari:",
		options: ["silindroma", "adenokarsinoma", "pleomorf adenoma", "mukoepidermoid o‘sma"],
		correctAnswer: "silindroma"
	},
	{
		questionText: "Ag‘dariluvchi laxtak qo‘llaniladi:",
		options: ["ichki qavatni hosil qilish uchun", "teri defektlarini bartaraf qilish uchun", "chizikli kesmalarni yopish uchun", "to‘g‘ri javob yo‘q"],
		correctAnswer: "ichki qavatni hosil qilish uchun"
	},
	{
		questionText: "Ag‘dariluvchi laxtak qo‘llaniladi:",
		options: ["to‘qima dublikaturasini xosil qilish uchun", "teri defektlarini bartaraf qilish uchun", "chiziqli kesmalarni yopish uchun", "hammasi to‘g‘ri"],
		correctAnswer: "to‘qima dublikaturasini xosil qilish uchun"
	},
	{
		questionText: "Agar kapillyar gemangiomani bosganda uning rangi...",
		options: ["birdaniga oqaradi", "rangi o‘zgarmaydi", "rangi ozroq o‘zgaradi", "to‘g‘ri javob yo‘q"],
		correctAnswer: "birdaniga oqaradi"
	},
	{
		questionText: "Agar poliklinika sharoitida gaymor bo‘shlig‘i perforatsiya teshigini oddiy yaqinlashtirib tikish bilan yopish imkoni bo‘lmasa, qaysi taktika eng yaxshi hisoblanadi?",
		options: ["yodoformli tampon qo‘yib chok bilan mustahkamlash", "to‘qimani erkin ko‘chirish yo‘li bilan plastika qilish", "qon trombini o‘zini qoldirish", "yaqinlashtiruvchi qavikli chok qo‘yish"],
		correctAnswer: "yodoformli tampon qo‘yib chok bilan mustahkamlash"
	},
	{
		questionText: "Almashinuvchi uchburchak laxtaklar plastikasining matematik usulda ta’riflagan muallif:",
		options: ["A.A.Limberg", "SHimanovskiy", "C.P.Filatov", "Rauer"],
		correctAnswer: "A.A.Limberg"
	},
	{
		questionText: "Almashinuvchi uchburchak laxtakli plastika usuli ishlatiladi:",
		options: ["so‘lak oqma yo‘llarini bartaraf etishda", "yuzning katta xajmdagi keloid chandiqlarida", "qosh nuqsonlarida", "yumshoq to‘qimalarning katta nuqsonlarida"],
		correctAnswer: "so‘lak oqma yo‘llarini bartaraf etishda"
	},
	{
		questionText: "Almashinuvchi uchburchak laxtakli plastika usuli ishlatiladi:",
		options: ["bo‘yin chandiqli kontrakturasini bartaraf etishda", "yuzning katta o‘lchamli keloid chandiqlarida", "qosh nuqsonlarida", "yumshoq to‘qimalarning katta nuqsonlarida"],
		correctAnswer: "bo‘yin chandiqli kontrakturasini bartaraf etishda"
	},
	{
		questionText: "Almashinuvchi uchburchak laxtakli plastika usulining avtori:",
		options: ["Limberg", "Millard", "Sedillo", "Abbe"],
		correctAnswer: "Limberg"
	},
	{
		questionText: "Alveolit kasalligi kelib chiqishida qaysi omil ko‘proq sabab bo‘lishi mumkin?",
		options: ["tish katagi devorlarini o‘ta maydalab, tish olinganda", "gemoztaz yaxshi o‘tkazilmaganda", "tish katakchasiga tish nekrotik bo‘laklari tushganda", "tish katakchasiga tish toshlarini tushib qolishi"],
		correctAnswer: "tish katagi devorlarini o‘ta maydalab, tish olinganda"
	},
	{
		questionText: "Alveolit kasalligi kelib chiqishida qaysi omil ko‘proq sabab bo‘lishi mumkin?",
		options: ["tish katagi devorlarini o‘ta maydalab, tish olinganda", "gemoztaz yaxshi o‘tkazilmaganda", "tish katakchasiga tish nekrotik bo‘laklari tushganda", "tish katakchasiga tish toshlarini tushib qolishi"],
		correctAnswer: "tish katagi devorlarini o‘ta maydalab, tish olinganda"
	},
	{
		questionText: "Alveolotomiya operatsiyasiga bo‘lgan ko‘rsatmani aniqlang:",
		options: ["sinib qolgan tish ildizi bo‘laklarini olishda", "alohida joylashgan ildizni olishda", "bir necha ildizni olishda", "gemiseksiyasi operatsiyasini bajarish paytida"],
		correctAnswer: "sinib qolgan tish ildizi bo‘laklarini olishda"
	},
	{
		questionText: "Alveolyar o‘siq singanda bemorning asosiy shikoyati:",
		options: ["ovqat chaynashda og‘riqni kuchayishi", "tish qimirlashi", "mexanik ta’sirlovchilardan og‘riq", "estetik nuqson"],
		correctAnswer: "ovqat chaynashda og‘riqni kuchayishi"
	},
	{
		questionText: "Alveolyararo to‘siq balandligini kortikal suyak rezorbsiyasi xos:",
		options: ["paradontitni engil darajasi uchun", "paradontozni engil darajasi uchun", "paradontal kista uchun", "o‘rta darajali o‘tkir lokal paradontoz uchun"],
		correctAnswer: "paradontitni engil darajasi uchun"
	},
	{
		questionText: "Ambulatoriya operatsiyasidan bevosita oldin qilish zarur bo‘lgan muolaja:",
		options: ["Og‘iz bo‘shlig‘i irrigatsiyasi", "tishlarni elektroodontodiagnostikasi", "operatsiya zonasini rentgen qilish", "to‘g‘ri javob yo‘q"],
		correctAnswer: "Og‘iz bo‘shlig‘i irrigatsiyasi"
	},
	{
		questionText: "Bo‘yinni o‘rta oqma yo‘li rivojlanadi",
		options: [
			"embrional qalqonsimon-til yo‘li bitmaganda",
			"limfa tugunini yallig‘lanishidan keyin",
			"timus –halqum yo‘li bitmaganda",
			"to‘g‘ri javob yo‘q"
		],
		correctAnswer: "embrional qalqonsimon-til yo‘li bitmaganda"
	},
	{
		questionText: "Bo‘yinning o‘rta kista lari sinonimlari:",
		options: ["tireoglossal kista", "dermoid", "kistoz teratoma", "branxiogen kista"],
		correctAnswer: "tireoglossal kista"
	},
	{
		questionText: "Bo‘yinning o‘rta kistalarining sinonimlari:",
		options: ["tireoglossal kista", "dermoid", "kistoz teratoma", "branxiogen kista"],
		correctAnswer: "tireoglossal kista"
	},
	{
		questionText: "Bo‘yinning o‘rta kista lari va oqma yo‘llari ichki qavati qanday epiteliydan iborat?",
		options: ["quyidagi xammasidan biri", "ko‘p qavatli yassi", "silindrik", "o‘tuvchi"],
		correctAnswer: "quyidagi xammasidan biri"
	},
	{
		questionText: "Bo‘yinning o‘rta kista larini xirurgik davolashda bo‘lishi mumkin bo‘lgan xavfli asoratlardan biri:",
		options: ["xalqum shishi", "o‘pka yallig‘lanishi", "mediastinit", "yuz burchak venasi tromboflebiti"],
		correctAnswer: "xalqum shishi"
	},
	{
		questionText: "Bo‘yinning to‘liq o‘rta oqma yo‘li terida qaysi soxada ochilishi mumkin:",
		options: [
			"o‘rta chiziq bo‘ylab bo‘yinning old yuzasida til osti suyagi va qalqonsimon tog‘ay orasida, ba’zi xollarda til osti suyagi soxasida joylashadi",
			"faqat til osti suyagi soxasida ochiladi",
			"faqat til osti suyagi ustida joylashadi",
			"faqat qalqonsimon tog‘ay ostida joylashadi"
		],
		correctAnswer: "o‘rta chiziq bo‘ylab bo‘yinning old yuzasida til osti suyagi va qalqonsimon tog‘ay orasida, ba’zi xollarda til osti suyagi soxasida joylashadi"
	},
	{
		questionText: "Bo‘yinning tug‘ma kista va oqma yo‘llari bo‘lganda asosiy davolash usulini ko‘rsating.",
		options: ["jarroxlik aralashuv", "ximiyaterapiya", "fizioterapiya", "dinamik kuzatuv"],
		correctAnswer: "jarroxlik aralashuv"
	},
	{
		questionText: "Bo‘yinning tug‘ma kista larida yallig‘lanmagan xolatda punktant natijasi.",
		options: ["shaffof suyuqlik", "limfa suyuqligi", "qon", "dag‘al suyuqlik"],
		correctAnswer: "shaffof suyuqlik"
	},
	{
		questionText: "Bo‘yinning yon kista lari sinonimlari:",
		options: ["branxiogen kista", "dermoid", "kistoz teratoma", "o‘rta kista"],
		correctAnswer: "branxiogen kista"
	},
	{
		questionText: "Burun qanot qismi nuqsonini tiklashda qo‘yida ko‘rsatilgan usullarni qaysi birida ko‘proq laxtak nekrozi kuzatiladi?",
		options: ["Suslov usulida", "burun-lab burmasi laxtagida", "peshona laxtagida", "Filatov bandida"],
		correctAnswer: "Suslov usulida"
	},
	{
		questionText: "Burun qanotini travmadan keyingi subtotal nuqsoni tiklashda eng yaxshi estetik natija beruvchi usul",
		options: ["Suslov usuli", "Xitrov usuli", "nuqson qirg‘oqlarini yaqinlashtirish", "erkin teri laxtagi"],
		correctAnswer: "Suslov usuli"
	},
	{
		questionText: "Burun suyagi sinishida asosiy belgilar:",
		options: ["burundan qon ketishi", "ekzoftalm", "diplopiya", "Og‘iz yopilmasligi"],
		correctAnswer: "burundan qon ketishi"
	},
	{
		questionText: "Burun tanglay kista sinonimlari?",
		options: ["kesuv kanali kista si", "globulomaksillyar kista", "sharsimon-yuqori jag‘ kista si", "burunlab kista si"],
		correctAnswer: "kesuv kanali kista si"
	},
	{
		questionText: "Burunning sub va total nuqsonlarida uning to‘liq formasini tiklashda ishlatilmaydigan usul",
		options: ["erkin teri", "\"xind\" usuli", "burun lab laxtagi", "\"italyan\" usuli"],
		correctAnswer: "erkin teri"
	},
	{
		questionText: "Buyinni yuza joylashgan mushagi:",
		options: ["Buyinni teri osti mushagi", "B. narvonsimon mushaklar", "C. buyinni uzun mushagi", "D. boshni tugri mushaklari"],
		correctAnswer: "Buyinni teri osti mushagi"
	},
	{
		questionText: "Chakka – pastki jag‘ bo‘g‘imi Fibroz li ankilozini davolash quyidagicha",
		options: ["redressatsiyalash", "fizioterapiya qilish", "artroplastika qilish", "soxta bo‘g‘im xosil qilish"],
		correctAnswer: "redressatsiyalash"
	},
	{
		questionText: "Chakka-pastki jag‘ bo‘g‘imi disfunksiyasi sindromi qo‘yidagi xolda kelib chiqadi:",
		options: ["okklyuziya balandligini pasayishida", "chaynov mushak jaroxatida", "pastki jag‘ shikastida", "yuz nervi nevritida"],
		correctAnswer: "okklyuziya balandligini pasayishida"
	},
	{
		questionText: "Chakka-pastki jag‘ bo‘g‘imi o‘tkir artritining boshlang‘ich bosqichiga xos simptomlarni ko‘rsating",
		options: [
			"og‘riq, Og‘iz ochilish chegaralanganligi",
			"Chakka-pastki jag‘ bo‘g‘imidan umurtqaning bo‘yin soxasiga irradiatsiyalanuvch og‘riq",
			"quloq oldi soxasi gipergidrozi",
			"to‘g‘ri javob yo‘k"
		],
		correctAnswer: "og‘riq, Og‘iz ochilish chegaralanganligi"
	},
	{
		questionText: "Chakka-pastki jag‘ bo‘g‘imini qaysi kasalligida organik o‘zgarishlar kuzatilmaydi?",
		options: ["CHPJB disfunksiyasida", "Deformatsiyalashgan osteoartrozda", "CHPJB surunkali artritida", "CHPJB ankilozida"],
		correctAnswer: "CHPJB disfunksiyasida"
	},
	{
		questionText: "Chandiqli kontrakturaning sababi bo‘lishi mumkin:",
		options: ["yarali-nekrotik jarayonlar", "Og‘iz bo‘shlig‘ining spetsifik surunkali jarayonlari", "travmalar", "skarlatina"],
		correctAnswer: "yarali-nekrotik jarayonlar"
	},
	{
		questionText: "Cho‘ntak chuqurligi 5 mm bo‘lganda maqsadga muofiq",
		options: ["ochiq kyuretaj", "laxtakli operatsiya", "gingivotomiya", "kyuretaj"],
		correctAnswer: "ochiq kyuretaj"
	},
	{
		questionText: "Cho‘ntak chuqurligi 5 mm dan kam bo‘lganda maqsadga muofiq",
		options: ["kyuretaj", "ochiq kyuretaj", "laxtakli operatsiya", "gingivotomiya"],
		correctAnswer: "kyuretaj"
	},
	{
		questionText: "Cho‘ntak chuqurligi 5 mm dan ko‘p bo‘lganda maqsadga muofiq",
		options: ["laxtakli operatsiya", "kyuretaj", "ochiq kyuretaj", "gingivotomiya"],
		correctAnswer: "laxtakli operatsiya"
	},
	{
		questionText: "Cho‘ntakni aniqlash uchun, operatsiyadan so‘ngi maydonni qayta tekshirish maqsadga muofiq",
		options: ["1 oydan keyin", "3 oydan keyin", "1 haftadan keyin", "10 kundan keyin"],
		correctAnswer: "1 oydan keyin"
	},
	{
		questionText: "CHPJB ankilozida pastki mikrognatiya xosil bo‘lishi qo‘yidagi bilan bog‘liq:",
		options: ["o‘sish «zona» sining jaroxati", "chaynov mushaklari atrofiyasi", "chaynov mushaklari faoliyatini buzilishi", "bo‘g‘im innervatsiyasini buzilishi"],
		correctAnswer: "o‘sish «zona» sining jaroxati"
	},
	{
		questionText: "CHPJB ankilozida qanaypatologik birikish tushuniladi",
		options: [
			"bo‘g‘im yuzalarini",
			"tojsimon o‘simtani yonok yoyi bilan",
			"pastki jag‘ shoxini yuqori jag‘ do‘ngligi bilan",
			"tojsimon o‘simtani yonok suyagi bilan"
		],
		correctAnswer: "bo‘g‘im yuzalarini"
	},
	{
		questionText: "CHPJB artrozi uchun harakterli bo‘lmagan belgi :",
		options: [
			"bo‘g‘imda harakat bo‘lmasligi",
			"Og‘iz  ochilishini chegaralanishi",
			"bo‘g‘imdagi qirsillash",
			"chaynov muskullarini charchashi va spazmi"
		],
		correctAnswer: "bo‘g‘imda harakat bo‘lmasligi"
	},
	{
		questionText: "CHPJB bo‘g‘imda ertalabki diskomfort tuyg‘usi qanday xastalikdan dalolat beradi:",
		options: ["osteoartroz", "artrit", "neoartroz", "ankiloz"],
		correctAnswer: "osteoartroz"
	},
	{
		questionText: "CHPJB bog‘lamlariga tegishli emas",
		options: [
			"yonok-pastki jag‘ bog‘lami",
			"pastki jag‘ va bigizsimon o‘sig‘ bog‘lami",
			"Chakka pastki jag‘ bog‘lami",
			"pastki jag‘ va qanotsimon o‘sig‘ bog‘lami"
		],
		correctAnswer: "yonok-pastki jag‘ bog‘lami"
	},
	{
		questionText: "CHPJB infeksiyaning kirish yo‘llari",
		options: ["gematogen", "odontogen", "odontogen va kontakt", "odontogen va limfogen"],
		correctAnswer: "gematogen"
	},
	{
		questionText: "CHPJB og‘riqli disfunksiya sindromiga harakterli emas:",
		options: [
			"bo‘g‘im yuzalarida organiq o‘zgarishlar",
			"bo‘g‘imlarni ertalab qotib qolish sezgisi",
			"chaynov mushaklari tolikishi va spazmi",
			"Og‘iz  ochilishi chegaralanishi"
		],
		correctAnswer: "bo‘g‘im yuzalarida organiq o‘zgarishlar"
	},
	{
		questionText: "CHPJB og‘riqli disfunksiyasi sindromida davolash muolajalaridan qaysi biri yaxshi natija beradi",
		options: [
			"davolovchi fizkultura, igna bilan davolash",
			"antibakterial davo",
			"protezlash, antibakterial davo",
			"osteotomiya, osteoplastika"
		],
		correctAnswer: "davolovchi fizkultura, igna bilan davolash"
	},
	{
		questionText: "CHPJB suyakli ankilozida davolashdagi eng optimal usul.",
		options: ["artroplastika", "fizioterapiya", "redressatsiya", "pastki jag‘ osteotomiyasi"],
		correctAnswer: "artroplastika"
	},
	{
		questionText: "CHPJB suyakli ankilozida qaysi davolash usuli o‘tkaziladi?",
		options: [
			"osteotomiya, osteoplastika",
			"redresatsiya",
			"davolash fizkulturasi ignaterapiya bilan",
			"protezlash"
		],
		correctAnswer: "osteotomiya, osteoplastika"
	},
	{
		questionText: "CHPJB tarkibiga kirmaydi:",
		options: ["bo‘g‘im o‘sigi", "bo‘g‘im chuqurchasi", "bo‘g‘im do‘mbogi", "bo‘g‘im boshchasi"],
		correctAnswer: "bo‘g‘im o‘sigi"
	},
	{
		questionText: "CHPJBining artritiga xarakterli belgilar:",
		options: [
			"Og‘iz  ochilishining chegaralanishi",
			"ko‘z yosh oqishi",
			"bo‘g‘imdagi sanchuvchi og‘riq",
			"g‘ichirlash va krepitatsiya"
		],
		correctAnswer: "Og‘iz  ochilishining chegaralanishi"
	},
	{
		questionText: "CHPJB-ning birlamchi suyak kasalliklariga kirmaydi:",
		options: ["CHPJB disfunksiyasi", "neoartroz", "suyak ankilozi", "osteoartrit"],
		correctAnswer: "CHPJB disfunksiyasi"
	},
	{
		questionText: "Cistotomiya o‘tkazilmaydi",
		options: [
			"kichik o‘lchamdagi kista",
			"1-2 tishlar soxasida joylashganda",
			"yuqori jag‘ kista lari gaymor bo‘shlig‘iga o‘sib kirganda",
			"kista bo‘shlig‘iga 3 yoki ko‘proq tishlar kirib turganda"
		],
		correctAnswer: "kichik o‘lchamdagi kista"
	},
	{
		questionText: "Deffenbax bo‘yicha plastika usuli ishlatiladi",
		options: [
			"pastki qovoqlarni qayrilishini bartaraf etishda",
			"yuzni keloid chandiqlarida",
			"qosh nuqsonlarida",
			"so‘lak oqma yo‘lini bartaraf etishda"
		],
		correctAnswer: "pastki qovoqlarni qayrilishini bartaraf etishda"
	},
	{
		questionText: "Dermoid kista tarkibi qanday ?",
		options: ["butqasimon massa", "yog moddalari", "gemorogik suyuqlik", "qaxrabo rangdagi suyuqlik"],
		correctAnswer: "butqasimon massa"
	},
	{
		questionText: "Dermoid kista tarkibi",
		options: ["butqasimon massa", "yog moddalari", "gemorogik suyuqlik", "xolestirinli"],
		correctAnswer: "butqasimon massa"
	},
	{
		questionText: "Diplopiya qachon kuzatiladi:",
		options: [
			"infraorbital og‘riqsizlantirishda",
			"kuruk tishlarni og‘riqsizlantirishda",
			"tuberal og‘riqsizlantirishda",
			"mandibulyar og‘riqsizlantirishda"
		],
		correctAnswer: "infraorbital og‘riqsizlantirishda"
	},
	{
		questionText: "Egarsimon burun, yumshoq va qattiq tanglayni chegarali nuqsoni hosil bo‘ladi",
		options: ["sifilisda", "nomada", "volchankada", "jaroxatda"],
		correctAnswer: "sifilisda"
	},
	{
		questionText: "Ekskoxleatsiya – bu",
		options: [
			"patologik to‘qimani sog‘ to‘qima chegarasigacha olib tashlash",
			"sistoektomiya",
			"sistotomiya",
			"butun xosilani qobig‘i bilan birga olib tashlash"
		],
		correctAnswer: "patologik to‘qimani sog‘ to‘qima chegarasigacha olib tashlash"
	},
	{
		questionText: "Ekzoftalm, pastki prognatiya, o‘tkir qirrali (klyuvoobrazniy) burunni o‘zida mujassam etgan sindrom",
		options: ["Kruzon", "Vardenburg", "Exler – Donlos", "Greyg"],
		correctAnswer: "Kruzon"
	},
	{
		questionText: "Ekzostoz olingandan so‘ng qanday chok turidan foydalaniladi:",
		options: ["tugunsimon", "yo‘naltiruvchi", "uzluksiz", "oddiy"],
		correctAnswer: "tugunsimon"
	},
	{
		questionText: "Ekzostozda operatsiya nimadan iborat:",
		options: [
			"jag‘larning deformatsiyalangan soxasida silliqlash o‘tkaziladi",
			"xosila sog‘lom to‘qima chegarasigacha olib tashlanadi",
			"patologik o‘choq joylashgan jag‘ qismi rezeksiyasi o‘tkaziladi",
			"xosila sog‘lom to‘qima chegarasigacha olib tashlanadi va nur terapiya"
		],
		correctAnswer: "jag‘larning deformatsiyalangan soxasida silliqlash o‘tkaziladi"
	},
	{
		questionText: "Emal hosil qiluvchi a’zo rivojlanishi buzulishi natijasida jag‘ suyaklarida rivojlanadi:",
		options: ["follikulyar kista", "keratokista", "kesuv kanali kista si", "nozoalveolyar kista"],
		correctAnswer: "follikulyar kista"
	},
	{
		questionText: "Enxondromani ekxondromadan qanday farqlanadi?",
		options: [
			"jag‘dagi lokalizatsiyasi bilan",
			"tishlarning patologik qimirlashi bilan",
			"metastaz berishi bilan",
			"shakli bilan"
		],
		correctAnswer: "jag‘dagi lokalizatsiyasi bilan"
	},
	{
		questionText: "Enxondromani nima bilan differensiatsiyalanmaydi?",
		options: ["Fibroz  displaziya", "eozinofil granulema", "jag‘ osteomasi", "ossifitsiyalovchi fibroma"],
		correctAnswer: "Fibroz  displaziya"
	}
];


export const lyceumDentalSurgeryQuestions: Record<Locale, Question[]> = {

	en: questions,
	ru: questions,
	uz: questions,
}
