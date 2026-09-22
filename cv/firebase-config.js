/* ════════════════════════════════════════════════════════════════════
   FIREBASE CONFIGURATION
   ────────────────────────────────────────────────────────────────────
   Paste the config object from:
     Firebase console → Project settings → Your apps → Web app → SDK setup
   and fill in the values below. Until then the CV page simply renders
   the built-in content from cv-data.js and the admin page will tell you
   Firebase is not configured yet.

   Full step-by-step setup lives in cv/README.md.
   These values are NOT secrets — Firebase web config is public by design.
   Access is controlled by Firestore security rules (see README).
   ════════════════════════════════════════════════════════════════════ */

window.FIREBASE_CONFIG = {
  apiKey:            '',   // e.g. 'AIzaSy...'
  authDomain:        '',   // e.g. 'indika-portfolio.firebaseapp.com'
  projectId:         '',   // e.g. 'indika-portfolio'
  storageBucket:     '',   // e.g. 'indika-portfolio.appspot.com'
  messagingSenderId: '',   // e.g. '123456789012'
  appId:             ''    // e.g. '1:1234:web:abcd'
};

/* Where the live CV document lives in Firestore. */
window.CV_DOC = { collection: 'portfolio', doc: 'cv' };

/* Only these signed-in emails may save changes (also enforced in rules). */
window.ADMIN_EMAILS = ['iamarasinghe96@gmail.com'];
