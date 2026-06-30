/* ═══════════════════════════════════════════════
   CONFIG — edit these values freely
   ═══════════════════════════════════════════════ */
var CONFIG = {
  /* Google Maps share link (maps.app.goo.gl or maps.google.com) */
  googleMapsLink: "https://maps.app.goo.gl/LFzJGPVzSw1zjfKZ6",

  /* Yandex Maps link — replace with your own from yandex.uz/maps */
  yandexMapsLink: "https://yandex.uz/maps/?ll=69.260930,41.279426&pt=69.260930,41.279426&z=17&l=map",

  /* Google Maps embed src — get from Google Maps > Share > Embed a map */
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1499.1701941959768!2d69.26008408403156!3d41.27969575673417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a9438721fc7%3A0xef64b91e3caf8304!2zWWFra2EgU2Fyb3kgKCDQkdCw0L3QutC10YLQvdGL0Lkg0LfQsNC7INCv0LrQutCw0YHQsNGA0LDQuSk!5e0!3m2!1sen!2s!4v1782808646349!5m2!1sen!2s",

  /* Yandex Maps embed src — get from yandex.uz/maps > Share > iframe */
  yandexMapsEmbed: "https://yandex.uz/map-widget/v1/?ll=69.260930%2C41.279426&z=17",

  /* YouTube video ID (from youtu.be/VIDEO_ID) */
 youtubeVideoId: "lNtZ7FCn5EU"
};
/* ═══════════════════════════════════════════════ */


/* ── TRANSLATIONS ── */
var texts = {
  uz: {
    'quran-tr':   '«U ularning qalblarini birlashtirdi»',
    'invite-text':'Aziz mehmonlarimiz,<br>Sizi hayotimizning eng baxtli kuniga —<br><em style="color:#c8aa64">to\'y bazm</em>imizga taklif etamiz.',
    'lbl-details':'TAFSILOTLAR',
    'lbl-date':   'SANA',
    'lbl-time':   'VAQT',
    'lbl-evening':'Kechki ziyofat',
    'lbl-program':'DASTUR',
    't1':         'Mehmonlar kutib olinishi',
    't2':         'Nikoh marosimi',
    't3':         'To\'y ziyofati',
    't4':         'Yakunlanish',
    'lbl-venue-label':'MANZIL',
    'venue-addr': 'Toshkent shahri',
    'lbl-google': 'GOOGLE MAPS',
    'lbl-yandex': 'YANDEX MAPS',
    'lbl-map-google': 'Google Maps',
    'lbl-map-yandex': 'Yandex Maps',
    'footer-text':'SIZNING ISHTIROKINIZ — ENG QADRLI SOVG\'A'
  },
  ru: {
    'quran-tr':   '«И Он соединил их сердца»',
    'invite-text':'Дорогие гости,<br>Мы с радостью приглашаем вас на<br>наш <em style="color:#c8aa64">свадебный вечер</em>.',
    'lbl-details':'ДЕТАЛИ',
    'lbl-date':   'ДАТА',
    'lbl-time':   'ВРЕМЯ',
    'lbl-evening':'Вечернее торжество',
    'lbl-program':'ПРОГРАММА',
    't1':         'Встреча гостей',
    't2':         'Свадебная церемония',
    't3':         'Торжественный банкет',
    't4':         'Завершение вечера',
    'lbl-venue-label':'МЕСТО ПРОВЕДЕНИЯ',
    'venue-addr': 'г. Ташкент',
    'lbl-google': 'GOOGLE MAPS',
    'lbl-yandex': 'ЯНДЕКС КАРТЫ',
    'lbl-map-google': 'Google Maps',
    'lbl-map-yandex': 'Яндекс Карты',
    'footer-text':'ВАШЕ ПРИСУТСТВИЕ — ЛУЧШИЙ ПОДАРОК ДЛЯ НАС'
  },
  en: {
    'quran-tr':   '"And He united their hearts"',
    'invite-text':'Dear guests,<br>We joyfully invite you to celebrate<br>our <em style="color:#c8aa64">wedding evening</em> with us.',
    'lbl-details':'DETAILS',
    'lbl-date':   'DATE',
    'lbl-time':   'TIME',
    'lbl-evening':'Evening celebration',
    'lbl-program':'SCHEDULE',
    't1':         'Guest reception',
    't2':         'Wedding ceremony',
    't3':         'Wedding banquet',
    't4':         'End of evening',
    'lbl-venue-label':'VENUE',
    'venue-addr': 'Tashkent city',
    'lbl-google': 'GOOGLE MAPS',
    'lbl-yandex': 'YANDEX MAPS',
    'lbl-map-google': 'Google Maps',
    'lbl-map-yandex': 'Yandex Maps',
    'footer-text':'YOUR PRESENCE IS OUR GREATEST GIFT'
  }
};

function setLang(lang) {
  document.querySelectorAll('.lang-btn').forEach(function(b) {
    b.classList.toggle('active', b.textContent.toLowerCase() === lang);
  });
  var t = texts[lang];
  for (var id in t) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = t[id];
  }
  /* update map button hrefs */
  var gBtn = document.getElementById('google-map-btn');
  var yBtn = document.getElementById('yandex-map-btn');
  if (gBtn) gBtn.href = CONFIG.googleMapsLink;
  if (yBtn) yBtn.href = CONFIG.yandexMapsLink;
}


var audio;
var playing=false;
function toggleMusic(){var icon=document.getElementById("musicIcon");var wave=document.getElementById("mwave");var status=document.getElementById("music-status");if(!audio)audio=document.getElementById("bgMusic");if(playing){audio.pause();icon.className='ti ti-player-play';wave.classList.remove('playing');status.textContent="BOSING — O'YNATING";playing=false;}else{audio.play();icon.className='ti ti-player-pause';wave.classList.add('playing');status.textContent='IJRO ETILMOQDA...';playing=true;}}
/* ── UNLOCK SLIDER ── */
var wrap, thumb, fill, track, lockIcon;
var dragging = false, startX = 0, currentX = 0;

function maxX() { return wrap.offsetWidth - thumb.offsetWidth - 8; }
function getX(e) { return e.touches ? e.touches[0].clientX : e.clientX; }

function initSlider() {
  wrap     = document.getElementById('unlockWrap');
  thumb    = document.getElementById('unlockThumb');
  fill     = document.getElementById('unlockFill');
  track    = document.getElementById('unlockTrack');
  lockIcon = document.getElementById('lockIcon');

  thumb.addEventListener('mousedown', function(e) {
    dragging = true; startX = getX(e) - currentX;
    thumb.style.cursor = 'grabbing'; track.style.opacity = '0';
  });
  thumb.addEventListener('touchstart', function(e) {
    dragging = true; startX = getX(e) - currentX; track.style.opacity = '0';
  }, { passive: true });

  document.addEventListener('mousemove', onDrag);
  document.addEventListener('touchmove', onDrag, { passive: false });
  document.addEventListener('mouseup', snapBack);
  document.addEventListener('touchend', snapBack);
}

function onDrag(e) {
  if (!dragging) return;
  if (e.cancelable) e.preventDefault();
  var x = Math.max(0, Math.min(getX(e) - startX, maxX()));
  currentX = x;
  thumb.style.left = (4 + x) + 'px';
  fill.style.width = (56 + x) + 'px';
  lockIcon.className = (x / maxX() > 0.5) ? 'ti ti-lock-open' : 'ti ti-lock';
  if (x / maxX() >= 0.92) unlock();
}

function snapBack() {
  if (!dragging) return;
  dragging = false;
  thumb.style.cursor = 'grab';
  if (currentX / maxX() < 0.92) {
    currentX = 0;
    thumb.style.left = '4px';
    fill.style.width = '56px';
    track.style.opacity = '1';
    lockIcon.className = 'ti ti-lock';
  }
}

function unlock() {
  dragging = false;
  var cover = document.getElementById('coverPage');
  var main  = document.getElementById('mainPage');
  cover.classList.add('hide');
  setTimeout(function() {
    cover.style.display = 'none';
    main.style.display  = 'flex';
    requestAnimationFrame(function() { main.classList.add('show'); });
    /* inject map embeds now (lazy) */
    injectMaps();
    /* auto-start music */
    setTimeout(function(){audio=document.getElementById('bgMusic');audio.play();document.getElementById('musicIcon').className='ti ti-player-pause';document.getElementById('mwave').classList.add('playing');document.getElementById('music-status').textContent='IJRO ETILMOQDA...';playing=true;},800);
  }, 600);
}


/* ── MAP EMBEDS (injected lazily on unlock) ── */
function injectMaps() {
  var gWrap = document.getElementById('google-embed-wrap');
  var yWrap = document.getElementById('yandex-embed-wrap');
  if (gWrap && !gWrap.querySelector('iframe')) {
    var gf = document.createElement('iframe');
    gf.src = CONFIG.googleMapsEmbed;
    gf.allowFullscreen = true;
    gf.loading = 'lazy';
    gWrap.appendChild(gf);
  }
  if (yWrap && !yWrap.querySelector('iframe')) {
    var yf = document.createElement('iframe');
    yf.src = CONFIG.yandexMapsEmbed;
    yf.allowFullscreen = true;
    yf.loading = 'lazy';
    yWrap.appendChild(yf);
  }
}


/* ── INIT ── */
document.addEventListener('DOMContentLoaded', function() {
  initSlider();
  /* set map button hrefs from config */
  var gBtn = document.getElementById('google-map-btn');
  var yBtn = document.getElementById('yandex-map-btn');
  if (gBtn) gBtn.href = CONFIG.googleMapsLink;
  if (yBtn) yBtn.href = CONFIG.yandexMapsLink;
});
