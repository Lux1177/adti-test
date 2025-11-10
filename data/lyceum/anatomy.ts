import type { Locale, Question } from "~/types/quiz"

const questions = [
	{
		questionText: "12-barmoqli ichakni qon bilan ta’minlovchi 2 arteriyalarni ayting",
		options: ["a.pancreaticoduodenalis superior, a.pancreaticoduodenalis inferior", "a.pancreaticoduodenalis inferior et dorzalis  a.pancreaticoduodenalis posterior", "a.pancreaticoduodenalis anterior, a.pancreaticoduodenalis posterior", "a.pancreaticoduodenalis posterior"],
		correctAnswer: "a.pancreaticoduodenalis superior, a.pancreaticoduodenalis inferior",
	},
	{
		questionText: "3chi dumg'aza umurtqasi ro'parasidan boshlanuvchi ichak",
		options: ["rectum- 3chi dumg'aza umurtqasi ro'parasidan boshlanuvchi ichak", "colon sigmoideum- 3chi dumg'aza umurtqasi ro'parasidan boshlanuvchi ichak", "duodenum -3chi dumg'aza umurtqasi ro'parasidan boshlanuvchi ichak", "intestinum tenuae-3chi dumg'aza umurtqasi ro'parasidan boshlanuvchi ichak"],
		correctAnswer: "rectum- 3chi dumg'aza umurtqasi ro'parasidan boshlanuvchi ichak",
	},
	{
		questionText: "CHanoq bo‘shlig‘i qaysi 3 qavatlarga bo‘linadi:",
		options: ["qorinparda, qorinparda osti, teri osti qavatlarga bo‘linadi", "qorinparda usti, parda    osti qavatlarga bo‘linadi", "teri osti, qorinpardadan tashqari, qorinparda orasi qavatlarga bo‘linadi", "qorinpardadan tashqari, teri usti, bel qavatlarga bo‘linadi"],
		correctAnswer: "qorinparda, qorinparda osti, teri osti qavatlarga bo‘linadi",
	},
	{
		questionText: "Taloqdan venoz qon qaysi venaga quyiladi?",
		options: ["v-portaega quyiladi", "v.cava superiorga quyiladi", "v.cava posteriorga quyiladi", "v.mesenterica superior ga quyiladi"],
		correctAnswer: "v-portaega quyiladi",
	},
	{
		questionText: "Aorta nechta qismdan tashkil topgan?",
		options: ["3ta qismdan tashkil topgan", "2ta qismdan tashkil topgan", "1ta qismdan tashkil topgan", "4ta qismdan tashkil topgan"],
		correctAnswer: "3ta qismdan tashkil topgan",
	},
	{
		questionText: "Aorta ravog’idan qaysi qon tomirlar chiqadi?",
		options: ["tr. brachiocerphalicus, a carotis communis sinistra, a subclavia sinistra", "tr. brachiocephalicus dextra et sinistra", "o’mrov osti arteriyasi", "tr. brachiocephalicus, a subclavia dextra et sinistra"],
		correctAnswer: "tr. brachiocerphalicus, a carotis communis sinistra, a subclavia sinistra",
	},
	{
		questionText: "Apex pulmonis 1-chi qovurg'adan qancha yuqorida turadi",
		options: ["3-4sm yuqorida turadi", "1sm yuqorida turadi", "4sm yuqorida turadi", "7sm yuqorida turadi"],
		correctAnswer: "3-4sm yuqorida turadi",
	},
	{
		questionText: "Aql tishlari qachоn chiqadi?",
		options: ["18 – 25 yoshlarda", "13 – 15 yoshlarda", "14 – 20 yoshlarda", "18 – 30 yoshlarda"],
		correctAnswer: "18 – 25 yoshlarda",
	},
	{
		questionText: "Arteriya colica media qaysi arteriya tarmog’i ?",
		options: ["a mesenterica superior", "a lienalis", "ko’krak aortasini", "truncus coeliacus"],
		correctAnswer: "a mesenterica superior",
	},
	{
		questionText: "Arteriya hepatica communisdan qaysi arteriya chiqadi?",
		options: ["a. hepatica propria", "a hepatica  anterior", "ko’krak aortasini", "a. gastroduodenalis posterior"],
		correctAnswer: "a. hepatica propria",
	},
	{
		questionText: "Atsinusni tarkibiga nimalar kiradi?",
		options: ["bronchioli respiratoria, ductuli alveolaris, sacculi alveolaris", "ductuli alveolaris, ductuli bronxialis", "sacculi alveolaris", "sacculi alveolaris , bronchus segmentalis"],
		correctAnswer: "bronchioli respiratoria, ductuli alveolaris, sacculi alveolaris",
	},
	{
		questionText: "Ayollar siydik chiqarish kanali qaerga ochiladi?",
		options: ["qin daxliziga", "qinga", "siydik pufagi", "katta lablar orasiga"],
		correctAnswer: "qin daxliziga",
	},
	{
		questionText: "Bachadon qorinparda bilan qanday o’ralgan?",
		options: ["intraperitoneal o’ralgan", "mezoperitoneal o’ralgan", "bir tomondan o’ralgan", "hamma tomondan o’ralmagan"],
		correctAnswer: "intraperitoneal o’ralgan",
	},
	{
		questionText: "Birlamchi siydik qaеrda hоsil bo’ladi ?",
		options: ["buyrak tanachasida", "burama naychalarida", "Gеnlе qоvuzlоg’i", "ulab turuvchi naychada"],
		correctAnswer: "buyrak tanachasida",
	},
	{
		questionText: "Bo’sh hоlatidagi siydik pufagi qorin parda bilan qanday o’ralgan?",
		options: ["ekstrapеritоnеal o’ralgan", "intrapеritоnеal  o’ralgan", "mеzоpеritоnеal o’ralgan", "uch tоmоndan o’ralgan"],
		correctAnswer: "ekstrapеritоnеal o’ralgan",
	},
	{
		questionText: "Qachon bronx daraxti  shakllanadi?",
		options: ["tug’ilish paytiga", "embrional davrning 4 oyida", "embrional davrning 3 oyida", "embrional davrning 6 oyida"],
		correctAnswer: "tug’ilish paytiga",
	},
	{
		questionText: "A. rectalis superior, media, inferior qaysi a’zoni qon bilan taminlaydi?",
		options: ["to’g’ri ichakni", "och ichakni", "ko’krak aortasini", "s-simon ichakni"],
		correctAnswer: "to’g’ri ichakni",
	},
	{
		questionText: "Burun bo’shlig’ida qanday sohalar bor?",
		options: ["hidlov va nafas sohasi", "havoni o’tkazuvchi soha", "yuqori jag", "hidlov va ta'm bilish sohasi"],
		correctAnswer: "hidlov va nafas sohasi",
	},
	{
		questionText: "Burun bo'shlig'ida nechta chig'anoq bor",
		options: ["3ta chig'anoq bor", "5ta chig'anoq bor", "4ta chig'anoq bor", "2ta chig'anoq bor"],
		correctAnswer: "3ta chig'anoq bor",
	},
	{
		questionText: "Havo burun boʼshligʼidan qaysi teshik orqali xalqumga oʼtadi:",
		options: ["xoana teshigi orqali", "tomoq teshigi orqali", "burun teshigi orqali", "hiqildoq teshigi orqali"],
		correctAnswer: "xoana teshigi orqali",
	},
	{
		questionText: "Qaysi bez sekretsiyasi buzilishida gipertireoz, tireotoksikoz  va gipoterioz kasalliklari  uchraydi?",
		options: ["gl. thyroidea sekretsiyasi buzilishida", "gl. suprarenalis sekretsiyasi buzilishida", "gl. parathyroidea sekretsiyasi buzilishida", "pancreas sekretsiyasi buzilishida"],
		correctAnswer: "gl. thyroidea sekretsiyasi buzilishida",
	},
	{
		questionText: "Ren-buyrak fassiyalari qaysilar?",
		options: ["capsula fibrosa, adiposa, fasia renalis", "capsula fibrosa, adiposa, muscularis", "capsula adiposa", "capsula renalis, adiposa, adventitia"],
		correctAnswer: "capsula fibrosa, adiposa, fasia renalis",
	},
	{
		questionText: "Buyrak o'lchamlari (uzunligi, eni, qalinligi)",
		options: ["10-12sm, 5-6sm, 4sm", "8-9sm, 5-6sm, 3sm", "10-12sm, 3-4 sm, 4 sm", "10-11sm, 7-8sm, 4sm"],
		correctAnswer: "10-12sm, 5-6sm, 4sm",
	},
	{
		questionText: "Buyrak qanday a’zo?",
		options: ["ekskretor, qondan siydikni ajratuvchi", "ekskretor, qondan gormonni ajratuvchi", "ajratuvch", "inkretor, qondagi siydikni ajratuvchi"],
		correctAnswer: "ekskretor, qondan siydikni ajratuvchi",
	},
	{
		questionText: "Buyrak struktura – funktsiоnal biriligini nima tashkil qiladi ?",
		options: ["nеfron tashkil qiladi", "buyrak tanachasi tashkil qiladi", "tоmirlar kоptoqchasi  tashkil qiladi", "buyrak naychalari tashkil qiladi"],
		correctAnswer: "nеfron tashkil qiladi",
	},
	{
		questionText: "Buyrakdagi ajoyib to’r qaerda joylashgan?",
		options: ["koptokchada joylashgan", "kapsulada joylashgan", "siydik pufagi joylashgan", "kanalchalarda joylashgan"],
		correctAnswer: "koptokchada joylashgan",
	},
	{
		questionText: "Buyrakni og'irligi o'rta yoshli odamlarda qancha",
		options: ["og'irligi 140-150gr", "og'irligi 180gr", "og'irligi 110-120gr", "og'irligi 100gr"],
		correctAnswer: "og'irligi 140-150gr",
	},
	{
		questionText: "Chap qorinchada aorta bilan qaysi qon aylanish doirasi boshlanadi?",
		options: ["katta qon aylanish doirasi", "kichik qon aylanish doirasi", "brachialis doirasi", "embrionda qon aylanish doirasi"],
		correctAnswer: "katta qon aylanish doirasi",
	},
	{
		questionText: "CHap tutqich sinusining aloqasi:",
		options: ["chanoq bo’shligi bilan", "o’ng tutqich bo'shlig'i bilan", "katta charvi bilan", "katta charvi qopchasining bo'shlig'i bilan"],
		correctAnswer: "chanoq bo’shligi bilan",
	},
	{
		questionText: "Chaqaloqlarda yurakni joylashishi qanday?",
		options: ["yuqorida va ko’ndalang", "pastda va ko’ndalang", "qiyshiq", "yuqorida va qiyshiq"],
		correctAnswer: "yuqorida va ko’ndalang",
	},
	{
		questionText: "V.Portae  qaysi a’zolardan qon yig’adi?",
		options: ["ichaklardan, taloqdan oshqozondan", "yurakdan, o'pkadan", "v. profunda brachii", "bachadondan"],
		correctAnswer: "ichaklardan, taloqdan oshqozondan",
	},
	{
		questionText: "Dentes incisivi necha oylikdan chiqa boshlaydi",
		options: ["6-9oylikda chiqa boshlaydi", "5-8oylikda", "10-11oylikda", "7-8oylikda"],
		correctAnswer: "6-9oylikda chiqa boshlaydi",
	},
	{
		questionText: "Doimiy tishlar necha yoshdan boshlab chiqa boshlaydi:",
		options: ["6 yoshdan  chiqa boshlaydi", "7 yoshdan", "6 oylikdan", "2 yoshdan"],
		correctAnswer: "6 yoshdan  chiqa boshlaydi",
	},
	{
		questionText: "Ductus choledochus qayerga ochiladi",
		options: ["duodenumning pars descendens qismiga", "jejunumga", "colonga", "rectumga"],
		correctAnswer: "duodenumning pars descendens qismiga",
	},
	{
		questionText: "Ekstraperitoneal o'ralgan a'zolar keltirilgan javobni belgilang",
		options: ["pars descendes duodenum, pancreas, pars inferior recti, ren, ureter", "Duodenum descendes, ampulla recti, hepar", "Colon ascendes et descendes, ampulla recti, hepar, uterus, to'lgan o't pufagi", "Taloq, bachadon, hepar, Tuxumdon, oshqozon, och ichak"],
		correctAnswer: "pars descendes duodenum, pancreas, pars inferior recti, ren, ureter",
	},
	{
		questionText: "Endokrin bezlar ichida eng katta bezni ko'rsating",
		options: ["qalqonsimon bezi", "qalqon oldi bezi", "buyrak usti bezlari", "epifiz bezi"],
		correctAnswer: "qalqonsimon bezi",
	},
	{
		questionText: "Glisson kapsulasi qaysi a'zoga tegishli",
		options: ["jigar a'zoga tegishli", "buyrak a'zoga tegishli", "o’t a'zoga tegishli", "o'pka a'zoga tegishli"],
		correctAnswer: "jigar a'zoga tegishli",
	},
	{
		questionText: "Gonodotropin gormonlari qaysilar",
		options: ["follitropin va lyutropin", "prolactin va lipotropin", "melatonin va AKTG", "melatonin va follitropin"],
		correctAnswer: "follitropin va lyutropin",
	},
	{
		questionText: "Har jag'da oltitadan bo'ladi?",
		options: ["dentes molares", "dentes premolares", "dentes canini", "dentes incivini"],
		correctAnswer: "dentes molares",
	},
	{
		questionText: "havoni tozalash,ilitib berish, ovoz paydo qilish kabi funksiyalarni bajaradi",
		options: ["larynx", "parynx", "cavitas nasi", "esophagus"],
		correctAnswer: "larynx",
	},
	{
		questionText: "Hidlov nervi kalla qutisi ichidan burun boʼshligʼiga nima orqali kirib keladi:",
		options: ["gʼalvirsimon plastinka teshiklari", "gʼalvirsimon katakchalar", "yuqori burun yoʼli", "ponasimon-tanglay teshigi"],
		correctAnswer: "gʼalvirsimon plastinka teshiklari",
	},
	{
		questionText: "Hiqildoqni vazifasi nima?",
		options: ["havoni  o’tkazish, ovoz hosil qilish,pastki nafas yo’lini himoya qilish", "havoni o’tkazmaydi, tozalaydi", "havo o’tkazmaslik", "ovoz hosil qilmaydi, isitadi"],
		correctAnswer: "havoni  o’tkazish, ovoz hosil qilish,pastki nafas yo’lini himoya qilish",
	},
	{
		questionText: "Ingichka ichak qismlarini ko'rsating",
		options: ["Duodenum, jejenum, ileum", "Duodenum, jejenum, ceacum", "Jejenum, ileum, colon", "Duodenum, ileum, ceacum"],
		correctAnswer: "Duodenum, jejenum, ileum",
	},
	{
		questionText: "Ingichka ichak uzunligi qancha",
		options: ["Ingichka ichak uzunligi  5-6m", "Ingichka ichak uzunligi         9-10m", "Ingichka ichak uzunligi   7-9 m", "Ingichka ichak uzunligi           3-4m"],
		correctAnswer: "Ingichka ichak uzunligi  5-6m",
	},
	{
		questionText: "Ingichka ichakning dеvоri qanday qavatlardan tuzilgan?",
		options: ["sеrоz qavati, sеrоz оsti, muskul va shilliq qavatlar", "sеrоz qavati, muskul va shilliq qavatlar", "advеntatsiya qavati, muskul , shilliq оsti va shilliq qavatlar", "sеrоz оsti , muskul , shilliq оsti"],
		correctAnswer: "sеrоz qavati, sеrоz оsti, muskul va shilliq qavatlar",
	},
	{
		questionText: "Intestinum grassum  -yo'g'on  ichakning uzunligi qancha",
		options: ["yo'g'on  ichakning uzunligi              1,5-2metr", "yo'g'on  ichakning uzunligi   25-30sm", "yo'g'on  ichakning uzunligi   1-3 sm", "yo'g'on  ichakning uzunligi   4,5metr"],
		correctAnswer: "yo'g'on  ichakning uzunligi              1,5-2metr",
	},
	{
		questionText: "Jigar qanday vazifalarni bajaradi?",
		options: ["hazm jarayonida, modda almashunivida, qon ichlab chiqarichda", "hazm jarayonida, suyuqlik ichlab chiqarichda", "modda almashunivida", "modda almashunivida, oshqozonga ferment ishlab chiqarichda"],
		correctAnswer: "hazm jarayonida, modda almashunivida, qon ichlab chiqarichda",
	},
	{
		questionText: "Jigarning visseral yuzasidan oʻn ikki barmoq ichakka yoʻnaladigan boylamni toping",
		options: ["Lig hepatoduodenale", "Lig hepatogastricum", "Lig hepatophrenicum", "Lig hepatoesophogeale"],
		correctAnswer: "Lig hepatoduodenale",
	},
	{
		questionText: "Jinsiy bezlar homila hayotining nechinchi haftasida paydo bo'ladi?",
		options: ["4 haftasida paydo bo'ladi", "3 haftasida paydo bo'ladi", "2 haftasida paydo bo'ladi", "5 haftasida paydo bo'ladi"],
		correctAnswer: "4 haftasida paydo bo'ladi",
	},
	{
		questionText: "Kalla gumbazi sinuslariga taalluqli:",
		options: ["sinus sagittalis superior", "sinus petrosus superior", "sinus transversus", "sinus occipitalis"],
		correctAnswer: "sinus sagittalis superior",
	},
	{
		questionText: "Katta duodenal so‘rg‘ich:",
		options: ["o‘n ikki barmoqli ichakning pastga tushuvchi qismi o‘rta va pastki uchdan bir qismlari chegarasida ichki orqa devorida joylashadi", "o‘n ikki barmoqli ichakning yuqori va o‘rta uchdan bir qismlari chegarasida ichakning orqa devorida joylashadi", "o‘n ikki barmoq ichakning pastga tushuvchi bo‘limi yuqori uchdan bir qismi chegarasida joylashadi", "o‘n ikki barmoq ichakning pastki gorizontal qismi oldingi yon devorida joylashadi"],
		correctAnswer: "o‘n ikki barmoqli ichakning pastga tushuvchi qismi o‘rta va pastki uchdan bir qismlari chegarasida ichki orqa devorida joylashadi",
	},
	{
		questionText: "Limfa tuguni qanday shakllarda bo‘ladi?",
		options: ["Loviyasimon, ovalsimon", "Loviyasimon, yassi", "Yumaloq, uchburchak", "Loviyasimon, uchburchak"],
		correctAnswer: "Loviyasimon, ovalsimon",
	},
	{
		questionText: "Katta yoshdagi odamda qalqonsimon bezning og‘irligi:",
		options: ["qalqonsimon bezning og‘irligi 25-30 g", "qalqonsimon bezning og‘irligi 55-60 g", "qalqonsimon bezning og‘irligi 15-20 g", "qalqonsimon bezning og‘irligi 70-80 g"],
		correctAnswer: "qalqonsimon bezning og‘irligi 25-30 g",
	},
	{
		questionText: "Katta yoshdagi оdamlarda qanday tishlar farqlanadi ?",
		options: ["qoziq tishlar , kurak tishlar, kichik оziq tishlar, katta оziq tishlar", "kichik оziq tishlar, kurak tishlar", "katta оziq tishlar, kurak tishlar", "оziq tishlar, kurak tishlar"],
		correctAnswer: "qoziq tishlar , kurak tishlar, kichik оziq tishlar, katta оziq tishlar",
	},
	{
		questionText: "Kichik charvini hosil qiladi",
		options: ["lig.hepatoduodenale, lig.hepatogastricum", "lig.gastrocolicum, lig.hepatogastricum, lig.gastrolienale", "lig.gastrolienale, lig.unguinale, lig.lacunare", "lig.heatogastricum, lig.gastropancreaticum"],
		correctAnswer: "lig.hepatoduodenale, lig.hepatogastricum",
	},
	{
		questionText: "Kichik qon aylanish doirasi qayerda va qanday qon tomir bo‘lib tugaydi?",
		options: ["O‘ng bo‘lmachada, o‘pka venasi bo‘lib", "Chap bo‘lmachada, o‘pka venalari bo‘lib", "O‘ng qorinchada, o‘pka venalari bo‘lib", "O‘ng bo‘lmachada, kavak venalar bo‘lib"],
		correctAnswer: "O‘ng bo‘lmachada, o‘pka venasi bo‘lib",
	},
	{
		questionText: "Kissel Bax sohasi qayerda joylashgan?",
		options: ["Burun toʼsigʼida", "Pastki burun chigʼanogʼida", "Oʼrta burun yoʼlida", "Burun daxlizida"],
		correctAnswer: "Burun toʼsigʼida",
	},
	{
		questionText: "Ko’richakning qorin parda bilan qoplanishi",
		options: ["hamma tomondan", "ikki tamondan", "2 tamondan", "3 tamondan"],
		correctAnswer: "hamma tomondan",
	},
	{
		questionText: "langergans orolchasi gormonlarini ayting",
		options: ["insulin va glyukagon", "progesteronandrogen", "gidrokortizon, glyukoza", "aldosteron, insulin"],
		correctAnswer: "insulin va glyukagon",
	},
	{
		questionText: "Me’da bezlari qayerda ko’p to’plangan?",
		options: ["Fundusda ko’p to’plangan", "Pars pyloricada ko’p to’plangan", "Tanasida ko’p to’plangan", "Pars cardiacada ko’p to’plangan"],
		correctAnswer: "Fundusda ko’p to’plangan",
	},
	{
		questionText: "Pancreas-me’da osti bezi qorin parda bilan qanday o’ralgan?",
		options: ["retroperitoneal", "ekstraperitoneal", "xar tomonlama", "mezoperitoneal"],
		correctAnswer: "retroperitoneal",
	},
	{
		questionText: "Milatonin gormonini ishlab chiqaruvchi bezni ko'rsating",
		options: ["Epifiz bezi", "Qalqonsimon bezi", "buyrak usti bezlari bezi", "qalqon oldi bezi"],
		correctAnswer: "Epifiz bezi",
	},
	{
		questionText: "Qaysi sinusidan ichki boʼyinturuq venasi boshlanadi:",
		options: ["sigmasimon sinusdan  boshlanadi", "gʼorsimon boshlanadi", "ustki oʼq-yoysimon boshlanadi", "yuqori oʼq-yoysimon boshlanadi"],
		correctAnswer: "sigmasimon sinusdan  boshlanadi",
	},
	{
		questionText: "Nevrogen bezlar guruxi?",
		options: ["epifiz va gipofiz bezlari", "buyrak usti bezlari", "capsula adiposa", "qalqonsimon va qalqon orqa bezlari"],
		correctAnswer: "epifiz va gipofiz bezlari",
	},
	{
		questionText: "O’n ikki barmoqli ichak qismlari qaysilar?",
		options: ["Pars horizontalis superior, pars descendens, pars horizontalis inferior, pars ascendens", "Pars superior, ascendens, posterior, horizontalis", "Pars superior, interior, descendens, anterior", "Pars horizontalis superior, inferior, ascendens, anterior"],
		correctAnswer: "Pars horizontalis superior, pars descendens, pars horizontalis inferior, pars ascendens",
	},
	{
		questionText: "Og’iz so’zini yunoncha nomi nima?",
		options: ["stoma", "collum", "corpus", "cauda"],
		correctAnswer: "stoma",
	},
	{
		questionText: "organizmning umumiy o'sishiga tasir qiluvchi gormon qaysi bezdan ishlab chiqariladi",
		options: ["gipofiz  bezdan ishlab chiqariladi", "buyrak usti  bezidan ishlab chiqariladi", "thyroidea  bezdan ishlab chiqariladi", "epifiz  bezdan ishlab chiqariladi"],
		correctAnswer: "gipofiz  bezdan ishlab chiqariladi",
	},
	{
		questionText: "Buyrak usti bezining og'irligi kattalarda qancha?",
		options: ["Buyrak usti bezining og'irligi kattalarda  12-13 g.", "Buyrak usti bezining og'irligi kattalarda  15-20 g.", "Buyrak usti bezining og'irligi kattalarda 20-25 g", "Buyrak usti bezining og'irligi kattalarda  10-12 g"],
		correctAnswer: "Buyrak usti bezining og'irligi kattalarda  12-13 g.",
	},
	{
		questionText: "Ovqat luqmasi ogʼiz boʼshligʼidan qaerga oʼtadi:",
		options: ["halqumga", "qiziloʼngachga", "oshqozonga", "ichaklarga"],
		correctAnswer: "halqumga",
	},
	{
		questionText: "Buyrak usti bezining dastali qavati gormoni qaysi?",
		options: ["Gidrokortizon gormoni", "Aldosteron gormoni", "Adrenalin gormoni", "Androgenlar gormoni"],
		correctAnswer: "Gidrokortizon gormoni",
	},
	{
		questionText: "Parenhimatoz organlar berilgan qatorni belgilang.",
		options: ["Jigar, buyrak, me'da osti bezi, yirik so'lak bezlari", "Tish, qizilo'ngach, jigar", "Tish, buyrak,oyoqlar", "Ichaklar, jigar, til"],
		correctAnswer: "Jigar, buyrak, me'da osti bezi, yirik so'lak bezlari",
	},
	{
		questionText: "Peshona boʼshligʼi burunning qaysi yoʼliga ochiladi:",
		options: ["oʼrta burun yoʼliga", "pastki burun yoʼliga", "yuqori burun yoʼliga", "ogʼiz dahliziga"],
		correctAnswer: "oʼrta burun yoʼliga",
	},
	{
		questionText: "Pirogov limfoepitelial halqasini qaysi murtaklar hosil qiladi?",
		options: ["tanglay, halqum, til, nay murtaklari", "tanglay, halqum, noksimon", "noksimon, til, tomoq", "kardial,nay murtaklari, tomoq"],
		correctAnswer: "tanglay, halqum, til, nay murtaklari",
	},
	{
		questionText: "Buyrak usti bezining mag'iz moddasi qanday garmon chiqaradi?",
		options: ["Adrenalin, noradrenalin", "Adrenalin, androgenlar", "Adrenalin, kortikosteron", "Gidrokortizon, noradrenalin"],
		correctAnswer: "Adrenalin, noradrenalin",
	},
	{
		questionText: "Qalqonsimon bez qanday gormonlar ishlab chiqaradi?",
		options: ["Tiroksin, triyodotironin", "Triyodotironin, paratiroidin", "Tiroksin, paratgormon", "Tiroksin, testosteron"],
		correctAnswer: "Tiroksin, triyodotironin",
	},
	{
		questionText: "Glandulae Thyroideani   qaysi arteriyalar qon bilan ta'minlaydi?",
		options: ["a.thyroidea inferior, tr. thyrocervicalis", "a.thyroidea superior, tr. thyrocervicalis", "a.thyroidea anterior et superior", "a.thyroidea posterior et inferior"],
		correctAnswer: "a.thyroidea inferior, tr. thyrocervicalis",
	},
	{
		questionText: "Qalqonsimon bezning “xavfli zonasi”",
		options: ["Bezning yon bo‘laklari orqa yuzasida aniqlanadi", "Bez bo‘yinchasida aniqlanadi", "Bezning yon bo‘laklari oldingi yuzasida aniqlanadi", "Bez yon bo‘laklarining yuqori qutbi sohasida aniqlanadi"],
		correctAnswer: "Bezning yon bo‘laklari orqa yuzasida aniqlanadi",
	},
	{
		questionText: "Qalqonsimon orqa bezi gormonlari nimani boshqaradi?",
		options: ["kaltsiy va fosfor almashinuvini", "glyukoza almashinuvini", "Tuzlar almashinuvini", "Siydik almashinuvini"],
		correctAnswer: "kaltsiy va fosfor almashinuvini",
	},
	{
		questionText: "Yosh o'tgandan so'ng  qaysi bez yog' to'qimasiga aylanadi?",
		options: ["thymus yog'  to'qimasiga aylanadi", "gipofiz yog'  to'qimasiga aylanadi", "thyroidea yog'  to'qimasiga aylanadi", "epifiz bezi yog'  to'qimasiga aylanadi"],
		correctAnswer: "thymus yog'  to'qimasiga aylanadi",
	},
	{
		questionText: "Qaysi boylam jigarni ikki boʻlakka ajratib turadi",
		options: ["ligamentum falciforme hepatis", "ligamentun triangulare hepatis", "ligamentum hepatogastrica", "lig hepatoduodenale"],
		correctAnswer: "ligamentum falciforme hepatis",
	},
	{
		questionText: "Qizilo’ngаch qismlаri qaysilar?",
		options: ["Bo’yin,qorin, ko’krаk", "ko’krаk, diаfrаgmаl, hiqildoq", "ko’krakchanoq", "bosh qismi, yuqori,pаstki"],
		correctAnswer: "Bo’yin,qorin, ko’krаk",
	},
	{
		questionText: "Moyakni endokrin qismi qanday gormon ishlab chiqaradi?",
		options: ["Testosteron", "Follikulin", "Tiroksin", "Insulin"],
		correctAnswer: "Testosteron",
	},
	{
		questionText: "Peritoneumning  varaqlari qaysilar?",
		options: ["peritoneum viscerale, peritoneum parietale", "peritoneum frontale", "peritoneum parietale", "peritoneum temporale"],
		correctAnswer: "peritoneum viscerale, peritoneum parietale",
	},
	{
		questionText: "A'zolarini  qorin parda hamma tarafdan oʻrab olsa qanday nomlanadi",
		options: ["interoperitoneal", "mezoperitoneal", "eksteroperetoneal", "cavitas abdominis"],
		correctAnswer: "interoperitoneal",
	},
	{
		questionText: "Vezica urinariaini sigimi qancha ?",
		options: ["500 – 700ml", "300 – 400 ml", "250 – 300 ml", "700 – 850 ml"],
		correctAnswer: "500 – 700ml",
	},
	{
		questionText: "Ureterning uzunligi:",
		options: ["30-35 sm", "20-25 sm", "40-24 sm", "20-30 sm"],
		correctAnswer: "30-35 sm",
	},
	{
		questionText: "spetsifik tuzilishga ega bo'lgan a'zoni toping",
		options: ["prostata", "traxeya", "tuxumdon", "jigar va o't pufagi"],
		correctAnswer: "prostata",
	},
	{
		questionText: "Sut tishlari necha yoshdan chiqa boshlaydi:",
		options: ["6 oylikdan", "8 oylikdan", "1 yoshdan", "2 yoshdan"],
		correctAnswer: "6 oylikdan",
	},
	{
		questionText: "Taloq vazifasiga ko’ra-",
		options: ["immunologik, filtrlovchi, qon shaklli elementlarini hosil qiluvchi, moddalar almashinuvida ishtirok etadigan a’zo", "muskulli, filtrlovchi,", "Parenximatoz, immunologik", "o’t suyuqligini hosil qiluvchi"],
		correctAnswer: "immunologik, filtrlovchi, qon shaklli elementlarini hosil qiluvchi, moddalar almashinuvida ishtirok etadigan a’zo",
	},
	{
		questionText: "Ikki tabaqali klapan qayerda joylashgan?",
		options: ["chap bo'lmacha-qorinchaaro tirqishda", "o'pka poyasining boshlanish qismida", "aorta piyozchasida", "bo'lmachalararo teshikda"],
		correctAnswer: "chap bo'lmacha-qorinchaaro tirqishda",
	},
	{
		questionText: "Tishning qattiq moddasini qaysi modda tashkil etadi",
		options: ["Dentinum", "Enamelum", "cementum", "dentinum et cementum"],
		correctAnswer: "Dentinum",
	},
	{
		questionText: "Qalqonsimon orqa bezi olib tashlansa organizmda nima etishmay qoladi?",
		options: ["Ca+ ioni  miqdori kamayadi, suyak o'sishi buziladi", "fosfor  miqdori kamayadi, suyak o'sishi buziladi", "yod   miqdori kamayadi, suyak o'sishi buziladi", "yod   va rux  miqdori kamayadi, suyak o'sishi buziladi"],
		correctAnswer: "Ca+ ioni  miqdori kamayadi, suyak o'sishi buziladi",
	},
	{
		questionText: "Larynx qanday a’zo?",
		options: ["tog’ay", "Suyak", "muskul", "parda"],
		correctAnswer: "tog’ay",
	},
	{
		questionText: "Yo’g’on ichak qismlari qaysilar?",
		options: ["ko’r ichak, ko’tariluvchi, ko’ndalang, pastga tushuvchi chambar ichak, sigmasimon ichak, to’g’ri ichak", "ko’tariluvchi tushuvchi, chambar ichak, och ichak, to’g’ri ichak", "ko’ndalang chambar ichak, pastga tushuvchi va sigmasimon ichak", "ko’r ichak, ko’ndalang chambar ichak, to’g’ri ichak, yonbosh ichak"],
		correctAnswer: "ko’r ichak, ko’tariluvchi, ko’ndalang, pastga tushuvchi chambar ichak, sigmasimon ichak, to’g’ri ichak",
	},
	{
		questionText: "Yoshga oid anatomiya o‘rganadi",
		options: ["a’zolar kattaligi, shakli va joylashishining yoshga oid farqlarini", "patologik sharoitlarda a’zo va uning atrofidagi tuzilmalar morfologiyasini", "a’zolar kattaligi, shakli va joylashishining yoshga oid farqlarini", "odam tanasi alohida sohalarining morfologik tuzilishini"],
		correctAnswer: "a’zolar kattaligi, shakli va joylashishining yoshga oid farqlarini",
	},
	{
		questionText: "Yuqori ko'ks oralig'ida qaysi organlar joylashgan?",
		options: ["Ayrisimon bez, o'ng va chap yelka-bosh venalari, yuqori kovak vena, aorta ravog'I, kekirdak, qizilo'ngach,", "Ko'krak qon tomirlari, to'sh yoni, perikard oldi limfa tugunlari", "Perikard, bosh bronx, diafragma nervi, traxeya, yurak, to'sh yoni", "Ayrisimon bez, ko'krak qon tomirlari, perikard, aorta ravog'I, qizilo'ngach"],
		correctAnswer: "Ayrisimon bez, o'ng va chap yelka-bosh venalari, yuqori kovak vena, aorta ravog'I, kekirdak, qizilo'ngach,",
	},
	{
		questionText: "Sariq va qizil tanalar qaysi a'zoda hosil bo'ladi?",
		options: ["tuxumdonda", "qinda", "bachadonda", "chanoqda"],
		correctAnswer: "tuxumdonda",
	},
	{
		questionText: "Yurak devorini qon bilan ta’minlaydigan qon tomirlarni ko’rsating?",
		options: ["toj arteriyalar", "uyqu arteriyalar", "o’mrov osti arteriyasi", "o’pka arteriyalar"],
		correctAnswer: "toj arteriyalar",
	},
	{
		questionText: "Suyaklarni o‘rganuvchi fan ?",
		options: ["osteologiya", "angilogiya", "kardiologiya", "biologiya"],
		correctAnswer: "osteologiya",
	},
	{
		questionText: "Qizil ilik suyaklarning qaysi qismida joylashadi ?",
		options: ["epifiz", "tashqi", "diafiz", "tana"],
		correctAnswer: "epifiz",
	},
]

export const lyceumAnatomyQuestions: Record<Locale, Question[]> = {
	en: questions,
	ru: questions,
	uz: questions,
}