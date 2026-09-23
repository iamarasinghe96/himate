# Web CV - how it works and how to update it

The old **Download CV** button pointed at a PDF on OneDrive. It now opens
`/cv/` - a full web version of the CV that anyone can read in the browser and
download, and that you can edit yourself from the Firebase-backed admin page.

```
cv/
├── index.html          the public CV page
├── cv-data.js          built-in content (fallback + starting point)
├── cv-common.js        shared helpers: Firebase loading, saving, exports
├── firebase-config.js  your Firebase project config
├── admin/index.html    the login + editing page
└── README.md           this file
```

## What the page gives a visitor

* The whole CV, with a section list that stays on screen while they read - a
  sidebar on desktop, a strip of chips on a phone. On a phone the download
  buttons slide away as you scroll down so only the section strip holds the
  top, and come back as soon as you scroll up.
* **Download PDF** opens the browser print dialog with a print stylesheet
  applied - choose *Save as PDF*. The printed version is deliberately plain:
  serif type, navy section rules, name and contact line only, no headline, no
  colour blocks, dates aligned right. It follows the same shape as the Word CV
  template, so it reads as a normal CV rather than a printed web page.
* **Download Markdown** saves the CV as a `.md` file, with links kept, for
  tailoring an application.
* **Email me** (and the email chip) opens the visitor's own mail app with the
  subject and a short approach message already drafted.
* Certificates, employers, schools and projects are hyperlinked to their
  evidence - credentials, milestone folders and live project sites.

## Connecting Firebase (already done for this site)

The config in `cv/firebase-config.js` is filled in, so the page reads the live
copy from Firestore. **Publish once from the admin page** to create that copy:
open `/cv/admin/`, sign in, press **Publish changes**. Until that first publish
the page falls back to the content bundled in `cv-data.js`, which is why it
still looks correct today.

<details>
<summary>Setting this up again from scratch</summary>



Roughly five minutes, and it stays within the free Spark tier.

1. **Create the project** - <https://console.firebase.google.com> → *Add
   project* (e.g. `indika-portfolio`). Google Analytics is not needed.
2. **Firestore** - Build → *Firestore Database* → *Create database* → start in
   **production mode** → pick a region near you (`australia-southeast1`).
3. **Authentication** - Build → *Authentication* → *Get started* → enable
   **Email/Password**. Then *Users* → *Add user* → your email
   (`iamarasinghe96@gmail.com`) and a password. This is the login for the admin
   page.
4. **Register the web app** - Project settings (⚙) → *Your apps* → the `</>`
   web icon → register → copy the `firebaseConfig` values.
5. **Paste the config** into `cv/firebase-config.js`, commit and push. These
   values are public by design; access is controlled by the rules below, not by
   hiding them.
6. **Security rules** - Firestore → *Rules* → paste this → *Publish*:

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
7. **Authorised domains** - Authentication → *Settings* → *Authorised domains*
   → make sure `iamarasinghe96.github.io` is listed (add it if not).
8. **Publish the first copy** - open `/cv/admin/`, sign in, and press
   **Publish changes**. That writes the current content into Firestore as
   `portfolio/cv`. From then on the public page reads the Firestore copy.

</details>

## Reaching the admin page

The admin link is hidden. It appears in the footer of the CV page only when the
address ends in `#admin`:

```
https://iamarasinghe96.github.io/himate/cv/#admin
```

The admin page itself is always at `/cv/admin/` if you would rather bookmark it.
Hiding the link is cosmetic - what actually protects the content is the Firebase
login plus the Firestore rules above.

## Editing day to day

Open the admin page, sign in, edit, press **Publish changes**. The public page
picks it up on the next load - no commit, no deploy.

* Every multi-line box follows one rule: **one line = one item** (one bullet,
  one skill, one paragraph). Blank lines are ignored.
* **To make any list item a link**, write it as `Label | https://...`. That
  works for skills, certifications, awards and the at-a-glance values.
* **To link a few words inside a sentence**, write `[those words](https://...)`
  in any paragraph, bullet or meta line. A `mailto:` address works too - that is
  how "Contact details on request" opens a drafted email asking for the referees.
* Each experience, education, project or story entry also has:
  * **Link on the title** - the title becomes a link.
  * **Extra links** - one per line as `Label | https://...`, shown as
    `[Milestones]` `[Credentials]` style links, the same as the Word CV.
  * **Skill labels** - comma separated, shown as chips under the entry. They
    are used on Signature Work and never appear in the printed PDF.
* A `chart` section takes one slice per line as `Label | percentage`, a section
  id to jump to when the chart is clicked (e.g. `#sec-projects`) and a caption.
  The slice colours are fixed and were checked for colour-blind separation, so
  the chart stays readable without relying on colour alone - every slice also
  carries its label and percentage in the legend.
* **Web page only** (checkbox per section) leaves a section out of the
  downloaded PDF while keeping it on the web page. At a Glance, Selected
  Projects and Signature Work are set this way, which is what keeps the PDF to
  a normal CV shape. Tick it on more sections when you want a shorter PDF.
* Sections can be reordered, added and deleted. Four section shapes exist:

  | Type      | Looks like                        | Used for                          |
  |-----------|-----------------------------------|-----------------------------------|
  | `text`    | paragraphs                        | summary                           |
  | `pairs`   | label / value grid                | at-a-glance facts                 |
  | `groups`  | named groups of chips             | skills, certifications, awards    |
  | `entries` | title, subtitle, meta, bullets    | experience, projects, education, stories |
  | `chart`   | donut of shares, with a legend    | the profile mix                   |

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
phone numbers and emails. The page shows city and state, a contact email, and
referees by name and LinkedIn with "contact details on request". Add the rest
through the admin page if a specific application needs it - but a public CV is
the wrong place for them.

## House style

No em dashes anywhere on the site - plain hyphens only. If you paste text from
Word or from a chat assistant, check it before publishing.
