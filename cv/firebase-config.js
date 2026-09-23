/* ════════════════════════════════════════════════════════════════════
   FIREBASE CONFIGURATION
   ────────────────────────────────────────────────────────────────────
   Firebase console → Project settings → Your apps → Web app → SDK setup
   ════════════════════════════════════════════════════════════════════ */

window.FIREBASE_CONFIG = {
  apiKey: 'AIzaSyBnSidaZj-cZzs44HdtpGbE-RyBk--zHdM',
  authDomain: 'indika-portfolio.firebaseapp.com',
  projectId: 'indika-portfolio',
  storageBucket: 'indika-portfolio.firebasestorage.app',
  messagingSenderId: '572845846948',
  appId: '1:572845846948:web:11501485e5cffcb295d131'
};

/* Where the live CV document lives in Firestore. */
window.CV_DOC = {
  collection: 'portfolio',
  doc: 'cv'
};

/* Only these signed-in emails may save changes. */
window.ADMIN_EMAILS = [
  'iamarasinghe96@gmail.com'
];
