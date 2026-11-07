/* =========================================================
   틈새 한입 · 시연용 프로토타입
   아래 데이터는 모두 시연용 예시예요. (실제 가게·버스 정보 아님)
   lat, lng 는 실제 지도 위 위치(위도, 경도)예요. 가게 위치는 예시라 실제와 달라요.
   ========================================================= */

const STOPS = [
  { id: 'market', name: '남부시장 앞',   lat: 35.8128, lng: 127.1468, bus: '1번 버스', wait: 18 },
  { id: 'hanok',  name: '한옥마을 입구', lat: 35.8160, lng: 127.1505, bus: '2번 버스', wait: 9 },
  { id: 'gaeksa', name: '객사 앞',       lat: 35.8193, lng: 127.1445, bus: '3번 버스', wait: 20 },
];

const SHOPS = [
  {
    id: 'mandu', name: '할매만두', emoji: '🥟', lat: 35.8120, lng: 127.1460, prep: 3,
    menu: '손만두 한 접시', price: 4000, local: true, tag: '시장 골목 간식',
    story: {
      philosophy: '만두피는 매일 아침 직접 밀어요. 기계로 찍으면 편하지만, 손으로 빚어야 쫄깃해요.',
      reason: '시장에서 장사하던 어머니 옆에서 일을 배우다가, 30년 전 제 이름으로 작은 가게를 열었어요.',
      food: '김치와 두부를 넉넉히 넣은 손만두예요. 버스 기다리며 서서 먹기 좋게 한 접시씩 내요.',
    },
    news: '이번 주부터 올해 김장김치로 빚은 김치만두가 나왔어요.',
  },
  {
    id: 'gukbap', name: '새벽 국밥', emoji: '🍲', lat: 35.8136, lng: 127.1480, prep: 5,
    menu: '콩나물국밥 맛보기 반 그릇', price: 5000, local: true, tag: '현지인 아침 단골집',
    story: {
      philosophy: '콩나물은 오래 끓이지 않아요. 아삭함이 살아 있어야 제대로 된 콩나물국밥이죠.',
      reason: '새벽 시장 상인들께 따뜻한 한 끼를 드리고 싶어서 새벽 5시에 문을 열기 시작했어요.',
      food: '여행 오신 분들이 다른 음식도 맛보실 수 있게 반 그릇 크기 맛보기 메뉴를 만들었어요.',
    },
    news: '날이 추워져서 아침 영업을 30분 일찍 시작해요.',
  },
  {
    id: 'sundae', name: '골목 피순대', emoji: '🍢', lat: 35.8114, lng: 127.1452, prep: 7,
    menu: '피순대 반 접시', price: 7000, local: true, tag: '2대째 골목 순댓집',
    story: {
      philosophy: '속 재료 비율은 30년째 그대로예요. 바꾸지 않는 게 제 고집이에요.',
      reason: '아버지가 하시던 순댓집을 이어받아 골목을 지키고 있어요.',
      food: '처음 드시는 분도 부담 없도록 반 접시로 맛볼 수 있게 했어요.',
    },
    news: '골목 담벼락에 손님들이 남긴 사진을 모아 작은 전시를 열었어요.',
  },
  {
    id: 'bibim', name: '한입 비빔', emoji: '🍚', lat: 35.8152, lng: 127.1524, prep: 6,
    menu: '작은 놋그릇 비빔밥', price: 6000, local: false, tag: '한옥마을 맛보기 밥집',
    story: {
      philosophy: '나물 하나하나 따로 무쳐요. 한 숟갈에 여러 맛이 나야 비빔밥이에요.',
      reason: '비빔밥 한 그릇이 부담스럽다는 이야기를 듣고, 가볍게 맛볼 수 있는 작은 그릇을 만들었어요.',
      food: '다른 가게도 둘러보실 수 있게 양을 줄이고, 대신 나물 가짓수는 그대로 담았어요.',
    },
    news: '가을 나물로 바뀐 계절 비빔밥이 나왔어요.',
  },
  {
    id: 'moju', name: '모주 사랑방', emoji: '🍵', lat: 35.8141, lng: 127.1538, prep: 2,
    menu: '따뜻한 모주 한 잔', price: 3000, local: true, tag: '전통 음료 쉼터',
    story: {
      philosophy: '생강, 대추, 계피를 넣고 오래 달여요. 급하게 만들면 맛이 얕아져요.',
      reason: '할머니가 겨울마다 끓여 주시던 모주 맛을 여행 오신 분들께도 알리고 싶었어요.',
      food: '막걸리에 약재를 넣고 달인 전통 음료예요. 알코올이 아주 조금 남아 있어요.',
    },
    news: '추운 날 정류장에서 기다리는 분들께 첫 잔을 반값에 드려요.',
  },
  {
    id: 'jjajang', name: '옛날 물짜장', emoji: '🍜', lat: 35.8185, lng: 127.1458, prep: 8,
    menu: '물짜장 작은 그릇', price: 6000, local: true, tag: '40년 동네 중국집',
    story: {
      philosophy: '해물은 그날 들어온 것만 써요. 다 떨어지면 그날 장사는 끝이에요.',
      reason: '동네 사람들이 퇴근길에 편하게 들르는 가게를 만들고 싶어 40년 전 문을 열었어요.',
      food: '걸쭉한 국물에 해물을 듬뿍 넣은 물짜장이에요. 매운맛과 순한 맛 중에 고를 수 있어요.',
    },
    news: '가게 40주년 기념으로 단골손님 사진을 벽에 걸고 있어요.',
  },
  {
    id: 'omogari', name: '천변 오모가리', emoji: '🐟', lat: 35.8098, lng: 127.1498, prep: 15,
    menu: '오모가리탕 1인분', price: 12000, local: true, tag: '천변 노포',
    story: {
      philosophy: '뚝배기에 끓여야 끝까지 뜨겁고 깊은 맛이 나요.',
      reason: '천변에서 민물고기를 잡던 시절부터 이 자리를 지켜 왔어요.',
      food: '시래기를 듬뿍 넣고 얼큰하게 끓여요. 시간 여유가 있을 때 앉아서 드시길 권해요.',
    },
    news: '시래기를 새로 말렸어요. 다음에 오시면 겨울 시래기로 끓여 드릴게요.',
  },
  {
    id: 'jeonbyeong', name: '따끈 전병', emoji: '🥞', lat: 35.8168, lng: 127.1490, prep: 1,
    menu: '수제 전병 세 장', price: 2000, local: false, tag: '걸으며 먹는 간식',
    story: {
      philosophy: '반죽에 쌀가루를 섞어 얇고 바삭하게 구워요.',
      reason: '은퇴하고 손주 간식을 굽다가, 동네 아이들이 좋아해서 가게를 냈어요.',
      food: '걸으면서 먹기 좋은 얇은 전병이에요. 주문하면 1분 안에 받을 수 있어요.',
    },
    news: '흑임자 전병이 새로 나왔어요.',
  },
];

/* ---------- 설정 ---------- */
const WALK_M_PER_MIN = 70;  // 걷는 속도 (분당 약 70m)
const DETOUR = 1.3;         // 직선거리보다 실제 길이 더 길다고 보는 비율
const KEY = 'tteum-hanip-demo-v1';
const AUTO_OFF_MIN = 30;   // "지금 한가해요" 자동 꺼짐 시간(분)
const BUFFER_MIN = 2;      // 버스 놓치지 않게 두는 여유 시간(분)
const NEXT_BUS_MIN = 15;   // 버스가 지나간 뒤 다음 버스까지(분)

/* ---------- 도우미 ---------- */
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
const won = n => n.toLocaleString('ko-KR') + '원';
const shopById = id => SHOPS.find(s => s.id === id);
const fmt = sec => {
  const m = Math.floor(sec / 60), s = sec % 60;
  return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
};
const ago = t => {
  const m = Math.floor((Date.now() - t) / 60000);
  return m < 1 ? '방금' : m + '분 전';
};

/* ---------- 상태 (두 탭을 열어도 같이 움직이도록 저장) ---------- */
function defaultState() { return { available: {}, incoming: {}, saved: [] }; }
function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return Object.assign(defaultState(), JSON.parse(raw));
  } catch (e) { return null; }
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* 저장 불가 환경에서도 동작 */ }
}

let state = load() || defaultState();
let stopId = STOPS[0].id;
let remain = STOPS[0].wait * 60;      // 버스 도착까지 남은 초
let ownerShopId = 'gukbap';
let openShopId = null;
let lastMin = null;
let lastAvail = new Set(availableIds());
const lastIncoming = {};
SHOPS.forEach(s => { lastIncoming[s.id] = (state.incoming[s.id] || []).length; });

/* ---------- 계산 ---------- */
function isAvail(id) { const t = state.available[id]; return !!t && t > Date.now(); }
function availableIds() { return SHOPS.filter(s => isAvail(s.id)).map(s => s.id); }
function currentStop() { return STOPS.find(s => s.id === stopId); }
function distM(a, b) {
  const R = 6371000, r = Math.PI / 180;
  const dLat = (b.lat - a.lat) * r, dLng = (b.lng - a.lng) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
function walkMin(shop) {
  return Math.max(1, Math.round(distM(shop, currentStop()) * DETOUR / WALK_M_PER_MIN));
}
function tripMin(shop) { return walkMin(shop) * 2 + shop.prep + BUFFER_MIN; }
function remainMin() { return Math.floor(remain / 60); }
function fits(shop) { return tripMin(shop) <= remainMin(); }

function badges(shop) {
  let h = '';
  if (isAvail(shop.id)) h += '<span class="badge green">🟢 바로 앉음</span>';
  if (shop.local) h += '<span class="badge local">🏠 현지인 단골</span>';
  return h;
}

/* ---------- 여행객 화면 ---------- */
function renderBus() {
  $('#busNo').textContent = currentStop().bus;
  $('#busTime').textContent = fmt(Math.max(0, remain));
  $('#busTime').classList.toggle('soon', remain < 300);
}

/* 실제 지도 (Leaflet + OpenStreetMap/CARTO 지도) */
let map = null, rangeCircle = null;
const shopMarkers = {}, stopMarkers = {};

function stopIcon(p) {
  return L.divIcon({
    className: 'mk', iconSize: [0, 0],
    html: `<span class="stop ${p.id === stopId ? 'on' : ''}"><span class="stop-emoji">🚏</span><span class="stop-name">${p.name}</span></span>`,
  });
}
function shopIcon(s) {
  const cls = ['pin', fits(s) ? 'fit' : 'nofit', isAvail(s.id) ? 'avail' : ''].join(' ');
  return L.divIcon({
    className: 'mk', iconSize: [0, 0],
    html: `<span class="${cls}"><span class="pin-emoji">${s.emoji}</span><span class="pin-name">${s.name}</span></span>`,
  });
}
// 버스 오기 전에 걸어서 다녀올 수 있는 최대 거리 (준비 시간 1분 기준)
function reachRadius() {
  const oneWayMin = (remainMin() - BUFFER_MIN - 1) / 2;
  return Math.max(0, oneWayMin * WALK_M_PER_MIN / DETOUR);
}

function initMap() {
  if (typeof L === 'undefined') {
    $('#map').innerHTML = '<p class="map-off">지도를 불러오려면 인터넷 연결이 필요해요.</p>';
    return;
  }
  const st = currentStop();
  map = L.map('map', { scrollWheelZoom: false }).setView([st.lat, st.lng], 16);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  window.addEventListener('load', refreshMapSize);
  rangeCircle = L.circle([st.lat, st.lng], {
    radius: reachRadius(), color: '#e4572e', weight: 1.5, dashArray: '5 6',
    fillColor: '#e4572e', fillOpacity: 0.06, interactive: false,
  }).addTo(map);
  STOPS.forEach(p => {
    stopMarkers[p.id] = L.marker([p.lat, p.lng], { icon: stopIcon(p), title: p.name + ' 정류장' })
      .addTo(map).on('click', () => setStop(p.id));
  });
  SHOPS.forEach(s => {
    shopMarkers[s.id] = L.marker([s.lat, s.lng], { icon: shopIcon(s), title: s.name })
      .addTo(map).on('click', () => openSheet(s.id));
  });
}

function renderMap() {
  if (!map) return;
  STOPS.forEach(p => stopMarkers[p.id].setIcon(stopIcon(p)).setZIndexOffset(p.id === stopId ? 500 : 0));
  SHOPS.forEach(s => shopMarkers[s.id].setIcon(shopIcon(s)).setZIndexOffset(isAvail(s.id) ? 1000 : fits(s) ? 300 : 0));
  const st = currentStop();
  rangeCircle.setLatLng([st.lat, st.lng]).setRadius(reachRadius());
}

function refreshMapSize() {
  if (map) setTimeout(() => map.invalidateSize(), 0);
}

function card(o) {
  const s = o.shop;
  const ok = o.trip <= remainMin();
  const pct = Math.min(100, Math.round(o.trip / Math.max(1, remainMin()) * 100));
  return `
  <button type="button" class="card ${ok ? '' : 'dim'}" data-shop="${s.id}">
    <span class="card-emoji">${s.emoji}</span>
    <span class="card-main">
      <span class="card-title">${s.name} ${badges(s)}</span>
      <span class="card-menu">${s.menu} · ${won(s.price)}</span>
      <span class="card-time">🚶 왕복 ${o.walk * 2}분 · 🍳 준비 ${s.prep}분 · 여유 ${BUFFER_MIN}분 = <b>${o.trip}분</b></span>
      <span class="bar"><i style="width:${pct}%"></i></span>
    </span>
  </button>`;
}

function renderGap() {
  const all = SHOPS.map(shop => ({ shop, walk: walkMin(shop), trip: tripMin(shop) }));
  const ok = all.filter(o => o.trip <= remainMin())
    .sort((a, b) => (isAvail(b.shop.id) - isAvail(a.shop.id)) || a.trip - b.trip);
  const no = all.filter(o => o.trip > remainMin()).sort((a, b) => a.trip - b.trip);

  $('#gapCount').textContent = ok.length;
  $('#gapHint').innerHTML = ok.length
    ? `버스가 오기 전 <b>${remainMin()}분</b> 안에 다녀올 수 있는 곳이 <b>${ok.length}곳</b> 있어요.`
    : `남은 시간이 짧아요. 이번 버스는 그냥 타고, 다음 틈새를 노려 보세요.`;
  $('#gapList').innerHTML = ok.map(card).join('') +
    (no.length ? `<details class="later"><summary>이번 버스엔 빠듯한 곳 ${no.length}곳</summary>${no.map(card).join('')}</details>` : '');
}

function renderFav() {
  const saved = state.saved.map(shopById).filter(Boolean);
  $('#favCount').textContent = saved.length;
  $('#favList').innerHTML = saved.length
    ? saved.map(s => `
      <div class="fav">
        <button type="button" class="fav-head" data-shop="${s.id}">
          <span class="card-emoji">${s.emoji}</span>
          <span><b>${s.name}</b><small>${s.menu}</small></span>
        </button>
        <p class="news"><b>📮 사장님 소식</b>${s.news}</p>
        <div class="fav-actions"><button type="button" class="ghost" data-ship="${s.id}">📦 택배로 주문하기</button></div>
      </div>`).join('')
    : `<div class="empty"><p>⭐</p><p>마음에 든 가게를 단골로 저장하면<br>여행이 끝나도 사장님 소식을 받을 수 있어요.</p></div>`;
}

function renderSheet() {
  if (!openShopId) return;
  const s = shopById(openShopId);
  const w = walkMin(s), t = tripMin(s), ok = t <= remainMin();
  const saved = state.saved.includes(s.id);
  $('#sheetContent').innerHTML = `
    <div class="sh-top">
      <span class="sh-emoji">${s.emoji}</span>
      <div>
        <h2>${s.name}</h2>
        <p class="sh-tag">${s.tag}</p>
        <div class="sh-badges">${badges(s)}</div>
      </div>
    </div>
    <div class="sh-time ${ok ? 'ok' : 'no'}">
      ${ok ? '✅ 버스 오기 전에 다녀올 수 있어요' : '⏰ 이번 버스엔 빠듯해요'}
      <small>${currentStop().name}에서 도보 ${w}분 · 준비 ${s.prep}분 · 왕복 포함 총 ${t}분 / 남은 시간 ${remainMin()}분</small>
    </div>
    <div class="sh-menu"><span>대표 메뉴</span><b>${s.menu}</b><em>${won(s.price)}</em></div>
    <h3>사장님 이야기</h3>
    <div class="story">
      <p><b>🍲 음식 철학</b>${s.story.philosophy}</p>
      <p><b>🌱 가게를 시작한 계기</b>${s.story.reason}</p>
      <p><b>📖 이 음식 이야기</b>${s.story.food}</p>
    </div>
    <div class="sh-actions">
      <button type="button" class="ghost ${saved ? 'saved' : ''}" data-save="${s.id}">${saved ? '⭐ 단골 저장됨' : '☆ 단골로 저장'}</button>
      <button type="button" class="primary" data-go="${s.id}">🚶 지금 갈게요</button>
    </div>`;
}

function openSheet(id) { openShopId = id; renderSheet(); $('#sheet').classList.add('on'); }
function closeSheet() { openShopId = null; $('#sheet').classList.remove('on'); }

/* ---------- 사장님 화면 ---------- */
function renderAutoOff() {
  const t = state.available[ownerShopId];
  const left = t ? Math.max(0, Math.round((t - Date.now()) / 1000)) : 0;
  $('#autoOff').textContent = left > 0
    ? `${fmt(left)} 뒤 자동으로 꺼져요 · 다시 누르면 바로 꺼져요`
    : `누르면 ${AUTO_OFF_MIN}분 동안 여행객 지도에 표시돼요`;
}

function renderOwner() {
  const s = shopById(ownerShopId);
  const on = isAvail(s.id);
  $('#ownerShop').value = s.id;
  $('#ownerGreet').textContent = `${s.emoji} ${s.name} 사장님, 안녕하세요!`;

  const btn = $('#idleBtn');
  btn.classList.toggle('on', on);
  btn.setAttribute('aria-pressed', String(on));
  $('.big-emoji', btn).textContent = on ? '🟢' : '🙋';
  $('.big-text', btn).textContent = on ? '손님 받는 중' : '지금 한가해요';
  $('.big-sub', btn).textContent = on ? '근처 여행객 지도에 표시되고 있어요' : '누르면 근처 여행객에게 알려요';
  renderAutoOff();

  const inc = state.incoming[s.id] || [];
  const now = Date.now();
  $('#statComing').textContent = inc.filter(x => now - x.t < (x.walk + 10) * 60000).length;
  $('#statVisit').textContent = inc.length;
  $('#feed').innerHTML = inc.length
    ? inc.slice().reverse().map(x => `
      <li>
        <span>🚶</span>
        <div><b>여행객 1명이 오고 있어요</b><small>${x.stop}에서 도보 ${x.walk}분 · ${x.menu}</small></div>
        <time>${ago(x.t)}</time>
      </li>`).join('')
    : '<li class="empty-feed">아직 알림이 없어요.<br>손님이 없을 때 "지금 한가해요"를 눌러 보세요.</li>';
}

/* ---------- 알림 ---------- */
function toast(which, msg) {
  const el = which === 'owner' ? $('#oToast') : $('#tToast');
  el.textContent = msg;
  el.classList.add('on');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove('on'), 3000);
}

function flashPin(id) {
  const el = shopMarkers[id] && shopMarkers[id].getElement();
  const pin = el && el.querySelector('.pin');
  if (pin) pin.classList.add('flash');
}

/* ---------- 전체 다시 그리기 + 변화 감지 ---------- */
function renderAll() {
  renderBus();
  renderMap();
  renderGap();
  renderFav();
  renderSheet();
  renderOwner();
}

function sync() {
  const nowAvail = new Set(availableIds());
  const newlyAvail = [...nowAvail].filter(id => !lastAvail.has(id));
  lastAvail = nowAvail;

  let newGuest = false;
  SHOPS.forEach(s => {
    const n = (state.incoming[s.id] || []).length;
    if (n > lastIncoming[s.id] && s.id === ownerShopId) newGuest = true;
    lastIncoming[s.id] = n;
  });

  renderAll();

  newlyAvail.forEach(id => {
    toast('traveler', `🟢 ${shopById(id).name}, 지금 바로 앉을 수 있어요!`);
    flashPin(id);
  });
  if (newGuest) toast('owner', '🔔 여행객 1명이 가게로 오고 있어요!');
}

/* ---------- 동작 ---------- */
function setStop(id) {
  stopId = id;
  remain = currentStop().wait * 60;
  $('#stopSelect').value = id;
  $('#waitRange').value = currentStop().wait;
  lastMin = remainMin();
  if (map) map.panTo([currentStop().lat, currentStop().lng]);
  sync();
}

function toggleIdle() {
  if (isAvail(ownerShopId)) {
    delete state.available[ownerShopId];
    toast('owner', '알림을 껐어요.');
  } else {
    state.available[ownerShopId] = Date.now() + AUTO_OFF_MIN * 60000;
    toast('owner', '📣 근처 여행객 지도에 표시했어요!');
  }
  save();
  sync();
}

function toggleSave(id) {
  const i = state.saved.indexOf(id);
  if (i >= 0) state.saved.splice(i, 1);
  else {
    state.saved.push(id);
    toast('traveler', `⭐ ${shopById(id).name}을(를) 단골로 저장했어요.`);
  }
  save();
  sync();
}

function goTo(id) {
  const s = shopById(id);
  const w = walkMin(s);
  state.incoming[id] = [...(state.incoming[id] || []), { t: Date.now(), walk: w, menu: s.menu, stop: currentStop().name }];
  save();
  closeSheet();
  sync();
  toast('traveler', `🚶 사장님께 알렸어요! ${s.name}까지 도보 ${w}분이에요.`);
}

function resetDemo() {
  state = defaultState();
  save();
  closeSheet();
  SHOPS.forEach(s => { lastIncoming[s.id] = 0; });
  lastAvail = new Set();
  setStop(STOPS[0].id);
  toast('traveler', '시연을 처음 상태로 되돌렸어요.');
}

/* ---------- 이벤트 연결 ---------- */
function init() {
  $('#stopSelect').innerHTML = STOPS.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
  $('#ownerShop').innerHTML = SHOPS.map(s => `<option value="${s.id}">${s.emoji} ${s.name}</option>`).join('');

  // 좁은 화면: 여행객/사장님 화면 전환
  $$('.view-switch button').forEach(b => b.addEventListener('click', () => {
    document.body.dataset.view = b.dataset.view;
    $$('.view-switch button').forEach(x => x.classList.toggle('on', x === b));
    refreshMapSize();
  }));

  // 탭
  $$('.tabs button').forEach(b => b.addEventListener('click', () => {
    $$('.tabs button').forEach(x => x.classList.toggle('on', x === b));
    $$('.pane').forEach(p => p.classList.toggle('on', p.id === 'pane-' + b.dataset.tab));
    if (b.dataset.tab === 'map') refreshMapSize();
  }));

  $('#stopSelect').addEventListener('change', e => setStop(e.target.value));
  $('#waitRange').addEventListener('input', e => {
    remain = Number(e.target.value) * 60;
    lastMin = remainMin();
    sync();
  });

  // 여행객 화면 안의 버튼들 (지도 핀, 카드, 시트 버튼 등)
  $('#traveler .phone').addEventListener('click', e => {
    const el = e.target.closest('[data-shop],[data-stop],[data-close],[data-save],[data-go],[data-ship]');
    if (!el) return;
    if (el.dataset.close !== undefined) return closeSheet();
    if (el.dataset.save) return toggleSave(el.dataset.save);
    if (el.dataset.go) return goTo(el.dataset.go);
    if (el.dataset.ship) return toast('traveler', '📦 택배 주문은 다음 단계에서 연결할 기능이에요.');
    if (el.dataset.stop) return setStop(el.dataset.stop);
    if (el.dataset.shop) return openSheet(el.dataset.shop);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });

  // 사장님 화면
  $('#ownerShop').addEventListener('change', e => { ownerShopId = e.target.value; sync(); });
  $('#idleBtn').addEventListener('click', toggleIdle);
  $('#resetBtn').addEventListener('click', resetDemo);

  // 다른 탭에서 바뀐 내용 반영 (여행객/사장님 화면을 따로 열어 시연할 때)
  window.addEventListener('storage', e => {
    if (e.key !== KEY) return;
    state = load() || defaultState();
    sync();
  });

  // 1초마다: 버스 시계, 자동 꺼짐
  setInterval(() => {
    remain -= 1;
    if (remain <= 0) {
      remain = NEXT_BUS_MIN * 60;
      toast('traveler', `🚌 버스가 도착했어요. 다음 버스는 ${NEXT_BUS_MIN}분 뒤예요.`);
    }
    renderBus();

    let expired = false;
    for (const id in state.available) {
      if (state.available[id] <= Date.now()) { delete state.available[id]; expired = true; }
    }
    if (expired) save();

    const m = remainMin();
    if (expired || m !== lastMin) {
      lastMin = m;
      $('#waitRange').value = Math.min(30, Math.max(3, m));
      sync();
    } else {
      renderAutoOff();
    }
  }, 1000);

  lastMin = remainMin();
  initMap();
  renderAll();
}

init();
