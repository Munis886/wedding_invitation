/* =========================================================================
   TO'Y TAKLIFNOMASI SOZLAMALARI (WEDDING INVITATION CONFIG)
   -------------------------------------------------------------------------
   Saytdagi BARCHA matn, rasm, musiqa va manzilni shu yerda o'zgartirasiz.
   Boshqa fayllarni (HTML/CSS/JS) ochish shart emas.
   ========================================================================= */

window.weddingConfig = {

  /* ---------- KELIN-KUYOV ISMLARI ---------- */
  groomName: "Munisbek",
  brideName: "Hosilaxon",

  /* ---------- SANA VA VAQT ----------
     Countdown (kun sanoq) shu sanagacha ishlaydi.
     Format: "YYYY-MM-DDTHH:MM:SS"  (24 soatlik vaqt) */
  weddingDate: "2026-08-16T19:00:00",

  /* Bosh sahifada ko'rinadigan sana/vaqt matni (istalgan formatda yozishingiz mumkin) */
  displayDate: "16-avgust, 2026-yil",
  displayTime: "19:00",
  displayWeekday: "Yakshanba",

  /* ---------- TAKLIF MATNI ---------- */
  inviteTitle: "Bizning to'yimizga",
  inviteSubtitle: "Marhamat qilib tashrif buyurishingizni so'raymiz",
  welcomeMessage:
    "Hurmatli Hamkasblar! Sizni oilamizdagi quvonchli voqea — Munisbek hamda Hosilaxonlarning nikoh toʻyi munosabati bilan Nikoh toʻyimizga taklif etaman.", // "Hayotimizning eng baxtli kunida yonimizda bo'lishingizni, quvonchimizga sherik bo'lishingizni astoyidil xohlaymiz.",
  parentsMessage: "",

  /* ---------- TO'YXONA / MANZIL ---------- */
  venueName: "\"Tagan guzari\" to'yxonasi",
  venueAddress: "Yangiariq tumani, Tagan qishlog'i, Yangi hayot ko'chasi, 45-uy",

  /* Google Xarita manzili qanday olinadi:
     1) Google Maps'da joyni toping -> "Share" -> "Embed a map" -> HTML kodidan
        src="..." ichidagi havolani shu yerga qo'ying (mapEmbedUrl).
     2) "Yo'nalish olish" tugmasi uchun oddiy Google Maps havolasini
        mapDirectionsUrl ga qo'ying (masalan, joy nomini qidiruv linki). */
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19978.954700040988!2d60.6632662330078!3d41.413872899930574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfbf87351c141b%3A0x4c60c87ca36cebb3!2sTagan%20guzari%20(To'yxona)!5e1!3m2!1sru!2s!4v1785086722606!5m2!1sru!2s",
  mapDirectionsUrl: "https://maps.app.goo.gl/uibforLzsSMscn3D7",

  /* ---------- RASMLAR ----------
     Rasmlaringizni "assets/images/" papkasiga qo'ying va nomini shu yerga yozing.
     Masalan: heroImage: "assets/images/hero.jpg" */
  heroImage: "assets/images/hero.jpg",
  coupleImage: "assets/images/couple.jpg",

  /* Galereya uchun istalgancha rasm qo'shishingiz mumkin (massivga qator qo'shib) */
  gallery: [
    "assets/images/rasm-1.jpg",
    "assets/images/rasm-2.jpg",
    "assets/images/rasm-3.jpg",
    "assets/images/rasm-4.jpg"
  ],

  /* ---------- MUSIQA ----------
     Fon musiqasini "assets/music/" papkasiga qo'ying (mp3 format tavsiya etiladi)
     va nomini shu yerga yozing. Masalan: "assets/music/song.mp3" */
  musicFile: "assets/music/song.mp3",
  musicAutoplay: true,

  /* ---------- YAKUNIY QISM ---------- */
  footerMessage: "Sizni kutamiz!",
  footerNames: "Munisbek & Hosilaxon"
};
