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
| **Family Board** | Announcement board for updates, reminders, and messages — newest posts shown on the home screen |
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

At the bottom of your screen (or top on a tablet/computer) you'll see navigation tabs:

- 🏠 **Home** — Overview, countdown, latest announcements, and data backup buttons
- 🗓️ **Itinerary** — The day-by-day trip schedule
- 🎒 **Packing** — Shared and personal packing checklists
- 📞 **Contacts** — Emergency numbers and the villa host
- 🍽️ **Kosher** — Restaurants, synagogues, and kashrut guidance

Tap **עוד** (More) to access additional sections: Places, Flights & Villa, Kosher near the villa, Tasks, Pre-flight checklist, and the Board.

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
├── index.html       # The entire application (HTML + CSS + JS, ~1,100 lines)
├── manifest.json    # PWA manifest for "Add to Home Screen" support
├── icon-192.png     # (Optional) App icon for home screen, 192×192px
├── icon-512.png     # (Optional) App icon for home screen, 512×512px
└── README.md
```

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

**Recommended Firebase security rules** (restrict reads/writes to authenticated sessions — or at minimum, prevent public deletion):

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

> For a private family app, "test mode" (open read/write) is acceptable since the URL is not publicly indexed and the access code adds a social layer of protection. For production use, consider [Firebase App Check](https://firebase.google.com/docs/app-check).

### Key Architecture Decisions

**Single-file design:** Chosen deliberately so the app can be shared as a link with zero setup. There is no npm, no bundler, and no dependencies. The tradeoff is that all logic lives in one file (~1,100 lines), which is fine for this scale.

**Firebase REST API (not SDK):** The app calls Firebase via plain `fetch()` rather than importing the Firebase JS SDK. This avoids adding a ~80KB dependency to a file designed to stay minimal and load fast on mobile data.

**localStorage as offline cache:** Every Firebase read/write is mirrored to `localStorage` under a `trip-` prefix. If Firebase is unreachable, `loadKey()` automatically falls back to the cached version. This means the app is fully readable offline after at least one successful load.

**No build step:** CSS variables handle theming, vanilla JS handles all interactivity. If a future version of this app grows beyond ~1,500 lines, splitting into separate `.js` and `.css` files (or adopting a framework like Vue or Svelte) would be the natural next step.

---

## Customizing for a New Trip

To reuse this app for a different family event, the following values in `index.html` need to be updated:

| Variable / Section | Location | What to change |
|---|---|---|
| `ACCESS_CODE` | Line ~210 | The 4-digit (or longer) family access code |
| `FAMILIES` | Line ~227 | Array of family/group names |
| `TRIP_START` / `TRIP_END` | Lines ~229–230 | JavaScript Date objects for trip start and end |
| `FIREBASE_URL` | Line ~236 | Your Firebase Realtime Database URL |
| `defaultStay()` | ~Line 525 | Flight numbers, dates, villa name, address, confirmation codes |
| `defaultContacts()` | ~Line 945 | Emergency contacts relevant to the destination |
| Page `<title>` and header text | Lines 6, 161–162 | Trip name and subtitle |
| Color palette (CSS variables) | Lines 10–13 | `--blue`, `--mustard`, `--cypress`, `--terracotta`, etc. |

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
