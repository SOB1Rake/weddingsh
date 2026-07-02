/* ═══════════════════════════════════════════════
   CONFIG — edit these values freely
   ═══════════════════════════════════════════════ */
var CONFIG = {
  googleMapsLink: "https://maps.app.goo.gl/LFzJGPVzSw1zjfKZ6",
  yandexMapsLink:
    "https://yandex.uz/maps/?ll=69.260930,41.279426&pt=69.260930,41.279426&z=17&l=map",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1499.1701941959768!2d69.26008408403156!3d41.27969575673417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a9438721fc7%3A0xef64b91e3caf8304!2zWWFra2EgU2Fyb3kgKCDQkdCw0L3QutC10YLQvdGL0Lkg0LfQsNC7INCv0LrQutCw0YHQsNGA0LDQuSk!5e0!3m2!1sen!2s!4v1782808646349!5m2!1sen!2s",
  yandexMapsEmbed:
    "https://yandex.uz/map-widget/v1/?ll=69.260930%2C41.279426&z=17",
  youtubeVideoId: "lNtZ7FCn5EU",
};
/* ═══════════════════════════════════════════════ */

/* ── WEDDING DATE ── */
var weddingDate = new Date("2026-07-18T19:00:00");

/* ── TRANSLATIONS ── */
var currentLang = "uz";

var texts = {
  uz: {
  //  "hero-main-names": 'Suhrobjon<br><span class="amp2">&</span><br>Habibaxon',
    "venue-name": "Yakka Saroy to'yxonasi",
    "cvr-top": "SIZGA TAKLIFNOMA KELDI",
    "cvr-translation": '"U ularning qalblarini birlashtirdi"',
    "unlock-label": "OCHISH",
    "quran-tr": "«U ularning qalblarini birlashtirdi»",
    "invite-text":
      'Qadrli azizlarimiz! <br><span style="font-size: 90px;">Biz <br></span>sizlarni to\u2018yimizga taklif etishdan juda xursandmiz<br>',
    "lbl-details": "TAFSILOTLAR",
    "lbl-date": "SANA",
    "lbl-time": "VAQT",
    "lbl-evening": "Kechki ziyofat",
    "lbl-countdown": "TO'YGACHA QOLGAN VAQT",
    "unit-days": "KUN",
    "unit-hours": "SOAT",
    "unit-minutes": "DAQIQA",
    "unit-seconds": "SONIYA",
    "lbl-venue-label": "MANZIL",
    "venue-addr": "Toshkent shahri",
    "lbl-google": "GOOGLE MAPS",
    "lbl-yandex": "YANDEX MAPS",
    "lbl-map-google": "Google Maps",
    "lbl-map-yandex": "Yandex Maps",
    "footer-main": "SIZNING ISHTIROKINGIZ",
    "footer-sub": "Biz uchun eng muhim sovg'a!",
    weekdays: ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"],
    months: [
      "YANVAR",
      "FEVRAL",
      "MART",
      "APREL",
      "MAY",
      "IYUN",
      "IYUL",
      "AVGUST",
      "SENTYABR",
      "OKTYABR",
      "NOYABR",
      "DEKABR",
    ],
  },
  ru: {
  //  "hero-main-names": 'Сухробжон<br><span class="amp2">&</span><br>Хабибахон',
    "venue-name": "Банкетный зал «Якка Сарой»",
    "cvr-top": "ВАМ ПРИШЛО ПРИГЛАШЕНИЕ",
    "cvr-translation": "«Он соединил их сердца»",
    "unlock-label": "ОТКРЫТЬ",
    "quran-tr": "«И Он соединил их сердца»",
    "invite-text":
      'Дорогие гости! <br><span style="font-size: 90px;">Мы <br></span>с радостью приглашаем вас на наше торжество<br>',
    "lbl-details": "ДЕТАЛИ",
    "lbl-date": "ДАТА",
    "lbl-time": "ВРЕМЯ",
    "lbl-evening": "Вечернее торжество",
    "lbl-countdown": "ДО СВАДЬБЫ ОСТАЛОСЬ",
    "unit-days": "ДНЕЙ",
    "unit-hours": "ЧАС",
    "unit-minutes": "МИН",
    "unit-seconds": "СЕК",
    "lbl-venue-label": "МЕСТО ПРОВЕДЕНИЯ",
    "venue-addr": "г. Ташкент",
    "lbl-google": "GOOGLE MAPS",
    "lbl-yandex": "ЯНДЕКС КАРТЫ",
    "lbl-map-google": "Google Maps",
    "lbl-map-yandex": "Яндекс Карты",
    "footer-main": "ВАШЕ ПРИСУТСТВИЕ",
    "footer-sub": "Лучший подарок для нас!",
    weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    months: [
      "ЯНВАРЬ",
      "ФЕВРАЛЬ",
      "МАРТ",
      "АПРЕЛЬ",
      "МАЙ",
      "ИЮНЬ",
      "ИЮЛЬ",
      "АВГУСТ",
      "СЕНТЯБРЬ",
      "ОКТЯБРЬ",
      "НОЯБРЬ",
      "ДЕКАБРЬ",
    ],
  },
  en: {
  //  "hero-main-names": 'Suhrobjon<br><span class="amp2">&</span><br>Habibaxon',
    "venue-name": "Yakka Saroy Wedding Hall",
    "cvr-top": "YOU HAVE AN INVITATION",
    "cvr-translation": '"And He united their hearts"',
    "unlock-label": "SWIPE",
    "quran-tr": '"And He united their hearts"',
    "invite-text":
      'Dear guests! <br><span style="font-size: 90px;">We <br></span>are delighted to invite you to our wedding<br>',
    "lbl-details": "DETAILS",
    "lbl-date": "DATE",
    "lbl-time": "TIME",
    "lbl-evening": "Evening celebration",
    "lbl-countdown": "COUNTDOWN TO THE WEDDING",
    "unit-days": "DAYS",
    "unit-hours": "HRS",
    "unit-minutes": "MIN",
    "unit-seconds": "SEC",
    "lbl-venue-label": "VENUE",
    "venue-addr": "Tashkent city",
    "lbl-google": "GOOGLE MAPS",
    "lbl-yandex": "YANDEX MAPS",
    "lbl-map-google": "Google Maps",
    "lbl-map-yandex": "Yandex Maps",
    "footer-main": "YOUR PRESENCE",
    "footer-sub": "Is the greatest gift for us!",
    weekdays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    months: [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ],
  },
};

function setLang(lang) {
  if (!texts[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.classList.toggle("active", b.textContent.trim().toLowerCase() === lang);
  });

  var t = texts[lang];
  // for (var id in t) {
  //   if (id === "weekdays" || id === "months") continue;
  //   var el = document.getElementById(id);
  //   if (el) el.innerHTML = t[id];
  // }

  for (var id in t) {
  if (id === "weekdays" || id === "months") continue;

  var el = document.getElementById(id);
  if (el) el.innerHTML = t[id];
}

  renderWeekdays(lang);
  generateCalendar();

  var gBtn = document.getElementById("google-map-btn");
  var yBtn = document.getElementById("yandex-map-btn");
  if (gBtn) gBtn.href = CONFIG.googleMapsLink;
  if (yBtn) yBtn.href = CONFIG.yandexMapsLink;
}

function renderWeekdays(lang) {
  var wrap = document.getElementById("calendar-weekdays");
  if (!wrap) return;
  wrap.innerHTML = "";
  texts[lang].weekdays.forEach(function (d) {
    var div = document.createElement("div");
    div.textContent = d;
    wrap.appendChild(div);
  });
}

/* ── COUNTDOWN ── */
function updateCountdown() {
  var now = new Date();
  var diff = weddingDate - now;
  if (diff <= 0) return;

  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0",
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0",
  );
}

/* ── CALENDAR ── */
function generateCalendar() {
  var year = weddingDate.getFullYear();
  var month = weddingDate.getMonth();
  var selectedDay = weddingDate.getDate();

  document.getElementById("calendar-title").innerText =
    texts[currentLang].months[month] + " " + year;

  var grid = document.getElementById("calendar-grid");
  grid.innerHTML = "";

  var firstDay = new Date(year, month, 1).getDay();
  firstDay = firstDay === 0 ? 6 : firstDay - 1;

  var daysInMonth = new Date(year, month + 1, 0).getDate();

  for (var i = 0; i < firstDay; i++) {
    grid.appendChild(document.createElement("div"));
  }

  for (var day = 1; day <= daysInMonth; day++) {
    var cell = document.createElement("div");
    if (day === selectedDay) cell.classList.add("marked");
    cell.textContent = day;
    grid.appendChild(cell);
  }
}

/* ── MUSIC ── */
var audio;
var playing = false;
function toggleMusic() {
  var icon = document.getElementById("musicIcon");
  var wave = document.getElementById("mwave");
  var status = document.getElementById("music-status");
  if (!audio) audio = document.getElementById("bgMusic");
  if (playing) {
    audio.pause();
    icon.className = "ti ti-player-play";
    wave.classList.remove("playing");
    status.textContent = "";
    playing = false;
  } else {
    audio.play();
    icon.className = "ti ti-player-pause";
    wave.classList.add("playing");
    status.textContent = "";
    playing = true;
  }
}

/* ── UNLOCK SLIDER ── */
var wrap, thumb, fill, track, lockIcon;
var dragging = false,
  startX = 0,
  currentX = 0;

function maxX() {
  return wrap.offsetWidth - thumb.offsetWidth - 8;
}
function getX(e) {
  return e.touches ? e.touches[0].clientX : e.clientX;
}

function initSlider() {
  wrap = document.getElementById("unlockWrap");
  thumb = document.getElementById("unlockThumb");
  fill = document.getElementById("unlockFill");
  track = document.getElementById("unlockTrack");
  lockIcon = document.getElementById("lockIcon");

  thumb.addEventListener("mousedown", function (e) {
    dragging = true;
    startX = getX(e) - currentX;
    thumb.style.cursor = "grabbing";
    track.style.opacity = "0";
  });
  thumb.addEventListener(
    "touchstart",
    function (e) {
      dragging = true;
      startX = getX(e) - currentX;
      track.style.opacity = "0";
    },
    { passive: true },
  );

  document.addEventListener("mousemove", onDrag);
  document.addEventListener("touchmove", onDrag, { passive: false });
  document.addEventListener("mouseup", snapBack);
  document.addEventListener("touchend", snapBack);
}

function onDrag(e) {
  if (!dragging) return;
  if (e.cancelable) e.preventDefault();
  var x = Math.max(0, Math.min(getX(e) - startX, maxX()));
  currentX = x;
  thumb.style.left = 4 + x + "px";
  fill.style.width = 56 + x + "px";
  lockIcon.className = x / maxX() > 0.5 ? "ti ti-lock-open" : "ti ti-lock";
  if (x / maxX() >= 0.92) unlock();
}

function snapBack() {
  if (!dragging) return;
  dragging = false;
  thumb.style.cursor = "grab";
  if (currentX / maxX() < 0.92) {
    currentX = 0;
    thumb.style.left = "4px";
    fill.style.width = "56px";
    track.style.opacity = "1";
    lockIcon.className = "ti ti-lock";
  }
}

function unlock() {
  dragging = false;
  var cover = document.getElementById("coverPage");
  var main = document.getElementById("mainPage");
  cover.classList.add("hide");
  setTimeout(function () {
    cover.style.display = "none";
    main.style.display = "flex";
    requestAnimationFrame(function () {
      main.classList.add("show");
    });
    injectMaps();
    setTimeout(function () {
      audio = document.getElementById("bgMusic");
      audio.play();
      document.getElementById("musicIcon").className = "ti ti-player-pause";
      document.getElementById("mwave").classList.add("playing");
      document.getElementById("music-status").textContent = "";
      playing = true;
    }, 800);
  }, 600);
}

/* ── MAP EMBEDS (injected lazily on unlock) ── */
function injectMaps() {
  var gWrap = document.getElementById("google-embed-wrap");
  var yWrap = document.getElementById("yandex-embed-wrap");
  if (gWrap && !gWrap.querySelector("iframe")) {
    var gf = document.createElement("iframe");
    gf.src = CONFIG.googleMapsEmbed;
    gf.allowFullscreen = true;
    gf.loading = "lazy";
    gWrap.appendChild(gf);
  }
  if (yWrap && !yWrap.querySelector("iframe")) {
    var yf = document.createElement("iframe");
    yf.src = CONFIG.yandexMapsEmbed;
    yf.allowFullscreen = true;
    yf.loading = "lazy";
    yWrap.appendChild(yf);
  }
}

/* ── INIT ── */
document.addEventListener("DOMContentLoaded", function () {
  initSlider();

  updateCountdown();
  setInterval(updateCountdown, 1000);

  renderWeekdays(currentLang);
  generateCalendar();

  var gBtn = document.getElementById("google-map-btn");
  var yBtn = document.getElementById("yandex-map-btn");
  if (gBtn) gBtn.href = CONFIG.googleMapsLink;
  if (yBtn) yBtn.href = CONFIG.yandexMapsLink;
});
