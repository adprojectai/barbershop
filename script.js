/* P:K Men's Salon — i18n, nav, reveal, open/closed status */
(function () {
  "use strict";

  /* ---------------- i18n dictionary ---------------- */
  var dict = {
    ko: {
      skip: "본문 바로가기",
      nav_about: "소개", nav_services: "메뉴 · 가격", nav_space: "공간",
      nav_team: "바버", nav_reviews: "후기", nav_visit: "오시는 길", nav_book: "예약하기",
      hero_badge: "NEW LOCATION 2026 · 서해스카이팰리스 2층으로 이전",
      hero_title: "위스키 바처럼 머무는,<br>클래식 바버샵",
      hero_sub: "여주 천송동 남성 헤어 전문. 한 분 한 분에게 어울리는 스타일을 찾아드립니다. 100% 예약제.",
      cta_call: "전화 예약", cta_book: "네이버 예약",
      about_eyebrow: "About", about_title: "당신에게 어울리는 커트를 찾는 곳",
      about_p1: "피케이맨즈살롱은 2021년 여주에 문을 연 남성 전문 헤어샵입니다. 유행보다 얼굴형과 모질에 맞춘 스타일을 먼저 살펴봅니다.",
      about_p2: "2026년 여름, 서해스카이팰리스 2층의 새 공간으로 이전했습니다. 바 라운지를 닮은 인테리어에서, 여유롭게 커트를 즐겨 보세요.",
      stat1_lbl: "오픈", stat2_lbl: "카카오맵 평점", stat3_lbl: "예약제",
      services_eyebrow: "Menu", services_title: "시술 메뉴 &amp; 가격",
      svc_cut: "커트", svc_cut_note: "상담 후 두상과 모질에 맞춘 커트",
      svc_down: "다운펌", svc_down_note: "부위별 추가 요금 발생",
      svc_perm: "기본펌", svc_perm_note: "특수펌 · 다운펌 추가 시 비용 발생",
      svc_clinic: "두피 클리닉", svc_clinic_note: "약제에 따라 추가 요금 발생",
      styles_title: "많이 찾는 스타일",
      st_guile: "가일컷", st_creed: "크리드컷", st_pomade: "포마드",
      st_down: "다운펌", st_spa: "헤어 스파", st_kids: "키즈 커트",
      price_unit: "단위: 원 (KRW)", price_note: "가격은 2024년 매장 가격표 기준이며 변동될 수 있습니다.",
      space_eyebrow: "Space", space_title: "새로운 공간",
      space_sub: "여주서해스카이팰리스 2층 204호. 바버샵이자, 잠시 쉬어 가는 라운지.",
      g_bar: "바 라운지", g_stations: "원목 경대", g_lounge: "샹들리에 라운지",
      g_door: "204호 입구", g_facade: "102동 외관", g_products: "스타일링 제품",
      team_eyebrow: "Barbers", team_title: "바버",
      pio_name: "피오 원장", pio_bio: "호주 바버샵 출신. 모든 커트는 대화에서 시작합니다.",
      es_name: "은성 실장", es_bio: "깔끔한 커트와 편안한 응대.",
      team_note: "예약 시 원하는 바버를 선택할 수 있어요.",
      reviews_eyebrow: "Reviews", reviews_title: "손님들의 이야기",
      r1: "여주에서 맞는 곳을 못 찾아 이천까지 다니다가, 여기서 정착했어요.",
      r2: "제게 어울리는 스타일을 먼저 찾아 주셔서 늘 만족해요.",
      r3: "들어서는 순간 외국 영화 속 바버샵에 온 느낌.",
      r4: "커트가 끝나면 바로 다음 예약부터 잡게 돼요.",
      reviews_src: "네이버 블로그 방문 후기를 요약했습니다 · 카카오맵 평점 5.0",
      visit_eyebrow: "Visit", visit_title: "오시는 길",
      addr_label: "주소",
      addr_val: "경기 여주시 여양로233번길 5-26<br>여주서해스카이팰리스 2층 204호 (천송동)",
      addr_hint: "102동 엘리베이터를 타고 2층으로 올라오세요.",
      hours_label: "영업시간", hours_val: "매일 10:00 – 20:30",
      hours_hint: "100% 예약제로 운영됩니다.",
      phone_label: "전화",
      amen_parking: "무료 주차", amen_wifi: "무선 인터넷",
      amen_card: "여주사랑카드 가능", amen_elev: "엘리베이터",
      moved_note: "2026년 여름, 여주 KCC스위첸 상가(강변북로 2)에서 이전했습니다.",
      maps_label: "지도 앱에서 열기",
      footer_note: "이 사이트는 학습용 프로젝트이며 피케이맨즈살롱의 공식 웹사이트가 아닙니다.",
      bar_call: "전화", bar_book: "예약",
      open_now: "영업 중", closed_now: "영업 종료"
    },
    en: {
      skip: "Skip to content",
      nav_about: "About", nav_services: "Menu &amp; Prices", nav_space: "Space",
      nav_team: "Barbers", nav_reviews: "Reviews", nav_visit: "Visit", nav_book: "Book Now",
      hero_badge: "NEW LOCATION 2026 · Now on the 2nd floor of Seohae Sky Palace",
      hero_title: "A classic barbershop<br>that feels like a whiskey bar",
      hero_sub: "Men's hair specialists in Cheonsong-dong, Yeoju. We find the cut that actually suits you. By appointment only.",
      cta_call: "Call to Book", cta_book: "Book on Naver",
      about_eyebrow: "About", about_title: "Where the right cut starts with a conversation",
      about_p1: "P:K Men's Salon opened in Yeoju in 2021. We look at your face shape and hair texture first — trends come second.",
      about_p2: "In summer 2026 we moved into a new space on the 2nd floor of Seohae Sky Palace — an interior that feels more like a bar lounge than a barbershop.",
      stat1_lbl: "Opened", stat2_lbl: "Kakao Map rating", stat3_lbl: "Appointment only",
      services_eyebrow: "Menu", services_title: "Services &amp; Pricing",
      svc_cut: "Cut", svc_cut_note: "Tailored to your head shape and hair texture after a consultation",
      svc_down: "Down-perm", svc_down_note: "Extra charge depending on the area treated",
      svc_perm: "Basic perm", svc_perm_note: "Specialty perms and down-perm add-ons cost extra",
      svc_clinic: "Scalp clinic", svc_clinic_note: "Extra charge depending on treatment used",
      styles_title: "Popular styles",
      st_guile: "Guile Cut", st_creed: "Creed Cut", st_pomade: "Pomade Style",
      st_down: "Down-perm", st_spa: "Hair Spa", st_kids: "Kids' Cut",
      price_unit: "Prices in KRW", price_note: "Based on the 2026 in-store price list; may change.",
      space_eyebrow: "Space", space_title: "The New Space",
      space_sub: "Unit 204, 2F, Seohae Sky Palace, Yeoju — part barbershop, part lounge to unwind in.",
      g_bar: "Bar lounge", g_stations: "Wooden stations", g_lounge: "Chandelier lounge",
      g_door: "Entrance, Unit 204", g_facade: "Building 102 facade", g_products: "Styling products",
      team_eyebrow: "Barbers", team_title: "Our Barbers",
      pio_name: "Pio, Director", pio_bio: "Trained at a barbershop in Australia. Every cut starts with a conversation.",
      es_name: "Eunseong, Manager", es_bio: "Clean cuts and a relaxed atmosphere.",
      team_note: "You can request a specific barber when you book.",
      reviews_eyebrow: "Reviews", reviews_title: "What Guests Say",
      r1: "Couldn't find the right place in Yeoju and used to drive to Icheon — I've settled here for good.",
      r2: "They always find the style that actually suits me first.",
      r3: "Walking in feels like stepping into a barbershop from a foreign film.",
      r4: "The moment my cut is done, I'm already booking the next one.",
      reviews_src: "Summarized from Naver blog visit reviews · Kakao Map rating 5.0",
      visit_eyebrow: "Visit", visit_title: "How to Find Us",
      addr_label: "Address",
      addr_val: "5-26 Yeoyang-ro 233beon-gil, Yeoju-si<br>Seohae Sky Palace, 2F, Unit 204 (Cheonsong-dong)",
      addr_hint: "Take the elevator in Building 102 up to the 2nd floor.",
      hours_label: "Hours", hours_val: "Daily 10:00 – 20:30",
      hours_hint: "By appointment only.",
      phone_label: "Phone",
      amen_parking: "Free parking", amen_wifi: "Free Wi-Fi",
      amen_card: "Yeoju Love Card accepted", amen_elev: "Elevator access",
      moved_note: "Relocated here in summer 2026 from the Yeoju KCC Switzen retail block (2 Gangbyeon-buk-ro).",
      maps_label: "Open in a maps app",
      footer_note: "This site is a student / portfolio project and is not the official website of P:K Men's Salon.",
      bar_call: "Call", bar_book: "Book",
      open_now: "Open now", closed_now: "Closed now"
    },
    ru: {
      skip: "К содержанию",
      nav_about: "О нас", nav_services: "Услуги и цены", nav_space: "Интерьер",
      nav_team: "Барберы", nav_reviews: "Отзывы", nav_visit: "Как добраться", nav_book: "Записаться",
      hero_badge: "НОВОЕ МЕСТО 2026 · переехали на 2 этаж Seohae Sky Palace",
      hero_title: "Классический барбершоп<br>с атмосферой виски-бара",
      hero_sub: "Мужская стрижка в районе Чхонсон-дон, Ёджу. Подбираем стрижку под вас. Приём только по предварительной записи.",
      cta_call: "Позвонить", cta_book: "Записаться (Naver)",
      about_eyebrow: "О салоне", about_title: "Здесь стрижка начинается с разговора",
      about_p1: "P:K Men's Salon открылся в Ёджу в 2021 году. Сначала смотрим на форму головы и структуру волос — тренды вторичны.",
      about_p2: "Летом 2026 года салон переехал в новое помещение на 2 этаже Seohae Sky Palace — интерьер больше похож на бар-лаундж, чем на парикмахерскую.",
      stat1_lbl: "Открылись", stat2_lbl: "Рейтинг Kakao Map", stat3_lbl: "Только по записи",
      services_eyebrow: "Меню", services_title: "Услуги и цены",
      svc_cut: "Стрижка", svc_cut_note: "Подбирается индивидуально после консультации",
      svc_down: "Даун-перманент", svc_down_note: "Доплата зависит от зоны обработки",
      svc_perm: "Базовая химия", svc_perm_note: "Спецзавивка и даун-перманент — за доплату",
      svc_clinic: "Клиника кожи головы", svc_clinic_note: "Доплата зависит от используемого препарата",
      styles_title: "Популярные стили",
      st_guile: "Гайл-кат", st_creed: "Крид-кат", st_pomade: "Помадная укладка",
      st_down: "Даун-перм", st_spa: "Спа для волос", st_kids: "Детская стрижка",
      price_unit: "Цены указаны в KRW", price_note: "По прайс-листу салона 2026 года, могут меняться.",
      space_eyebrow: "Пространство", space_title: "Новое пространство",
      space_sub: "2 этаж, офис 204, Seohae Sky Palace, Ёджу — барбершоп и лаундж для отдыха.",
      g_bar: "Барная стойка", g_stations: "Рабочие места", g_lounge: "Лаундж с люстрой",
      g_door: "Вход, офис 204", g_facade: "Фасад здания 102", g_products: "Продукция для стайлинга",
      team_eyebrow: "Барберы", team_title: "Наши барберы",
      pio_name: "Пио, директор", pio_bio: "Обучался в барбершопе в Австралии. Каждая стрижка начинается с разговора.",
      es_name: "Ынсон, менеджер", es_bio: "Чёткие стрижки и спокойная атмосфера.",
      team_note: "При записи можно выбрать конкретного барбера.",
      reviews_eyebrow: "Отзывы", reviews_title: "Что говорят клиенты",
      r1: "Не мог найти своё место в Ёджу и ездил в Ичхон — теперь хожу только сюда.",
      r2: "Мастер всегда сначала находит стиль, который мне подходит.",
      r3: "Заходишь — и чувствуешь себя как в барбершопе из зарубежного фильма.",
      r4: "После стрижки сразу записываюсь на следующий раз.",
      reviews_src: "Пересказ отзывов из блогов Naver · рейтинг Kakao Map 5.0",
      visit_eyebrow: "Как добраться", visit_title: "Как нас найти",
      addr_label: "Адрес",
      addr_val: "5-26 Yeoyang-ro 233beon-gil, Yeoju-si<br>Seohae Sky Palace, 2 этаж, офис 204 (Cheonsong-dong)",
      addr_hint: "Поднимитесь на лифте в здании 102 на 2 этаж.",
      hours_label: "Часы работы", hours_val: "Ежедневно 10:00 – 20:30",
      hours_hint: "Приём только по предварительной записи.",
      phone_label: "Телефон",
      amen_parking: "Бесплатная парковка", amen_wifi: "Бесплатный Wi-Fi",
      amen_card: "Принимают карту Yeoju Love Card", amen_elev: "Есть лифт",
      moved_note: "Летом 2026 года салон переехал сюда из торгового комплекса Yeoju KCC Switzen (2 Gangbyeon-buk-ro).",
      maps_label: "Открыть в картах",
      footer_note: "Этот сайт — учебный / портфолио-проект и не является официальным сайтом P:K Men's Salon.",
      bar_call: "Позвонить", bar_book: "Записаться",
      open_now: "Открыто", closed_now: "Закрыто"
    }
  };

  var LANG_KEY = "pk_salon_lang";
  var supported = ["ko", "en", "ru"];

  function getSavedLang() {
    try {
      var v = window.localStorage.getItem(LANG_KEY);
      if (v && supported.indexOf(v) !== -1) return v;
    } catch (e) { /* private mode / blocked storage */ }
    return null;
  }
  function saveLang(lang) {
    try { window.localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
  }

  function applyLang(lang) {
    if (!dict[lang]) lang = "ko";
    var table = dict[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (table[key] != null) el.innerHTML = table[key];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (table[key] != null) el.setAttribute("alt", table[key]);
    });

    document.querySelectorAll(".lang button, .lang-mobile button").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    document.documentElement.setAttribute("lang", lang === "ko" ? "ko" : lang === "ru" ? "ru" : "en");
    document.documentElement.setAttribute("data-lang", lang);
    updateStatus(lang);
  }

  function initLang() {
    var saved = getSavedLang();
    var lang = saved || "ko";
    applyLang(lang);

    document.querySelectorAll(".lang button, .lang-mobile button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = btn.getAttribute("data-lang");
        saveLang(next);
        applyLang(next);
      });
    });
  }

  /* ---------------- mobile nav ---------------- */
  function initNav() {
    var burger = document.querySelector(".burger");
    var nav = document.getElementById("nav");
    if (!burger || !nav) return;

    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });

    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------------- scroll reveal ---------------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var groups = {};
    items.forEach(function (el) {
      var parent = el.closest("section") || document.body;
      if (!groups[parent] ) groups[parent] = [];
    });

    // stagger within each section
    var sectionCounters = new Map();
    items.forEach(function (el) {
      var sec = el.closest("section") || el.parentElement;
      var n = sectionCounters.get(sec) || 0;
      el.style.setProperty("--d", n);
      sectionCounters.set(sec, n + 1);
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------------- header shadow on scroll ---------------- */
  function initHeaderScroll() {
    var header = document.querySelector(".header");
    if (!header) return;
    function onScroll() {
      if (window.scrollY > 12) header.style.borderBottomColor = "rgba(201,164,92,.4)";
      else header.style.borderBottomColor = "";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------------- open / closed status (Asia/Seoul) ---------------- */
  function getSeoulParts() {
    try {
      var fmt = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Seoul",
        hour: "2-digit", minute: "2-digit", hour12: false
      });
      var parts = fmt.formatToParts(new Date());
      var h = 0, m = 0;
      parts.forEach(function (p) {
        if (p.type === "hour") h = parseInt(p.value, 10);
        if (p.type === "minute") m = parseInt(p.value, 10);
      });
      return { minutes: h * 60 + m };
    } catch (e) {
      var now = new Date();
      return { minutes: now.getHours() * 60 + now.getMinutes() };
    }
  }

  function updateStatus(lang) {
    var table = dict[lang] || dict.ko;
    var mins = getSeoulParts().minutes;
    var open = mins >= (10 * 60) && mins < (20 * 60 + 30);
    document.querySelectorAll("[data-status]").forEach(function (el) {
      el.classList.toggle("is-open", open);
      el.classList.toggle("is-closed", !open);
      var textEl = el.querySelector(".status__text");
      if (textEl) {
        textEl.textContent = (open ? table.open_now : table.closed_now) + " · 10:00–20:30";
      }
    });
  }

  function initStatusTicker() {
    setInterval(function () {
      var lang = document.documentElement.getAttribute("data-lang") || "ko";
      updateStatus(lang);
    }, 60000);
  }

  /* ---------------- init ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    initLang();
    initNav();
    initReveal();
    initHeaderScroll();
    initStatusTicker();
  });
})();
