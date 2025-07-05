import type { Question, Locale } from "~/types/quiz"

export const medicalPharmacyQuestions: Record<Locale, Question[]> = {
  en: [
    {
      questionText: "[EN] 1  Sog\u02bbliqni saqlash vazirligining funksiyalari:",
      options: ["[EN] istiqbolli maqsadli dasturlar ishlab chiqish", "[EN] tibbiy yordam ko\u02bbrsatishni nazorat qilish", "[EN] so\u02bbrov balansini ishlab chiqish va tibbiy ehtiyojni o\u02bbrganish", "[EN] barcha javoblar to\u02bbg\u02bbri"],
      correctAnswer: "[EN] barcha javoblar to\u02bbg\u02bbri",
    },
    {
      questionText: "[EN] 2  Tarkibida giyohvand dori vositalar bo\u02bblgan retseptura blankalari dorixonada qaysi muddatgacha saqlanadi?",
      options: ["[EN] 5 yil", "[EN] 3 yil", "[EN] 8 yil", "[EN] 6 yil"],
      correctAnswer: "[EN] 5 yil",
    },
    {
      questionText: "[EN] 3  Murakkab tarkibli dori vositalari tayinlanganda retseptda shifokor tomonidan uning qanday nomi ko\u02bbrsatiladi?",
      options: ["[EN] xalqaro patentlanmagan nomi, savdo nomi", "[EN] xalqaro patentlanmagan nomi", "[EN] savdo nomi", "[EN] xalqaro nomi"],
      correctAnswer: "[EN] xalqaro patentlanmagan nomi",
    },
    {
      questionText: "[EN] 4  Zaleplon va Pregabalin dori vositalari retsept asosida qaysi dorixonalardan beriladi?",
      options: ["[EN] ijtimoiy dorixona va maxsus litsenziyali dorixonadan", "[EN] xususiy dorixonalardan", "[EN] aksiyadorlik dorixonalardan", "[EN] dvolash-profilaktika muassasalari dorixonalaridan"],
      correctAnswer: "[EN] ijtimoiy dorixona va maxsus litsenziyali dorixonadan",
    },
    {
      questionText: "[EN] 5  Formulyar tizim bu...........",
      options: ["[EN] sog\u02bbliqni saqlashdagi tuzilmalar va boshqaruv chora-tadbirlarining kompleksi", "[EN] tibbiy yordamni aniq shart-sharoitlarni hisobga olgan holda maksimal yuqori sifatini ta\u02bcminlash", "[EN] mavjud resurslardan imkon qadar yaxshirok foydalanish", "[EN] barcha javoblar to\u02bbg\u02bbri"],
      correctAnswer: "[EN] barcha javoblar to\u02bbg\u02bbri",
    },
    {
      questionText: "[EN] 6  Ichki nazorat turiga kiradi:",
      options: ["[EN] SESsanitar-epidemiologik xizmat tekshiruvi", "[EN] prokuratura tekshiruvi", "[EN] hokimiyat tomonidan", "[EN] farmasevtik nazorat, inventarizatsiya, reviziya"],
      correctAnswer: "[EN] farmasevtik nazorat, inventarizatsiya, reviziya",
    },
    {
      questionText: "[EN] 7  Tashqi nazoratda dorixonalarni qanday tashkilotlar tekshiradi?",
      options: ["[EN] sanitariya-epidemiologiya organlari", "[EN] soliq inspeksiyasi, bank, hokimiyat;", "[EN] yong\u02bbindan saqlash inspeksiyasi,ichki ishlar, prokuratura;", "[EN] hamma javob to\u02bbg\u02bbri"],
      correctAnswer: "[EN] hamma javob to\u02bbg\u02bbri",
    },
    {
      questionText: "[EN] 8  Farmasevtik nazorat natijasi rasmiylashtiriladigan hujjat nomi:",
      options: ["[EN] ishonchnoma", "[EN] dalolatnoma", "[EN] bildirishnoma", "[EN] talabnoma"],
      correctAnswer: "[EN] dalolatnoma",
    },
    {
      questionText: "[EN] 9  Farmasevtik nazorat dalolatnomasi necha qismdan iborat?",
      options: ["[EN] 1", "[EN] 3", "[EN] 2", "[EN] 4"],
      correctAnswer: "[EN] 3",
    },
    {
      questionText: "[EN] 10  Farmasevtik nazoratning maqsadi:",
      options: ["[EN] dorixonalardagi farmasevtik tartibni tekshirish", "[EN] haqiqiy mol qoldig\u02bbini hujjatlardagi qoldiq bilan taqqoslash", "[EN] soliqlarning to\u02bblanishini tekshirish", "[EN] moliyaviy faoliyat natijalarini tekshirish"],
      correctAnswer: "[EN] dorixonalardagi farmasevtik tartibni tekshirish",
    },
    {
      questionText: "[EN] 11  Yuridik va jismoniy shaxslarga litsenziya qancha muddatga beriladi?",
      options: ["[EN] 5 yilga", "[EN] 4 yilga", "[EN] 8 yilga", "[EN] 10 yilga"],
      correctAnswer: "[EN] 5 yilga",
    },
    {
      questionText: "[EN] 12  \u201cIn vivo\u201d tajribalarida qanday samaradorlik aniqlanadi?",
      options: ["[EN] biologik samaradorlik", "[EN] farmasevtik samaradorlik", "[EN] patologik samaradorlik", "[EN] anatomik samaradorlik"],
      correctAnswer: "[EN] biologik samaradorlik",
    },
    {
      questionText: "[EN] 13  \u201cIn vitro\u201d tajribalarida qanday samaradorlik aniqlanadi?",
      options: ["[EN] farmasevtik samaradorlik", "[EN] sitologik samaradorlik", "[EN] patologik samaradorlik", "[EN] anatomik samaradorlik"],
      correctAnswer: "[EN] farmasevtik samaradorlik",
    },
    {
      questionText: "[EN] 14  Jelatin eritmasi qanday tayyorlanadi?",
      options: ["[EN] avval suvning bir qismida 30-60 daq davomida bo\u02bbktiriladi, keyin esa suvning qolgan qismida suv hammomida qizdirib eritiladi", "[EN] suv hammomida qizdirib turib hisoblangan miqdoridagi suvda eritiladi", "[EN] oldin suvning bir qismida 30-60 dak davomida bo\u02bbktiriladi, keyin esa suvning qolgan qismida eritiladi", "[EN] hisoblangan miqdoridagi issiq suvda aralashtirib eritiladi"],
      correctAnswer: "[EN] avval suvning bir qismida 30-60 daq davomida bo\u02bbktiriladi, keyin esa suvning qolgan qismida suv hammomida qizdirib eritiladi",
    },
    {
      questionText: "[EN] 15  Konsentratlarda dori modda miqdori 20% gacha yoki 20% dan ko\u02bbp bo\u02bblsa, ruxsat etilgan og\u02bbish me\u02bcyorlari qancha bo\u02bbladi?",
      options: ["[EN] \u00b1 2 %, \u00b1 1 %", "[EN] \u00b1 1 %, \u00b1 2 %", "[EN] \u00b1 7,5 %, \u00b1 5%", "[EN] \u00b1 9,8 %, \u00b1 10,2 %"],
      correctAnswer: "[EN] \u00b1 2 %, \u00b1 1 %",
    },
    {
      questionText: "[EN] 16  Agar retseptda xlorid kislotasining konsentratsiyasi ko\u02bbrsatilmagan bo\u02bblsa, necha foizligi tushuniladi?",
      options: ["[EN] 8,2-8,4%", "[EN] 0.242", "[EN] 24,8-25,2%", "[EN] 0.253"],
      correctAnswer: "[EN] 8,2-8,4%",
    },
    {
      questionText: "[EN] 17  Agar retseptda etil spirti konsentratsiyasi ko\u02bbrsatilmagan bo\u02bblsa, necha foizligi tushuniladi?",
      options: ["[EN] 0.9", "[EN] 0.7", "[EN] 0.6", "[EN] 0.96"],
      correctAnswer: "[EN] 0.7",
    },
    {
      questionText: "[EN] 18  Agar retseptda kraxmal eritmasi konsentratsiyasi ko\u02bbrsatilmagan bo\u02bblsa, necha foizli eritmasi tayyorlanadi?",
      options: ["[EN] 0.02", "[EN] 0.03", "[EN] 0.05", "[EN] 0.07"],
      correctAnswer: "[EN] 0.03",
    },
    {
      questionText: "[EN] 19  100 ml 3% li vodorod peroksid eritmasini tayyorlash uchun qancha pergidrol olinadi?",
      options: ["[EN] 10 ml", "[EN] 5 ml", "[EN] 30 ml", "[EN] 35 ml"],
      correctAnswer: "[EN] 10 ml",
    },
    {
      questionText: "[EN] 20  200 ml 5% formalin eritmasini tayyorlash uchun necha ml suv va formalin kerak bo\u02bbladi?",
      options: ["[EN] 190 ml suv va 10 ml formalin", "[EN] 170 ml suv va 30 ml formalin", "[EN] 175 ml va 25 ml formalin", "[EN] 150 ml suv va 50 ml formalin"],
      correctAnswer: "[EN] 190 ml suv va 10 ml formalin",
    },
    {
      questionText: "[EN] 21  1000 ml 20% natriy bromid konsentrlangan eritmasini (d=1,1488 g/ml) tayyorlash uchun qancha natriy bromid va suv kerak bo\u02bbladi?",
      options: ["[EN] Natriy bromid 200 g, suv 949 ml", "[EN] Natriy bromid 200 g, suv 940 ml", "[EN] Natriy bromid 200 g, suv 969 ml", "[EN] Natriy bromid 200 g, suv 800 ml"],
      correctAnswer: "[EN] Natriy bromid 200 g, suv 940 ml",
    },
    {
      questionText: "[EN] 22  1 l 10% natriy bromid eritmasini tayyorlash uchun qancha suv kerakligini hisoblab toping? (XOK=0,26)",
      options: ["[EN] 974 ml", "[EN] 900 ml", "[EN] 1000 ml", "[EN] 990 ml"],
      correctAnswer: "[EN] 974 ml",
    },
    {
      questionText: "[EN] 23  Quyidagi mikstura hajmini hisoblang: Oling: Kodein 0,12, Natriy bromid, Natriy gidrokarbonat teng miqdorda 3,0 g dan, Belladonna tindirmasi 5 ml, Valeriana tindirmasi 20 ml, Tozalangan suv 200 ml, Aralashtiring. Bering. Belgilang",
      options: ["[EN] 225 ml", "[EN] 233 ml", "[EN] 220 ml", "[EN] 231,12 ml"],
      correctAnswer: "[EN] 225 ml",
    },
    {
      questionText: "[EN] 24  Quyidagi tarkib bo\u02bbyicha dori turini tayyorlash uchun qancha suv olish kerak? Oling: Valeriana ildiz va ildizpoyasi damlamasi - 10,0, Yalpiz bargi damlamasi 4,0 -200 ml, Amidopirini 0,6, Natriy bromid 3,0, Magniy sulfat 0,8, Aralashtiring. Bering. Belgilang. SShK (suv shimish koeffitsienti) val-2,9. SShK(suv shimish koeffitsienti) yalp-2,4",
      options: ["[EN] 239 ml", "[EN] 200 ml", "[EN] 242 ml", "[EN] 250 ml"],
      correctAnswer: "[EN] 239 ml",
    },
    {
      questionText: "[EN] 25  Agar retseptda vodorod peroksid eritmasining konsentratsiyasi ko\u02bbrsatilmagan bo\u02bblsa, necha % gi beriladi?",
      options: ["[EN] 0.03", "[EN] 0.1", "[EN] 0.2", "[EN] 0.39"],
      correctAnswer: "[EN] 0.03",
    },
    {
      questionText: "[EN] 26  Agar retseptda \u201cglitserin\u201d deb yozilgan bo\u02bblsa, qanday glitserin tushuniladi?",
      options: ["[EN] 10-16% suv saqlagan glitserin", "[EN] suyultirilgan glitserin", "[EN] konsentrlangan glitserin", "[EN] suvsiz glitserin"],
      correctAnswer: "[EN] konsentrlangan glitserin",
    },
    {
      questionText: "[EN] 27  Agar sirka kislotasi eritmasining konsentratsiyasi ko\u02bbrsatilmagan bo\u02bblsa, uning necha % eritmasi tushuniladi?",
      options: ["[EN] 30% li", "[EN] 10% li", "[EN] 98% li", "[EN] 100% li"],
      correctAnswer: "[EN] 10% li",
    },
    {
      questionText: "[EN] 28  In\u02bceksiya uchun eritmalar texnologik jarayonning qanday bosqichlarida mexanik qo\u02bbshilmalarga tekshiriladi?",
      options: ["[EN] filtrlash va sterilizatsiyadan keyin", "[EN] sterilizatsiyadan keyin", "[EN] qadoq va jihozlangan so\u02bbng", "[EN] filtrlashdan keyin"],
      correctAnswer: "[EN] filtrlash va sterilizatsiyadan keyin",
    },
    {
      questionText: "[EN] 29  0,5% kalsiy xlorid in\u02bceksion eritmasini sterilligini ta\u02bcminlaydigan sharoitlarni ko\u02bbrsating?",
      options: ["[EN] aseptik sharoit, sterilizatsiya sharoiti 120\u00b0C, 8 daqiqa", "[EN] aseptik sharoit", "[EN] aseptik sharoit, sterilizatsiya sharoiti 100\u00b0C, 30 daqiqa", "[EN] aseptik sharoit, sterilizatsiya sharoiti 180\u00b0C, 30 daqiqa"],
      correctAnswer: "[EN] aseptik sharoit, sterilizatsiya sharoiti 120\u00b0C, 8 daqiqa",
    },
    {
      questionText: "[EN] 30  In\u02bceksiya uchun eritma tayyorlashda ishlatiladigan natriy xlorid qanday maqsadda 180\u00b0C da 2 soat davomida sterilizatsiya qilinadi?",
      options: ["[EN] suvsizlantirish uchun", "[EN] pirogen moddalarni yo\u02bbqotish uchun", "[EN] farmakologik ta\u02bcsirini ortirish uchun", "[EN] farmakologik ta\u02bcsirini kamaytirish uchun"],
      correctAnswer: "[EN] pirogen moddalarni yo\u02bbqotish uchun",
    },
    {
      questionText: "[EN] 31  Dorivor o\u02bbsimlik nima?",
      options: ["[EN] zaharsiz dorivor o\u02bbsimlik", "[EN] tarkibida efir moyi saqlagan o\u02bbsimlik", "[EN] tarkibida BFM saqlagan va biror kasallikni davolash va kasallikni oldini  olish uchun ishlatiladigan o\u02bbsimlik", "[EN] biror kasallikni davolash va shu kasallikni oldini olish uchun ishlatiladigan o\u02bbsimlik"],
      correctAnswer: "[EN] tarkibida BFM saqlagan va biror kasallikni davolash va kasallikni oldini  olish uchun ishlatiladigan o\u02bbsimlik",
    },
    {
      questionText: "[EN] 32  Me\u02bcyoriy hujjatlarga nimalar kiradi? To\u02bbliq javob keltirilgan javobni tanlang.",
      options: ["[EN] DST, FM", "[EN] VFM, FM", "[EN] DST, KST", "[EN] KFM, FM, DST, Korxona standarti"],
      correctAnswer: "[EN] KFM, FM, DST, Korxona standarti",
    },
    {
      questionText: "[EN] 33  O\u02bbzbekiston korxonalarida dorivor o\u02bbsimlik xomashyolaridan qanday fitopreparatlar turi ishlab chiqariladi?",
      options: ["[EN] yig\u02bbmalar, filtr-paketlar, granulalar, sharbatlar, qiyomlar, presslangan  tabletkalar", "[EN] nastoyka, ekstraktlar, yig\u02bbmalar", "[EN] yig\u02bbmalar, ekstraktlar", "[EN] briketlar, yig\u02bbmalar"],
      correctAnswer: "[EN] yig\u02bbmalar, filtr-paketlar, granulalar, sharbatlar, qiyomlar, presslangan  tabletkalar",
    },
    {
      questionText: "[EN] 34  Zubturum mahsulotining kimyoviy tarkibi?",
      options: ["[EN] yurak glikozidlari", "[EN] glikozid aukubin, achchiq glikozidlar", "[EN] glikozid aukubin, polisaxaridlar", "[EN] flavonoidlar, glikozid aukubin"],
      correctAnswer: "[EN] glikozid aukubin, polisaxaridlar",
    },
    {
      questionText: "[EN] 35  Zubturum mahsulotining tibbiyotda qanday shaklda ishlatililadi?",
      options: ["[EN] damlama shaklida me\u02bcda ichak kasalliklarida, plantaglyusid preparati shaklida me\u02bcda-ichak yara kasalliklarida", "[EN] damlama shaklida shamollashda ishlatiladi", "[EN] qaynatma shaklida o\u02bbpka shamollaganda", "[EN] plantaglyusid shaklida tuberkulyoz kasalligida"],
      correctAnswer: "[EN] damlama shaklida me\u02bcda ichak kasalliklarida, plantaglyusid preparati shaklida me\u02bcda-ichak yara kasalliklarida",
    },
    {
      questionText: "[EN] 36  Zig\u02bbir mahsuloti?",
      options: ["[EN] ildizi", "[EN] bargi", "[EN] yer ustki qismi", "[EN] urug\u02bbi"],
      correctAnswer: "[EN] urug\u02bbi",
    },
    {
      questionText: "[EN] 37  Dorivor Gulxayri mahsuloti?",
      options: ["[EN] ildizi", "[EN] yer ustki qismi", "[EN] mevasi;", "[EN] bargi va ildizpoyasi"],
      correctAnswer: "[EN] ildizi",
    },
    {
      questionText: "[EN] 38  Dorixona ukropi maxsulotining kimyoviy tarkibi?",
      options: ["[EN] efir moylari, saponinlar, oshlovchi moddalar", "[EN] efir moylari (anetol), yog\u02bblar, oqsillar", "[EN] alkaloidlar, vitaminlar, yog\u02bblar", "[EN] oqsil moddalari, yog\u02bblar, alkaloidlar"],
      correctAnswer: "[EN] efir moylari (anetol), yog\u02bblar, oqsillar",
    },
    {
      questionText: "[EN] 39  O\u02bbsimlik mahsulotida ruxsat etiladigan aralashmalarga nimalar kiradi?",
      options: ["[EN] organik va mineral aralashmalar", "[EN] hasharot va hayvonot qoldiqlari", "[EN] zaharli o\u02bbsimliklar qismi", "[EN] hayvonot qoldiqlari"],
      correctAnswer: "[EN] organik va mineral aralashmalar",
    },
    {
      questionText: "[EN] 40  Ruxsat etilmaydigan aralashmalarga nimalar kiradi?",
      options: ["[EN] mineral aralashmalar", "[EN] organik va mineral aralashmalar", "[EN] o\u02bbsimlikning xomashyo bo\u02bblmagan qismlari", "[EN] hayvonot va hasharot qoldiqlari hamda zaharli o\u02bbsimliklar qismi"],
      correctAnswer: "[EN] hayvonot va hasharot qoldiqlari hamda zaharli o\u02bbsimliklar qismi",
    },
    {
      questionText: "[EN] 41  Dorivor o\u02bbsimlik mahsulotlarini chinligini aniqlash usullari?",
      options: ["[EN] makroskopik va mikroskopik, sifat reaksiyalar", "[EN] makroskopik", "[EN] biologik standartizatsiya", "[EN] kimyoviy tahlil"],
      correctAnswer: "[EN] makroskopik va mikroskopik, sifat reaksiyalar",
    },
    {
      questionText: "[EN] 42  Mahsulotlar tarkibidagi mineral aralashmalar nimalardan iborat?",
      options: ["[EN] qum, kesak, tosh, temir parchalari", "[EN] qum,kesak va boshqa o\u02bbsimliklarning somoni", "[EN] o\u02bbsimlik somoni, qipig\u02bbi va ko\u02bbmiri", "[EN] qum,kesak va boshqa o\u02bbsimlik xashagi"],
      correctAnswer: "[EN] qum, kesak, tosh, temir parchalari",
    },
    {
      questionText: "[EN] 43  Mahsulotlar tarkibidagi organik aralashmalarga nimalar kirad?",
      options: ["[EN] temir parchalari, somon, qipiq va xashak", "[EN] boshqa o\u02bbsimlik somoni qum, kesak", "[EN] shu o\u02bbsimlikning mahsulot bo\u02bblmagan boshqa qismi, o\u02bbsimlik somoni, qipig\u02bbi, xashagi", "[EN] boshqa o\u02bbsimlik xashagi, qipig\u02bbi va qumlar"],
      correctAnswer: "[EN] shu o\u02bbsimlikning mahsulot bo\u02bblmagan boshqa qismi, o\u02bbsimlik somoni, qipig\u02bbi, xashagi",
    },
    {
      questionText: "[EN] 44  Allergiyaga qarshi ishlatiladigan antigistamin ta\u02bcsirli preparatlarni ko\u02bbrsating.",
      options: ["[EN] tavegil, pipolfen", "[EN] intal, meksamin", "[EN] zaditen, bikarsen", "[EN] kaliy xlorid"],
      correctAnswer: "[EN] tavegil, pipolfen",
    },
    {
      questionText: "[EN] 45  Allergiyada beriladigan preparatlarni ko\u02bbrsating:",
      options: ["[EN] gistoglobulin", "[EN] gentamitsin", "[EN] glyukonat kalsiy", "[EN] suprastin"],
      correctAnswer: "[EN] suprastin",
    },
    {
      questionText: "[EN] 46  Dimedrolninig nojo\u02bbya ta\u02bcsiri:",
      options: ["[EN] uyquchanlik", "[EN] qabziyat", "[EN] isitma", "[EN] soch to\u02bbkilishi"],
      correctAnswer: "[EN] uyquchanlik",
    },
    {
      questionText: "[EN] 47  Anafilaktik shokda qo\u02bbllaniladi:",
      options: ["[EN] atropin, vikasol", "[EN] adrenalin, prednizolon", "[EN] dibazol, pentamin", "[EN] korvalol, nitroglitserin"],
      correctAnswer: "[EN] adrenalin, prednizolon",
    },
    {
      questionText: "[EN] 48  Glyukokortikosteroidlarninig nojo\u02bbya ta\u02bcsiri:",
      options: ["[EN] bronxospazm", "[EN] gipotenziya", "[EN] diabet", "[EN] uyquchanlik"],
      correctAnswer: "[EN] diabet",
    },
    {
      questionText: "[EN] 49  Prednizolonning sutkalik dozasi asosiy qismi buyuriladi:",
      options: ["[EN] ertalab", "[EN] kunduzi", "[EN] kechqurun", "[EN] kechasi"],
      correctAnswer: "[EN] ertalab",
    },
    {
      questionText: "[EN] 50  Eshakemida qo\u02bbllaniladigan preparatlar:",
      options: ["[EN] dezagregant", "[EN] antibiotik", "[EN] diuretik", "[EN] antigistamin"],
      correctAnswer: "[EN] dezagregant",
    },
    {
      questionText: "[EN] 51  Krapivnitsada qaysi dori vositasi qo\u02bbllaniladi:",
      options: ["[EN] dimedrol", "[EN] dibazol", "[EN] laziks", "[EN] eufillin"],
      correctAnswer: "[EN] dimedrol",
    },
    {
      questionText: "[EN] 52  Qaysi preparatlar alkaloidlar guruhiga kiradi?",
      options: ["[EN] adrenalin", "[EN] rezerpin, efedrin", "[EN] noradrenalin", "[EN] midantan"],
      correctAnswer: "[EN] rezerpin, efedrin",
    },
    {
      questionText: "[EN] 53  Adrenalinning asosiy farmakologik ta\u02bcsirlarini ko\u02bbrsating:",
      options: ["[EN] qon bosimini oshiradi va yurak ishini tezlashtiradi", "[EN] noradrenalindan kuchsiz ta\u02bcsir etadi", "[EN] bilvosita adrenoblokator ta\u02bcsir etadi", "[EN] MNSni susaytiradi"],
      correctAnswer: "[EN] qon bosimini oshiradi va yurak ishini tezlashtiradi",
    },
    {
      questionText: "[EN] 54  Dori vositalarining homilaga salbiy ta\u02bcsirini ko\u02bbrsating:",
      options: ["[EN] disbakterioz ta\u02bcsiri", "[EN] zaharli ta\u02bcsiri", "[EN] teratogen ta\u02bcsir", "[EN] blastomogen ta\u02bcsiri"],
      correctAnswer: "[EN] teratogen ta\u02bcsir",
    },
    {
      questionText: "[EN] 55  Qariyalarda dorilarning qanday dozalash kerak:",
      options: ["[EN] 50% ga kamaytirish", "[EN] 10% ga oshirish", "[EN] 50% ga oshirish", "[EN] 10% ga kamaytirish"],
      correctAnswer: "[EN] 10% ga kamaytirish",
    },
    {
      questionText: "[EN] 56  Dorilarni parenteral yo\u02bbl bilan yuborishga kiradi:",
      options: ["[EN] to\u02bbg\u02bbri ichakka", "[EN] og\u02bbiz orqali", "[EN] til ostiga", "[EN] mushak orasiga"],
      correctAnswer: "[EN] mushak orasiga",
    },
    {
      questionText: "[EN] 57  Dorilarni enteral yo\u02bbl bilan yuborishga kiradi:",
      options: ["[EN] to\u02bbg\u02bbri ichakka", "[EN] teri ostiga", "[EN] mushak orasiga", "[EN] teri orasiga"],
      correctAnswer: "[EN] to\u02bbg\u02bbri ichakka",
    },
    {
      questionText: "[EN] 58  Dori vositalarini og\u02bbiz orqali yuborishga xos:",
      options: ["[EN] steril sharoitning talab etilishi", "[EN] ta\u02bcsirining tez yuzaga chiqishi", "[EN] dori vositasiga oshqozon-ichak-tizimi fermentlarining ta\u02bcsiri", "[EN] dozaning aniq bo\u02bblishi"],
      correctAnswer: "[EN] dori vositasiga oshqozon-ichak-tizimi fermentlarining ta\u02bcsiri",
    },
    {
      questionText: "[EN] 59  Dori vositalarini parenteral yo\u02bbl bilan yuborishga xos:",
      options: ["[EN] oshqozon-ichak-tizimini chetlab o\u02bbtilishi", "[EN] dori vositasiga Oshqozon-ichak-tizimi fermentlarining ta\u02bcsiri", "[EN] ta\u02bcsirining tez yuzaga chiqmasligi", "[EN] steril sharoitning talab etilmasligi"],
      correctAnswer: "[EN] oshqozon-ichak-tizimini chetlab o\u02bbtilishi",
    },
    {
      questionText: "[EN] 60  Shoshilinch tibbiy yordamda dori vositasini eng samarali yuborish yo\u02bblini aniqlang:",
      options: ["[EN] sublingval", "[EN] rektal", "[EN] peroral", "[EN] vena ichiga"],
      correctAnswer: "[EN] vena ichiga",
    },
    {
      questionText: "[EN] 61  \u201cDori-darmon\u02bc Aksiyadorlik kompaniyasi faoliyatini muvofiqlashtirish qaysi tashkilot zimmasiga biriktirildi?",
      options: ["[EN] O\u02bbzbekiston Respublikasi Sog\u02bbliqni saqlash vazirligi", "[EN] Dori-darmon aksiyadorlik uyushmasi", "[EN] Tibbiy texnika sifatini nazorat qilish bo\u02bblimi", "[EN] Ilmiy profilaktika markazi"],
      correctAnswer: "[EN] O\u02bbzbekiston Respublikasi Sog\u02bbliqni saqlash vazirligi",
    },
    {
      questionText: "[EN] 62  \u201cDori-darmon\u201d Aksiyadorlik kompaniyasining asosiy vazifalari:",
      options: ["[EN] sifatli dori vositalari va tibbiyot buyumlari bilan taminlash", "[EN] davlat rezervining dori vositalari bilan tibbiyot buyumlariga ehtiyojlarini qondirishni ta\u02bcminlash", "[EN] farmatsevtik mahsulotlari resurlari to\u02bbg\u02bbrisidagi yagona respublika", "[EN] axborotlar tizimini yaratish"],
      correctAnswer: "[EN] axborotlar tizimini yaratish",
    },
    {
      questionText: "[EN] barcha javoblar to\u02bbg\u02bbri",
      options: ["[EN] 63  O\u02bbzbekiston Respublikasi Sog\u02bbliqni saqlash vazirligining asosiy vazifalari: aholi sog\u02bblig\u02bbini muhofaza qilish", "[EN] dori vositalari yaratish", "[EN] farmatsevtika sanoatini kompleks rivojlantirish", "[EN] dori vositalaini ishlab chiqarish"],
      correctAnswer: "[EN] 63  O\u02bbzbekiston Respublikasi Sog\u02bbliqni saqlash vazirligining asosiy vazifalari: aholi sog\u02bblig\u02bbini muhofaza qilish",
    },
    {
      questionText: "[EN] 64  Reseptda qaysi belgilardan foydalanish man etiladi?",
      options: ["[EN] ichish uchun", "[EN] ma\u02bclum", "[EN] qoida tariqasida", "[EN] barcha javoblar to\u02bbg\u02bbri"],
      correctAnswer: "[EN] barcha javoblar to\u02bbg\u02bbri",
    },
    {
      questionText: "[EN] 65  Reseptning yirtma koreshogida qanday ma\u02bclumotlar aks ettiriladi?",
      options: ["[EN] bemorning familya ismi sharifi, yoshi", "[EN] resept yozilgan sana", "[EN] shifokorning familiya, ismi, sharifi, kasllik tarixining nomeri", "[EN] barcha javoblar to\u02bbg\u02bbri"],
      correctAnswer: "[EN] barcha javoblar to\u02bbg\u02bbri",
    },
    {
      questionText: "[EN] 66  Retsept blankalari necha xil bo\u02bbladi?",
      options: ["[EN] 6 xil", "[EN] 2 xil", "[EN] 4 xil", "[EN] 3 xil"],
      correctAnswer: "[EN] 6 xil",
    },
    {
      questionText: "[EN] 67  Retsept tarkibida kuchli ta\u02bcsir etuvchi, giyohvand, psixotrop moddalar va prekursorlar bo\u02bblsa bunday dorilar retsepti nima qilinadi?",
      options: ["[EN] dorixonada qolmayadi", "[EN] dorixonada qoladi va bemorga signatura beriladi", "[EN] bemorlarga bepul dori vositasi beriladi", "[EN] to\u02bbg\u02bbri javob yo\u02bbq"],
      correctAnswer: "[EN] dorixonada qolmayadi",
    },
    {
      questionText: "[EN] 68  Imtiyozli dori vositalari berish uchun retsept necha nusxada yoziladi?",
      options: ["[EN] faqat bitta", "[EN] 2 nusxada", "[EN] 2 va undan ortiq", "[EN] barcha javoblar to\u02bbg\u02bbri"],
      correctAnswer: "[EN] 2 nusxada",
    },
    {
      questionText: "[EN] 69  Tuzatishlar qilingan, bir-biriga to\u02bbg\u02bbri kelmaydigan dori vositalari yozilgan retseptlarni qanday yozuv bilan bekor qilinadi?",
      options: ["[EN] retsept haqiqiy emas", "[EN] retsept soxta", "[EN] retseptga tuzatish kiritish kerak", "[EN] retseptda xatolik mavjud"],
      correctAnswer: "[EN] retseptda xatolik mavjud",
    },
    {
      questionText: "[EN] 70  Kuchli ta\u02bcsir etuvchi moddalari bo\u02bblgan dorilar bo\u02bbyicha yozilgan retseptlar necha kungacha yaroqli hisoblanadi?",
      options: ["[EN] 10 kun", "[EN] 6 kun", "[EN] 2 kun", "[EN] 4 kun"],
      correctAnswer: "[EN] 10 kun",
    },
    {
      questionText: "[EN] 71  Nazorat analitik laboratoriyasining tarozi xonasiga qanday asboblar joylashtiriladi?",
      options: ["[EN] analitik tarozi", "[EN] fotokolorimetr, potensiometr", "[EN] refraktometr", "[EN] spektrofotometr"],
      correctAnswer: "[EN] analitik tarozi",
    },
    {
      questionText: "[EN] 72  Nazorat analitik laboratoriyasining optik xonasiga qanday asboblar joylashtiriladi?",
      options: ["[EN] refraktometr", "[EN] refraktometr, fotoelektrokolorimetr, analitik torozi, potensiometr, spektrofotometr", "[EN] potensiometr, spektrofotometr", "[EN] analitik tarozi"],
      correctAnswer: "[EN] refraktometr, fotoelektrokolorimetr, analitik torozi, potensiometr, spektrofotometr",
    },
    {
      questionText: "[EN] 73  Aseptik blok dezinfeksiya qilinadi:",
      options: ["[EN] har kuni", "[EN] har smenada", "[EN] har soatda", "[EN] har hafta"],
      correctAnswer: "[EN] har kuni",
    },
    {
      questionText: "[EN] 74  Aseptik blokda sanitariya holati tekshiriladi:",
      options: ["[EN] har kuni", "[EN] har smenada", "[EN] har soatda", "[EN] har hafta"],
      correctAnswer: "[EN] har kuni",
    },
    {
      questionText: "[EN] 75  Shifoxonalararo dorixonaning asosiy vazifasi:",
      options: ["[EN] davolash profilaktika muassasasi va ulardan tashqari sog\u02bbliqni saqlash punktlari, maorif va ijtimoiy ta\u02bcminot, sanitariya va profilaktika muassasalarini ham dori vositalari bilan ta\u02bcminlash", "[EN] davolash profilaktika muassasasi larni dori vositalari bilan ta\u02bcminlash", "[EN] aholini dori vositalari bilan ta\u02bcminlash", "[EN] dori vositalari sifatini nazorat qilish"],
      correctAnswer: "[EN] davolash profilaktika muassasasi va ulardan tashqari sog\u02bbliqni saqlash punktlari, maorif va ijtimoiy ta\u02bcminot, sanitariya va profilaktika muassasalarini ham dori vositalari bilan ta\u02bcminlash",
    },
    {
      questionText: "[EN] 76  Xo\u02bbjalik va maishiy xonalarga qaysi xonalar kiradi?",
      options: ["[EN] dam olish xonasi, shaxsiy gigiena xonalar", "[EN] yuvish xonasi", "[EN] shisha idishlar saqlanadigan xona", "[EN] yordamchi materiallar saqlanadigan xona"],
      correctAnswer: "[EN] dam olish xonasi, shaxsiy gigiena xonalar",
    },
    {
      questionText: "[EN] 77  Aseptik blokda qanday jixozlar bo\u02bbladi?",
      options: ["[EN] mexanik aralashtirgichlar, turli tipdagi steril eritmalarni tozaligini  tekshiruvchi apparatlar, shisha idishlar og\u02bbzini alyumin qalpoqchalar bilan berkitishda ishlatiladigan stanokcha", "[EN] po\u02bbkak qopqoqlarni kichraytiradigan moslamalar", "[EN] analitik torozilar, turli tipdagi steril eritmalarni tozaligini tekshiruvchi apparatlar", "[EN] potensiometr, turli tipdagi steril eritmalarni tozaligini tekshiruvchi apparatlar"],
      correctAnswer: "[EN] mexanik aralashtirgichlar, turli tipdagi steril eritmalarni tozaligini  tekshiruvchi apparatlar, shisha idishlar og\u02bbzini alyumin qalpoqchalar bilan berkitishda ishlatiladigan stanokcha",
    },
    {
      questionText: "[EN] 78  Shifoxonalararo dorixonalar boshqa dorixonalardan nimasi bilan farqlanadi?",
      options: ["[EN] yakka tartibda tayyorlanadigan dori vositalarining asosiy qismini 60-90%  ni suyuq dorilar, in\u02bceksiya uchun ishlatiladigan eritmalar tashkil qiladi", "[EN] dorixona retsepturasining 50% ni in\u02bceksiya eritmalari tashkil qiladi", "[EN] dorixona retsepturasining 60%ini poroshoklar tashkil qiladi", "[EN] dorixona retsepturasining 100% ini damlamalar tashkil qiladi"],
      correctAnswer: "[EN] yakka tartibda tayyorlanadigan dori vositalarining asosiy qismini 60-90%  ni suyuq dorilar, in\u02bceksiya uchun ishlatiladigan eritmalar tashkil qiladi",
    },
    {
      questionText: "[EN] 79  Farmatsevt texnologning asosiy vazifalari:",
      options: ["[EN] bo\u02bblimlardan talabnomalarni qabul qilish, dorilar sifatini nazorat qilish,aseptik xonada tayyorlangan dori vositalar sifatini nazorat qilish", "[EN] dori vositalarini saqlash, dorilar sifatini nazorat qilish", "[EN] dori vositalirini guruxlariga ajratish, dori vositalar sifatini nazorat qilish", "[EN] dori vositalarini nazorat qilish, bo\u02bblimlardan talabnomalarni qabul qilish"],
      correctAnswer: "[EN] bo\u02bblimlardan talabnomalarni qabul qilish, dorilar sifatini nazorat qilish,aseptik xonada tayyorlangan dori vositalar sifatini nazorat qilish",
    },
    {
      questionText: "[EN] 80  Giyohvand dori vositalari uchun talabnomalar shifoxonalararo dorixonada necha yil saqlanadi?",
      options: ["[EN] 1 oy", "[EN] 1 yil", "[EN] 3 yil", "[EN] 5 yil"],
      correctAnswer: "[EN] 5 yil",
    },
    {
      questionText: "[EN] 81  Nomi bo\u02bbyicha miqdoriy hisobdagi dori vositalari uchun talabnomalar shifoxonalararo dorixonada necha yil saqlanadi?",
      options: ["[EN] 5 yil", "[EN] 4 yil", "[EN] 1 yil", "[EN] 2 yil"],
      correctAnswer: "[EN] 2 yil",
    },
    {
      questionText: "[EN] 82  Shifoxonalararo dorixonaning ishlab chiqarish xonalariga qanday xonalar kiradi?",
      options: ["[EN] talabnomani qabul qiladigan xona, retseptura, assistentlar. konsentrat va  yarim fabrikatlarni tayyorlash, distilyasiya xonalari", "[EN] tayyor dori vositalari xonalari", "[EN] mudirning xonasi", "[EN] xodimlarning dam olish xonasi"],
      correctAnswer: "[EN] talabnomani qabul qiladigan xona, retseptura, assistentlar. konsentrat va  yarim fabrikatlarni tayyorlash, distilyasiya xonalari",
    },
    {
      questionText: "[EN] 83  Dorixonada maxsus litsenziyasiz qanday dori vositalarini tayyorlash, qabul qilish, saqlash va sotish taqiqlanadi?",
      options: ["[EN] kuchli ta\u02bcsir etuvchi moddalarni, giyohvand dori vositalarini", "[EN] zardoblarni", "[EN] vaksinalarni", "[EN] dorivor o\u02bbsimliklarni"],
      correctAnswer: "[EN] kuchli ta\u02bcsir etuvchi moddalarni, giyohvand dori vositalarini",
    },
    {
      questionText: "[EN] 84  Dorixona shaxobchasini davolash profilaktika muassasasi maydonida ochishiga ruxsat etiladimi?",
      options: ["[EN] bosh vrachning ruxsati bilan", "[EN] ruxsat etiladi", "[EN] dorixona rahbari tashabbusi bilan", "[EN] ruxsat etilmaydi"],
      correctAnswer: "[EN] bosh vrachning ruxsati bilan",
    },
    {
      questionText: "[EN] 85  Kuchli ta\u02bcsir etuvchi dori vositalariga yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[EN] 1 oy", "[EN] 2 oy", "[EN] 1 yil", "[EN] 5 yil"],
      correctAnswer: "[EN] 1 yil",
    },
    {
      questionText: "[EN] 86  Atropin sulfat 0,1% li eritmasi uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[EN] 2 oy", "[EN] 1 yil", "[EN] 3 yil", "[EN] 5 yil"],
      correctAnswer: "[EN] 3 yil",
    },
    {
      questionText: "[EN] 87  Dikain uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[EN] 1 oy", "[EN] 2 oy", "[EN] 1 yil", "[EN] 3 yil"],
      correctAnswer: "[EN] 1 yil",
    },
    {
      questionText: "[EN] 88  Promedol 2% - 1,0 eritmasi uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[EN] 2 oy", "[EN] 1 yil", "[EN] 3 yil", "[EN] 5 yil"],
      correctAnswer: "[EN] 5 yil",
    },
    {
      questionText: "[EN] 89  Etil spirtiga yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[EN] 1 oy", "[EN] 2 oy", "[EN] 1 yil", "[EN] 5 yil"],
      correctAnswer: "[EN] 1 yil",
    },
    {
      questionText: "[EN] 90  Morfin uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[EN] 1 oy", "[EN] 1 yil", "[EN] 3 yil", "[EN] 5 yil"],
      correctAnswer: "[EN] 5 yil",
    },
    {
      questionText: "[EN] 91  Omnopon uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[EN] 1 oy", "[EN] 2 oy", "[EN] 1 yil", "[EN] 5 yil"],
      correctAnswer: "[EN] 5 yil",
    },
    {
      questionText: "[EN] 92  Imtiyozli beriladigan dori retseptlarini dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[EN] 1 oy", "[EN] 2 oy", "[EN] 3 yil", "[EN] 5 yil"],
      correctAnswer: "[EN] 5 yil",
    },
    {
      questionText: "[EN] 93  Kumush nitrat uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[EN] 1 yil", "[EN] 3 yil", "[EN] 4 yil", "[EN] 5 yil"],
      correctAnswer: "[EN] 3 yil",
    },
    {
      questionText: "[EN] 94  Strixnin nitrat 0,1% li eritmasi uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating.",
      options: ["[EN] 1 oy", "[EN] 2 oy", "[EN] 1 yil", "[EN] 3 yil"],
      correctAnswer: "[EN] 3 yil",
    },
    {
      questionText: "[EN] 95  Mishyak oksidi uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[EN] 1 yil", "[EN] 3 yil", "[EN] 4 yil", "[EN] 5 yil"],
      correctAnswer: "[EN] 5 yil",
    },
    {
      questionText: "[EN] 96  Simob sianid uchun yozilgan dori retseptning dorixonada saqqash muddatini ko\u02bbrsating:",
      options: ["[EN] 1 oy", "[EN] 1 yil", "[EN] 3 yil", "[EN] 5 yil"],
      correctAnswer: "[EN] 5 yil",
    },
    {
      questionText: "[EN] 97  Simob oksitsianid uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[EN] 1 oy", "[EN] 2 oy", "[EN] 1 yil", "[EN] 5 yil"],
      correctAnswer: "[EN] 5 yil",
    },
    {
      questionText: "[EN] 98  Kodein fosfat uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating.",
      options: ["[EN] 2 oy", "[EN] 1 yil", "[EN] 3 yil", "[EN] 5 yil"],
      correctAnswer: "[EN] 5 yil",
    },
    {
      questionText: "[EN] 99  Kokain gidroxlorid uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[EN] 1 oy", "[EN] 2 oy", "[EN] 1 yil", "[EN] 5 yil"],
      correctAnswer: "[EN] 5 yil",
    },
    {
      questionText: "[EN] 100  Noksiron uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[EN] 1 yil", "[EN] 3 yil", "[EN] 5 yil", "[EN] 10 y il"],
      correctAnswer: "[EN] 5 yil",
    },
  ],
  ru: [
    {
      questionText: "[RU] 1  Sog\u02bbliqni saqlash vazirligining funksiyalari:",
      options: ["[RU] istiqbolli maqsadli dasturlar ishlab chiqish", "[RU] tibbiy yordam ko\u02bbrsatishni nazorat qilish", "[RU] so\u02bbrov balansini ishlab chiqish va tibbiy ehtiyojni o\u02bbrganish", "[RU] barcha javoblar to\u02bbg\u02bbri"],
      correctAnswer: "[RU] barcha javoblar to\u02bbg\u02bbri",
    },
    {
      questionText: "[RU] 2  Tarkibida giyohvand dori vositalar bo\u02bblgan retseptura blankalari dorixonada qaysi muddatgacha saqlanadi?",
      options: ["[RU] 5 yil", "[RU] 3 yil", "[RU] 8 yil", "[RU] 6 yil"],
      correctAnswer: "[RU] 5 yil",
    },
    {
      questionText: "[RU] 3  Murakkab tarkibli dori vositalari tayinlanganda retseptda shifokor tomonidan uning qanday nomi ko\u02bbrsatiladi?",
      options: ["[RU] xalqaro patentlanmagan nomi, savdo nomi", "[RU] xalqaro patentlanmagan nomi", "[RU] savdo nomi", "[RU] xalqaro nomi"],
      correctAnswer: "[RU] xalqaro patentlanmagan nomi",
    },
    {
      questionText: "[RU] 4  Zaleplon va Pregabalin dori vositalari retsept asosida qaysi dorixonalardan beriladi?",
      options: ["[RU] ijtimoiy dorixona va maxsus litsenziyali dorixonadan", "[RU] xususiy dorixonalardan", "[RU] aksiyadorlik dorixonalardan", "[RU] dvolash-profilaktika muassasalari dorixonalaridan"],
      correctAnswer: "[RU] ijtimoiy dorixona va maxsus litsenziyali dorixonadan",
    },
    {
      questionText: "[RU] 5  Formulyar tizim bu...........",
      options: ["[RU] sog\u02bbliqni saqlashdagi tuzilmalar va boshqaruv chora-tadbirlarining kompleksi", "[RU] tibbiy yordamni aniq shart-sharoitlarni hisobga olgan holda maksimal yuqori sifatini ta\u02bcminlash", "[RU] mavjud resurslardan imkon qadar yaxshirok foydalanish", "[RU] barcha javoblar to\u02bbg\u02bbri"],
      correctAnswer: "[RU] barcha javoblar to\u02bbg\u02bbri",
    },
    {
      questionText: "[RU] 6  Ichki nazorat turiga kiradi:",
      options: ["[RU] SESsanitar-epidemiologik xizmat tekshiruvi", "[RU] prokuratura tekshiruvi", "[RU] hokimiyat tomonidan", "[RU] farmasevtik nazorat, inventarizatsiya, reviziya"],
      correctAnswer: "[RU] farmasevtik nazorat, inventarizatsiya, reviziya",
    },
    {
      questionText: "[RU] 7  Tashqi nazoratda dorixonalarni qanday tashkilotlar tekshiradi?",
      options: ["[RU] sanitariya-epidemiologiya organlari", "[RU] soliq inspeksiyasi, bank, hokimiyat;", "[RU] yong\u02bbindan saqlash inspeksiyasi,ichki ishlar, prokuratura;", "[RU] hamma javob to\u02bbg\u02bbri"],
      correctAnswer: "[RU] hamma javob to\u02bbg\u02bbri",
    },
    {
      questionText: "[RU] 8  Farmasevtik nazorat natijasi rasmiylashtiriladigan hujjat nomi:",
      options: ["[RU] ishonchnoma", "[RU] dalolatnoma", "[RU] bildirishnoma", "[RU] talabnoma"],
      correctAnswer: "[RU] dalolatnoma",
    },
    {
      questionText: "[RU] 9  Farmasevtik nazorat dalolatnomasi necha qismdan iborat?",
      options: ["[RU] 1", "[RU] 3", "[RU] 2", "[RU] 4"],
      correctAnswer: "[RU] 3",
    },
    {
      questionText: "[RU] 10  Farmasevtik nazoratning maqsadi:",
      options: ["[RU] dorixonalardagi farmasevtik tartibni tekshirish", "[RU] haqiqiy mol qoldig\u02bbini hujjatlardagi qoldiq bilan taqqoslash", "[RU] soliqlarning to\u02bblanishini tekshirish", "[RU] moliyaviy faoliyat natijalarini tekshirish"],
      correctAnswer: "[RU] dorixonalardagi farmasevtik tartibni tekshirish",
    },
    {
      questionText: "[RU] 11  Yuridik va jismoniy shaxslarga litsenziya qancha muddatga beriladi?",
      options: ["[RU] 5 yilga", "[RU] 4 yilga", "[RU] 8 yilga", "[RU] 10 yilga"],
      correctAnswer: "[RU] 5 yilga",
    },
    {
      questionText: "[RU] 12  \u201cIn vivo\u201d tajribalarida qanday samaradorlik aniqlanadi?",
      options: ["[RU] biologik samaradorlik", "[RU] farmasevtik samaradorlik", "[RU] patologik samaradorlik", "[RU] anatomik samaradorlik"],
      correctAnswer: "[RU] biologik samaradorlik",
    },
    {
      questionText: "[RU] 13  \u201cIn vitro\u201d tajribalarida qanday samaradorlik aniqlanadi?",
      options: ["[RU] farmasevtik samaradorlik", "[RU] sitologik samaradorlik", "[RU] patologik samaradorlik", "[RU] anatomik samaradorlik"],
      correctAnswer: "[RU] farmasevtik samaradorlik",
    },
    {
      questionText: "[RU] 14  Jelatin eritmasi qanday tayyorlanadi?",
      options: ["[RU] avval suvning bir qismida 30-60 daq davomida bo\u02bbktiriladi, keyin esa suvning qolgan qismida suv hammomida qizdirib eritiladi", "[RU] suv hammomida qizdirib turib hisoblangan miqdoridagi suvda eritiladi", "[RU] oldin suvning bir qismida 30-60 dak davomida bo\u02bbktiriladi, keyin esa suvning qolgan qismida eritiladi", "[RU] hisoblangan miqdoridagi issiq suvda aralashtirib eritiladi"],
      correctAnswer: "[RU] avval suvning bir qismida 30-60 daq davomida bo\u02bbktiriladi, keyin esa suvning qolgan qismida suv hammomida qizdirib eritiladi",
    },
    {
      questionText: "[RU] 15  Konsentratlarda dori modda miqdori 20% gacha yoki 20% dan ko\u02bbp bo\u02bblsa, ruxsat etilgan og\u02bbish me\u02bcyorlari qancha bo\u02bbladi?",
      options: ["[RU] \u00b1 2 %, \u00b1 1 %", "[RU] \u00b1 1 %, \u00b1 2 %", "[RU] \u00b1 7,5 %, \u00b1 5%", "[RU] \u00b1 9,8 %, \u00b1 10,2 %"],
      correctAnswer: "[RU] \u00b1 2 %, \u00b1 1 %",
    },
    {
      questionText: "[RU] 16  Agar retseptda xlorid kislotasining konsentratsiyasi ko\u02bbrsatilmagan bo\u02bblsa, necha foizligi tushuniladi?",
      options: ["[RU] 8,2-8,4%", "[RU] 0.242", "[RU] 24,8-25,2%", "[RU] 0.253"],
      correctAnswer: "[RU] 8,2-8,4%",
    },
    {
      questionText: "[RU] 17  Agar retseptda etil spirti konsentratsiyasi ko\u02bbrsatilmagan bo\u02bblsa, necha foizligi tushuniladi?",
      options: ["[RU] 0.9", "[RU] 0.7", "[RU] 0.6", "[RU] 0.96"],
      correctAnswer: "[RU] 0.7",
    },
    {
      questionText: "[RU] 18  Agar retseptda kraxmal eritmasi konsentratsiyasi ko\u02bbrsatilmagan bo\u02bblsa, necha foizli eritmasi tayyorlanadi?",
      options: ["[RU] 0.02", "[RU] 0.03", "[RU] 0.05", "[RU] 0.07"],
      correctAnswer: "[RU] 0.03",
    },
    {
      questionText: "[RU] 19  100 ml 3% li vodorod peroksid eritmasini tayyorlash uchun qancha pergidrol olinadi?",
      options: ["[RU] 10 ml", "[RU] 5 ml", "[RU] 30 ml", "[RU] 35 ml"],
      correctAnswer: "[RU] 10 ml",
    },
    {
      questionText: "[RU] 20  200 ml 5% formalin eritmasini tayyorlash uchun necha ml suv va formalin kerak bo\u02bbladi?",
      options: ["[RU] 190 ml suv va 10 ml formalin", "[RU] 170 ml suv va 30 ml formalin", "[RU] 175 ml va 25 ml formalin", "[RU] 150 ml suv va 50 ml formalin"],
      correctAnswer: "[RU] 190 ml suv va 10 ml formalin",
    },
    {
      questionText: "[RU] 21  1000 ml 20% natriy bromid konsentrlangan eritmasini (d=1,1488 g/ml) tayyorlash uchun qancha natriy bromid va suv kerak bo\u02bbladi?",
      options: ["[RU] Natriy bromid 200 g, suv 949 ml", "[RU] Natriy bromid 200 g, suv 940 ml", "[RU] Natriy bromid 200 g, suv 969 ml", "[RU] Natriy bromid 200 g, suv 800 ml"],
      correctAnswer: "[RU] Natriy bromid 200 g, suv 940 ml",
    },
    {
      questionText: "[RU] 22  1 l 10% natriy bromid eritmasini tayyorlash uchun qancha suv kerakligini hisoblab toping? (XOK=0,26)",
      options: ["[RU] 974 ml", "[RU] 900 ml", "[RU] 1000 ml", "[RU] 990 ml"],
      correctAnswer: "[RU] 974 ml",
    },
    {
      questionText: "[RU] 23  Quyidagi mikstura hajmini hisoblang: Oling: Kodein 0,12, Natriy bromid, Natriy gidrokarbonat teng miqdorda 3,0 g dan, Belladonna tindirmasi 5 ml, Valeriana tindirmasi 20 ml, Tozalangan suv 200 ml, Aralashtiring. Bering. Belgilang",
      options: ["[RU] 225 ml", "[RU] 233 ml", "[RU] 220 ml", "[RU] 231,12 ml"],
      correctAnswer: "[RU] 225 ml",
    },
    {
      questionText: "[RU] 24  Quyidagi tarkib bo\u02bbyicha dori turini tayyorlash uchun qancha suv olish kerak? Oling: Valeriana ildiz va ildizpoyasi damlamasi - 10,0, Yalpiz bargi damlamasi 4,0 -200 ml, Amidopirini 0,6, Natriy bromid 3,0, Magniy sulfat 0,8, Aralashtiring. Bering. Belgilang. SShK (suv shimish koeffitsienti) val-2,9. SShK(suv shimish koeffitsienti) yalp-2,4",
      options: ["[RU] 239 ml", "[RU] 200 ml", "[RU] 242 ml", "[RU] 250 ml"],
      correctAnswer: "[RU] 239 ml",
    },
    {
      questionText: "[RU] 25  Agar retseptda vodorod peroksid eritmasining konsentratsiyasi ko\u02bbrsatilmagan bo\u02bblsa, necha % gi beriladi?",
      options: ["[RU] 0.03", "[RU] 0.1", "[RU] 0.2", "[RU] 0.39"],
      correctAnswer: "[RU] 0.03",
    },
    {
      questionText: "[RU] 26  Agar retseptda \u201cglitserin\u201d deb yozilgan bo\u02bblsa, qanday glitserin tushuniladi?",
      options: ["[RU] 10-16% suv saqlagan glitserin", "[RU] suyultirilgan glitserin", "[RU] konsentrlangan glitserin", "[RU] suvsiz glitserin"],
      correctAnswer: "[RU] konsentrlangan glitserin",
    },
    {
      questionText: "[RU] 27  Agar sirka kislotasi eritmasining konsentratsiyasi ko\u02bbrsatilmagan bo\u02bblsa, uning necha % eritmasi tushuniladi?",
      options: ["[RU] 30% li", "[RU] 10% li", "[RU] 98% li", "[RU] 100% li"],
      correctAnswer: "[RU] 10% li",
    },
    {
      questionText: "[RU] 28  In\u02bceksiya uchun eritmalar texnologik jarayonning qanday bosqichlarida mexanik qo\u02bbshilmalarga tekshiriladi?",
      options: ["[RU] filtrlash va sterilizatsiyadan keyin", "[RU] sterilizatsiyadan keyin", "[RU] qadoq va jihozlangan so\u02bbng", "[RU] filtrlashdan keyin"],
      correctAnswer: "[RU] filtrlash va sterilizatsiyadan keyin",
    },
    {
      questionText: "[RU] 29  0,5% kalsiy xlorid in\u02bceksion eritmasini sterilligini ta\u02bcminlaydigan sharoitlarni ko\u02bbrsating?",
      options: ["[RU] aseptik sharoit, sterilizatsiya sharoiti 120\u00b0C, 8 daqiqa", "[RU] aseptik sharoit", "[RU] aseptik sharoit, sterilizatsiya sharoiti 100\u00b0C, 30 daqiqa", "[RU] aseptik sharoit, sterilizatsiya sharoiti 180\u00b0C, 30 daqiqa"],
      correctAnswer: "[RU] aseptik sharoit, sterilizatsiya sharoiti 120\u00b0C, 8 daqiqa",
    },
    {
      questionText: "[RU] 30  In\u02bceksiya uchun eritma tayyorlashda ishlatiladigan natriy xlorid qanday maqsadda 180\u00b0C da 2 soat davomida sterilizatsiya qilinadi?",
      options: ["[RU] suvsizlantirish uchun", "[RU] pirogen moddalarni yo\u02bbqotish uchun", "[RU] farmakologik ta\u02bcsirini ortirish uchun", "[RU] farmakologik ta\u02bcsirini kamaytirish uchun"],
      correctAnswer: "[RU] pirogen moddalarni yo\u02bbqotish uchun",
    },
    {
      questionText: "[RU] 31  Dorivor o\u02bbsimlik nima?",
      options: ["[RU] zaharsiz dorivor o\u02bbsimlik", "[RU] tarkibida efir moyi saqlagan o\u02bbsimlik", "[RU] tarkibida BFM saqlagan va biror kasallikni davolash va kasallikni oldini  olish uchun ishlatiladigan o\u02bbsimlik", "[RU] biror kasallikni davolash va shu kasallikni oldini olish uchun ishlatiladigan o\u02bbsimlik"],
      correctAnswer: "[RU] tarkibida BFM saqlagan va biror kasallikni davolash va kasallikni oldini  olish uchun ishlatiladigan o\u02bbsimlik",
    },
    {
      questionText: "[RU] 32  Me\u02bcyoriy hujjatlarga nimalar kiradi? To\u02bbliq javob keltirilgan javobni tanlang.",
      options: ["[RU] DST, FM", "[RU] VFM, FM", "[RU] DST, KST", "[RU] KFM, FM, DST, Korxona standarti"],
      correctAnswer: "[RU] KFM, FM, DST, Korxona standarti",
    },
    {
      questionText: "[RU] 33  O\u02bbzbekiston korxonalarida dorivor o\u02bbsimlik xomashyolaridan qanday fitopreparatlar turi ishlab chiqariladi?",
      options: ["[RU] yig\u02bbmalar, filtr-paketlar, granulalar, sharbatlar, qiyomlar, presslangan  tabletkalar", "[RU] nastoyka, ekstraktlar, yig\u02bbmalar", "[RU] yig\u02bbmalar, ekstraktlar", "[RU] briketlar, yig\u02bbmalar"],
      correctAnswer: "[RU] yig\u02bbmalar, filtr-paketlar, granulalar, sharbatlar, qiyomlar, presslangan  tabletkalar",
    },
    {
      questionText: "[RU] 34  Zubturum mahsulotining kimyoviy tarkibi?",
      options: ["[RU] yurak glikozidlari", "[RU] glikozid aukubin, achchiq glikozidlar", "[RU] glikozid aukubin, polisaxaridlar", "[RU] flavonoidlar, glikozid aukubin"],
      correctAnswer: "[RU] glikozid aukubin, polisaxaridlar",
    },
    {
      questionText: "[RU] 35  Zubturum mahsulotining tibbiyotda qanday shaklda ishlatililadi?",
      options: ["[RU] damlama shaklida me\u02bcda ichak kasalliklarida, plantaglyusid preparati shaklida me\u02bcda-ichak yara kasalliklarida", "[RU] damlama shaklida shamollashda ishlatiladi", "[RU] qaynatma shaklida o\u02bbpka shamollaganda", "[RU] plantaglyusid shaklida tuberkulyoz kasalligida"],
      correctAnswer: "[RU] damlama shaklida me\u02bcda ichak kasalliklarida, plantaglyusid preparati shaklida me\u02bcda-ichak yara kasalliklarida",
    },
    {
      questionText: "[RU] 36  Zig\u02bbir mahsuloti?",
      options: ["[RU] ildizi", "[RU] bargi", "[RU] yer ustki qismi", "[RU] urug\u02bbi"],
      correctAnswer: "[RU] urug\u02bbi",
    },
    {
      questionText: "[RU] 37  Dorivor Gulxayri mahsuloti?",
      options: ["[RU] ildizi", "[RU] yer ustki qismi", "[RU] mevasi;", "[RU] bargi va ildizpoyasi"],
      correctAnswer: "[RU] ildizi",
    },
    {
      questionText: "[RU] 38  Dorixona ukropi maxsulotining kimyoviy tarkibi?",
      options: ["[RU] efir moylari, saponinlar, oshlovchi moddalar", "[RU] efir moylari (anetol), yog\u02bblar, oqsillar", "[RU] alkaloidlar, vitaminlar, yog\u02bblar", "[RU] oqsil moddalari, yog\u02bblar, alkaloidlar"],
      correctAnswer: "[RU] efir moylari (anetol), yog\u02bblar, oqsillar",
    },
    {
      questionText: "[RU] 39  O\u02bbsimlik mahsulotida ruxsat etiladigan aralashmalarga nimalar kiradi?",
      options: ["[RU] organik va mineral aralashmalar", "[RU] hasharot va hayvonot qoldiqlari", "[RU] zaharli o\u02bbsimliklar qismi", "[RU] hayvonot qoldiqlari"],
      correctAnswer: "[RU] organik va mineral aralashmalar",
    },
    {
      questionText: "[RU] 40  Ruxsat etilmaydigan aralashmalarga nimalar kiradi?",
      options: ["[RU] mineral aralashmalar", "[RU] organik va mineral aralashmalar", "[RU] o\u02bbsimlikning xomashyo bo\u02bblmagan qismlari", "[RU] hayvonot va hasharot qoldiqlari hamda zaharli o\u02bbsimliklar qismi"],
      correctAnswer: "[RU] hayvonot va hasharot qoldiqlari hamda zaharli o\u02bbsimliklar qismi",
    },
    {
      questionText: "[RU] 41  Dorivor o\u02bbsimlik mahsulotlarini chinligini aniqlash usullari?",
      options: ["[RU] makroskopik va mikroskopik, sifat reaksiyalar", "[RU] makroskopik", "[RU] biologik standartizatsiya", "[RU] kimyoviy tahlil"],
      correctAnswer: "[RU] makroskopik va mikroskopik, sifat reaksiyalar",
    },
    {
      questionText: "[RU] 42  Mahsulotlar tarkibidagi mineral aralashmalar nimalardan iborat?",
      options: ["[RU] qum, kesak, tosh, temir parchalari", "[RU] qum,kesak va boshqa o\u02bbsimliklarning somoni", "[RU] o\u02bbsimlik somoni, qipig\u02bbi va ko\u02bbmiri", "[RU] qum,kesak va boshqa o\u02bbsimlik xashagi"],
      correctAnswer: "[RU] qum, kesak, tosh, temir parchalari",
    },
    {
      questionText: "[RU] 43  Mahsulotlar tarkibidagi organik aralashmalarga nimalar kirad?",
      options: ["[RU] temir parchalari, somon, qipiq va xashak", "[RU] boshqa o\u02bbsimlik somoni qum, kesak", "[RU] shu o\u02bbsimlikning mahsulot bo\u02bblmagan boshqa qismi, o\u02bbsimlik somoni, qipig\u02bbi, xashagi", "[RU] boshqa o\u02bbsimlik xashagi, qipig\u02bbi va qumlar"],
      correctAnswer: "[RU] shu o\u02bbsimlikning mahsulot bo\u02bblmagan boshqa qismi, o\u02bbsimlik somoni, qipig\u02bbi, xashagi",
    },
    {
      questionText: "[RU] 44  Allergiyaga qarshi ishlatiladigan antigistamin ta\u02bcsirli preparatlarni ko\u02bbrsating.",
      options: ["[RU] tavegil, pipolfen", "[RU] intal, meksamin", "[RU] zaditen, bikarsen", "[RU] kaliy xlorid"],
      correctAnswer: "[RU] tavegil, pipolfen",
    },
    {
      questionText: "[RU] 45  Allergiyada beriladigan preparatlarni ko\u02bbrsating:",
      options: ["[RU] gistoglobulin", "[RU] gentamitsin", "[RU] glyukonat kalsiy", "[RU] suprastin"],
      correctAnswer: "[RU] suprastin",
    },
    {
      questionText: "[RU] 46  Dimedrolninig nojo\u02bbya ta\u02bcsiri:",
      options: ["[RU] uyquchanlik", "[RU] qabziyat", "[RU] isitma", "[RU] soch to\u02bbkilishi"],
      correctAnswer: "[RU] uyquchanlik",
    },
    {
      questionText: "[RU] 47  Anafilaktik shokda qo\u02bbllaniladi:",
      options: ["[RU] atropin, vikasol", "[RU] adrenalin, prednizolon", "[RU] dibazol, pentamin", "[RU] korvalol, nitroglitserin"],
      correctAnswer: "[RU] adrenalin, prednizolon",
    },
    {
      questionText: "[RU] 48  Glyukokortikosteroidlarninig nojo\u02bbya ta\u02bcsiri:",
      options: ["[RU] bronxospazm", "[RU] gipotenziya", "[RU] diabet", "[RU] uyquchanlik"],
      correctAnswer: "[RU] diabet",
    },
    {
      questionText: "[RU] 49  Prednizolonning sutkalik dozasi asosiy qismi buyuriladi:",
      options: ["[RU] ertalab", "[RU] kunduzi", "[RU] kechqurun", "[RU] kechasi"],
      correctAnswer: "[RU] ertalab",
    },
    {
      questionText: "[RU] 50  Eshakemida qo\u02bbllaniladigan preparatlar:",
      options: ["[RU] dezagregant", "[RU] antibiotik", "[RU] diuretik", "[RU] antigistamin"],
      correctAnswer: "[RU] dezagregant",
    },
    {
      questionText: "[RU] 51  Krapivnitsada qaysi dori vositasi qo\u02bbllaniladi:",
      options: ["[RU] dimedrol", "[RU] dibazol", "[RU] laziks", "[RU] eufillin"],
      correctAnswer: "[RU] dimedrol",
    },
    {
      questionText: "[RU] 52  Qaysi preparatlar alkaloidlar guruhiga kiradi?",
      options: ["[RU] adrenalin", "[RU] rezerpin, efedrin", "[RU] noradrenalin", "[RU] midantan"],
      correctAnswer: "[RU] rezerpin, efedrin",
    },
    {
      questionText: "[RU] 53  Adrenalinning asosiy farmakologik ta\u02bcsirlarini ko\u02bbrsating:",
      options: ["[RU] qon bosimini oshiradi va yurak ishini tezlashtiradi", "[RU] noradrenalindan kuchsiz ta\u02bcsir etadi", "[RU] bilvosita adrenoblokator ta\u02bcsir etadi", "[RU] MNSni susaytiradi"],
      correctAnswer: "[RU] qon bosimini oshiradi va yurak ishini tezlashtiradi",
    },
    {
      questionText: "[RU] 54  Dori vositalarining homilaga salbiy ta\u02bcsirini ko\u02bbrsating:",
      options: ["[RU] disbakterioz ta\u02bcsiri", "[RU] zaharli ta\u02bcsiri", "[RU] teratogen ta\u02bcsir", "[RU] blastomogen ta\u02bcsiri"],
      correctAnswer: "[RU] teratogen ta\u02bcsir",
    },
    {
      questionText: "[RU] 55  Qariyalarda dorilarning qanday dozalash kerak:",
      options: ["[RU] 50% ga kamaytirish", "[RU] 10% ga oshirish", "[RU] 50% ga oshirish", "[RU] 10% ga kamaytirish"],
      correctAnswer: "[RU] 10% ga kamaytirish",
    },
    {
      questionText: "[RU] 56  Dorilarni parenteral yo\u02bbl bilan yuborishga kiradi:",
      options: ["[RU] to\u02bbg\u02bbri ichakka", "[RU] og\u02bbiz orqali", "[RU] til ostiga", "[RU] mushak orasiga"],
      correctAnswer: "[RU] mushak orasiga",
    },
    {
      questionText: "[RU] 57  Dorilarni enteral yo\u02bbl bilan yuborishga kiradi:",
      options: ["[RU] to\u02bbg\u02bbri ichakka", "[RU] teri ostiga", "[RU] mushak orasiga", "[RU] teri orasiga"],
      correctAnswer: "[RU] to\u02bbg\u02bbri ichakka",
    },
    {
      questionText: "[RU] 58  Dori vositalarini og\u02bbiz orqali yuborishga xos:",
      options: ["[RU] steril sharoitning talab etilishi", "[RU] ta\u02bcsirining tez yuzaga chiqishi", "[RU] dori vositasiga oshqozon-ichak-tizimi fermentlarining ta\u02bcsiri", "[RU] dozaning aniq bo\u02bblishi"],
      correctAnswer: "[RU] dori vositasiga oshqozon-ichak-tizimi fermentlarining ta\u02bcsiri",
    },
    {
      questionText: "[RU] 59  Dori vositalarini parenteral yo\u02bbl bilan yuborishga xos:",
      options: ["[RU] oshqozon-ichak-tizimini chetlab o\u02bbtilishi", "[RU] dori vositasiga Oshqozon-ichak-tizimi fermentlarining ta\u02bcsiri", "[RU] ta\u02bcsirining tez yuzaga chiqmasligi", "[RU] steril sharoitning talab etilmasligi"],
      correctAnswer: "[RU] oshqozon-ichak-tizimini chetlab o\u02bbtilishi",
    },
    {
      questionText: "[RU] 60  Shoshilinch tibbiy yordamda dori vositasini eng samarali yuborish yo\u02bblini aniqlang:",
      options: ["[RU] sublingval", "[RU] rektal", "[RU] peroral", "[RU] vena ichiga"],
      correctAnswer: "[RU] vena ichiga",
    },
    {
      questionText: "[RU] 61  \u201cDori-darmon\u02bc Aksiyadorlik kompaniyasi faoliyatini muvofiqlashtirish qaysi tashkilot zimmasiga biriktirildi?",
      options: ["[RU] O\u02bbzbekiston Respublikasi Sog\u02bbliqni saqlash vazirligi", "[RU] Dori-darmon aksiyadorlik uyushmasi", "[RU] Tibbiy texnika sifatini nazorat qilish bo\u02bblimi", "[RU] Ilmiy profilaktika markazi"],
      correctAnswer: "[RU] O\u02bbzbekiston Respublikasi Sog\u02bbliqni saqlash vazirligi",
    },
    {
      questionText: "[RU] 62  \u201cDori-darmon\u201d Aksiyadorlik kompaniyasining asosiy vazifalari:",
      options: ["[RU] sifatli dori vositalari va tibbiyot buyumlari bilan taminlash", "[RU] davlat rezervining dori vositalari bilan tibbiyot buyumlariga ehtiyojlarini qondirishni ta\u02bcminlash", "[RU] farmatsevtik mahsulotlari resurlari to\u02bbg\u02bbrisidagi yagona respublika", "[RU] axborotlar tizimini yaratish"],
      correctAnswer: "[RU] axborotlar tizimini yaratish",
    },
    {
      questionText: "[RU] barcha javoblar to\u02bbg\u02bbri",
      options: ["[RU] 63  O\u02bbzbekiston Respublikasi Sog\u02bbliqni saqlash vazirligining asosiy vazifalari: aholi sog\u02bblig\u02bbini muhofaza qilish", "[RU] dori vositalari yaratish", "[RU] farmatsevtika sanoatini kompleks rivojlantirish", "[RU] dori vositalaini ishlab chiqarish"],
      correctAnswer: "[RU] 63  O\u02bbzbekiston Respublikasi Sog\u02bbliqni saqlash vazirligining asosiy vazifalari: aholi sog\u02bblig\u02bbini muhofaza qilish",
    },
    {
      questionText: "[RU] 64  Reseptda qaysi belgilardan foydalanish man etiladi?",
      options: ["[RU] ichish uchun", "[RU] ma\u02bclum", "[RU] qoida tariqasida", "[RU] barcha javoblar to\u02bbg\u02bbri"],
      correctAnswer: "[RU] barcha javoblar to\u02bbg\u02bbri",
    },
    {
      questionText: "[RU] 65  Reseptning yirtma koreshogida qanday ma\u02bclumotlar aks ettiriladi?",
      options: ["[RU] bemorning familya ismi sharifi, yoshi", "[RU] resept yozilgan sana", "[RU] shifokorning familiya, ismi, sharifi, kasllik tarixining nomeri", "[RU] barcha javoblar to\u02bbg\u02bbri"],
      correctAnswer: "[RU] barcha javoblar to\u02bbg\u02bbri",
    },
    {
      questionText: "[RU] 66  Retsept blankalari necha xil bo\u02bbladi?",
      options: ["[RU] 6 xil", "[RU] 2 xil", "[RU] 4 xil", "[RU] 3 xil"],
      correctAnswer: "[RU] 6 xil",
    },
    {
      questionText: "[RU] 67  Retsept tarkibida kuchli ta\u02bcsir etuvchi, giyohvand, psixotrop moddalar va prekursorlar bo\u02bblsa bunday dorilar retsepti nima qilinadi?",
      options: ["[RU] dorixonada qolmayadi", "[RU] dorixonada qoladi va bemorga signatura beriladi", "[RU] bemorlarga bepul dori vositasi beriladi", "[RU] to\u02bbg\u02bbri javob yo\u02bbq"],
      correctAnswer: "[RU] dorixonada qolmayadi",
    },
    {
      questionText: "[RU] 68  Imtiyozli dori vositalari berish uchun retsept necha nusxada yoziladi?",
      options: ["[RU] faqat bitta", "[RU] 2 nusxada", "[RU] 2 va undan ortiq", "[RU] barcha javoblar to\u02bbg\u02bbri"],
      correctAnswer: "[RU] 2 nusxada",
    },
    {
      questionText: "[RU] 69  Tuzatishlar qilingan, bir-biriga to\u02bbg\u02bbri kelmaydigan dori vositalari yozilgan retseptlarni qanday yozuv bilan bekor qilinadi?",
      options: ["[RU] retsept haqiqiy emas", "[RU] retsept soxta", "[RU] retseptga tuzatish kiritish kerak", "[RU] retseptda xatolik mavjud"],
      correctAnswer: "[RU] retseptda xatolik mavjud",
    },
    {
      questionText: "[RU] 70  Kuchli ta\u02bcsir etuvchi moddalari bo\u02bblgan dorilar bo\u02bbyicha yozilgan retseptlar necha kungacha yaroqli hisoblanadi?",
      options: ["[RU] 10 kun", "[RU] 6 kun", "[RU] 2 kun", "[RU] 4 kun"],
      correctAnswer: "[RU] 10 kun",
    },
    {
      questionText: "[RU] 71  Nazorat analitik laboratoriyasining tarozi xonasiga qanday asboblar joylashtiriladi?",
      options: ["[RU] analitik tarozi", "[RU] fotokolorimetr, potensiometr", "[RU] refraktometr", "[RU] spektrofotometr"],
      correctAnswer: "[RU] analitik tarozi",
    },
    {
      questionText: "[RU] 72  Nazorat analitik laboratoriyasining optik xonasiga qanday asboblar joylashtiriladi?",
      options: ["[RU] refraktometr", "[RU] refraktometr, fotoelektrokolorimetr, analitik torozi, potensiometr, spektrofotometr", "[RU] potensiometr, spektrofotometr", "[RU] analitik tarozi"],
      correctAnswer: "[RU] refraktometr, fotoelektrokolorimetr, analitik torozi, potensiometr, spektrofotometr",
    },
    {
      questionText: "[RU] 73  Aseptik blok dezinfeksiya qilinadi:",
      options: ["[RU] har kuni", "[RU] har smenada", "[RU] har soatda", "[RU] har hafta"],
      correctAnswer: "[RU] har kuni",
    },
    {
      questionText: "[RU] 74  Aseptik blokda sanitariya holati tekshiriladi:",
      options: ["[RU] har kuni", "[RU] har smenada", "[RU] har soatda", "[RU] har hafta"],
      correctAnswer: "[RU] har kuni",
    },
    {
      questionText: "[RU] 75  Shifoxonalararo dorixonaning asosiy vazifasi:",
      options: ["[RU] davolash profilaktika muassasasi va ulardan tashqari sog\u02bbliqni saqlash punktlari, maorif va ijtimoiy ta\u02bcminot, sanitariya va profilaktika muassasalarini ham dori vositalari bilan ta\u02bcminlash", "[RU] davolash profilaktika muassasasi larni dori vositalari bilan ta\u02bcminlash", "[RU] aholini dori vositalari bilan ta\u02bcminlash", "[RU] dori vositalari sifatini nazorat qilish"],
      correctAnswer: "[RU] davolash profilaktika muassasasi va ulardan tashqari sog\u02bbliqni saqlash punktlari, maorif va ijtimoiy ta\u02bcminot, sanitariya va profilaktika muassasalarini ham dori vositalari bilan ta\u02bcminlash",
    },
    {
      questionText: "[RU] 76  Xo\u02bbjalik va maishiy xonalarga qaysi xonalar kiradi?",
      options: ["[RU] dam olish xonasi, shaxsiy gigiena xonalar", "[RU] yuvish xonasi", "[RU] shisha idishlar saqlanadigan xona", "[RU] yordamchi materiallar saqlanadigan xona"],
      correctAnswer: "[RU] dam olish xonasi, shaxsiy gigiena xonalar",
    },
    {
      questionText: "[RU] 77  Aseptik blokda qanday jixozlar bo\u02bbladi?",
      options: ["[RU] mexanik aralashtirgichlar, turli tipdagi steril eritmalarni tozaligini  tekshiruvchi apparatlar, shisha idishlar og\u02bbzini alyumin qalpoqchalar bilan berkitishda ishlatiladigan stanokcha", "[RU] po\u02bbkak qopqoqlarni kichraytiradigan moslamalar", "[RU] analitik torozilar, turli tipdagi steril eritmalarni tozaligini tekshiruvchi apparatlar", "[RU] potensiometr, turli tipdagi steril eritmalarni tozaligini tekshiruvchi apparatlar"],
      correctAnswer: "[RU] mexanik aralashtirgichlar, turli tipdagi steril eritmalarni tozaligini  tekshiruvchi apparatlar, shisha idishlar og\u02bbzini alyumin qalpoqchalar bilan berkitishda ishlatiladigan stanokcha",
    },
    {
      questionText: "[RU] 78  Shifoxonalararo dorixonalar boshqa dorixonalardan nimasi bilan farqlanadi?",
      options: ["[RU] yakka tartibda tayyorlanadigan dori vositalarining asosiy qismini 60-90%  ni suyuq dorilar, in\u02bceksiya uchun ishlatiladigan eritmalar tashkil qiladi", "[RU] dorixona retsepturasining 50% ni in\u02bceksiya eritmalari tashkil qiladi", "[RU] dorixona retsepturasining 60%ini poroshoklar tashkil qiladi", "[RU] dorixona retsepturasining 100% ini damlamalar tashkil qiladi"],
      correctAnswer: "[RU] yakka tartibda tayyorlanadigan dori vositalarining asosiy qismini 60-90%  ni suyuq dorilar, in\u02bceksiya uchun ishlatiladigan eritmalar tashkil qiladi",
    },
    {
      questionText: "[RU] 79  Farmatsevt texnologning asosiy vazifalari:",
      options: ["[RU] bo\u02bblimlardan talabnomalarni qabul qilish, dorilar sifatini nazorat qilish,aseptik xonada tayyorlangan dori vositalar sifatini nazorat qilish", "[RU] dori vositalarini saqlash, dorilar sifatini nazorat qilish", "[RU] dori vositalirini guruxlariga ajratish, dori vositalar sifatini nazorat qilish", "[RU] dori vositalarini nazorat qilish, bo\u02bblimlardan talabnomalarni qabul qilish"],
      correctAnswer: "[RU] bo\u02bblimlardan talabnomalarni qabul qilish, dorilar sifatini nazorat qilish,aseptik xonada tayyorlangan dori vositalar sifatini nazorat qilish",
    },
    {
      questionText: "[RU] 80  Giyohvand dori vositalari uchun talabnomalar shifoxonalararo dorixonada necha yil saqlanadi?",
      options: ["[RU] 1 oy", "[RU] 1 yil", "[RU] 3 yil", "[RU] 5 yil"],
      correctAnswer: "[RU] 5 yil",
    },
    {
      questionText: "[RU] 81  Nomi bo\u02bbyicha miqdoriy hisobdagi dori vositalari uchun talabnomalar shifoxonalararo dorixonada necha yil saqlanadi?",
      options: ["[RU] 5 yil", "[RU] 4 yil", "[RU] 1 yil", "[RU] 2 yil"],
      correctAnswer: "[RU] 2 yil",
    },
    {
      questionText: "[RU] 82  Shifoxonalararo dorixonaning ishlab chiqarish xonalariga qanday xonalar kiradi?",
      options: ["[RU] talabnomani qabul qiladigan xona, retseptura, assistentlar. konsentrat va  yarim fabrikatlarni tayyorlash, distilyasiya xonalari", "[RU] tayyor dori vositalari xonalari", "[RU] mudirning xonasi", "[RU] xodimlarning dam olish xonasi"],
      correctAnswer: "[RU] talabnomani qabul qiladigan xona, retseptura, assistentlar. konsentrat va  yarim fabrikatlarni tayyorlash, distilyasiya xonalari",
    },
    {
      questionText: "[RU] 83  Dorixonada maxsus litsenziyasiz qanday dori vositalarini tayyorlash, qabul qilish, saqlash va sotish taqiqlanadi?",
      options: ["[RU] kuchli ta\u02bcsir etuvchi moddalarni, giyohvand dori vositalarini", "[RU] zardoblarni", "[RU] vaksinalarni", "[RU] dorivor o\u02bbsimliklarni"],
      correctAnswer: "[RU] kuchli ta\u02bcsir etuvchi moddalarni, giyohvand dori vositalarini",
    },
    {
      questionText: "[RU] 84  Dorixona shaxobchasini davolash profilaktika muassasasi maydonida ochishiga ruxsat etiladimi?",
      options: ["[RU] bosh vrachning ruxsati bilan", "[RU] ruxsat etiladi", "[RU] dorixona rahbari tashabbusi bilan", "[RU] ruxsat etilmaydi"],
      correctAnswer: "[RU] bosh vrachning ruxsati bilan",
    },
    {
      questionText: "[RU] 85  Kuchli ta\u02bcsir etuvchi dori vositalariga yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[RU] 1 oy", "[RU] 2 oy", "[RU] 1 yil", "[RU] 5 yil"],
      correctAnswer: "[RU] 1 yil",
    },
    {
      questionText: "[RU] 86  Atropin sulfat 0,1% li eritmasi uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[RU] 2 oy", "[RU] 1 yil", "[RU] 3 yil", "[RU] 5 yil"],
      correctAnswer: "[RU] 3 yil",
    },
    {
      questionText: "[RU] 87  Dikain uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[RU] 1 oy", "[RU] 2 oy", "[RU] 1 yil", "[RU] 3 yil"],
      correctAnswer: "[RU] 1 yil",
    },
    {
      questionText: "[RU] 88  Promedol 2% - 1,0 eritmasi uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[RU] 2 oy", "[RU] 1 yil", "[RU] 3 yil", "[RU] 5 yil"],
      correctAnswer: "[RU] 5 yil",
    },
    {
      questionText: "[RU] 89  Etil spirtiga yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[RU] 1 oy", "[RU] 2 oy", "[RU] 1 yil", "[RU] 5 yil"],
      correctAnswer: "[RU] 1 yil",
    },
    {
      questionText: "[RU] 90  Morfin uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[RU] 1 oy", "[RU] 1 yil", "[RU] 3 yil", "[RU] 5 yil"],
      correctAnswer: "[RU] 5 yil",
    },
    {
      questionText: "[RU] 91  Omnopon uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[RU] 1 oy", "[RU] 2 oy", "[RU] 1 yil", "[RU] 5 yil"],
      correctAnswer: "[RU] 5 yil",
    },
    {
      questionText: "[RU] 92  Imtiyozli beriladigan dori retseptlarini dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[RU] 1 oy", "[RU] 2 oy", "[RU] 3 yil", "[RU] 5 yil"],
      correctAnswer: "[RU] 5 yil",
    },
    {
      questionText: "[RU] 93  Kumush nitrat uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[RU] 1 yil", "[RU] 3 yil", "[RU] 4 yil", "[RU] 5 yil"],
      correctAnswer: "[RU] 3 yil",
    },
    {
      questionText: "[RU] 94  Strixnin nitrat 0,1% li eritmasi uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating.",
      options: ["[RU] 1 oy", "[RU] 2 oy", "[RU] 1 yil", "[RU] 3 yil"],
      correctAnswer: "[RU] 3 yil",
    },
    {
      questionText: "[RU] 95  Mishyak oksidi uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[RU] 1 yil", "[RU] 3 yil", "[RU] 4 yil", "[RU] 5 yil"],
      correctAnswer: "[RU] 5 yil",
    },
    {
      questionText: "[RU] 96  Simob sianid uchun yozilgan dori retseptning dorixonada saqqash muddatini ko\u02bbrsating:",
      options: ["[RU] 1 oy", "[RU] 1 yil", "[RU] 3 yil", "[RU] 5 yil"],
      correctAnswer: "[RU] 5 yil",
    },
    {
      questionText: "[RU] 97  Simob oksitsianid uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[RU] 1 oy", "[RU] 2 oy", "[RU] 1 yil", "[RU] 5 yil"],
      correctAnswer: "[RU] 5 yil",
    },
    {
      questionText: "[RU] 98  Kodein fosfat uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating.",
      options: ["[RU] 2 oy", "[RU] 1 yil", "[RU] 3 yil", "[RU] 5 yil"],
      correctAnswer: "[RU] 5 yil",
    },
    {
      questionText: "[RU] 99  Kokain gidroxlorid uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[RU] 1 oy", "[RU] 2 oy", "[RU] 1 yil", "[RU] 5 yil"],
      correctAnswer: "[RU] 5 yil",
    },
    {
      questionText: "[RU] 100  Noksiron uchun yozilgan retseptning dorixonada saqlash muddatini ko\u02bbrsating:",
      options: ["[RU] 1 yil", "[RU] 3 yil", "[RU] 5 yil", "[RU] 10 y il"],
      correctAnswer: "[RU] 5 yil",
    },
  ],
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
