import type { Question, Locale } from "~/types/quiz"

export const studentComputerScienceQuestions: Record<Locale, Question[]> = {
  en: [

  ],
  ru: [

  ],
  uz: [
    {
      questionText: "Kompyuter tarmog\u2018i nima?",
      options: ["Bir nechta kompyuterlarning o\u2018zaro bog\u2018lanishi", "Faqat internetga ulangan kompyuterlar", "Kompyuterda o\u2018rnatilgan dastur", "Printer va skanerlar to\u2018plami"],
      correctAnswer: "Bir nechta kompyuterlarning o\u2018zaro bog\u2018lanishi",
    },
    {
      questionText: "LAN tarmog\u2018i nimani anglatadi?",
      options: ["Lokal tarmoq", "Global tarmoq", "Internet xizmati", "Dasturiy ta'minot"],
      correctAnswer: "Lokal tarmoq",
    },
    {
      questionText: "IP manzil nima uchun kerak?",
      options: ["Qurilmalarni tarmoqda aniqlash uchun", "Kompyuterni o\u2018chirib qo\u2018yish uchun", "Faqat internet tezligini oshirish uchun", "Faqat USB qurilmani ulash uchun"],
      correctAnswer: "Qurilmalarni tarmoqda aniqlash uchun",
    },
    {
      questionText: "Router qanday qurilma?",
      options: ["Tarmoqlarni birlashtiruvchi qurilma", "Printerga ulanuvchi qurilma", "Faqat elektr ta\u2019minoti qurilmasi", "Faqat audio kuchaytirgich"],
      correctAnswer: "Tarmoqlarni birlashtiruvchi qurilma",
    },
    {
      questionText: "Wi-Fi orqali qanday aloqa amalga oshiriladi?",
      options: ["Simsiz aloqa", "Faqat optik aloqa", "Kabel orqali aloqa", "Qog\u2018oz orqali aloqa"],
      correctAnswer: "Simsiz aloqa",
    },
    {
      questionText: "MAC manzil nima?",
      options: ["Tarmoq qurilmasining unikal identifikatori", "E-mail manzili", "Veb-sahifaning manzili", "Klaviatura tugmasi"],
      correctAnswer: "Tarmoq qurilmasining unikal identifikatori",
    },
    {
      questionText: "Internet nima?",
      options: ["Butun dunyo bo\u2018ylab bog\u2018langan tarmoqlar tizimi", "Faqat mahalliy tarmoq", "Printerlar tarmog\u2018i", "Elektr uzatish tarmog\u2018i"],
      correctAnswer: "Butun dunyo bo\u2018ylab bog\u2018langan tarmoqlar tizimi",
    },
    {
      questionText: "HTTP protokoli nimani anglatadi?",
      options: ["Veb sahifalarni uzatish protokoli", "Elektron pochta protokoli", "Fayl tizimini boshqarish", "Matnli fayllarni o\u2018chirish"],
      correctAnswer: "Veb sahifalarni uzatish protokoli",
    },
    {
      questionText: "FTP protokoli nima uchun ishlatiladi?",
      options: ["Fayllarni uzatish uchun", "Musiqa eshitish uchun", "Veb sahifalarni bloklash uchun", "Printer sozlamalari uchun"],
      correctAnswer: "Fayllarni uzatish uchun",
    },
    {
      questionText: "DNS xizmati nimani bajaradi?",
      options: ["Domen nomlarini IP manzillarga aylantiradi", "Faqat grafiklarni ko\u2018rsatadi", "Internet tezligini oshiradi", "Fayllarni siqadi"],
      correctAnswer: "Domen nomlarini IP manzillarga aylantiradi",
    },
    {
      questionText: "Modem nima vazifani bajaradi?",
      options: ["Analog signallarni raqamli ko\u2018rinishga o\u2018zgartiradi", "Video yozuvlarni o\u2018zgartiradi", "Printerga ma\u2019lumot yuboradi", "Ekran yorqinligini boshqaradi"],
      correctAnswer: "Analog signallarni raqamli ko\u2018rinishga o\u2018zgartiradi",
    },
    {
      questionText: "WAN tarmog\u2018i qanday tarmoq?",
      options: ["Keng hududli tarmoq", "Lokal tarmoq", "Faqat uy tarmog\u2018i", "Kabelsiz aloqa"],
      correctAnswer: "Keng hududli tarmoq",
    },
    {
      questionText: "Kommutator (switch) nima qiladi?",
      options: ["Tarmoqdagi qurilmalarni bog\u2018laydi", "Tarmoq simlarini bog\u2018laydi", "Printerni sozlaydi", "Kompyuterni o\u2018chiradi"],
      correctAnswer: "Tarmoqdagi qurilmalarni bog\u2018laydi",
    },
    {
      questionText: "Server nima?",
      options: ["Ma\u2019lumotlar va xizmatlarni taqdim etuvchi kompyuter", "Faqat foydalanuvchi kompyuter", "Skayp o\u2018rnatuvchi qurilma", "Kompyuter o\u2018yinlari uchun dastur"],
      correctAnswer: "Ma\u2019lumotlar va xizmatlarni taqdim etuvchi kompyuter",
    },
    {
      questionText: "Ping bu...?",
      options: ["Tarmoqqa ulangan kompyuterni tekshirish buyrug\u2018i", "Kompyuterni o\u2018chirish usuli", "Faqat fayl saqlash funksiyasi", "Musiqa formati"],
      correctAnswer: "Tarmoqqa ulangan kompyuterni tekshirish buyrug\u2018i",
    },
    {
      questionText: "DHCP nima qiladi?",
      options: ["IP manzilni avtomatik beradi", "Faylni yuklaydi", "Musiqani ijro etadi", "Parolni o\u2018chiradi"],
      correctAnswer: "IP manzilni avtomatik beradi",
    },
    {
      questionText: "Tarmoq xavfsizligi deganda nima tushuniladi?",
      options: ["Ma\u2019lumotlarni ruxsatsiz kirishdan himoyalash", "Printerni sozlash", "Kompyuter fonini o\u2018zgartirish", "Klaviatura yoritishini yoqish"],
      correctAnswer: "Ma\u2019lumotlarni ruxsatsiz kirishdan himoyalash",
    },
    {
      questionText: "Tarmoq kabelining turi qaysi?",
      options: ["Twisted Pair", "Ko\u2018rsatkich", "RAM xotira", "HDMI"],
      correctAnswer: "Twisted Pair",
    },
    {
      questionText: "Internet brauzeri vazifasi nima?",
      options: ["Veb sahifalarni ko\u2018rsatish", "Fayllarni saqlash", "Printerga yuborish", "Matn terish"],
      correctAnswer: "Veb sahifalarni ko\u2018rsatish",
    },
    {
      questionText: "Firewall nima?",
      options: ["Tarmoq xavfsizligini ta'minlovchi tizim", "Faqat video ko\u2018ruvchi qurilma", "Printer drayveri", "Antivirus dasturi"],
      correctAnswer: "Tarmoq xavfsizligini ta'minlovchi tizim",
    },
    {
      questionText: "TCP/IP protokoli nima uchun ishlatiladi?",
      options: ["Tarmoq orqali ma\u2019lumot uzatish uchun", "Matn tahrirlash uchun", "Rasm chizish uchun", "Audio yozish uchun"],
      correctAnswer: "Tarmoq orqali ma\u2019lumot uzatish uchun",
    },
    {
      questionText: "Switch qurilmasi nimani boshqaradi?",
      options: ["Tarmoq trafikini", "Printer drayverini", "Monitor ekranini", "Kompyuter parolini"],
      correctAnswer: "Tarmoq trafikini",
    },
    {
      questionText: "Kompyuter tarmog\u2018ining asosiy elementi nima?",
      options: ["Kompyuter", "Klaviatura", "Sichqoncha", "Monitor"],
      correctAnswer: "Kompyuter",
    },
    {
      questionText: "Paketli ma\u2019lumot uzatish deganda nima tushuniladi?",
      options: ["Ma\u2019lumotlarni kichik qismlarga bo\u2018lib yuborish", "Faqat video uzatish", "Barcha fayllarni siqish", "Parollarni yuborish"],
      correctAnswer: "Ma\u2019lumotlarni kichik qismlarga bo\u2018lib yuborish",
    },
    {
      questionText: "NAT texnologiyasi nima uchun kerak?",
      options: ["Ichki tarmoq IP\u2019larini tashqi IP\u2019ga o\u2018zgartirish uchun", "Kompyuter ekranini sozlash uchun", "Internet qidiruv tizimini o\u2018zgartirish uchun", "Video formatini o\u2018zgartirish uchun"],
      correctAnswer: "Ichki tarmoq IP\u2019larini tashqi IP\u2019ga o\u2018zgartirish uchun",
    },
    {
      questionText: "Kabel bo\u2018yicha tarmoq ulanishi qanday nomlanadi?",
      options: ["Ethernet", "Wi-Fi", "Bluetooth", "Infraqizil"],
      correctAnswer: "Ethernet",
    },
    {
      questionText: "Tarmoq topologiyasi deganda nima tushuniladi?",
      options: ["Tarmoqdagi qurilmalar joylashuvi", "Dasturiy ta\u2019minot ro\u2018yxati", "Matnli fayl turi", "Kompyuter klaviaturasi"],
      correctAnswer: "Tarmoqdagi qurilmalar joylashuvi",
    },
    {
      questionText: "\"Yulduzcha\" topologiyasi qanday ishlaydi?",
      options: ["Barcha qurilmalar bitta markaziy tugunga ulangan", "Kompyuterlar zanjir shaklida ulangan", "Barcha qurilmalar mustaqil ishlaydi", "Faqat ikkita qurilma ulanadi"],
      correctAnswer: "Barcha qurilmalar bitta markaziy tugunga ulangan",
    },
    {
      questionText: "Tarmoqda uzatish tezligi nima bilan o\u2018lchanadi?",
      options: ["bit/s (bit per second)", "Vatt", "Kilogramm", "Santimetr"],
      correctAnswer: "bit/s (bit per second)",
    },
    {
      questionText: "Tarmoq adapteri nima?",
      options: ["Kompyuterni tarmoqqa ulovchi qurilma", "Printerni tarmoqqa ulangani", "Monitorga ulanadigan qurilma", "Klaviatura uchun sim"],
      correctAnswer: "Kompyuterni tarmoqqa ulovchi qurilma",
    },
    {
      questionText: "ISP nima?",
      options: ["Internet xizmat provayderi", "Grafik muharriri", "Elektron pochta dasturi", "Antivirus tizimi"],
      correctAnswer: "Internet xizmat provayderi",
    },
    {
      questionText: "Internetga ulanmagan tarmoq nima deyiladi?",
      options: ["Mahalliy tarmoq", "Global tarmoq", "Telefon tarmog\u2018i", "Video tarmoq"],
      correctAnswer: "Mahalliy tarmoq",
    },
    {
      questionText: "Tarmoqda harakatlanadigan axborot nima deb ataladi?",
      options: ["Paket", "Fayl", "Ilova", "Audio"],
      correctAnswer: "Paket",
    },
    {
      questionText: "Kompyuter tarmog\u2018ida havfsizlik buzilishi nima deyiladi?",
      options: ["Xakerlik", "Dizayn", "Formatlash", "O\u2018rnatish"],
      correctAnswer: "Xakerlik",
    },
    {
      questionText: "Proksi-server nima qiladi?",
      options: ["So\u2018rovlarni oraliq server orqali uzatadi", "Printerga yuboradi", "Monitor ekranini sozlaydi", "CD diskni chiqaradi"],
      correctAnswer: "So\u2018rovlarni oraliq server orqali uzatadi",
    },
    {
      questionText: "Tarmoqni kim boshqaradi?",
      options: ["Administrator", "Foydalanuvchi", "O\u2018quvchi", "Skaner"],
      correctAnswer: "Administrator",
    },
    {
      questionText: "Kompyuter tarmog\u2018idagi manzil nima?",
      options: ["IP manzil", "E-mail", "Telefon raqam", "Rasm manzili"],
      correctAnswer: "IP manzil",
    },
    {
      questionText: "Fayl almashish protokoli qaysi?",
      options: ["FTP", "HTML", "DOC", "JPG"],
      correctAnswer: "FTP",
    },
    {
      questionText: "Tarmoqdagi kompyuterlar o\u2018zaro nima orqali bog\u2018lanadi?",
      options: ["Kabel yoki simsiz aloqa", "Printer", "Skanner", "Disk"],
      correctAnswer: "Kabel yoki simsiz aloqa",
    },
    {
      questionText: "DNS nima degani?",
      options: ["Domen nomlari tizimi", "Disk nomlash tizimi", "Fayl ochuvchi dastur", "Video tahrirlovchi"],
      correctAnswer: "Domen nomlari tizimi",
    },
    {
      questionText: "Internet orqali suhbatlashish dasturi nima?",
      options: ["Messendjer", "Grafik muharriri", "Video tahrirlovchi", "O\u2018yin dasturi"],
      correctAnswer: "Messendjer",
    },
    {
      questionText: "Bluetooth nima?",
      options: ["Yaqin masofadagi simsiz aloqa texnologiyasi", "Uzoq masofadagi optik aloqa", "Video oynatgich", "Kompyuter tizim bloki"],
      correctAnswer: "Yaqin masofadagi simsiz aloqa texnologiyasi",
    },
    {
      questionText: "TCP bu...?",
      options: ["Ma\u2019lumot uzatish protokoli", "Fayl ochish dasturi", "Antivirus nomi", "Printer modeli"],
      correctAnswer: "Ma\u2019lumot uzatish protokoli",
    },
    {
      questionText: "Wi-Fi parolini kim belgilaydi?",
      options: ["Foydalanuvchi", "Internet", "Dastur", "Ekran"],
      correctAnswer: "Foydalanuvchi",
    },
    {
      questionText: "Internet Explorer bu...?",
      options: ["Brauzer", "Antivirus", "Printer", "Tarmoq kabeli"],
      correctAnswer: "Brauzer",
    },
    {
      questionText: "ICMP protokoli vazifasi nima?",
      options: ["Tarmoqdagi xatoliklarni aniqlash", "Rasmlarni tahrirlash", "Ekranni sozlash", "Fayllarni saqlash"],
      correctAnswer: "Tarmoqdagi xatoliklarni aniqlash",
    },
    {
      questionText: "Tarmoq orqali audio va video uzatish protokoli qaysi?",
      options: ["RTP", "FTP", "DOC", "PDF"],
      correctAnswer: "RTP",
    },
    {
      questionText: "IPv6 ning afzalligi nimada?",
      options: ["IP manzillar soni ko\u2018p", "Grafika sifati yuqori", "Tezlikni kamaytiradi", "Operatsion tizimni o\u2018chiradi"],
      correctAnswer: "IP manzillar soni ko\u2018p",
    },
    {
      questionText: "Qo\u2018shimcha tarmoq qurilmasi qanday ulanadi?",
      options: ["Port orqali", "E-mail orqali", "PDF bilan", "Audio bilan"],
      correctAnswer: "Port orqali",
    },
    {
      questionText: "NAT qanday ishlaydi?",
      options: ["Ichki IP\u2019ni tashqi IP\u2019ga o\u2018zgartiradi", "Fayl nomini o\u2018zgartiradi", "Audio hajmini sozlaydi", "Video uzatadi"],
      correctAnswer: "Ichki IP\u2019ni tashqi IP\u2019ga o\u2018zgartiradi",
    },
    {
      questionText: "Kompyuter tarmog\u2018ida parol nima uchun kerak?",
      options: ["Himoya uchun", "Grafikni o\u2018zgartirish uchun", "Klaviaturani sozlash uchun", "Rang berish uchun"],
      correctAnswer: "Himoya uchun",
    },
    {
      questionText: "VPN nima?",
      options: ["Maxfiy tarmoqga kirish texnologiyasi", "Video pleyer", "Printer model nomi", "Ekran yozuvi"],
      correctAnswer: "Maxfiy tarmoqga kirish texnologiyasi",
    },
    {
      questionText: "Tarmoqdagi ma\u2019lumotni ruxsatsiz o\u2018zlashtirish nima deyiladi?",
      options: ["Sniffing", "Browsing", "Printing", "Skanning"],
      correctAnswer: "Sniffing",
    },
    {
      questionText: "Kompyuter tarmog\u2018ida \"peer-to-peer\" modeli qanday?",
      options: ["Har bir qurilma teng huquqli", "Bitta serverga bo\u2018ysunadi", "Faqat mobil qurilmalar", "Printerga ulanadi"],
      correctAnswer: "Har bir qurilma teng huquqli",
    },
    {
      questionText: "Qo\u2018llaniladigan kabel turlari nechta?",
      options: ["Uchtadan ko\u2018p", "Faqat bitta", "Ikkita", "Yo\u2018q"],
      correctAnswer: "Uchtadan ko\u2018p",
    },
    {
      questionText: "Wi-Fi qanday xavfsizlik texnologiyasiga ega?",
      options: ["WPA2", "PNG", "PDF", "EXE"],
      correctAnswer: "WPA2",
    },
    {
      questionText: "Qo\u2018shimcha IP olish usuli qanday?",
      options: ["DHCP orqali", "HDMI orqali", "DOC orqali", "GIF orqali"],
      correctAnswer: "DHCP orqali",
    },
    {
      questionText: "Kompyuter tarmog\u2018idagi protokol bu...?",
      options: ["Qoidalarning to\u2018plami", "Rasm fayli", "Matn fayli", "Klaviatura uslubi"],
      correctAnswer: "Qoidalarning to\u2018plami",
    },
    {
      questionText: "Tarmoqdagi faoliyatni kuzatish uchun nima kerak?",
      options: ["Monitor dasturi", "Printer", "Klaviatura", "Rasm"],
      correctAnswer: "Monitor dasturi",
    },
    {
      questionText: "USB modem nima?",
      options: ["Internetga ulanadigan qurilma", "Ekran", "Monitor stendi", "Audio tizim"],
      correctAnswer: "Internetga ulanadigan qurilma",
    },
    {
      questionText: "Ma\u2019lumotlar uzatilayotganda yo\u2018qolishining oldini nima oladi?",
      options: ["Nazorat protokollari", "Tashqi xotira", "Printer drayveri", "Audio kartasi"],
      correctAnswer: "Nazorat protokollari",
    },
    {
      questionText: "Tarmoqdagi IP manzil takrorlansa nima yuz beradi?",
      options: ["Tarmoq xatoligi", "Tezlik oshadi", "Rasm sifatli bo\u2018ladi", "Ekran yorqinlashadi"],
      correctAnswer: "Tarmoq xatoligi",
    },
    {
      questionText: "Wi-Fi signalini uzaytirish uchun nima ishlatiladi?",
      options: ["Repeater", "Monitor", "Skanner", "Joystik"],
      correctAnswer: "Repeater",
    },
    {
      questionText: "Portlar nimani anglatadi?",
      options: ["Tarmoq xizmatlari uchun raqamli identifikator", "Fayl kengaytmasi", "Klaviatura tugmasi", "Ekran drayveri"],
      correctAnswer: "Tarmoq xizmatlari uchun raqamli identifikator",
    },
    {
      questionText: "127.0.0.1 IP manzili nima?",
      options: ["Mahalliy xost (localhost)", "Tashqi IP", "DNS manzili", "Email manzili"],
      correctAnswer: "Mahalliy xost (localhost)",
    },
    {
      questionText: "Tarmoqdagi uzatish tezligi nimalarga bog\u2018liq?",
      options: ["Kabel sifati va qurilma imkoniyatiga", "Klaviatura modeliga", "Ekran rangiga", "Kompyuter sig\u2018imiga"],
      correctAnswer: "Kabel sifati va qurilma imkoniyatiga",
    },
    {
      questionText: "Kabelsiz tarmoq qanday ataladi?",
      options: ["Simsiz (Wireless) tarmoq", "Lokal tarmoq", "Zanjirli tarmoq", "Kabel tarmog\u2018i"],
      correctAnswer: "Simsiz (Wireless) tarmoq",
    },
    {
      questionText: "Tarmoqda \u201cping\u201d buyrug\u2018i nima qiladi?",
      options: ["Tarmoq aloqasini tekshiradi", "Kompyuterni o\u2018chiradi", "Faylni yuklaydi", "Monitorni sozlaydi"],
      correctAnswer: "Tarmoq aloqasini tekshiradi",
    },
    {
      questionText: "DNS-serverni almashtirishdan nima o\u2018zgaradi?",
      options: ["Saytga ulanish tezligi", "Ekran hajmi", "Printer tezligi", "Fayl nomi"],
      correctAnswer: "Saytga ulanish tezligi",
    },
    {
      questionText: "MAC manzillar qanday turda bo\u2018ladi?",
      options: ["Fizik", "Virtual", "Matnli", "Grafik"],
      correctAnswer: "Fizik",
    },
    {
      questionText: "Host bu...?",
      options: ["Tarmoqqa ulangan kompyuter", "Raqamli rasm", "Video format", "Fayl kengaytmasi"],
      correctAnswer: "Tarmoqqa ulangan kompyuter",
    },
    {
      questionText: "DHCP avtomatik tarzda nima beradi?",
      options: ["IP manzil", "E-mail", "Parol", "DNS nomi"],
      correctAnswer: "IP manzil",
    },
    {
      questionText: "Kompyuter tarmog\u2018ida uzilishlar sabablaridan biri nima?",
      options: ["Kabelda muammo bo\u2018lishi", "Printer qizib ketishi", "Monitorda nuqta chiqishi", "Klaviatura tugmasi sinishi"],
      correctAnswer: "Kabelda muammo bo\u2018lishi",
    },
    {
      questionText: "Internet tezligini aniqlash uchun nima qilinadi?",
      options: ["Speed test", "Video ko\u2018rish", "Rasm chizish", "Fayl ochish"],
      correctAnswer: "Speed test",
    },
    {
      questionText: "Tarmoqda maksimal uzatish masofasi nima bilan belgilanadi?",
      options: ["Kabel turi", "Klaviatura uzunligi", "Fayl hajmi", "Ekran ruxsati"],
      correctAnswer: "Kabel turi",
    },
    {
      questionText: "FTP bu...?",
      options: ["Fayl uzatish protokoli", "Matn muharriri", "Grafik redaktori", "Parolni o\u2018zgartiruvchi"],
      correctAnswer: "Fayl uzatish protokoli",
    },
    {
      questionText: "Kompyuter tarmog\u2018ida xavfsizlik darajasi qanday oshiriladi?",
      options: ["Parol va shifrlash yordamida", "Printer ulash bilan", "Rangli ekran bilan", "Ovoz balandligi bilan"],
      correctAnswer: "Parol va shifrlash yordamida",
    },
    {
      questionText: "Tarmoqda ma\u2019lumotlar qaysi shaklda uzatiladi?",
      options: ["Paket", "Foydalanuvchi", "Rasm", "Fayl nomi"],
      correctAnswer: "Paket",
    },
    {
      questionText: "Protokollar nima qiladi?",
      options: ["Ma\u2019lumot uzatish qoidalarini belgilaydi", "Ekran nurlarini sozlaydi", "Audio faylni ijro etadi", "Faylni siqadi"],
      correctAnswer: "Ma\u2019lumot uzatish qoidalarini belgilaydi",
    },
    {
      questionText: "Internetga ulanishning eng keng tarqalgan usuli nima?",
      options: ["Wi-Fi", "Bluetooth", "Infraqizil", "Flash"],
      correctAnswer: "Wi-Fi",
    },
    {
      questionText: "Tarmoqdagi foydalanuvchilarga xizmat ko\u2018rsatuvchi kompyuter nima?",
      options: ["Server", "Printer", "Skanner", "Disk"],
      correctAnswer: "Server",
    },
    {
      questionText: "IP manzil necha qismdan iborat?",
      options: ["4", "2", "3", "6"],
      correctAnswer: "4",
    },
    {
      questionText: "Router va modem orasidagi farq nimada?",
      options: ["Router tarmoqni ulaydi, modem esa internetga ulanadi", "Ikkalasi bir xil qurilma", "Modem faqat skaner uchun", "Router faqat printer uchun"],
      correctAnswer: "Router tarmoqni ulaydi, modem esa internetga ulanadi",
    },
    {
      questionText: "Wi-Fi signal kuchi nimalarga bog\u2018liq?",
      options: ["Masofa va to\u2018siqlarga", "Ekran ruxsatiga", "Fayl nomiga", "Grafik o\u2018lchamga"],
      correctAnswer: "Masofa va to\u2018siqlarga",
    },
    {
      questionText: "Tarmoq kartasi qanday qismlarga ulanadi?",
      options: ["Anakartga", "Klaviaturaga", "Printerga", "Monitorga"],
      correctAnswer: "Anakartga",
    },
    {
      questionText: "Tarmoq xavfsizligi nima uchun kerak?",
      options: ["Ma\u2019lumotlarni himoyalash uchun", "Foydalanuvchini o\u2018chirish uchun", "Printerni sozlash uchun", "Ekran rangini o\u2018zgartirish uchun"],
      correctAnswer: "Ma\u2019lumotlarni himoyalash uchun",
    },
    {
      questionText: "HTTPS protokoli nimani bildiradi?",
      options: ["Himoyalangan HTTP", "Hujjat formati", "Grafik fayl", "Fayl nomi"],
      correctAnswer: "Himoyalangan HTTP",
    },
    {
      questionText: "Tarmoqda eng ko\u2018p qo\u2018llaniladigan protokol qaysi?",
      options: ["TCP/IP", "DOCX", "JPG", "AVI"],
      correctAnswer: "TCP/IP",
    },
    {
      questionText: "Tarmoq orqali printerni ishlatish mumkinmi?",
      options: ["Ha", "Yo\u2018q", "Faqat USB bilan", "Faqat disk bilan"],
      correctAnswer: "Ha",
    },
    {
      questionText: "Switch nima qiladi?",
      options: ["Ma\u2019lumotlarni mos qurilmaga yo\u2018naltiradi", "Video tahrirlaydi", "Grafik chizadi", "Ekranni sozlaydi"],
      correctAnswer: "Ma\u2019lumotlarni mos qurilmaga yo\u2018naltiradi",
    },
    {
      questionText: "LAN va WAN orasidagi farq nimada?",
      options: ["Qamrov hududida", "Rangda", "Tizim blokida", "Fayl kengaytmasida"],
      correctAnswer: "Qamrov hududida",
    },
    {
      questionText: "Tarmoq qurilmalarini kuzatish uchun nima kerak?",
      options: ["Monitoring dasturi", "Rasm tahrirlovchi", "Video pleyer", "Fayl ochuvchi"],
      correctAnswer: "Monitoring dasturi",
    },
    {
      questionText: "WEP, WPA, WPA2 bu...?",
      options: ["Wi-Fi xavfsizlik protokollari", "Fayl formatlari", "Grafik formatlar", "Klaviatura turida"],
      correctAnswer: "Wi-Fi xavfsizlik protokollari",
    },
    {
      questionText: "Faylni tarmoq orqali yuborish uchun nima kerak?",
      options: ["Tarmoq ulangan bo\u2018lishi kerak", "Rasm bo\u2018lishi kerak", "Printer sozlanishi kerak", "Ekran baland bo\u2018lishi kerak"],
      correctAnswer: "Tarmoq ulangan bo\u2018lishi kerak",
    },
    {
      questionText: "NAT qanday vazifani bajaradi?",
      options: ["IP manzilni o\u2018zgartiradi", "Grafikni siqadi", "Faylni shifrlaydi", "Video yozadi"],
      correctAnswer: "IP manzilni o\u2018zgartiradi",
    },
    {
      questionText: "Tarmoqda kim ma\u2019lumotlarni ruxsatsiz ko\u2018rishi mumkin?",
      options: ["Xaker", "Admin", "Printer", "Dastur"],
      correctAnswer: "Xaker",
    },
    {
      questionText: "Kommutator bilan marshrutizator orasidagi farq nimada?",
      options: ["Marshrutizator tarmoqni tashqi internetga ulaydi", "Ikkalasi bir xil", "Kommutator internetga ulanadi", "Ikkisi ham printer"],
      correctAnswer: "Marshrutizator tarmoqni tashqi internetga ulaydi",
    },
    {
      questionText: "Internetda ishlash uchun qanday dastur kerak?",
      options: ["Brauzer", "Antivirus", "PDF o\u2018quvchi", "Skayp"],
      correctAnswer: "Brauzer",
    },
    {
      questionText: "Tarmoq protokollari roli qanday?",
      options: ["Ma\u2019lumot almashinuvi qoidalarini belgilaydi", "Video ijro etadi", "Rasm yaratadi", "Fayl siqadi"],
      correctAnswer: "Ma\u2019lumot almashinuvi qoidalarini belgilaydi",
    },
    {
      questionText: "Fayl uzatishda xavfsizlikni nima oshiradi?",
      options: ["Shifrlash (encryption)", "Klaviatura", "Printer", "Kamera"],
      correctAnswer: "Shifrlash (encryption)",
    },
    {
      questionText: "Kompyuter tarmog\u2018ida eng asosiy manzillash usuli bu...?",
      options: ["IP manzillash", "Fayl nomlash", "Printer sozlash", "Port berish"],
      correctAnswer: "IP manzillash",
    },
    {
      questionText: "DHCP xizmatining vazifasi nima?",
      options: ["Avtomatik IP manzil berish", "Ekran o\u2018lchamini sozlash", "Video tahrirlash", "Fayl ochish"],
      correctAnswer: "Avtomatik IP manzil berish",
    },
    {
      questionText: "DNS nima uchun ishlatiladi?",
      options: ["Domen nomini IP manzilga aylantirish", "Fayl formatini aniqlash", "Rasmni yuklash", "Matn kiritish"],
      correctAnswer: "Domen nomini IP manzilga aylantirish",
    },
    {
      questionText: "Tarmoqda \"firewall\" nima vazifani bajaradi?",
      options: ["Xavfsizlikni ta'minlaydi", "Video yozadi", "Matn chiqaradi", "Rasm chizadi"],
      correctAnswer: "Xavfsizlikni ta'minlaydi",
    },
    {
      questionText: "TCP/IP to\u2018plamidagi TCP protokoli nimani ta\u2019minlaydi?",
      options: ["Ishonchli ma\u2019lumot uzatish", "Rasmlarni saqlash", "Grafik ishlash", "Ekran sozlash"],
      correctAnswer: "Ishonchli ma\u2019lumot uzatish",
    },
    {
      questionText: "Tarmoqda \"bandwidth\" nima?",
      options: ["Uzatish imkoniyati (kengligi)", "Kompyuter xotirasi", "Printer tezligi", "Ekran hajmi"],
      correctAnswer: "Uzatish imkoniyati (kengligi)",
    },
    {
      questionText: "Paketlarni kerakli manzilga yo\u2018naltiruvchi qurilma bu...?",
      options: ["Router", "Scanner", "Monitor", "Diskovod"],
      correctAnswer: "Router",
    },
    {
      questionText: "NAT nima qiladi?",
      options: ["Ichki IP\u2019ni tashqi IP\u2019ga o\u2018giradi", "Rasmni tahrirlaydi", "Matnni tarjima qiladi", "Faylni zip qiladi"],
      correctAnswer: "Ichki IP\u2019ni tashqi IP\u2019ga o\u2018giradi",
    },
    {
      questionText: "Subnet mask nima uchun kerak?",
      options: ["Tarmoq va xost qismini ajratish uchun", "Rasm hajmini kamaytirish uchun", "Audio sifatini oshirish uchun", "Fayl nomini berish uchun"],
      correctAnswer: "Tarmoq va xost qismini ajratish uchun",
    },
    {
      questionText: "LAN tarmog\u2018i qanday masofada ishlaydi?",
      options: ["Mahalliy, qisqa masofa", "Butun dunyo", "Faqat simsiz", "Faqat grafik"],
      correctAnswer: "Mahalliy, qisqa masofa",
    },
    {
      questionText: "VPN qanday foyda beradi?",
      options: ["Maxfiy aloqa va xavfsizlik", "Faylni saqlash", "Printer sozlash", "Ekranni kengaytirish"],
      correctAnswer: "Maxfiy aloqa va xavfsizlik",
    },
    {
      questionText: "Tarmoq xavfsizligining asosiy maqsadi nima?",
      options: ["Ma\u2019lumotni ruxsatsiz kirishdan himoya qilish", "Video uzatish", "Grafik tahrirlash", "Audio yozish"],
      correctAnswer: "Ma\u2019lumotni ruxsatsiz kirishdan himoya qilish",
    },
    {
      questionText: "Qo\u2018shni kompyuter bilan to\u2018g\u2018ridan-to\u2018g\u2018ri bog\u2018lanish nima deb ataladi?",
      options: ["Peer-to-peer", "Server-client", "Admin mode", "Print server"],
      correctAnswer: "Peer-to-peer",
    },
    {
      questionText: "Tarmoqda foydalanuvchi kirishini cheklash nima deb ataladi?",
      options: ["Autentifikatsiya", "Formatlash", "Klonlash", "Ulash"],
      correctAnswer: "Autentifikatsiya",
    },
    {
      questionText: "Tarmoq muammolarini aniqlashda foydalanuvchi nima qiladi?",
      options: ["Diagnostika qiladi", "O\u2018chiradi", "Chop etadi", "Formatlaydi"],
      correctAnswer: "Diagnostika qiladi",
    },
    {
      questionText: "Tarmoqda tezlik qanday o\u2018lchanadi?",
      options: ["bit/s yoki Mbps", "kg", "mm", "kV"],
      correctAnswer: "bit/s yoki Mbps",
    },
    {
      questionText: "Tarmoqdagi barcha qurilmalarni boshqaruvchi qurilma nima?",
      options: ["Switch", "Printer", "Modem", "Monitor"],
      correctAnswer: "Switch",
    },
    {
      questionText: "MAC manzil nimaga tegishli?",
      options: ["Tarmoq qurilmasining unikal manzili", "Fayl nomi", "Video kengaytma", "Audio format"],
      correctAnswer: "Tarmoq qurilmasining unikal manzili",
    },
    {
      questionText: "IP versiyalarning eng yangi turi qaysi?",
      options: ["IPv6", "IPv4", "IPX", "DNS"],
      correctAnswer: "IPv6",
    },
    {
      questionText: "DNS xatosi nima degani?",
      options: ["Sayt nomi IP ga aylantirilmayapti", "Video yuklanmadi", "Fayl o\u2018chdi", "Tarmoq ishlamoqda"],
      correctAnswer: "Sayt nomi IP ga aylantirilmayapti",
    },
    {
      questionText: "Faylni tarmoq orqali yuborishda nimaga e\u2019tibor beriladi?",
      options: ["Format va hajmga", "Ekran o\u2018lchamiga", "Klaviatura turiga", "Ranglarga"],
      correctAnswer: "Format va hajmga",
    },
    {
      questionText: "Tarmoqda signal kuchsizlansa nima qilish kerak?",
      options: ["Repeater o\u2018rnatish", "Printer almashtirish", "Klaviaturani tozalash", "Skanner ulash"],
      correctAnswer: "Repeater o\u2018rnatish",
    },
    {
      questionText: "Tarmoq tahlili uchun qanday dastur kerak?",
      options: ["Wireshark", "Word", "Excel", "Paint"],
      correctAnswer: "Wireshark",
    },
    {
      questionText: "Server nima?",
      options: ["Xizmat ko\u2018rsatuvchi kompyuter", "Rasmni chizuvchi qurilma", "Ekranni yorituvchi qurilma", "Audio kuchaytiruvchi qurilma"],
      correctAnswer: "Xizmat ko\u2018rsatuvchi kompyuter",
    },
    {
      questionText: "Kompyuter tarmog\u2018ida port 80 qanday protokolga tegishli?",
      options: ["HTTP", "FTP", "SSH", "TELNET"],
      correctAnswer: "HTTP",
    },
    {
      questionText: "Tarmoqdagi xatoliklar nima sababli yuz beradi?",
      options: ["Kabel yoki qurilma nosozligi", "Klaviatura tugmalari", "Video fayllar", "Matn yozuvi"],
      correctAnswer: "Kabel yoki qurilma nosozligi",
    },
    {
      questionText: "Kompyuter tarmog\u2018ida aloqa turi qanday bo\u2018lishi mumkin?",
      options: ["Simli va simsiz", "Faqat audio", "Faqat matnli", "Faqat vizual"],
      correctAnswer: "Simli va simsiz",
    },
    {
      questionText: "Web-saytlar qanday protokol orqali ishlaydi?",
      options: ["HTTP/HTTPS", "DOCX", "EXE", "AVI"],
      correctAnswer: "HTTP/HTTPS",
    },
    {
      questionText: "Faylni tarmoq orqali jo\u2018natishdan oldin nima qilinadi?",
      options: ["Siqiladi yoki shifrlanadi", "Chop etiladi", "Rang beriladi", "O\u2018chiriladi"],
      correctAnswer: "Siqiladi yoki shifrlanadi",
    },
    {
      questionText: "Server va mijoz munosabati qanday?",
      options: ["Server xizmat ko\u2018rsatadi, mijoz foydalanadi", "Mijoz xizmat ko\u2018rsatadi", "Ikkalasi teng huquqli", "Bir-biriga ulanmaydi"],
      correctAnswer: "Server xizmat ko\u2018rsatadi, mijoz foydalanadi",
    },
    {
      questionText: "IP manzillarning 192.168 bilan boshlanishi nimani bildiradi?",
      options: ["Mahalliy tarmoq manzili", "Tashqi IP manzili", "Video fayli", "DNS nomi"],
      correctAnswer: "Mahalliy tarmoq manzili",
    },
    {
      questionText: "Port 443 qanday protokol uchun?",
      options: ["HTTPS", "FTP", "POP3", "Telnet"],
      correctAnswer: "HTTPS",
    },
    {
      questionText: "Tarmoq qurilmalarini sozlash uchun nima kerak?",
      options: ["Admin panel yoki IP adres", "Grafik dastur", "Klaviatura", "Printer drayveri"],
      correctAnswer: "Admin panel yoki IP adres",
    },
    {
      questionText: "Tarmoqdagi xatolikni tahlil qilish uchun nima muhim?",
      options: ["Ping va traceroute", "Paint va Excel", "Word va PDF", "Kamera va Printer"],
      correctAnswer: "Ping va traceroute",
    },
    {
      questionText: "Har bir tarmoq qurilmasining MAC manzili...?",
      options: ["Unikal bo\u2018ladi", "Bir xil bo\u2018ladi", "Rangga qarab belgilanadi", "Ekran o\u2018lchamiga bog\u2018liq"],
      correctAnswer: "Unikal bo\u2018ladi",
    },
    {
      questionText: "IP manzilni avtomatik olmaslik holatida nima qilinadi?",
      options: ["Qo\u2018lda beriladi", "Kompyuterni o\u2018chiradi", "Faylni ochadi", "Printerga yuboradi"],
      correctAnswer: "Qo\u2018lda beriladi",
    },
    {
      questionText: "Tarmoqga ulanmagan kompyuter nima?",
      options: ["Mustaqil ishlaydi", "Faqat server bo\u2018ladi", "Avtomatik ulanadi", "Xatolik beradi"],
      correctAnswer: "Mustaqil ishlaydi",
    },
    {
      questionText: "Tarmoqni kuzatish protokoli qanday?",
      options: ["SNMP", "HTTP", "PDF", "JPG"],
      correctAnswer: "SNMP",
    },
    {
      questionText: "DNS-server orqali nima olinadi?",
      options: ["IP manzil", "Grafik rasm", "Printer drayveri", "Audio fayl"],
      correctAnswer: "IP manzil",
    },
    {
      questionText: "Tarmoqdagi ma\u2019lumotlarning xavfsizligi kim tomonidan boshqariladi?",
      options: ["Administrator", "Oddiy foydalanuvchi", "Printer", "Monitor"],
      correctAnswer: "Administrator",
    },
    {
      questionText: "Tarmoqda ping bu nima?",
      options: ["Tarmoqqa bog\u2018lanishni tekshirish", "Printerga yuborish", "Matn yozish", "Ekranni kengaytirish"],
      correctAnswer: "Tarmoqqa bog\u2018lanishni tekshirish",
    },
    {
      questionText: "Telnet bu...?",
      options: ["Masofaviy boshqaruv protokoli", "Audio fayli", "Grafik dastur", "Video format"],
      correctAnswer: "Masofaviy boshqaruv protokoli",
    },
    {
      questionText: "FTP nimani anglatadi?",
      options: ["Fayl uzatish protokoli", "Fayl tahrirlash", "Fayl o\u2018chirish", "Fayl chizish"],
      correctAnswer: "Fayl uzatish protokoli",
    },
    {
      questionText: "Tarmoqdagi eng asosiy xavf bu...?",
      options: ["Hujum (xakerlik)", "Matn noto\u2018g\u2018riligidir", "Ekran sifati", "Printer qog\u2018ozi"],
      correctAnswer: "Hujum (xakerlik)",
    },
    {
      questionText: "IP manzil 4 qismdan iborat bo\u2018lib...?",
      options: ["Nuqtalar bilan ajratiladi", "Vergullar bilan yoziladi", "Qavs bilan belgilanadi", "Chiziqlar bilan bo\u2018linadi"],
      correctAnswer: "Nuqtalar bilan ajratiladi",
    },
    {
      questionText: "Kompyuter tarmoqlarida portlar nima uchun kerak?",
      options: ["Protokollarni ajratish", "Video tahrirlash", "Fayl hajmini aniqlash", "Rasm yuklash"],
      correctAnswer: "Protokollarni ajratish",
    },
    {
      questionText: "Tarmoqda ma'lumot uzatish tezligi nima bilan o\u2018lchanadi?",
      options: ["Mbps yoki Gbps", "MB", "DPI", "GHz"],
      correctAnswer: "Mbps yoki Gbps",
    },
    {
      questionText: "Switch bu...?",
      options: ["Tarmoq qurilmalarini bog\u2018lovchi qurilma", "Printer turi", "Fayl turi", "Video karta"],
      correctAnswer: "Tarmoq qurilmalarini bog\u2018lovchi qurilma",
    },
    {
      questionText: "Router orqali nima amalga oshiriladi?",
      options: ["Tarmoqlararo bog\u2018lanish", "Audio yozuv", "Matn bosish", "Rasm tahrirlash"],
      correctAnswer: "Tarmoqlararo bog\u2018lanish",
    },
    {
      questionText: "Tarmoqdagi \"topologiya\" deganda nima tushuniladi?",
      options: ["Qurilmalar joylashuvi", "Fayl nomi", "Printer modeli", "Ekran turi"],
      correctAnswer: "Qurilmalar joylashuvi",
    },
    {
      questionText: "Kommutatsiyalashgan tarmoq deganda...?",
      options: ["Qurilmalar ulanishi yo\u2018llar orqali bo\u2018ladi", "Fayl matni o\u2018zgaradi", "Rasm fonini o\u2018zgartirish", "Matnni tarjima qilish"],
      correctAnswer: "Qurilmalar ulanishi yo\u2018llar orqali bo\u2018ladi",
    },
    {
      questionText: "Tarmoq xavfsizligini kuchaytirish uchun nima kerak?",
      options: ["Parol va shifrlash", "Printer o\u2018chirish", "Klaviatura almashtirish", "Rang sozlash"],
      correctAnswer: "Parol va shifrlash",
    },
    {
      questionText: "Tarmoqdagi kolliziyalar nimaga olib keladi?",
      options: ["Ma\u2019lumot to\u2018qnashuvi", "Matn noto\u2018g\u2018rili", "Ekran yoritilishi", "Fayl kengaytmasi"],
      correctAnswer: "Ma\u2019lumot to\u2018qnashuvi",
    },
    {
      questionText: "IPv6 ning uzunligi nechta bitdan iborat?",
      options: ["128 bit", "32 bit", "64 bit", "256 bit"],
      correctAnswer: "128 bit",
    },
    {
      questionText: "URL bu...?",
      options: ["Veb manzil ko\u2018rsatuvchi satr", "Rasm kengaytmasi", "Printer modeli", "Fayl formati"],
      correctAnswer: "Veb manzil ko\u2018rsatuvchi satr",
    },
    {
      questionText: "WWW nima degani?",
      options: ["World Wide Web", "Web With Word", "Windows Web World", "World Web Wide"],
      correctAnswer: "World Wide Web",
    },
    {
      questionText: "E-mail orqali yuborilgan xatlar qanday protokollar bilan ishlaydi?",
      options: ["SMTP, POP3", "HTTP, HTTPS", "DNS, DHCP", "FTP, SFTP"],
      correctAnswer: "SMTP, POP3",
    },
    {
      questionText: "NAT xizmatining asosiy foydasi nima?",
      options: ["IP manzillarni o\u2018zgartirib uzatish", "Fayl kengaytmasini o\u2018zgartirish", "Ekran rangini sozlash", "Video hajmini kamaytirish"],
      correctAnswer: "IP manzillarni o\u2018zgartirib uzatish",
    },
    {
      questionText: "Internetda ishlatiladigan asosiy protokol nima?",
      options: ["TCP/IP", "PDF", "AVI", "JPG"],
      correctAnswer: "TCP/IP",
    },
    {
      questionText: "DNS orqali nima amalga oshiriladi?",
      options: ["Domen nomi IPga aylantiriladi", "Rasmga matn qo\u2018shiladi", "Fayl formatlanadi", "Printer sozlanadi"],
      correctAnswer: "Domen nomi IPga aylantiriladi",
    },
    {
      questionText: "Kompyuter tarmog\u2018i qanday qurilmalardan tashkil topgan?",
      options: ["Kompyuter, switch, router", "Kamera, printer, disk", "Monitor, sichqoncha, klaviatura", "Flashka, disk, ekran"],
      correctAnswer: "Kompyuter, switch, router",
    },
    {
      questionText: "Tarmoqda maxfiylik nima orqali ta\u2019minlanadi?",
      options: ["Shifrlash (encryption)", "Rang o\u2018zgarishi", "Ekran qorayishi", "Format o\u2018zgartirish"],
      correctAnswer: "Shifrlash (encryption)",
    },
    {
      questionText: "Server doimo qanday holatda bo\u2018ladi?",
      options: ["Faol (ishlaydigan)", "Kutishda", "O\u2018chirilgan", "Ulangan emas"],
      correctAnswer: "Faol (ishlaydigan)",
    },
    {
      questionText: "Tarmoqda foydalanuvchilarni kuzatish kim tomonidan amalga oshiriladi?",
      options: ["Administrator", "Klaviatura", "Printer", "Foydalanuvchi o\u2018zi"],
      correctAnswer: "Administrator",
    },
  ],
};
