# Web CV — how it works and how to update it

The old **Download CV** button pointed at a PDF on OneDrive. It now opens
`/cv/` — a full web version of the CV that anyone can read in the browser and
download, and that you can edit yourself from `/cv/admin/` once Firebase is
connected.

```
cv/
├── index.html          the public CV page
├── cv-data.js          built-in content (fallback + starting point)
├── cv-common.js        shared helpers: Firebase loading, saving, exports
├── firebase-config.js  ← paste your Firebase project config here
├── admin/index.html    the login + editing page
└── README.md           this file
```

## What works right now, with no setup

* `/cv/` renders the whole CV from `cv-data.js`.
* **Download PDF** opens the browser print dialog with a print stylesheet
  applied — choose *Save as PDF*. This keeps the PDF identical to the web copy,
  so there is only ever one version to maintain.
* **Download Markdown** saves the CV as a `.md` file — the same shape as the
  master content bank, handy for tailoring an application.
* The page is responsive and works offline once loaded.

## Connecting Firebase (so you can edit without touching code)

Roughly five minutes, and it stays within the free Spark tier.

1. **Create the project** — <https://console.firebase.google.com> → *Add
   project* (e.g. `indika-portfolio`). Google Analytics is not needed.
2. **Firestore** — Build → *Firestore Database* → *Create database* → start in
   **production mode** → pick a region near you (`australia-southeast1`).
3. **Authentication** — Build → *Authentication* → *Get started* → enable
   **Email/Password**. Then *Users* → *Add user* → your email
   (`iamarasinghe96@gmail.com`) and a password. This is the login for the admin
   page.
4. **Register the web app** — Project settings (⚙) → *Your apps* → the `</>`
   web icon → register → copy the `firebaseConfig` values.
5. **Paste the config** into `cv/firebase-config.js`, commit and push. These
   values are public by design; access is controlled by the rules below, not by
   hiding them.
6. **Security rules** — Firestore → *Rules* → paste this → *Publish*:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /portfolio/cv {
         allow read: if true;
         allow write: if request.auth != null
                      && request.auth.token.email == 'iamarasinghe96@gmail.com';
       }
     }
   }
   ```

   Anyone can read the CV (it is a public CV), only your signed-in account can
   change it.
7. **Authorised domains** — Authentication → *Settings* → *Authorised domains*
   → make sure `iamarasinghe96.github.io` is listed (add it if not).
8. **Publish the first copy** — open `/cv/admin/`, sign in, and press
   **Publish changes**. That writes the current content into Firestore as
   `portfolio/cv`. From then on the public page reads the Firestore copy.

## Editing day to day

Open `https://iamarasinghe96.github.io/himate/cv/admin/`, sign in, edit, press
**Publish changes**. The public page picks it up on the next load — no commit,
no deploy.

* Every multi-line box follows one rule: **one line = one item** (one bullet,
  one skill, one paragraph). Blank lines are ignored.
* Sections can be reordered, added and deleted. Four section shapes exist:

  | Type      | Looks like                        | Used for                          |
  |-----------|-----------------------------------|-----------------------------------|
  | `text`    | paragraphs                        | summary, referees                 |
  | `pairs`   | label / value grid                | at-a-glance facts                 |
  | `groups`  | named groups of chips             | skills, certifications, awards    |
  | `entries` | title, subtitle, meta, bullets    | experience, projects, education   |

* **Download JSON** takes a backup. **Import JSON** restores one. **Reset to
  built-in content** goes back to `cv-data.js` (nothing is live until you press
  Publish).

## Keeping the offline fallback fresh

`cv-data.js` is what visitors see if Firebase is ever unreachable. Every few
months: admin → *Download JSON* → paste the JSON as the value of
`window.CV_DATA` in `cv/cv-data.js` → commit. Optional, but it keeps the
fallback honest.

## Deliberately left out of the public page

The master content bank holds a few things that should not sit on a public URL:
date of birth, NIC number, the full street address, and referees' personal
phone numbers and emails. The page shows city/state, a contact email and
"referees available on request" instead. Add them through the admin page if a
specific application needs them — but a public CV is the wrong place for them.
