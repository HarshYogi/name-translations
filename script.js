/* ==========================================================
   EDIT THIS SECTION FIRST
   ========================================================== */

// 1) Where her ranking should arrive.
//    Paste your Web3Forms access key below. Web3Forms emails the result to the
//    address that key was created for, the moment she presses send.
//    MAILTO is only a backup: if the automatic send fails, she gets a button that
//    opens her mail app with the ranking filled in, addressed to this address.
const CONFIG = {
  WEB3FORMS_KEY: "5dc9077a-9f04-48f4-9a4c-c645fe7566c4",
  MAILTO: "harshparkar27@gmail.com",
  HER_NAME: "Aakansha"
};

// 2) Your six gifts. Replace name, desc and url for each day.
//    Leave url as "" if a gift has no website (the link is simply hidden).
const DAY6_URL = ""; // paste this page's final link here once it is hosted
const GIFTS = [
  { day: 1, emoji: "🌌", name: "The Day You Were Born", desc: "The sky above Banaras on the night you were born. Touch the stars and enjoy your sky.", url: "https://day-you-born.vercel.app" },
  { day: 2, emoji: "💞", name: "Revive our first date moments", desc: "A simple game that brings back little moments from our first date.", url: "https://recreate-memory.vercel.app" },
  { day: 3, emoji: "🗺️", name: "Customize our adventure date", desc: "Together we customize our first virtual adventure date.", url: "https://customize-adventure.vercel.app" },
  { day: 4, emoji: "🪄", name: "If you were a...", desc: "If you were a ___, you'd be ___. Your own little world.", url: "https://if-you-were-a.vercel.app" },
  { day: 5, emoji: "⭐", name: "Name Constellation", desc: "Your name drawn as a constellation in the sky.", url: "https://name-constellation-rho.vercel.app/" },
  { day: 6, emoji: "✨", name: "Your Name in Many Languages", desc: "The fairy world of gates, with your name in nine languages.", url: DAY6_URL }
];

/* ==========================================================
   REALMS
   ========================================================== */
const R = [
  { k: "intro", realm: "The Enchanted Forest", b1: "#0b1a14", b2: "#1d3a2a", a: "#ffd98a", pm: "fire", pc: "255,230,150" },
  { realm: "Hindi · The Lotus Lake of Diyas", b1: "#1a0f2e", b2: "#4a1d5c", a: "#ffb3d9", pm: "rise", pc: "255,200,110",
    s: "आकांक्षा", f: "'Noto Serif Devanagari',serif", rom: "Aakansha · aa-kaan-kshaa", w: "इच्छा · चाह · अभिलाषा",
    m: "The root of her name: a deep wish, a longing for something high",
    wish: "A name born in a lotus lake, where every wish is lit as a tiny flame and set afloat." },
  { realm: "Japanese · The Cherry Blossom Garden", b1: "#2a1030", b2: "#6b2a5a", a: "#ffc2d8", pm: "fall", pc: "255,190,215",
    s: "アーカンシャ", f: "'Noto Serif JP',serif", rom: "Ākanshā · aa-kan-sha", w: "憧れ (akogare)",
    m: "a tender yearning toward something beautiful",
    wish: "あなたの夢が、桜のようにそっと、そして一斉に咲きますように。", lang: "ja", wf: "'Noto Serif JP',serif",
    en: { wish: "May your dreams bloom like cherry blossoms, softly, and then all at once." } },
  { realm: "French · The Rose Garden at Twilight", b1: "#2b0f1c", b2: "#7a2a3f", a: "#ff9fb5", pm: "fall", pc: "255,140,170",
    s: "Aakansha", f: "'Cormorant Garamond',serif", rom: "ah-kahn-cha", w: "Aspiration",
    m: "un désir profond, un rêve qui monte",
    wish: "Que ton cœur choisisse toujours les plus belles roses, et les plus hauts rêves.",
    en: { m: "a deep desire, a dream that rises", wish: "May your heart always choose the most beautiful roses, and the highest dreams." } },
  { realm: "Spanish · The Golden Courtyard", b1: "#2e1408", b2: "#a2431c", a: "#ffcf70", pm: "drift", pc: "255,200,110",
    s: "Aakansha", f: "'Cormorant Garamond',serif", rom: "ah-kahn-sha", w: "Anhelo",
    m: "a longing that warms like the last sun of the day",
    wish: "Que cada deseo tuyo encuentre su camino hasta ti.",
    en: { wish: "May each of your wishes find its way to you." } },
  { realm: "Italian · The Twilight Canals", b1: "#101a33", b2: "#3b5a8f", a: "#ffe2a8", pm: "twinkle", pc: "255,230,170",
    s: "Aakansha", f: "'Cormorant Garamond',serif", rom: "ah-kahn-sha", w: "Brama",
    m: "an ardent longing, a wish held close",
    wish: "Che la vita ti porti tutto ciò che il tuo cuore desidera, con calma e con meraviglia.",
    en: { wish: "May life bring you everything your heart desires, with calm and with wonder." } },
  { realm: "Arabic · The Starlit Oasis", b1: "#0a0f2a", b2: "#1f2a63", a: "#f5d78a", pm: "twinkle", pc: "255,235,170",
    s: "آكانشا", f: "'Noto Naskh Arabic',serif", rom: "Aakansha · aa-kaan-shaa", w: "أُمْنِيَة (umniyya)",
    m: "a wish whispered to the stars",
    wish: "لتتذكّر كل نجمة تتمنّين عندها أمنيةً اسمَكِ.", lang: "ar", wf: "'Noto Naskh Arabic',serif", rtl: 1,
    en: { wish: "May every star you wish upon remember your name." } },
  { realm: "Irish · The Emerald Hills", b1: "#0a1f1a", b2: "#1f5a45", a: "#a8ffcf", pm: "drift", pc: "170,255,210",
    s: "Aakansha", f: "'Cormorant Garamond',serif", rom: "ah-kahn-sha", w: "Ardmhian",
    m: "high aspiration, the wish that climbs hills",
    wish: "Go n-éirí an bóthar leat, go raibh an ghaoth go brách ag do chúl.", lang: "ga",
    en: { wish: "May the road rise to meet you, and may the wind always be at your back. (A traditional Irish blessing.)" } },
  { realm: "Greek · The Moonlit Temple", b1: "#0d1630", b2: "#3a4f86", a: "#e6efff", pm: "twinkle", pc: "230,240,255",
    s: "Ακάνσα", f: "'Cormorant Garamond',serif", rom: "ah-KAHN-sah", w: "Πόθος (Pothos)",
    m: "longing, the ache of reaching for what is beautiful",
    wish: "Στην αρχαία Ελλάδα, ο Πόθος ήταν το πνεύμα της λαχτάρας. Ο δικός σου ας σε ανεβάζει ψηλά.", lang: "el",
    en: { wish: "In ancient Greece, Pothos was the spirit of longing. May yours lift you higher." } },
  { realm: "Thai · The Lantern Sky", b1: "#1e0f05", b2: "#7a3a0a", a: "#ffb347", pm: "rise", pc: "255,190,90",
    s: "อากันชา", f: "'Noto Sans Thai',sans-serif", rom: "aa-kan-chaa", w: "ความปรารถนา",
    m: "khwam pratthana: a heartfelt desire",
    wish: "ขอให้ทุกเรื่องราวความรักทำให้หัวใจของเธอเต้นแรง และขอให้โคมทุกดวงพาคำอธิษฐานของเธอลอยขึ้นฟ้า", lang: "th", wf: "'Noto Sans Thai',sans-serif",
    en: { wish: "May every love story make your heart flutter, and every lantern carry your wish up to the sky." } },
  { k: "end", realm: "The Heart of the Fairy World", b1: "#07041a", b2: "#2a1058", a: "#ffe9a8", pm: "twinkle", pc: "255,233,168" },
  { k: "rank", realm: "The Last Gate", b1: "#14072b", b2: "#4b1d5e", a: "#ffd98a", pm: "twinkle", pc: "255,225,160" }
];

const N = R.length, RANK = N - 1;
const sc = document.getElementById("scene"), dots = document.getElementById("dots");
dots.innerHTML = R.map(() => "<i></i>").join("");
let cur = 0, busy = false, mode = "fire", pc = "255,230,150";
const fu = (h, d) => `<div class="fu" style="--d:${d}s">${h}</div>`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function scene(i) {
  const r = R[i], st = document.documentElement.style;
  st.setProperty("--a", r.a); st.setProperty("--b1", r.b1); st.setProperty("--b2", r.b2);
  mode = r.pm; pc = r.pc;
  [...dots.children].forEach((d, j) => d.classList.toggle("on", j === i));
  let h = "";
  if (r.k === "intro") {
    h = `<div class="intro">${fu(`<div class="tag">Day 6 · A fairy world is waiting</div>`, .3)}<h1 class="fu" style="--d:.9s">Aakansha</h1></div>
    ${fu(`<p class="hi">इच्छा, चाह, अभिलाषा, कामना, या किसी ऊँचे लक्ष्य को पाने की तीव्र भावना</p>`, 1.8)}
    ${fu(`<p class="wish">Your name is a wish. Let's see how the world says it.</p>`, 2.6)}
    ${fu(`<button class="big" id="go">Open the first gate ✦</button>`, 3.2)}`;
  } else if (r.k === "end") {
    const pos = [["आकांक्षा", 50, 12, 2.2], ["アーカンシャ", 20, 28, 1.5], ["Aakansha", 50, 46, 3], ["آكانشا", 80, 28, 1.8], ["Ακάνσα", 14, 58, 1.6], ["อากันชา", 84, 58, 1.8], ["Aspiration", 30, 80, 1.2], ["Anhelo", 70, 80, 1.4], ["Brama", 50, 70, 1.2], ["Ardmhian", 50, 92, 1.1]];
    h = `<div class="tag fu">Every gate was opened</div>
    <div class="const">${pos.map((p, k) => `<span style="left:${p[1]}%;top:${p[2]}%;font-size:${p[3]}rem;animation-delay:${-k * .7}s">${p[0]}</span>`).join("")}</div>
    ${fu(`<p class="wish">Nine languages, one name, and one meaning: a wish for something higher. Aakansha, may every one of yours come true. ✦</p>`, 1.5)}
    ${fu(`<button class="big" id="go">I need one more minute of yours ✦</button>`, 2.4)}`;
  } else if (r.k === "rank") {
    h = rankScene();
  } else {
    const en = r.en ? `<div class="trwrap"><button class="tr" id="tr" aria-expanded="false" aria-label="Show English translation" title="English translation"><span aria-hidden="true">🌐</span> EN</button>
      <div class="en" id="en" hidden>${r.en.m ? esc(r.en.m) + "<br>" : ""}${esc(r.en.wish || "")}</div></div>` : "";
    h = `<div class="tag fu">${r.realm}</div>
    <svg class="name" viewBox="0 0 600 130"><text x="300" y="88" text-anchor="middle" style="font-family:${r.f}" ${r.rtl ? 'direction="rtl"' : ""}>${r.s}</text></svg>
    ${fu(`<div class="rom">${r.rom}</div>`, 2.6)}
    ${fu(`<div class="mean"><b>${r.w}</b><span>${r.m}</span></div>`, 3.1)}
    ${fu(`<p class="wish"${r.lang ? ` lang="${r.lang}"` : ""}${r.rtl ? ' dir="rtl"' : ""}${r.wf ? ` style="font-family:${r.wf};max-width:min(24em,100%);line-height:1.8"` : ""}>${r.wish}</p>${en}`, 3.7)}
    ${fu(`<button class="big" id="go">Open the next gate ✦</button>`, 4.3)}`;
  }
  sc.innerHTML = h; sc.scrollTop = 0;
  const g = document.getElementById("go");
  if (g) g.onclick = () => go(i + 1);
  const tr = document.getElementById("tr");
  if (tr) tr.onclick = () => {
    const box = document.getElementById("en"), open = box.hidden;
    box.hidden = !open; tr.setAttribute("aria-expanded", open);
  };
  if (r.k === "rank") initRank();
}

/* ---------- gate transition ---------- */
const wait = t => new Promise(r => setTimeout(r, t));
async function go(n) {
  if (busy || n < 0 || n >= N || n === cur) return;
  busy = true;
  const g = document.getElementById("gate");
  g.classList.add("show"); await wait(450);
  g.classList.add("open"); await wait(1050);
  cur = n; scene(n); await wait(350);
  g.classList.remove("show"); await wait(800);
  g.classList.remove("open"); busy = false;
}
let x0 = null;
addEventListener("touchstart", e => x0 = e.touches[0].clientX, { passive: true });
addEventListener("touchend", e => {
  if (x0 === null) return;
  const d = e.changedTouches[0].clientX - x0; x0 = null;
  if (cur === RANK) return;            // no swiping on the ranking page (it would fight with dragging)
  if (d < -70) go(cur + 1); else if (d > 70) go(cur - 1);
});
addEventListener("keydown", e => {
  if (cur === RANK || /TEXTAREA|INPUT/.test(document.activeElement.tagName)) return;
  if (e.key === "ArrowRight") go(cur + 1);
  if (e.key === "ArrowLeft") go(cur - 1);
});

/* ==========================================================
   RANKING
   ========================================================== */
const LABELS = ["Her favourite", "Second", "Third", "Fourth", "Fifth", "Sixth"];
let slots = Array(6).fill(null), sel = null, note = "", openInfo = new Set(), drag = null;

function rankScene() {
  return `<div class="rank" id="rank">
    <h2 class="fu">One last thing, Akshu</h2>
    ${fu(`<p class="help">Put the six gifts in order, from the one you liked the most to the one you liked the least.</p>`, .6)}
    <div class="slots" id="slots"></div>
    <div class="tray" id="tray" aria-label="Gifts not yet placed"></div>
    <textarea id="note" placeholder="Anything your heart wants to say to me" aria-label="Optional note"></textarea>
    <button class="big" id="send" disabled>Send my ranking ✦</button>
    <p class="sendnote" id="sendnote"></p>
  </div>`;
}

function giftHTML(i) {
  const g = GIFTS[i];
  const link = g.url ? `<a href="${esc(g.url)}" target="_blank" rel="noopener">Visit it again ↗</a>` : "";
  return `<div class="gift${sel === i ? " sel" : ""}${openInfo.has(i) ? " open" : ""}" data-i="${i}">
    <div class="t">${g.emoji} ${esc(g.name)}</div><small>Day ${g.day}</small>
    <button class="ib" aria-label="Show details for ${esc(g.name)}" title="Details">ⓘ</button>
    <div class="info">${esc(g.desc)}<br>${link}</div></div>`;
}

function renderRank() {
  document.getElementById("slots").innerHTML = slots.map((id, s) =>
    `<div class="slot" data-s="${s}"><span class="n">${s + 1}</span>${id === null ? `<span class="hint">${LABELS[s]}</span>` : giftHTML(id)}</div>`).join("");
  document.getElementById("tray").innerHTML = GIFTS.map((_, i) => slots.includes(i) ? "" : giftHTML(i)).join("");
  document.getElementById("send").disabled = slots.includes(null);
}

function place(id, s) {
  const from = slots.indexOf(id), displaced = slots[s];
  if (from >= 0) slots[from] = displaced;   // swap if it came from another slot
  slots[s] = id; sel = null;
}
function unplace(id) { const k = slots.indexOf(id); if (k >= 0) slots[k] = null; sel = null; }

function initRank() {
  const ta = document.getElementById("note");
  ta.value = note; ta.oninput = () => note = ta.value;
  document.getElementById("send").onclick = send;
  document.getElementById("slots").onclick = e => {
    if (e.target.closest(".gift")) return;
    const s = e.target.closest(".slot");
    if (s && sel !== null) { place(sel, +s.dataset.s); renderRank(); }
  };
  document.getElementById("tray").onclick = e => {
    if (!e.target.closest(".gift") && sel !== null && slots.includes(sel)) { unplace(sel); renderRank(); }
  };
  renderRank();
}

document.addEventListener("pointerdown", e => {
  if (cur !== RANK) return;
  const info = e.target.closest(".ib");
  if (info) {
    const i = +info.closest(".gift").dataset.i;
    openInfo.has(i) ? openInfo.delete(i) : openInfo.add(i);
    renderRank(); return;
  }
  const g = e.target.closest(".gift");
  if (!g || e.target.closest("a")) return;
  drag = { id: +g.dataset.i, el: g, x: e.clientX, y: e.clientY, moved: false, ghost: null };
});
document.addEventListener("pointermove", e => {
  if (!drag) return;
  if (!drag.moved && Math.hypot(e.clientX - drag.x, e.clientY - drag.y) > 8) {
    drag.moved = true;
    drag.ghost = drag.el.cloneNode(true); drag.ghost.classList.add("ghost");
    document.body.appendChild(drag.ghost); drag.el.classList.add("drag");
  }
  if (drag.moved) {
    drag.ghost.style.left = e.clientX + "px"; drag.ghost.style.top = e.clientY + "px";
    document.querySelectorAll(".slot.over").forEach(s => s.classList.remove("over"));
    const t = document.elementFromPoint(e.clientX, e.clientY), s = t && t.closest(".slot");
    if (s) s.classList.add("over");
  }
});
document.addEventListener("pointerup", e => {
  if (!drag) return;
  const d = drag; drag = null;
  if (d.ghost) d.ghost.remove();
  if (d.moved) {
    const t = document.elementFromPoint(e.clientX, e.clientY);
    const s = t && t.closest(".slot"), tray = t && t.closest(".tray");
    if (s) place(d.id, +s.dataset.s); else if (tray) unplace(d.id);
  } else {
    const slotEl = d.el.closest(".slot");
    if (sel !== null && sel !== d.id && slotEl) place(sel, +slotEl.dataset.s);   // tap gift, then tap another placed gift: swap/replace
    else sel = sel === d.id ? null : d.id;
  }
  renderRank();
});
document.addEventListener("pointercancel", () => {
  if (!drag) return;
  if (drag.ghost) drag.ghost.remove();
  drag = null; if (cur === RANK) renderRank();
});

/* ---------- sending ---------- */
function buildText() {
  const lines = slots.map((id, s) => {
    const g = GIFTS[id];
    return `${s + 1}. Day ${g.day}: ${g.name}${s === 0 ? "  (favourite)" : ""}`;
  });
  return `${CONFIG.HER_NAME}'s gift ranking, favourite first:\n\n${lines.join("\n")}\n\nHer note: ${note.trim() || "(none)"}`;
}
function mailtoURL() {
  return `mailto:${CONFIG.MAILTO}?subject=${encodeURIComponent(CONFIG.HER_NAME + "'s gift ranking")}&body=${encodeURIComponent(buildText())}`;
}
function thanks(msg) {
  sc.innerHTML = `<div class="rank" style="text-align:center">
    <h2 class="fu">Thank you ✦</h2>
    ${fu(`<p class="help">${msg}</p>`, .6)}</div>`;
}
async function send() {
  const btn = document.getElementById("send"), nt = document.getElementById("sendnote");
  btn.disabled = true;
  const configured = CONFIG.WEB3FORMS_KEY && !CONFIG.WEB3FORMS_KEY.includes("YOUR_");
  const fallback = () => {
    nt.innerHTML = `Couldn't send it automatically. <a href="${mailtoURL()}" style="color:var(--a)">Tap here to send it by email instead</a>.`;
    btn.disabled = false;
  };
  if (!configured) { fallback(); return; }
  nt.textContent = "Sending…";
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        access_key: CONFIG.WEB3FORMS_KEY,
        subject: `${CONFIG.HER_NAME}'s gift ranking`,
        from_name: CONFIG.HER_NAME,
        message: buildText()
      })
    });
    const data = await res.json();
    if (!res.ok || !data.success) throw new Error("not sent");
    thanks("Your ranking has been sent. Every one of those gifts was made with you in mind.");
  } catch (err) { fallback(); }
}

/* ==========================================================
   PARTICLES
   ========================================================== */
const cv = document.getElementById("c"), cx = cv.getContext("2d"), P = [];
function rs() { cv.width = innerWidth * devicePixelRatio; cv.height = innerHeight * devicePixelRatio; }
rs(); addEventListener("resize", rs);
for (let i = 0; i < 70; i++) P.push({ x: Math.random(), y: Math.random(), r: Math.random() * 2.5 + 1, s: Math.random() * .0006 + .0002, p: Math.random() * 6.28, w: Math.random() * .5 + .5 });
function frame(t) {
  const W = cv.width, H = cv.height, d = devicePixelRatio; cx.clearRect(0, 0, W, H);
  for (const q of P) {
    let a = .8, r = q.r * d;
    if (mode === "fall") { q.y += q.s * 1.6; q.x += Math.sin(t / 900 + q.p) * .0005; if (q.y > 1.05) { q.y = -.05; q.x = Math.random(); } r *= 1.6; }
    else if (mode === "rise") { q.y -= q.s * 1.2; q.x += Math.sin(t / 1200 + q.p) * .0004; if (q.y < -.05) { q.y = 1.05; q.x = Math.random(); } r *= 1.8; }
    else if (mode === "twinkle") { a = .3 + .7 * Math.abs(Math.sin(t / 900 * q.w + q.p)); }
    else { q.y += Math.sin(t / 1500 + q.p) * .0004; q.x += Math.cos(t / 1800 + q.p) * .0004; a = .4 + .6 * Math.abs(Math.sin(t / 700 + q.p)); if (q.x < 0) q.x = 1; if (q.x > 1) q.x = 0; if (q.y < 0) q.y = 1; if (q.y > 1) q.y = 0; }
    const gr = cx.createRadialGradient(q.x * W, q.y * H, 0, q.x * W, q.y * H, r * 4);
    gr.addColorStop(0, `rgba(${pc},${a})`); gr.addColorStop(1, `rgba(${pc},0)`);
    cx.fillStyle = gr; cx.beginPath();
    if (mode === "fall") cx.ellipse(q.x * W, q.y * H, r * 1.6, r * .9, q.p + t / 700, 0, 6.28);
    else cx.arc(q.x * W, q.y * H, r * 4, 0, 6.28);
    cx.fill();
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
scene(0);