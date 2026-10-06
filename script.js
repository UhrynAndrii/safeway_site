
// ===== DATA =====
const emergencies = [
  { id:'air', icon:'🚨', title:'Повітряна тривога', steps:['Почувши сигнал тривоги — негайно йдіть до укриття','Візьміть документи, телефон, воду та ліки','Якщо укриття немає — лягайте вздовж несучої стіни, подалі від вікон','Чекайте сигналу відбою в укритті'], donts:['Не виходьте на вулицю під час тривоги','Не знімайте на відео і не поширюйте в соцмережах','Не ігноруйте сигнал навіть якщо тривога часта'] },
  { id:'fire', icon:'🔥', title:'Пожежа', steps:['Негайно повідомте всіх у будівлі та викличте 101','Не пробуйте гасити велику пожежу самостійно','Евакуюйтесь по сходах (не ліфт), пригнувшись до підлоги','Якщо вихід заблокований — закрийте двері, сигналізуйте з вікна'], donts:['Не використовуйте ліфт','Не відкривайте двері якщо вони гарячі','Не повертайтесь у будівлю за речами'] },
  { id:'shelling', icon:'💥', title:'Обстріл', steps:['Ляжте на землю або підлогу, прикрийте голову','Якщо є можливість — перейдіть до укриття або підвалу','Тримайтесь подалі від вікон і зовнішніх стін','Чекайте завершення і сигналу від офіційних джерел'], donts:['Не виходьте назовні під час обстрілу','Не підходьте до незнайомих предметів після обстрілу','Не поширюйте паніку'] },
  { id:'radiation', icon:'☢️', title:'Радіаційна небезпека', steps:['Зайдіть у закрите приміщення, зачиніть вікна та двері','Вимкніть вентиляцію та кондиціонер','Прийміть таблетки йодиду калію (за офіційною вказівкою)','Слідкуйте за офіційними повідомленнями щодо евакуації'], donts:['Не виходьте без потреби назовні','Не пийте воду з відкритих джерел','Не приймайте йод без офіційної вказівки'] },
  { id:'chemical', icon:'🧪', title:'Хімічна небезпека', steps:['Закрийте вікна і двері, ізолюйте щілини','Захистіть дихальні шляхи вологою тканиною','Якщо на вулиці — рухайтесь перпендикулярно вітру','Викличте 101/112, слідкуйте за офіційними каналами'], donts:['Не залишайтесь поблизу джерела небезпеки','Не знімайте засоби захисту передчасно','Не пийте воду з-під крану'] },
  { id:'injury', icon:'🩹', title:'Травма', steps:['Оцініть безпечність місця для вас і постраждалого','Викличте 103 або попросіть це зробити когось поруч','Зупиніть кровотечу тиском або джгутом','Не рухайте постраждалого якщо підозрюєте травму хребта'], donts:['Не давайте їжу або воду без свідомості','Не виймайте предмет що застряг у рані','Не залишайте постраждалого самого'] },
  { id:'accident', icon:'🚗', title:'ДТП', steps:['Увімкніть аварійні вогні, виставте знак аварійної зупинки','Викличте 103 та 102','Допоможіть постраждалим якщо безпечно','Не переміщуйте постраждалих із можливою травмою хребта'], donts:['Не залишайте місце ДТП','Не рухайте автомобіль якщо є постраждалі','Не вживайте алкоголь після аварії'] },
  { id:'flood', icon:'🌊', title:'Затоплення', steps:['Негайно евакуйтесь на вищу позначку','Вимкніть електрику в будинку','Візьміть документи, воду, теплий одяг','Чекайте рятувальників на даху або верхніх поверхах'], donts:['Не заходьте у воду невідомої глибини','Не торкайтесь електроприладів у воді','Не повертайтесь до будинку до дозволу служб'] },
  { id:'collapse', icon:'🏚', title:'Завал', steps:['Не рухайтесь — це може призвести до нового обвалу','Подайте звуковий сигнал тричі об трубу або стіну','Захистіть рот і ніс від пилу тканиною','Збережіть заряд телефону — надішліть геолокацію рятувальникам'], donts:['Не кричіть без потреби — це витрачає сили','Не запалюйте вогонь','Не рухайтеся хаотично'] },
  { id:'power', icon:'⚡', title:'Відключення електрики', steps:['Використайте павербанк, ліхтарик, свічки','Відімкніть прилади щоб уникнути перепаду при відновленні','Їжа в холодильнику збережеться 4 год, у морозилці — 48 год','Стежте за офіційними повідомленнями щодо термінів'], donts:['Не використовуйте газові прилади для обігріву','Не залишайте свічки без нагляду','Не заряджайте велику кількість пристроїв одразу при відновленні'] },
  { id:'extreme-temp', icon:'🌡', title:'Екстремальні температури', steps:['Спека: пийте воду кожні 15-20 хвилин, уникайте прямого сонця','Холод: утепліться шарами, вкрийте кінцівки та обличчя','Зігрівайте постраждалого від переохолодження поступово','Звертайтесь по медичну допомогу при ознаках теплового удару'], donts:['Не виходьте на сонце без головного убору','Не пийте алкоголь на морозі','Не розтирайте обморожені ділянки'] },
  { id:'storm', icon:'⛈', title:'Стихійне лихо', steps:['Зайдіть у міцне приміщення, уникайте підвалів при ризику затоплення','Тримайтесь подалі від вікон, дерев та рекламних конструкцій','Вимкніть електроприлади, закрийте воду','Слідкуйте за прогнозами погоди та офіційними попередженнями'], donts:['Не ховайтесь під деревами','Не перетинайте затоплені дороги','Не залишайте авто на вулиці під час граду'] }
];

const aidCategories = [
  { id:'bleeding', icon:'🩸', label:'Кровотеча', steps:['Переконайтесь, що місце безпечне','Надягніть рукавички якщо є','Притисніть рану чистою тканиною на 10+ хвилин','При сильній кровотечі на кінцівках — накладіть джгут вище рани','Викличте 103'], warning:'Не знімайте тканину якщо вона просочилась кров\'ю — додайте ще зверху.' },
  { id:'burns', icon:'🔥', label:'Опіки', steps:['Охолодіть опік прохолодною (не холодною!) водою 10–20 хвилин','Зніміть одяг і прикраси поблизу опіку якщо вони не прилипли','Накрийте стерильною пов\'язкою або чистою тканиною','Дайте знеболювальне, не чіпайте міхурі'], warning:'Ніколи не наносьте олію, зубну пасту або лід на опік.' },
  { id:'fracture', icon:'🦴', label:'Переломи', steps:['Іммобілізуйте кінцівку — накладіть шину з підручних матеріалів','Прикладіть холод (через тканину) для зменшення набряку','Викличте 103 або доставте до лікарні','Не намагайтесь вправити кість самостійно'], warning:'При підозрі на перелом хребта — не рухайте постраждалого без медиків.' },
  { id:'unconscious', icon:'😵', label:'Непритомність', steps:['Перевірте наявність дихання та пульсу','Покладіть на бік (відновлювальне положення)','Викличте 103 негайно','Не давайте їжу або воду, контролюйте дихання'], warning:'Якщо відсутнє дихання — починайте серцево-легеневу реанімацію.' },
  { id:'choking', icon:'😮', label:'Задуха', steps:['Запитайте "Ви задихаєтесь?" — якщо людина не може говорити, діяйте','Виконайте 5 ударів між лопатками долонею','Якщо не допомогло — виконайте прийом Геймліха: 5 поштовхів під ребра','Чергуйте удари та поштовхи до відновлення дихання або приїзду 103'], warning:'Для дітей до 1 року — спеціальна техніка, не застосовуйте Геймліха.' },
  { id:'poisoning', icon:'☠️', label:'Отруєння', steps:['Викличте 103 і опишіть речовину','При отруєнні через рот — не викликайте блювання без вказівки лікаря','Збережіть упаковку або зразок речовини','Забезпечте свіже повітря при вдиханні отрути'], warning:'Молоко, яйця або активоване вугілля — тільки за призначенням лікаря.' },
  { id:'cpr', icon:'❤️', label:'СЛР', steps:['Переконайтесь у безпечності місця, перевірте реакцію постраждалого','Викличте 103, попросіть принести дефібрилятор','30 натискань на центр грудної клітки (глибина 5-6 см, темп 100-120/хв)','2 вдихи рот-в-рот (по 1 секунді)','Продовжуйте 30:2 до приїзду медиків або відновлення дихання'], warning:'Якщо не навчені — робіть тільки натискання без вдихів. Це теж рятує.' },
  { id:'wound', icon:'🩹', label:'Поранення', steps:['Оцініть глибину та характер рани','Промийте чистою водою, видаліть видимий бруд','Зупиніть кровотечу тиском','Накладіть стерильну пов\'язку'], warning:'Не виймайте предмети, що стирчать із рани — це підсилить кровотечу.' }
];

const kitItems = [
  { id:'docs', icon:'📄', label:'Документи', desc:'Паспорт, ІД, медичні документи' },
  { id:'water', icon:'💧', label:'Вода', desc:'Мінімум 3 л на людину' },
  { id:'kit', icon:'🩺', label:'Аптечка', desc:'Бинти, пластирі, ліки' },
  { id:'power', icon:'🔋', label:'Павербанк', desc:'Заряджений, 10 000+ мАг' },
  { id:'torch', icon:'🔦', label:'Ліхтарик', desc:'З запасними батарейками' },
  { id:'meds', icon:'💊', label:'Ліки', desc:'Особисті медикаменти' },
  { id:'hygiene', icon:'🧴', label:'Засоби гігієни', desc:'Мило, серветки, маска' },
  { id:'clothes', icon:'🧥', label:'Теплий одяг', desc:'Зміна одягу і взуття' },
  { id:'food', icon:'🥫', label:'Їжа', desc:'Консерви, горіхи, сухофрукти' },
  { id:'kids', icon:'🧸', label:'Речі для дітей', desc:'Якщо є діти в родині' },
  { id:'pets', icon:'🐾', label:'Речі для тварин', desc:'Якщо є домашні тварини' }
];

const regions = [
  { name:'Київ', status:'danger' }, { name:'Харків', status:'danger' }, { name:'Одеса', status:'warning' },
  { name:'Дніпро', status:'safe' }, { name:'Запоріжжя', status:'danger' }, { name:'Львів', status:'safe' },
  { name:'Чернівці', status:'danger' }, { name:'Вінниця', status:'safe' }, { name:'Полтава', status:'warning' },
  { name:'Суми', status:'danger' }, { name:'Херсон', status:'danger' }, { name:'Черкаси', status:'safe' }
];

// MAP MARKERS — Чернівці як центр (можна змінити на будь-яке місто)
const mapMarkers = [
  { type:'shelter', icon:'🏠', name:'Укриття №1 (підвал ТЦ)', addr:'вул. Шевченка, 23, Чернівці', lat:48.2912, lng:25.9355, status:'open' },
  { type:'shelter', icon:'🏠', name:'Укриття №2 (станція метро)', addr:'вул. Франка, 11, Чернівці', lat:48.2960, lng:25.9390, status:'open' },
  { type:'shelter', icon:'🏠', name:'Укриття №3 (підвал школи)', addr:'вул. Головна, 5, Чернівці', lat:48.2875, lng:25.9420, status:'open' },
  { type:'hospital', icon:'🏥', name:'Міська лікарня №1', addr:'вул. Лікарняна, 5, Чернівці', lat:48.2945, lng:25.9280, status:'open' },
  { type:'hospital', icon:'🏥', name:'Обласна лікарня', addr:'вул. Руська, 141, Чернівці', lat:48.2830, lng:25.9460, status:'open' },
  { type:'pharmacy', icon:'💊', name:'Аптека "Здоров\'я"', addr:'вул. Центральна, 8, Чернівці', lat:48.2920, lng:25.9370, status:'open' },
  { type:'pharmacy', icon:'💊', name:'Аптека "Біола"', addr:'вул. Кобилянської, 4, Чернівці', lat:48.2935, lng:25.9340, status:'open' },
  { type:'resilience', icon:'⚡', name:'Пункт незламності №1', addr:'вул. Миру, 3, Чернівці', lat:48.2900, lng:25.9400, status:'open' },
  { type:'resilience', icon:'⚡', name:'Пункт незламності №2', addr:'пл. Театральна, 1, Чернівці', lat:48.2955, lng:25.9360, status:'open' },
  { type:'fire', icon:'🚒', name:'ДСНС Пожежна частина №2', addr:'вул. Рятувальна, 1, Чернівці', lat:48.2870, lng:25.9310, status:'open' },
  { type:'aid', icon:'🔵', name:'Пункт гуманітарної допомоги', addr:'вул. Незалежності, 10, Чернівці', lat:48.2980, lng:25.9380, status:'open' },
];

const supportSections = [
  { icon:'😰', title:'Під час панічної реакції', content:'Паніка — нормальна реакція організму. Зупиніться і зосередьтеся на диханні. Спробуйте техніку «5-4-3-2-1»: назвіть 5 речей які бачите, 4 які чуєте, 3 яких можете торкнутись, 2 які відчуваєте на запах, 1 на смак. Це повертає вас у «тут і зараз».', breathing:true },
  { icon:'🫁', title:'Дихальні вправи', content:'Техніка «4-7-8»: вдих на 4 рахунки, затримка на 7, повільний видих на 8. Повторіть 3-4 рази. Це активує парасимпатичну нервову систему і зменшує тривогу.', breathing:false },
  { icon:'🤝', title:'Як підтримати близьку людину', content:'Будьте поруч і слухайте без осуду. Не кажіть «заспокойся» — це не допомагає. Скажіть: «Я тут, я з тобою». Допоможіть з практичними речами: їжа, тепло, безпека.', breathing:false },
  { icon:'📞', title:'Контакти професійної допомоги', content:'• Гаряча лінія психологічної допомоги: 0 800 100 102 (безкоштовно)\n• Лінія підтримки ветеранів: 1547\n• Телефон довіри: 0 800 501 701\n\nНе соромтесь звертатись — це ознака сили, не слабкості.', breathing:false }
];

// ===== LEAFLET MAP =====
let map = null, leafletMarkers = [], activeFilter = 'all';

const markerColors = {
  shelter: '#4A90A4', hospital: '#5F9675', pharmacy: '#9B72CF',
  resilience: '#D4A017', fire: '#C65353', aid: '#63AFC5'
};

function createIcon(type) {
  const color = markerColors[type] || '#4A90A4';
  const emojis = { shelter:'🏠', hospital:'🏥', pharmacy:'💊', resilience:'⚡', fire:'🚒', aid:'🔵' };
  const emoji = emojis[type] || '📍';
  return L.divIcon({
    html: `<div style="background:${color};width:36px;height:36px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:2px solid rgba(255,255,255,0.3);box-shadow:0 2px 8px rgba(0,0,0,0.4)"><span style="transform:rotate(45deg);display:block;text-align:center;line-height:32px;font-size:16px">${emoji}</span></div>`,
    className: '',
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -38]
  });
}

function initMap() {
  if (map) return;
  map = L.map('leafletMap', { zoomControl: true, attributionControl: true }).setView([48.2915, 25.9355], 14);

  // OpenStreetMap tiles — безкоштовно, без API-ключа
  addTiles(map);

  // Додати маркери
  mapMarkers.forEach((m, i) => {
    const marker = L.marker([m.lat, m.lng], { icon: createIcon(m.type) }).addTo(map);
    marker._type = m.type;
    marker.bindPopup(`
      <div class="popup-title">${m.icon} ${m.name}</div>
      <div class="popup-addr">${m.addr}</div>
      <span class="popup-status open">Відкрито</span><br>
      <a class="popup-route-btn" href="https://www.openstreetmap.org/directions?from=&to=${m.lat},${m.lng}" target="_blank">🗺 Прокласти маршрут</a>
    `);
    leafletMarkers.push(marker);
  });
}

function filterMap(btn, type) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeFilter = type;

  leafletMarkers.forEach((marker, i) => {
    const m = mapMarkers[i];
    if (type === 'all' || m.type === type) {
      if (!map.hasLayer(marker)) map.addLayer(marker);
    } else {
      if (map.hasLayer(marker)) map.removeLayer(marker);
    }
  });

  document.querySelectorAll('.map-obj').forEach(el => {
    el.style.display = (type === 'all' || el.dataset.type === type) ? 'flex' : 'none';
  });
}

function flyToMarker(i) {
  if (!map) return;
  const m = mapMarkers[i];
  map.flyTo([m.lat, m.lng], 16, { duration: 0.8 });
  leafletMarkers[i].openPopup();
}

// ===== RENDER =====
function renderAll() {
  // Emergency
  renderEm();

  // Map list
  document.getElementById('mapObjects').innerHTML = mapMarkers.map((m,i) => `
    <div class="map-obj" data-type="${m.type}" onclick="flyToMarker(${i})">
      <div class="map-obj-left">
        <div class="map-obj-icon">${m.icon}</div>
        <div><div class="map-obj-name">${m.name}</div><div class="map-obj-addr">${m.addr}</div></div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <span class="map-obj-status open">Відкрито</span>
        <a class="route-btn" href="https://www.openstreetmap.org/directions?to=${m.lat},${m.lng}" target="_blank">Маршрут</a>
      </div>
    </div>`).join('');

  // Regions
  const statusLabel = { danger:'🔴 Тривога', warning:'🟡 Попередження', safe:'🟢 Спокійно' };
  document.getElementById('regionsGrid').innerHTML = regions.map(r => `
    <div class="region-card"><span>${r.name}</span><span style="font-size:13px">${statusLabel[r.status]}</span></div>`).join('');

  // Aid
  showAid('bleeding');

  renderKit();

  // Support
  document.getElementById('supportSections').innerHTML = supportSections.map((s,i) => `
    <div class="sp-card" id="supp-${i}">
      <div class="sp-top"><div class="sp-ico">${s.icon}</div><h3>${s.title}</h3></div>
      <div class="sp-body">${s.content}</div>${s.breathing ? `
      <div class="breathing-exercise">
        <div class="br-step" id="breathStep">Натисніть щоб почати дихальну вправу</div>
        <button class="br-btn" onclick="startBreathing(event)">Почати</button>
      </div>` : ''}
    </div>`).join('');
}

// ===== ALERT MAP =====
// ДАНІ ТРИВОГ — безкоштовно, без ключа: ubilling.net.ua/aerialalerts
// (збирає дані з кількох відкритих джерел; ліміт 2 запити/сек — ми питаємо раз на хвилину).
const ALERTS_SOURCES = ['https://ubilling.net.ua/aerialalerts/', 'https://ubilling.net.ua/aerialalerts/?source=klimenko'];
// У локальному режимі запити проксить server.js; для хостингу задайте URL розгорнутого Worker.
const ALERTS_PROXY = '';
const ALERTS_DEMO = false; // true — показувати ВИГАДАНІ дані (лише для демонстрації/дизайну)
const ALERTS_REFRESH_MS = 60000;

// ТАЙЛИ КАРТИ — безкоштовно, без ключа. Якщо перший провайдер не завантажується, автоматично береться наступний.
const TILE_PROVIDERS = [
  { url:'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', opt:{ subdomains:'abcd', maxZoom:19, attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> · © <a href="https://carto.com/attributions">CARTO</a>' } },
  { url:'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', opt:{ maxZoom:16, attribution:'Tiles © Esri' } },
  { url:'https://tile.openstreetmap.org/{z}/{x}/{y}.png', opt:{ maxZoom:19, attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' } }
];
function addTiles(m) {
  let idx = 0, errs = 0, ok = 0, layer = null;
  function use(i) {
    if (layer) m.removeLayer(layer);
    const p = TILE_PROVIDERS[i];
    layer = L.tileLayer(p.url, p.opt).addTo(m); errs = 0; ok = 0;
    layer.on('tileload', () => { ok++; });
    layer.on('tileerror', () => { errs++; if (ok === 0 && errs >= 3 && idx < TILE_PROVIDERS.length - 1) { idx++; use(idx); } });
  }
  use(0);
}
const MY_OBLAST = 'Чернівецька';
const statusMeta = {
  unknown: { label:'Немає даних', short:'Немає даних', color:'#7a8798' },
  danger:  { label:'Повітряна тривога', short:'Тривога', color:'#C65353' },
  warning: { label:'Попередження', short:'Попередження', color:'#D4A017' },
  safe:    { label:'Спокійно', short:'Спокійно', color:'#5F9675' }
};
// sinceMin — скільки хвилин триває тривога (для демо)
const alertRegions = [
  { name:'Вінницька', short:'Вінниця', api:'Вінницька область', lat:49.23, lng:28.47, status:'safe' },
  { name:'Волинська', short:'Волинь', api:'Волинська область', lat:50.75, lng:25.33, status:'warning' },
  { name:'Дніпропетровська', short:'Дніпро', api:'Дніпропетровська область', lat:48.46, lng:35.05, status:'safe' },
  { name:'Донецька', short:'Донеччина', api:'Донецька область', lat:48.02, lng:37.80, status:'danger', sinceMin:312 },
  { name:'Житомирська', short:'Житомир', api:'Житомирська область', lat:50.25, lng:28.66, status:'warning' },
  { name:'Закарпатська', short:'Закарпаття', api:'Закарпатська область', lat:48.45, lng:23.0, status:'safe' },
  { name:'Запорізька', short:'Запоріжжя', api:'Запорізька область', lat:47.62, lng:35.40, status:'danger', sinceMin:87 },
  { name:'Івано-Франківська', short:'Ів.-Франківськ', api:'Івано-Франківська область', lat:48.92, lng:24.71, status:'safe' },
  { name:'Київська', short:'Київщина', api:'Київська область', lat:50.05, lng:30.0, status:'danger', sinceMin:34 },
  { name:'м. Київ', short:'Київ', api:'м. Київ', lat:50.45, lng:30.52, status:'danger', sinceMin:34 },
  { name:'Кіровоградська', short:'Кропивницький', api:'Кіровоградська область', lat:48.51, lng:32.26, status:'safe' },
  { name:'Луганська', short:'Луганщина', api:'Луганська область', lat:48.85, lng:39.2, status:'danger', sinceMin:540 },
  { name:'Львівська', short:'Львів', api:'Львівська область', lat:49.84, lng:24.03, status:'safe' },
  { name:'Миколаївська', short:'Миколаїв', api:'Миколаївська область', lat:47.0, lng:31.99, status:'warning' },
  { name:'Одеська', short:'Одеса', api:'Одеська область', lat:46.6, lng:30.4, status:'warning' },
  { name:'Полтавська', short:'Полтава', api:'Полтавська область', lat:49.59, lng:34.55, status:'warning' },
  { name:'Рівненська', short:'Рівне', api:'Рівненська область', lat:51.0, lng:26.4, status:'safe' },
  { name:'Сумська', short:'Суми', api:'Сумська область', lat:50.91, lng:34.80, status:'danger', sinceMin:121 },
  { name:'Тернопільська', short:'Тернопіль', api:'Тернопільська область', lat:49.55, lng:25.59, status:'safe' },
  { name:'Харківська', short:'Харків', api:'Харківська область', lat:49.6, lng:36.4, status:'danger', sinceMin:203 },
  { name:'Херсонська', short:'Херсон', api:'Херсонська область', lat:46.7, lng:33.0, status:'danger', sinceMin:658 },
  { name:'Хмельницька', short:'Хмельницький', api:'Хмельницька область', lat:49.42, lng:26.99, status:'safe' },
  { name:'Черкаська', short:'Черкаси', api:'Черкаська область', lat:49.44, lng:32.06, status:'safe' },
  { name:'Чернівецька', short:'Чернівці', api:'Чернівецька область', lat:48.29, lng:25.94, status:'danger', sinceMin:12 },
  { name:'Чернігівська', short:'Чернігів', api:'Чернігівська область', lat:51.49, lng:31.29, status:'danger', sinceMin:56 },
  { name:'АР Крим', short:'Крим', api:'Автономна Республіка Крим', lat:45.2, lng:34.1, status:'danger', sinceMin:2000 },
  { name:'м. Севастополь', short:'Севастополь', api:'Севастополь', lat:44.62, lng:33.53, status:'unknown' }
];
const hhmm = ts => new Date(ts).toLocaleTimeString('uk-UA', { hour:'2-digit', minute:'2-digit' });
alertRegions.forEach(r => { if (r.sinceMin) r.sinceLabel = hhmm(Date.now() - r.sinceMin * 60000); });
// без демо-режиму не показуємо вигаданих тривог: поки немає реальних даних — статус «Немає даних»
if (!ALERTS_DEMO) alertRegions.forEach(r => { r.status = 'unknown'; r.sinceLabel = null; });

let alertMap = null, alertLayer = null, alertFilter = 'all', alertState = ALERTS_DEMO ? 'demo' : 'loading', alertLastOk = null, alertTimer = null;

function fmtDuration(ts) {
  const m = Math.max(1, Math.round((Date.now() - ts) / 60000));
  if (m < 60) return `${m} хв`;
  const h = Math.floor(m / 60), mm = m % 60;
  return mm ? `${h} год ${mm} хв` : `${h} год`;
}
function alertIcon(r) {
  const mine = r.name === MY_OBLAST ? ' mine' : '';
  return L.divIcon({
    className: '',
    html: `<div class="alert-pin ${r.status}${mine}"><span class="alert-dot" style="background:${statusMeta[r.status].color}"></span><span class="alert-name">${r.short}</span></div>`,
    iconSize: [0, 0]
  });
}
function alertPopup(r) {
  const meta = statusMeta[r.status];
  const since = (r.status === 'danger' && r.sinceLabel) ? `<div class="popup-addr">Тривога з ${r.sinceLabel}</div>` : '<div class="popup-addr">&nbsp;</div>';
  const action = r.status === 'unknown' ? '' : r.status === 'danger'
    ? `<a class="popup-route-btn" onclick="showPage('map')">🏠 Знайти укриття</a>`
    : `<a class="popup-route-btn" onclick="showPage('emergency')">📋 Що робити під час тривоги</a>`;
  return `<div class="popup-title">${r.name}${r.name.startsWith('м.') ? '' : ' область'}</div>${since}<span class="popup-status" style="background:${meta.color}33;color:${meta.color}">${meta.label}</span>${action}`;
}
function initAlertMap() {
  if (alertMap) return;
  alertMap = L.map('alertMap', { zoomControl: true, minZoom: 5, maxZoom: 9 });
  addTiles(alertMap);
  alertMap.fitBounds([[44.3, 22.1], [52.4, 40.3]]);
  alertLayer = L.layerGroup().addTo(alertMap);
  renderAlerts();
}
function renderAlerts() {
  const count = { danger:0, warning:0, safe:0, unknown:0 };
  const demo = alertState === 'demo';
  alertRegions.forEach(r => count[r.status]++);
  document.getElementById('alertStats').innerHTML = ['danger', ...(demo ? ['warning'] : []), 'safe', ...(count.unknown ? ['unknown'] : [])].map(k =>
    `<div class="alert-stat ${k}"><div class="num">${count[k]}</div><div class="lbl">${statusMeta[k].label}</div></div>`).join('');
  document.getElementById('alertStats').style.gridTemplateColumns = `repeat(${demo || count.unknown ? 3 : 2},1fr)`;
  document.getElementById('fWarn').style.display = demo ? '' : 'none';
  document.getElementById('legWarn').style.display = demo ? '' : 'none';

  const mine = alertRegions.find(r => r.name === MY_OBLAST);
  const mineEl = document.getElementById('alertMine');
  mineEl.className = 'alert-mine ' + mine.status;
  mineEl.innerHTML = mine.status === 'danger'
    ? `<strong>📍 Ваш регіон: ${mine.name} область — повітряна тривога.</strong> <span>Пройдіть до укриття.</span> <a class="route-btn" onclick="showPage('map')">Знайти укриття</a>`
    : mine.status === 'unknown'
      ? `<strong>📍 Ваш регіон: ${mine.name} область — немає даних про тривогу.</strong> <span>Орієнтуйтесь на сирени та офіційні канали.</span>`
      : `<strong>📍 Ваш регіон: ${mine.name} область — ${statusMeta[mine.status].label.toLowerCase()}.</strong>`;

  if (alertLayer) {
    alertLayer.clearLayers();
    alertRegions.forEach(r => {
      if (alertFilter !== 'all' && r.status !== alertFilter) return;
      L.marker([r.lat, r.lng], { icon: alertIcon(r), zIndexOffset: r.status === 'danger' ? 500 : 0 })
        .bindPopup(alertPopup(r)).addTo(alertLayer);
    });
  }

  const order = { danger:0, warning:1, safe:2, unknown:3 };
  const list = alertRegions.filter(r => alertFilter === 'all' || r.status === alertFilter)
    .sort((a,b) => order[a.status] - order[b.status] || a.name.localeCompare(b.name, 'uk'));
  document.getElementById('alertList').innerHTML = list.map(r => {
    const i = alertRegions.indexOf(r);
    const sub = (r.status === 'danger' && r.sinceLabel) ? `Тривога з ${r.sinceLabel}` : statusMeta[r.status].label;
    return `<div class="map-obj alert-row${r.name === MY_OBLAST ? ' mine' : ''}" onclick="flyToAlert(${i})">
      <div class="map-obj-left"><span class="alert-row-dot" style="background:${statusMeta[r.status].color}"></span>
      <div><div class="map-obj-name">${r.name}${r.name.startsWith('м.') ? '' : ' область'}${r.name === MY_OBLAST ? ' · ваш регіон' : ''}</div><div class="map-obj-addr">${sub}</div></div></div>
      <span class="map-obj-status ${r.status}">${statusMeta[r.status].short}</span></div>`;
  }).join('');

  const notes = {
    live: 'Дані: ubilling.net.ua (агрегує alerts.in.ua, ukrainealarm та інші відкриті джерела). Це не офіційне сповіщення — слухайте сирени та офіційні канали.',
    stale: 'Немає зв\'язку з джерелом — показано останні отримані дані. Орієнтуйтесь на сирени та офіційні канали.',
    offline: 'Не вдалося отримати дані про тривоги. Перевірте інтернет і орієнтуйтесь на сирени та офіційні канали.',
    loading: 'Завантажую дані про тривоги…',
    demo: 'Увімкнено ДЕМО-режим: показано вигадані дані. Не використовуйте їх для прийняття рішень.'
  };
  document.getElementById('alertNote').textContent = notes[alertState];
  renderHomeStatus();
  document.getElementById('alertUpdated').textContent = alertState === 'demo' ? 'Демо-дані' : alertLastOk ? 'Оновлено: ' + hhmm(alertLastOk) + (alertState === 'stale' ? ' · застарілі' : '') : (alertState === 'loading' ? 'Завантаження…' : 'Немає даних');
}
function filterAlerts(btn, type) {
  document.querySelectorAll('#alertFilters .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  alertFilter = type;
  renderAlerts();
}
function flyToAlert(i) {
  if (!alertMap) return;
  const r = alertRegions[i];
  window.scrollTo({ top: document.getElementById('alertMap').offsetTop - 80, behavior: 'smooth' });
  alertMap.flyTo([r.lat, r.lng], 7, { duration: 0.8 });
  alertLayer.eachLayer(l => { const p = l.getLatLng(); if (p.lat === r.lat && p.lng === r.lng) l.openPopup(); });
}
const normName = n => String(n).toLowerCase().replace(/м\.|область|обл\.|[\s'’ʼ`]/g, '');
async function loadLiveAlerts() {
  let lastErr = new Error('no sources');
  for (const base of ALERTS_SOURCES) {
    try {
      const localProxy = ['localhost', '127.0.0.1'].includes(location.hostname)
        ? '/api/alerts?url='
        : '';
      const proxy = ALERTS_PROXY || localProxy;
      const url = proxy ? proxy + encodeURIComponent(base) : base;
      const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), 8000);
      const res = await fetch(url, { cache: 'no-store', signal: ctl.signal });
      clearTimeout(timer);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      const states = data && (data.states || data.state);
      if (!states || typeof states !== 'object') throw new Error('unexpected format');
      const byName = {};
      Object.keys(states).forEach(k => { byName[normName(k)] = states[k]; });
      const updates = alertRegions.map(r => {
        const st = byName[normName(r.api)];
        if (!st || typeof st.alertnow !== 'boolean') return null;
        const changedAt = Date.parse(st.changed);
        return {
          region: r,
          status: st.alertnow ? 'danger' : 'safe',
          sinceLabel: st.alertnow && Number.isFinite(changedAt) && new Date(changedAt).getFullYear() > 2000
            ? hhmm(changedAt)
            : null
        };
      }).filter(Boolean);
      if (updates.length < 10) throw new Error('too few regions matched');
      alertRegions.forEach(r => { r.status = 'unknown'; r.sinceLabel = null; });
      updates.forEach(({ region, status, sinceLabel }) => {
        region.status = status;
        region.sinceLabel = sinceLabel;
      });
      return;
    } catch (e) { lastErr = e; }
  }
  throw lastErr;
}
async function refreshAlerts(manual) {
  const btn = document.getElementById('alertRefreshBtn');
  if (manual) btn.classList.add('spin');
  if (ALERTS_DEMO) { alertState = 'demo'; }
  else {
    try { await loadLiveAlerts(); alertState = 'live'; alertLastOk = Date.now(); }
    catch (e) {
      console.warn('Alerts fetch failed:', e);
      alertState = alertLastOk ? 'stale' : 'offline';
      if (!alertLastOk) alertRegions.forEach(r => { r.status = 'unknown'; r.sinceLabel = null; });
      if (manual) showToast('Не вдалося отримати дані про тривоги');
    }
  }
  renderAlerts();
  if (manual) setTimeout(() => btn.classList.remove('spin'), 400);
}

// ===== HOME: міні-карта, статус, реклама =====
// РЕКЛАМА: заповніть одне з полів, щоб замінити заглушку.
//   img + link  — банер-картинка (напр. 970×90) з посиланням
//   html        — готовий код від рекламної мережі (напр. Google AdSense), скрипти виконуються
const AD_HOME = { img: '', link: '', alt: 'Реклама', html: '' };

function renderAd() {
  const slot = document.getElementById('adSlotHome'), body = document.getElementById('adBodyHome');
  if (AD_HOME.html) {
    body.innerHTML = '';
    body.appendChild(document.createRange().createContextualFragment(AD_HOME.html));
    slot.classList.add('filled');
  } else if (AD_HOME.img) {
    body.innerHTML = `<a href="${AD_HOME.link || '#'}" target="_blank" rel="sponsored noopener"><img src="${AD_HOME.img}" alt="${AD_HOME.alt}"></a>`;
    slot.classList.add('filled');
  } else {
    body.innerHTML = `<div class="ad-ph"><strong>Тут може бути ваша реклама</strong><span>Рекомендований формат: 970 × 90 · адаптується під мобільні</span><button onclick="openLead('Реклама на сайті')">Розмістити рекламу</button></div>`;
  }
}

const UA_OUTLINE = [[23.6,51.55],[25.0,51.9],[26.5,51.85],[28.0,51.58],[29.2,51.4],[30.5,51.35],[31.8,52.1],[32.7,52.3],[33.8,52.35],[34.4,51.75],[35.4,51.2],[36.6,50.2],[37.4,50.4],[38.0,49.9],[39.2,49.8],[40.1,49.55],[39.7,48.8],[39.9,47.85],[38.2,47.1],[37.3,47.05],[36.2,46.65],[35.4,46.3],[34.8,46.0],[34.0,46.1],[33.6,46.1],[32.0,46.45],[31.5,46.6],[30.8,46.5],[30.2,45.85],[29.6,45.4],[28.8,45.3],[28.2,45.45],[28.5,46.0],[28.9,46.45],[29.9,46.85],[29.6,47.3],[29.1,47.5],[28.7,48.1],[28.2,48.2],[27.55,48.45],[26.9,48.4],[26.6,48.25],[26.2,48.25],[25.5,47.95],[24.5,47.95],[23.2,48.0],[22.9,47.95],[22.15,48.4],[22.55,49.05],[22.7,49.6],[23.5,50.4],[24.1,50.8]];
const UA_CRIMEA = [[32.5,45.4],[33.6,46.1],[34.9,45.75],[36.5,45.3],[35.2,44.7],[34.0,44.4],[33.4,44.55]];
const uaX = lng => ((lng - 21.9) * 20.1).toFixed(1), uaY = lat => ((52.6 - lat) * 30).toFixed(1);
const uaPath = pts => 'M' + pts.map(p => uaX(p[0]) + ' ' + uaY(p[1])).join('L') + 'Z';

function renderHomeStatus() {
  const blobColor = { danger:'rgba(229,85,90,.8)', warning:'rgba(212,160,23,.6)', safe:'rgba(70,110,160,.35)', unknown:'rgba(120,135,155,.25)' };
  const blobs = alertRegions.map(r => `<circle cx="${uaX(r.lng)}" cy="${uaY(r.lat)}" r="${r.status === 'danger' ? 23 : 21}" fill="${blobColor[r.status]}"/>`).join('');
  const mine = alertRegions.find(r => r.name === MY_OBLAST);
  document.getElementById('homeMiniMap').innerHTML = `<svg class="ua-mini" viewBox="0 0 370 250" role="img" aria-label="Мапа тривог України">
    <defs><clipPath id="uaClip"><path d="${uaPath(UA_OUTLINE)}"/><path d="${uaPath(UA_CRIMEA)}"/></clipPath><filter id="uaBlur"><feGaussianBlur stdDeviation="6"/></filter></defs>
    <g clip-path="url(#uaClip)"><rect width="370" height="250" fill="#18263a"/><g filter="url(#uaBlur)">${blobs}</g></g>
    <path d="${uaPath(UA_OUTLINE)}" fill="none" stroke="rgba(150,190,235,.45)" stroke-width="1.2"/><path d="${uaPath(UA_CRIMEA)}" fill="none" stroke="rgba(150,190,235,.45)" stroke-width="1.2"/>
    <circle cx="${uaX(mine.lng)}" cy="${uaY(mine.lat)}" r="4" fill="#fff" stroke="#3FA3CC" stroke-width="2"/></svg>`;

  const order = { danger:0, warning:1, safe:2, unknown:3 };
  const others = alertRegions.filter(r => r !== mine && r.name !== 'АР Крим').sort((a,b) => order[a.status] - order[b.status]);
  const list = [mine, ...others].slice(0, 4);
  document.getElementById('homeStatusList').innerHTML = list.map(r => {
    const c = statusMeta[r.status].color;
    const label = r.status === 'danger' ? 'Повітряна тривога' : r.status === 'warning' ? 'Попередження' : r.status === 'unknown' ? 'Немає даних' : 'Немає тривоги';
    const when = (r.status === 'danger' && r.sinceLabel) ? 'з ' + r.sinceLabel : '—';
    return `<div class="sw-row"><span class="d" style="background:${c}"></span><div class="t"><strong>${r.name}${r.name.startsWith('м.') ? '' : ' область'}</strong><span style="color:${c}">${label}</span></div><span class="w">${when}</span></div>`;
  }).join('');
  const ns = document.getElementById('navStatus');
  if (ns) { ns.classList.toggle('safe', mine.status === 'safe'); ns.classList.toggle('unknown', mine.status === 'unknown'); }
}
function setNavActive(id) {
  document.querySelectorAll('#navLinks a').forEach(a => a.classList.toggle('active', (a.getAttribute('onclick') || '').includes(`'${id}'`)));
}

// ===== Вкладки карти тривог =====
let alertTabCur = 'official';
function loadOfficial() {
  const fr = document.getElementById('officialFrame');
  if (!fr.getAttribute('src')) fr.setAttribute('src', 'https://map.ukrainealarm.com/');
}
function showOursMap() {
  initAlertMap();
  setTimeout(() => { alertMap.invalidateSize(); alertMap.fitBounds([[44.3, 22.1], [52.4, 40.3]]); }, 50);
}
function alertTab(btn, which) {
  document.querySelectorAll('#alertTabs .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  alertTabCur = which;
  document.getElementById('alertPaneOfficial').style.display = which === 'official' ? '' : 'none';
  document.getElementById('alertPaneOurs').style.display = which === 'ours' ? '' : 'none';
  if (which === 'official') loadOfficial(); else showOursMap();
}


const kitData = [
  { id:'basic', icon:'🎒', name:'Основні речі', desc:'Базовий набір, який знадобиться в більшості ситуацій.', items:[
    ['🔦','Ліхтарик','Забезпечить освітлення в темний час доби або при відключенні електроенергії.','1 шт.'],['🔋','Запасні батарейки','Для ліхтарика, радіо та інших пристроїв.','2–4 шт.'],['🔪','Багатофункціональний ніж','Корисний для різних побутових і екстрених ситуацій.','1 шт.'],['🧥','Плащ-дощовик','Захистить від дощу та негоди.','1 шт.'],['🛏','Тепла ковдра','Допоможе зберегти тепло в холодну пору року.','1 шт.'],['🗑','Міцні пакети для сміття','Для гігієни, зберігання речей або як тимчасовий захист.','5–10 шт.'],['🧵','Мотузка або паракорд','Допоможе в різних ситуаціях, наприклад, для кріплення.','1 шт.'],['📣','Свисток','Допоможе подати сигнал про допомогу.','1 шт.'] ]},
  { id:'docs', icon:'📄', name:'Документи', desc:'Оригінали й копії важливих документів.', items:[
    ['🛂','Паспорт та ID-картка','Оригінали в окремій файлі.','1 компл.'],['🔢','Ідентифікаційний код','Копія або фото.','1 шт.'],['🩺','Медичні документи','Виписки, рецепти, страховий поліс.','1 компл.'],['🏠','Документи на житло','Копії у водонепроникному пакеті.','1 компл.'],['💵','Готівка','Дрібні купюри.','—'] ]},
  { id:'food', icon:'🥫', name:'Їжа та вода', desc:'Запас щонайменше на 72 години.', items:[
    ['💧','Питна вода','3 л на людину на день.','9 л'],['🥫','Консерви','З відкривачкою або з кільцем.','3–5 шт.'],['🥜','Горіхи та сухофрукти','Калорійні, довго зберігаються.','500 г'],['🍫','Енергетичні батончики','Швидке відновлення сил.','4–6 шт.'],['🥄','Набір посуду','Ложка, кружка, ніж.','1 компл.'] ]},
  { id:'med', icon:'🩺', name:'Медицина', desc:'Аптечка та особисті ліки.', items:[
    ['🩹','Аптечка','Бинти, пластирі, антисептик.','1 шт.'],['💊','Особисті ліки','Запас на 7–14 днів.','—'],['🩸','Турнікет','Для зупинки сильної кровотечі.','1–2 шт.'],['🌡','Термометр','Електронний або безртутний.','1 шт.'],['🧤','Рукавички медичні','Для надання першої допомоги.','2 пари'] ]},
  { id:'clothes', icon:'👕', name:'Одяг', desc:'Змінний теплий одяг і взуття.', items:[
    ['🧦','Шкарпетки','Теплі, змінні.','2–3 пари'],['🧥','Тепла куртка','Відповідно до сезону.','1 шт.'],['👟','Зручне взуття','Для тривалої ходьби.','1 пара'],['🧢','Шапка та рукавиці','Для холодної пори.','1 компл.'],['👕','Змінна білизна','Комплект на кожного.','2 компл.'] ]},
  { id:'hyg', icon:'🧴', name:'Гігієна', desc:'Засоби особистої гігієни.', items:[
    ['🧼','Мило','Невелике, у контейнері.','1 шт.'],['🧻','Вологі серветки','Для швидкої гігієни.','2 пач.'],['🪥','Зубна щітка та паста','Дорожній набір.','1 компл.'],['😷','Маски','Захист від пилу.','3–5 шт.'],['🚽','Туалетний папір','Невеликий рулон.','1 шт.'] ]},
  { id:'el', icon:'📱', name:'Електроніка', desc:'Зв\'язок і живлення.', items:[
    ['🔌','Павербанк','Заряджений, 10 000+ мАг.','1 шт.'],['🔗','Кабелі для зарядки','Для всіх пристроїв.','2 шт.'],['📻','Радіоприймач','На батарейках або динамо.','1 шт.'],['📱','Запасний телефон','Простий, з SIM-карткою.','—'] ]},
  { id:'other', icon:'⋯', name:'Інше', desc:'Для дітей, тварин та особливих потреб.', items:[
    ['🧸','Речі для дітей','Іграшка, підгузки, суміш.','—'],['🐾','Речі для тварин','Корм, повідець, документи.','—'],['👓','Окуляри/лінзи','Запасна пара.','1 шт.'],['🔑','Запасні ключі','Від дому та авто.','1 компл.'] ]}
];
kitData.forEach(c => c.items.forEach(it => it.splice(0, 0, c.id)));
// ПАРТНЕРИ: додайте сюди реальних партнерів — { name:'Назва', url:'https://...', note:'коротко' }
const KIT_PARTNERS = {
  med: { text:'Немає чогось із медицини? Аптечку, турнікет, бинти чи ліки можна придбати у наших партнерів.', list:[] },
  el:  { text:'Немає павербанка, ліхтарика чи радіоприймача? Їх можна придбати у наших партнерів.', list:[] }
};
function partnersBlock(id) {
  const p = KIT_PARTNERS[id];
  if (!p) return '';
  const body = p.list.length
    ? `<div class="plist">${p.list.map(x => `<a href="${x.url}" target="_blank" rel="sponsored noopener">🛒 ${x.name}${x.note ? `<small>${x.note}</small>` : ''}</a>`).join('')}</div>`
    : `<div class="ph">Тут з'являться наші партнери. <button style="margin-left:8px" onclick="openLead('Партнерство (магазини, аптеки)')">Стати партнером →</button></div>`;
  return `<div class="partners"><span class="tag">Партнери</span><b>🛒 Чогось не вистачає?</b><p>${p.text}</p>${body}</div>`;
}
let kitCur = 'basic';
const kitState = (() => { try { return JSON.parse(localStorage.getItem('sw_kit') || '{}'); } catch (e) { return {}; } })();
function kitKey(c, i) { return c + ':' + i; }
function renderKit() {
  const total = kitData.reduce((n, c) => n + c.items.length, 0);
  const done = Object.values(kitState).filter(Boolean).length;
  document.getElementById('kitCats').innerHTML = kitData.map(c => {
    const d = c.items.filter((_, i) => kitState[kitKey(c.id, i)]).length;
    return `<button class="kit-cat${c.id === kitCur ? ' active' : ''}" onclick="selectKit('${c.id}')"><span class="ci">${c.icon}</span><span class="cn">${c.name}</span><span class="cc">${d}/${c.items.length}</span></button>`;
  }).join('');
  const c = kitData.find(x => x.id === kitCur);
  const d = c.items.filter((_, i) => kitState[kitKey(c.id, i)]).length;
  document.getElementById('kitMain').innerHTML = `<div class="kit-head"><span class="big">${c.icon}</span><div><h3>${c.name}</h3><p>${c.desc}</p></div><div class="cnt">${d}/${c.items.length}</div></div>
    <div class="kit-items">${c.items.map((it, i) => { const on = kitState[kitKey(c.id, i)]; return `<div class="kit-item${on ? ' checked' : ''}" onclick="toggleKit('${c.id}',${i})"><div class="bx">${on ? '✓' : ''}</div><div class="ii">${it[1]}</div><div class="tx"><b>${it[2]}</b><span>${it[3]}</span></div><div class="q">${it[4]}</div></div>`; }).join('')}</div>${partnersBlock(c.id)}`;
  const pct = Math.round(done / total * 100);
  document.getElementById('kitRing').style.background = `conic-gradient(#5EBFE6 ${pct}%, rgba(255,255,255,.1) 0)`;
  document.getElementById('kitPct').textContent = pct + '%';
  document.getElementById('kitSmall').innerHTML = `Вибрано речей<br>${done} з ${total}`;
}
function openKit(id) { showPage('kit'); selectKit(id); }
function selectKit(id) { kitCur = id; renderKit(); }
function toggleKit(c, i) { const k = kitKey(c, i); kitState[k] = !kitState[k]; try { localStorage.setItem('sw_kit', JSON.stringify(kitState)); } catch (e) {} renderKit(); }
function resetKit() { Object.keys(kitState).forEach(k => delete kitState[k]); try { localStorage.removeItem('sw_kit'); } catch (e) {} renderKit(); }


// ===== Надзвичайні ситуації =====
const emInfo = {
  air:'Сигнал про загрозу авіаудару, ракетного обстрілу або іншої небезпеки з повітря. Важливо швидко та спокійно діяти за інструкцією.',
  fire:'Некероване горіння, що швидко поширюється. Головне — вчасно евакуюватися та викликати рятувальників.',
  shelling:'Артилерійський або ракетний обстріл. Діяти потрібно негайно: сховатися та уникати відкритих місць.',
  radiation:'Підвищений радіаційний фон або викид радіоактивних речовин. Важливо обмежити контакт із забрудненим повітрям.',
  chemical:'Викид небезпечних хімічних речовин. Захистіть дихання та залиште забруднену зону.',
  collapse:'Руйнування будівлі або конструкції. Головне — зберігати спокій і подавати сигнали про себе.',
  flood:'Підйом води, що загрожує житлу та життю. Піднімайтесь на вищу позначку, відключіть електрику.',
  storm:'Сильний вітер, ураган, град чи гроза. Укрийтесь у міцному приміщенні.',
  power:'Тривале відключення електропостачання. Підготуйте джерела світла, тепла та зв\'язку.',
  accident:'Дорожньо-транспортна пригода. Забезпечте безпеку місця, викличте служби та допоможіть постраждалим.',
  injury:'Травма або поранення. Оцініть безпеку, зупиніть кровотечу та викличте допомогу.',
  'extreme-temp':'Спека або сильний холод. Захистіть себе від перегріву чи переохолодження.'
};
const emOrder = ['air','fire','shelling','radiation','chemical','collapse','flood','storm','power','accident','injury','extreme-temp'];
let emCur = 'air', emSec = 'do';
function renderEm() {
  const list = emOrder.map(id => emergencies.find(e => e.id === id)).filter(Boolean);
  document.getElementById('emNav').innerHTML = list.map(e => `<button class="nav-btn${e.id === emCur ? ' active' : ''}" onclick="selectEm('${e.id}')"><span class="ni">${e.icon}</span><span class="nn">${e.title}</span><span class="nc">›</span></button>`).join('');
  const e = emergencies.find(x => x.id === emCur);
  const secs = [
    ['do','1','c-red','Що робити зараз','<ol>' + e.steps.map(t => `<li>${t}</li>`).join('') + '</ol>'],
    ['dont','!','c-yel','Чого не робити','<ul class="x">' + e.donts.map(t => `<li>${t}</li>`).join('') + '</ul>'],
    ['evac','🚪','c-grn','Як евакуюватися','<ol><li>Візьміть документи, телефон, воду, ліки та тривожну валізу.</li><li>Допоможіть дітям, літнім людям і тим, хто не може рухатися самостійно.</li><li>Рухайтесь маршрутом, який вказали рятувальники або місцева влада.</li><li>Повідомте рідних, куди ви прямуєте.</li></ol>'],
    ['call','📞','c-blu','Куди звернутися','<div class="call-row"><a href="tel:101">🚒 101</a><a href="tel:102">🚓 102</a><a href="tel:103">🚑 103</a><a href="tel:112">🆘 112</a></div>'],
    ['help','✚','c-pur','Як надати допомогу постраждалим','<p>Якщо є постраждалі — спершу переконайтесь у власній безпеці, викличте 103 і надайте першу допомогу до приїзду медиків.</p><p><button class="btn-blue" style="width:auto;padding:8px 16px;margin-top:8px" onclick="showPage(\'firstaid\')">Відкрити першу допомогу →</button></p>']
  ];
  document.getElementById('emMain').innerHTML = `<div class="crumbs">🏠 › Надзвичайні ситуації › ${e.title}</div>
    <div class="em-title"><span class="big">${e.icon}</span><div><h3>${e.title}</h3><p>${emInfo[e.id] || ''}</p></div></div>` +
    secs.map(([k, ic, cl, t, body]) => `<div class="acc${emSec === k ? ' open' : ''}"><div class="acc-h" onclick="emSec='${k}';renderEm()"><span class="ai ${cl}">${ic}</span>${t}<span class="ch">⌃</span></div><div class="acc-b">${body}</div></div>`).join('');
}
function selectEm(id) { emCur = id; emSec = 'do'; renderEm(); }
function openEmergency(id) { showPage('emergency'); selectEm(id); }

// ===== Перша допомога =====
const aidDonts = {
  bleeding:['Не знімайте тканину, що просочилась кров\'ю — додайте нову зверху','Не видаляйте предмети, що стирчать із рани','Не накладайте джгут на шию'],
  burns:['Не наносьте олію, зубну пасту чи лід','Не проколюйте міхурі','Не відривайте одяг, що прилип до опіку'],
  fracture:['Не вправляйте кістку самостійно','Не рухайте постраждалого без потреби','Не стягуйте шину занадто туго'],
  unconscious:['Не давайте їжу чи воду','Не залишайте людину без нагляду','Не саджайте та не піднімайте її різко'],
  choking:['Не стукайте по спині, якщо людина може кашляти','Не лізьте пальцями в горло наосліп','Не давайте пити'],
  poisoning:['Не викликайте блювання без вказівки лікаря','Не давайте молоко чи ліки без поради','Не залишайте постраждалого самого'],
  cpr:['Не припиняйте натискання до приїзду медиків','Не бійтесь зламати ребра — головне врятувати життя','Не робіть натискань на живіт'],
  wound:['Не виймайте предмети з рани','Не промивайте глибокі рани спиртом','Не вкладайте вату безпосередньо в рану']
};
let aidCur = 'bleeding', aidTab = 0;
function showAid(id, tab) {
  aidCur = id; aidTab = tab || 0;
  const cat = aidCategories.find(c => c.id === id);
  document.getElementById('aidNav').innerHTML = '<h4>Категорії</h4>' + aidCategories.map(c => `<button class="nav-btn${c.id === id ? ' active' : ''}" onclick="showAid('${c.id}')"><span class="ni">${c.icon}</span><span class="nn">${c.label}</span><span class="nc">›</span></button>`).join('');
  const tabs = ['1. Що робити зараз','2. Чого не робити','3. Коли викликати 103','4. Куди звернутися'];
  const bodies = [
    cat.steps.map((t, i) => `<div class="astep"><span class="n">${i + 1}</span><span>${t}</span></div>`).join(''),
    (aidDonts[id] || []).map((t, i) => `<div class="astep no"><span class="n">✕</span><span>${t}</span></div>`).join(''),
    ['Людина без свідомості або не дихає','Кровотеча не зупиняється або дуже сильна','Утруднене дихання, біль у грудях','Підозра на перелом хребта, голови чи тазу','Сильний опік, отруєння, будь-яка загроза життю'].map(t => `<div class="astep"><span class="n">!</span><span>${t}</span></div>`).join(''),
    '<div class="call-row" style="margin-top:6px"><a href="tel:103">🚑 103 — швидка</a><a href="tel:112">🆘 112 — єдиний номер</a><a href="tel:101">🚒 101 — рятувальники</a></div><p style="margin-top:14px;font-size:13px;color:var(--text-muted)">Називайте точну адресу, стан постраждалого та не кладіть слухавку, поки диспетчер не підтвердить виклик.</p>'
  ];
  document.getElementById('aidMain').innerHTML = `<div class="em-title"><span class="big" style="background:rgba(63,163,204,.18);border-color:var(--accent)">${cat.icon}</span><div><h3>${cat.label}</h3><p>Покрокова інструкція першої допомоги</p></div></div>
    <div class="tabs">${tabs.map((t, i) => `<button class="${i === aidTab ? 'active' : ''}" onclick="showAid('${id}',${i})">${t}</button>`).join('')}</div>${bodies[aidTab]}`;
  document.getElementById('aidWarn').textContent = cat.warning;
  document.getElementById('aidMore').innerHTML = aidCategories.filter(c => c.id !== id).map(c => `<button class="nav-btn" style="border-color:var(--border)" onclick="showAid('${c.id}');window.scrollTo(0,0)"><span class="ni">${c.icon}</span><span class="nn">${c.label}</span><span class="nc">→</span></button>`).join('');
}


// ===== Заявка (форма) =====
// Щоб заявки приходили вам, заповніть ОДНЕ з двох:
//  LEAD_ENDPOINT — безкоштовний сервіс форм, напр. Formspree: 'https://formspree.io/f/xxxxxxxx' (заявка надсилається у фоні)
//  LEAD_EMAIL    — ваш e-mail: форма відкриє поштову програму з готовим листом
const LEAD_ENDPOINT = '';
const LEAD_EMAIL = '';
function openLead(topic) {
  document.getElementById('leadFormWrap').style.display = '';
  document.getElementById('leadOk').style.display = 'none';
  if (topic) { const sel = document.getElementById('leadTopic'); [...sel.options].forEach(o => { if (o.text === topic) sel.value = o.value; }); }
  document.getElementById('leadModal').classList.add('open');
  setTimeout(() => document.getElementById('leadName').focus(), 50);
}
function closeLead() { document.getElementById('leadModal').classList.remove('open'); }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLead(); });
async function submitLead() {
  const v = id => document.getElementById(id).value.trim();
  const name = v('leadName'), contact = v('leadContact');
  document.getElementById('f_name').classList.toggle('err', !name);
  document.getElementById('f_contact').classList.toggle('err', !contact);
  if (!name || !contact) { showToast('Заповніть обов\'язкові поля'); return; }
  if (!document.getElementById('leadConsent').checked) { showToast('Потрібна згода на обробку даних'); return; }
  const data = { name, organization: v('leadOrg'), contact, topic: v('leadTopic'), message: v('leadMsg'), page: 'SafeWay' };
  const done = txt => { document.getElementById('leadOkText').textContent = txt; document.getElementById('leadFormWrap').style.display = 'none'; document.getElementById('leadOk').style.display = ''; };
  if (LEAD_ENDPOINT) {
    const btn = document.getElementById('leadSend'); btn.disabled = true; btn.textContent = 'Надсилаю…';
    try {
      const r = await fetch(LEAD_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      done('Ми зв\'яжемося з вами найближчим часом.');
    } catch (e) { showToast('Не вдалося надіслати. Спробуйте ще раз пізніше.'); }
    btn.disabled = false; btn.textContent = 'Надіслати заявку';
  } else if (LEAD_EMAIL) {
    const body = `Ім'я: ${data.name}\nОрганізація: ${data.organization}\nКонтакт: ${data.contact}\nТема: ${data.topic}\n\n${data.message}`;
    window.location.href = `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent('Заявка SafeWay: ' + data.topic)}&body=${encodeURIComponent(body)}`;
    done('Відкрито вашу поштову програму — натисніть «Надіслати» у листі.');
  } else {
    showToast('Форма ще не підключена до пошти (див. LEAD_EMAIL / LEAD_ENDPOINT у коді)');
  }
}

// ===== Донат =====
// Додайте свої способи: { icon:'🐱', name:'Monobank банка', note:'Картка будь-якого банку', url:'https://send.monobank.ua/jar/...' }
const DONATE = {
  methods: [],
  bank: { recipient: '', iban: '', purpose: 'Благодійний внесок на розвиток SafeWay' }
};
function copyText(t) { (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => showToast('Скопійовано'), () => showToast('Скопіюйте вручну: ' + t)); }
function renderDonate() {
  const m = DONATE.methods.map(x => `<a class="pay-btn" href="${x.url}" target="_blank" rel="noopener"><span class="pi">${x.icon || '💳'}</span><span>${x.name}${x.note ? `<small>${x.note}</small>` : ''}</span></a>`).join('');
  const b = DONATE.bank, hasBank = b.iban;
  const bank = hasBank ? `<div style="margin-top:14px"><b style="font-size:14px">Банківський переказ</b>
    ${b.recipient ? `<div class="req"><span>Отримувач: <code>${b.recipient}</code></span><button class="btn-blue" style="width:auto;margin:0;padding:6px 12px" onclick="copyText('${b.recipient}')">Копіювати</button></div>` : ''}
    <div class="req"><span>IBAN: <code>${b.iban}</code></span><button class="btn-blue" style="width:auto;margin:0;padding:6px 12px" onclick="copyText('${b.iban}')">Копіювати</button></div>
    <div class="req"><span>Призначення: <code>${b.purpose}</code></span></div></div>` : '';
  document.getElementById('donateMethods').innerHTML = (m || hasBank) ? m + bank
    : `<div class="partners" style="margin:0"><b>Реквізити скоро з'являться</b><p>Хочете підтримати нас уже зараз — залишіть заявку, і ми надішлемо реквізити.</p><button onclick="openLead('Підтримка / донат')">Залишити заявку →</button></div>`;
}

// ===== INTERACTIONS =====
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.getElementById('navLinks').classList.remove('open');
  window.scrollTo(0, 0);
  setNavActive(id);
  if (id === 'map') {
    setTimeout(() => { initMap(); map && map.invalidateSize(); }, 100);
  }
  if (id === 'alerts') {
    if (alertTabCur === 'official') loadOfficial(); else showOursMap();
    refreshAlerts(false);
  }
}
function toggleNav() { document.getElementById('navLinks').classList.toggle('open'); }
function toggleSupport(i) { document.getElementById('supp-' + i).classList.toggle('open'); }
let breathTimeout = null;
function startBreathing(e) {
  e.stopPropagation();
  const step = document.getElementById('breathStep');
  if (breathTimeout) { clearTimeout(breathTimeout); breathTimeout = null; step.textContent = 'Натисніть щоб почати дихальну вправу'; e.target.textContent = 'Почати'; return; }
  const phases = [{ text:'Вдих... (4 сек)', d:4000 },{ text:'Затримайте... (7 сек)', d:7000 },{ text:'Видих повільно... (8 сек)', d:8000 }];
  let i=0, round=0; e.target.textContent = 'Зупинити';
  function next() { step.textContent = phases[i].text; breathTimeout = setTimeout(() => { i=(i+1)%3; if(i===0)round++; if(round<4)next(); else { breathTimeout=null; step.textContent='✓ Вправу завершено!'; e.target.textContent='Ще раз'; } }, phases[i].d); }
  next();
}
function showToast(msg) {
  const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

renderAll();
renderAd();
renderDonate();
refreshAlerts(false);
alertTimer = setInterval(() => { if (!document.hidden) refreshAlerts(false); }, ALERTS_REFRESH_MS);
setNavActive('home');