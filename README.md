# משפחת אנגל באיטליה — Family Trip Dashboard

> A private, collaborative trip-planning web app built for a multi-family group vacation to Umbria, Italy (Summer 2026). Fully Hebrew, mobile-first, and designed so every family member — regardless of technical skill — can open it on their phone and use it instantly.

---

## Overview

This is a single-page web application that acts as a shared command center for five families traveling together. It replaces scattered WhatsApp messages, Google Docs, and spreadsheets with one organized, always-in-sync dashboard that anyone can open from a link.

The app is protected by a shared family access code, syncs all data in real time across every device using Firebase, and keeps a local offline copy so it still works even when the WiFi at the villa is unreliable.

No installation. No account. No technical setup required by family members — just open the link, enter the code, and use it.

---

## Features

### For Family Members

| Feature | Description |
|---|---|
| **Countdown** | Live countdown to departure displayed on every screen |
| **Day-by-Day Itinerary** | Collaborative schedule — anyone can fill in or edit activities for each day of the trip |
| **Places to Visit** | Shared wishlist of sights, towns, and attractions to add and vote on |
| **Flights & Villa** | All booking details, confirmation codes, host contacts, and a one-tap Waze navigation button |
| **Kosher & Shabbat** | Restaurant database, synagogue finder, Shabbat candle-lighting time, and a full kashrut guide for Italy based on Tzohar guidelines |
| **Kosher near the Villa** | Specific guidance for the rural Otricoli area — what to buy, where the nearest supermarkets are, and what doesn't need a hechsher |
| **Shared Packing List** | Family-wide checklist of communal items everyone needs to bring |
| **Personal Packing Lists** | Separate checklist per family, with checkbox tracking |
| **Pre-Trip Tasks** | Assignable to-do list (passports, insurance, eSIMs, etc.) with family responsibility labels |
| **Pre-Flight Checklist** | Per-family departure checklist so nothing gets forgotten at the airport |
| **Emergency Contacts** | Quick-access list: villa host, Israeli embassy, Italian emergency services, and local synagogue |
| **Family Board** | Announcement board for updates, reminders, and messages — newest posts shown on the home screen. Posts support threaded comments, available both on the Board and directly from the home-screen "recent updates" |
| **Recent Activity** | A site-wide audit log: every add / edit / delete across the app is recorded with a timestamp and a short description, grouped by day (today / yesterday / date) |
| **Flight Folder** | A per-family document folder for passports, flight tickets, travel insurance, and international driving licenses. Each family has an editable member list (seeded with the two adults, add children freely) and **every document is tagged to the specific people it belongs to — down to the individual child**. Images are auto-compressed; PDFs are supported. View / download / delete per document, filter by family member |
| **Photo Album** | A shared **Google Photos** album: one-tap to open the album for uploading from the phone, plus an in-page highlight grid (paste image URLs) that blends into the site design. The album link is shared via Firebase so everyone sees the same album |
| **Wallet / Travel Pass** | A screenshot-friendly boarding-pass-style card on the Flights screen summarizing both flights, dates, routes and the villa confirmation code — save it to the phone's photos, or print / save as PDF |
| **Who Brings What** | Per-family consolidated packing view that merges a family's personal list with the shared items tagged to them, with live progress |
| **Inline Editing** | Edit items in place across packing, tasks, contacts, places, kosher, attractions and pre-flight lists |
| **Interactive Trip Map** | Leaflet/OpenStreetMap map with category filters, per-point navigation, smart place/address search, delete-from-map, and distance-from-villa |
| **Global Search** | One search box (also `Ctrl/Cmd+K`) that finds places, contacts, packing items, board posts, tasks and more across every tab |
| **Dark Mode** | Light/dark theme toggle, remembered per device and defaulting to the system preference |
| **Tap to Call / Navigate** | Phone numbers dial directly; addresses and map points open turn-by-turn navigation |
| **Offline Mode** | If internet is unavailable, the app serves the last-saved version of all data automatically |
| **Data Backup** | One-tap JSON export of all trip data; restore from file at any time |
| **Add to Home Screen** | Works as a PWA — can be installed to a phone's home screen like a native app |

---

## How to Use (Family Guide)

*No technical knowledge needed. This guide is for everyone.*

### Opening the App

1. Open the link shared by the trip organizer in your browser (Chrome, Safari, or Firefox all work).
2. You'll see a login screen. Type the **4-digit family code** and tap **כניסה** (Enter).
3. The app opens. Your login stays active — you won't need to type the code again unless you tap the 🔒 lock button.

> **Tip:** On your phone, tap the browser menu → "Add to Home Screen" to save the app as an icon on your phone. It will open instantly like a regular app.

---

### Navigating the App

The layout adapts to your device:

- **On a phone:** a bottom bar gives one-tap access to the four most-used sections — 🏠 Home, 🗓️ Itinerary, 🎒 Packing, 📞 Contacts — plus a **עוד** (More) button that opens a clean grid of every other section.
- **On a tablet/computer:** a side menu lists all sections, grouped by theme (the trip, food & kashrut, packing & prep, communication).

The header also has a 🔍 **search** button (or press `Ctrl/Cmd+K`) to jump to anything instantly, and a 🌙/☀️ button to switch between light and dark mode.

Full list of sections: Home, Itinerary, Trip Map, Places, Attractions, Flights & Villa, Kosher & Shabbat, Kosher near the Villa, Meal Rota, Packing, Tasks, Pre-flight Checklist, Contacts, the Board, Recent Activity, the Flight Folder, and the Photo Album.

---

### Adding & Editing Content

**Itinerary:** Tap any day card and type directly into the morning, noon, or evening fields. Changes save automatically the moment you move to the next field.

**Adding a place, contact, or packing item:** Fill in the text fields at the top of each section and tap the green **הוספה** (Add) button.

**Checking off a packing item:** Tap the checkbox next to the item. It marks as done and syncs to everyone else's app.

**Posting to the Board:** Go to the Board tab, choose your family name from the dropdown, write your message, and tap **פרסום הודעה**.

**Deleting an item:** Tap the ✕ button on any card.

---

### If the App Shows "Not Connected"

An amber dot in the header means the app can't reach the internet. **Don't worry — the app still works.** It will show you the last saved version of everything. Any *changes* you make while offline may not sync to other family members until the connection is restored, so for important updates (like a change of plans), try to be online.

---

### Backing Up Your Data

From the **Home** tab, tap **⬇️ ייצוא JSON** to download a backup file of all trip data to your device. To restore from a backup, tap **⬆️ ייבוא JSON** and choose the file.

This is a good idea to do once before the trip, in case anything needs to be recovered.

---

## Developer Setup

The app is intentionally simple — a single HTML file with no build step, no package manager, and no external framework. Anyone with a text editor can work on it.

### File Structure

```
italy-trip/
├── index.html       # The entire application (HTML + CSS + JS, ~3,000 lines)
├── manifest.json    # PWA manifest for "Add to Home Screen" support
├── icon-192.png     # (Optional) App icon for home screen, 192×192px
├── icon-512.png     # (Optional) App icon for home screen, 512×512px
└── README.md
```

The file is organized top-to-bottom as: design tokens + component CSS (with light/dark themes) → app-shell markup → a single `<script>` containing config, storage helpers, shared utilities, theme + modal + search modules, the navigation shell, and one renderer per tab.

### Running Locally

No server required. Open `index.html` directly in a browser:

```bash
# macOS / Linux
open index.html

# Or simply drag the file into a browser window
```

> **Note:** Some browsers block `fetch()` requests when opening files via `file://` (CORS restriction). If data doesn't load locally, serve the file with any static server:
>
> ```bash
> npx serve .
> # or
> python3 -m http.server 8080
> ```

### Deploying

Drop `index.html` and `manifest.json` onto any static hosting provider:

- **GitHub Pages** — Push to the `gh-pages` branch of a public repo and enable Pages in Settings.
- **Netlify / Vercel** — Drag the folder into the dashboard; it deploys in seconds.
- **Firebase Hosting** — Run `firebase deploy` if you want the app and database on the same project.

### Firebase Configuration

The app uses **Firebase Realtime Database** for shared data sync. The database URL is hardcoded in `index.html`:

```javascript
const FIREBASE_URL = "https://engel-italy-trip-default-rtdb.firebaseio.com";
```

To adapt this app for a different event or family:

1. Create a new Firebase project at [firebase.google.com](https://firebase.google.com).
2. Enable **Realtime Database** (Start in test mode for simplicity, then lock down rules before sharing).
3. Replace the `FIREBASE_URL` constant with your new database URL.
4. Update `ACCESS_CODE`, `FAMILIES`, `TRIP_START`, `TRIP_END`, and the hardcoded flight/villa details in the `defaultStay()` function.

**Firebase security rules.** Because the app talks to Firebase over the unauthenticated REST API (no Firebase Auth — the `ACCESS_CODE` is only checked client-side), the rules must keep the data keys publicly readable/writable for sync to work. Fully open rules (`.read: true` / `.write: true` at the **root**) are dangerous, though: anyone with the URL can wipe the entire database or inject arbitrary keys in a single request, and Firebase emails a warning about them.

The hardened rules in [`database.rules.json`](database.rules.json) are the recommended baseline. They lock the database **root** (no root-level write, no unknown keys) while keeping public read/write only on the known data keys, so existing data and live sync are completely unaffected:

```json
{
  "rules": {
    ".read": true,
    ".write": false,
    "itinerary-days": { ".read": true, ".write": true },
    "places":         { ".read": true, ".write": true },
    "board":          { ".read": true, ".write": true }
    // ...one entry per data key; see database.rules.json for the full list
  }
}
```

Paste the full contents of `database.rules.json` into **Firebase Console → Realtime Database → Rules → Publish** (this changes only the rules, never the data).

> **Residual risk.** These rules stop the worst case (full-database deletion / arbitrary writes) but, by design, still allow anyone with the URL to read and edit the family data — that is unavoidable for an unauthenticated client. To also restrict *who* can read/write, add **Firebase App Check** (below) or switch the client to Firebase Authentication and require `auth != null` in the rules.

### Firebase App Check (recommended next layer)

[App Check](https://firebase.google.com/docs/app-check) blocks requests that don't originate from *your* app — using an invisible reCAPTCHA v3 check — **without** asking family members to log in. The wiring is already built into `index.html` (it loads the Firebase SDK on demand, attaches an App Check token via the `X-Firebase-AppCheck` header on every Realtime Database REST call, and **fails open** so the app keeps working if App Check is unreachable).

It ships **disabled**. To turn it on:

1. **Get your `firebaseConfig`** — Firebase Console → ⚙️ Project settings → *General* → *Your apps*. Register a Web app if there isn't one, then copy `apiKey`, `authDomain`, `projectId`, `appId` into the `FIREBASE_CONFIG` object in `index.html`.
2. **Register for App Check** — Firebase Console → *App Check* → *Apps* → register this web app with the **reCAPTCHA v3** provider. Copy the generated **site key** into `APPCHECK_SITE_KEY` in `index.html`.
3. **Roll out in Monitor mode first** — Firebase Console → *App Check* → *APIs* → *Realtime Database*: leave it **un-enforced (Monitor)**. Open the app, make an edit, and confirm in the App Check dashboard that requests register as **Verified**.
4. **Enforce** — once verified traffic looks healthy, switch Realtime Database to **Enforce**. From then on, requests without a valid App Check token are rejected.

> Tip: because the header turns each request into a CORS preflight, do the Monitor-mode check (step 3) before enforcing — that confirms the browser ↔ database round-trip works end to end with zero risk to live data.

### Key Architecture Decisions

**Single-file design:** Chosen deliberately so the app can be shared as a link with zero setup. There is no npm, no bundler, and no build dependencies. All logic lives in one file (~3,000 lines), which is fine for this scale.

**Firebase REST API (not SDK):** The app calls Firebase via plain `fetch()` rather than importing the Firebase JS SDK. This avoids adding a ~80KB dependency to a file designed to stay minimal and load fast on mobile data.

**localStorage as offline cache:** Every Firebase read/write is mirrored to `localStorage` under a `trip-` prefix. If Firebase is unreachable, `loadKey()` automatically falls back to the cached version. This means the app is fully readable offline after at least one successful load. (`saveKey()` tolerates a `localStorage` quota error — e.g. from large uploaded documents — and keeps syncing to Firebase regardless.)

**Flight-folder documents stored as data-URLs in the database:** Because the app has no backend and no Firebase Storage bucket, uploaded documents (passport scans, tickets, etc.) are kept inline in the Realtime Database under the `flight-folder` key. Images are downscaled to ≤1500px and re-encoded as JPEG (quality 0.82) on the client *before* upload to keep them small; PDFs are stored as-is (capped at 12MB). This is intentionally suited to a handful of modest documents per family — if the trip needs to store many large files, switching the upload path to Firebase Storage would be the natural next step. Each document carries an `owners` array of member IDs (or the special `all`), which is how ownership is tracked down to the individual child.

**Google Photos is link-based, not API-embedded:** Google Photos provides no way to upload to, or iframe-embed, a shared album from a static client without OAuth and a server. The Photo Album tab therefore stores a shared-album **link** (synced via the `photo-album` key) and opens Google Photos for uploads, while offering an in-page highlight grid (manually-added image URLs) for a designed preview that matches the site.

**Activity log:** A single `logActivity(action, entity, detail, who)` helper appends to the `activity-log` key (capped at the last 300 entries, written silently so it doesn't double-toast). It is called from every add/edit/delete site across the renderers, which is why mutations were instrumented individually rather than centralized in `saveKey()` — only the call site knows the human-readable description of what changed.

**Theming via CSS custom properties:** A single set of design tokens (`--bg`, `--surface`, `--brand`, etc.) defined under `:root` and `[data-theme="dark"]` drives the entire UI, so light/dark mode is a one-attribute switch with no per-component overrides.

**Map & geocoding:** The Trip Map uses [Leaflet](https://leafletjs.com/) with CARTO/OpenStreetMap tiles and the optional [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) plugin (loaded from a CDN, with a graceful fallback when offline). The "smart search" Add-Location field queries the free [Nominatim](https://nominatim.org/) geocoder — no API key required — for place suggestions and full-address lookups, biased to Italy. Per-point **Navigate** buttons open Google Maps directions, which works across desktop and mobile.

**No build step:** Vanilla JS handles all interactivity through delegated inline handlers. If the app grows substantially, splitting the `<style>` and `<script>` into separate files would be the natural next step.

---

## Customizing for a New Trip

To reuse this app for a different family event, the following values in `index.html` need to be updated:

Search `index.html` for the following identifiers (no fixed line numbers — the file is a single document, so use your editor's find):

| Variable / Section | What to change |
|---|---|
| `ACCESS_CODE` | The 4-digit (or longer) family access code |
| `FAMILIES` / `FAM_COLORS` | Array of family/group names and their avatar colors |
| `TRIP_START` / `TRIP_END` | JavaScript Date objects for trip start and end |
| `VILLA_COORDS` / `VILLA_ADDRESS` | Map center and the one-tap navigation target |
| `FIREBASE_URL` | Your Firebase Realtime Database URL |
| `defaultStay()` | Flight numbers, dates, villa name, address, confirmation codes |
| `defaultContacts()` | Emergency contacts relevant to the destination |
| `CITY_COORDS_MAP` / `HARDCODED_ATTRACTIONS` | Known places and pre-pinned attractions on the map |
| Page `<title>` and brand text | Trip name and subtitle (header / sidebar) |
| Color palette | The `:root` and `[data-theme="dark"]` design tokens — `--brand`, `--accent`, `--terra`, `--green`, etc. |

---

## Browser Support

| Browser | Support |
|---|---|
| Safari (iOS 15+) | ✅ Full support, including "Add to Home Screen" |
| Chrome (Android) | ✅ Full support, including PWA install prompt |
| Chrome (Desktop) | ✅ |
| Firefox | ✅ |
| Samsung Internet | ✅ |

The app uses no experimental APIs. `AbortSignal.timeout()` (used for the Firebase connectivity check) requires iOS 15.4+ / Chrome 103+. Older devices fall back gracefully — the connectivity check simply won't abort on timeout.

---

## License

This project was built for private family use. Feel free to adapt it for your own family trips or events. No warranty expressed or implied.
