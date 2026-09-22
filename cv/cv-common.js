/* ════════════════════════════════════════════════════════════════════
   SHARED HELPERS FOR THE WEB CV AND THE ADMIN PANEL
   Firebase is loaded lazily from the CDN, and only when configured,
   so the CV page still works as plain static HTML without it.
   ════════════════════════════════════════════════════════════════════ */

const FB = 'https://www.gstatic.com/firebasejs/10.12.2/';

export const SECTION_TYPES = ['text', 'pairs', 'groups', 'entries'];

/* ── Basic helpers ───────────────────────────────────────────────── */
export function esc(str) {
  return String(str == null ? '' : str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

export function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/** The built-in copy shipped in cv-data.js (loaded as a classic script). */
export function defaultCV() {
  return deepCopy(window.CV_DATA);
}

export function isConfigured() {
  const c = window.FIREBASE_CONFIG || {};
  return Boolean(c.apiKey && c.projectId && c.appId);
}

/* ── Firebase (lazy) ─────────────────────────────────────────────── */
let _fb = null;

export async function getFirebase() {
  if (!isConfigured()) throw new Error('Firebase is not configured yet.');
  if (_fb) return _fb;

  const [{ initializeApp }, authMod, storeMod] = await Promise.all([
    import(`${FB}firebase-app.js`),
    import(`${FB}firebase-auth.js`),
    import(`${FB}firebase-firestore.js`)
  ]);

  const app  = initializeApp(window.FIREBASE_CONFIG);
  const auth = authMod.getAuth(app);
  const db   = storeMod.getFirestore(app);
  _fb = { app, auth, db, authMod, storeMod };
  return _fb;
}

function docPath() {
  const d = window.CV_DOC || { collection: 'portfolio', doc: 'cv' };
  return [d.collection, d.doc];
}

/**
 * Load the CV. Returns { data, source } where source is
 * 'firebase' | 'local' | 'default'.
 */
export async function loadCV({ preferCache = true } = {}) {
  if (preferCache) {
    try {
      const cached = localStorage.getItem('himate_cv_cache');
      if (cached && !isConfigured()) {
        return { data: JSON.parse(cached), source: 'local' };
      }
    } catch (e) { /* ignore unreadable cache */ }
  }

  if (isConfigured()) {
    try {
      const { db, storeMod } = await getFirebase();
      const [col, id] = docPath();
      const snap = await storeMod.getDoc(storeMod.doc(db, col, id));
      if (snap.exists()) {
        const data = snap.data();
        if (data && Array.isArray(data.sections)) {
          try { localStorage.setItem('himate_cv_cache', JSON.stringify(data)); } catch (e) {}
          return { data, source: 'firebase' };
        }
      }
    } catch (err) {
      console.warn('[cv] Firebase load failed, using local content:', err);
    }
  }

  try {
    const cached = localStorage.getItem('himate_cv_cache');
    if (cached) return { data: JSON.parse(cached), source: 'local' };
  } catch (e) {}

  return { data: defaultCV(), source: 'default' };
}

/** Save the CV to Firestore (admin only). */
export async function saveCV(data) {
  const { db, auth, storeMod } = await getFirebase();
  if (!auth.currentUser) throw new Error('You are not signed in.');
  const [col, id] = docPath();
  const payload = deepCopy(data);
  payload.updatedAt = new Date().toISOString();
  payload.updatedBy = auth.currentUser.email || '';
  await storeMod.setDoc(storeMod.doc(db, col, id), payload);
  try { localStorage.setItem('himate_cv_cache', JSON.stringify(payload)); } catch (e) {}
  return payload;
}

/* ── Markdown export (same content bank format) ──────────────────── */
export function toMarkdown(cv) {
  const m = cv.meta || {};
  const out = [];
  out.push(`# ${m.name || ''}`);
  if (m.headline) out.push(`**${m.headline}**`);
  const contact = [m.location, m.phone, m.email, m.linkedin, m.portfolio]
    .filter(Boolean).join(' · ');
  if (contact) out.push(contact);
  if (m.workRights) out.push(`_${m.workRights}_`);
  out.push('');

  (cv.sections || []).forEach(sec => {
    out.push(`## ${sec.title || ''}`);
    out.push('');
    if (sec.type === 'text') {
      (sec.paragraphs || []).forEach(p => { out.push(p); out.push(''); });
    } else if (sec.type === 'pairs') {
      (sec.items || []).forEach(it => out.push(`- **${it.label}:** ${it.value}`));
      out.push('');
    } else if (sec.type === 'groups') {
      (sec.groups || []).forEach(g => {
        out.push(`### ${g.name || ''}`);
        (g.items || []).forEach(i => out.push(`- ${i}`));
        out.push('');
      });
    } else if (sec.type === 'entries') {
      (sec.entries || []).forEach(e => {
        out.push(`### ${e.title || ''}`);
        if (e.subtitle) out.push(`*${e.subtitle}*`);
        if (e.meta) out.push(e.meta);
        if (e.subtitle || e.meta) out.push('');
        (e.bullets || []).forEach(b => out.push(`- ${b}`));
        out.push('');
      });
    }
  });

  if (m.updated) out.push(`_Last updated: ${m.updated}_`);
  return out.join('\n');
}

export function downloadBlob(content, filename, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
