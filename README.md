# Muhammad Zeeshan — Firebase Spark Portfolio (Contact Only)

Static HTML/CSS/JavaScript glassmorphism portfolio for **Firebase Hosting Spark**. No Firebase Authentication, Firestore, Cloud Functions, admin dashboard, Node server, or paid AI API. Projects are static examples editable in `public/app.js` (`fallback` array). FAQ assistant is rule-based.

## Deploy
1. Create a Firebase project at https://console.firebase.google.com/ and enable Hosting (Spark plan).
2. Install Firebase CLI: `npm install -g firebase-tools` (one-time setup on your computer).
3. In this folder: `firebase login`
4. Deploy: `firebase deploy --only hosting --project YOUR_FIREBASE_PROJECT_ID`
5. Open `https://YOUR_FIREBASE_PROJECT_ID.web.app`.

No localhost server is required. CLI is only used to upload the site. You may also use Firebase's other supported deployment methods.

## Contact form (FormSubmit)
- WhatsApp button: https://wa.me/923096900124
- Contact form posts to `https://formsubmit.co/muhammadzeeshan71lhr@gmail.com` using standard HTML POST.
- **Important**: FormSubmit sends a one-time verification email to the Gmail address. The owner must open that email and activate the form before deliveries work. Check spam folder.
- FormSubmit is an independent third-party service, **not Firebase**. Free availability, anti-spam/CAPTCHA, email deliverability and usage restrictions are governed by FormSubmit. Do not enter sensitive information in the contact form.
- The browser navigates to FormSubmit's confirmation flow after submitting; there is no fake on-page success notification.
- For protection, FormSubmit's CAPTCHA is enabled. Public static forms can still receive spam.

## Customize
- Edit `public/index.html` for text, WhatsApp number, email and social links.
- Edit `public/app.js` fallback array for your real projects, descriptions and links.
- Replace `public/assets/zeeshan-hero.png` with your own licensed image/photo.
- GitHub/LinkedIn links are placeholders. Replace before publishing.
- All static files are under `public/`; `firebase.json` configures Firebase Hosting only.


## Custom MZ logo
The supplied white MZ brandmark has been converted to transparent PNG and placed in `public/assets/mz-logo.png`. It appears in the header and footer, and `mz-favicon.png` is used for the browser tab. To change it later, replace these images.


## Latest work and technology updates
Three supplied screenshots are now displayed under Latest Work: Zephyr Health & Safety Portal, Zephyr Safety Analytics Dashboard, and MZ Glassmorphism Login Concepts. Technology cards include HTML5, CSS3, JavaScript, Firebase, Git, GitHub, GSAP and Figma with branded icons (loaded from the Devicon CDN; internet required for those icons). These are portfolio showcases, not claims that each demo is live.


## FIX: Projects not showing
This release includes three pre-rendered project cards in `public/index.html`, so screenshots appear even if JavaScript does not run. `app.js` enhances the cards with the rest of the portfolio projects and dialogs.

**Important:** Run Firebase CLI from the directory containing `firebase.json` (this directory), not from the `public` directory or an older portfolio folder.

```sh
cd Muhammad_Zeeshan_Firebase_Projects_FIXED
firebase deploy --only hosting --project YOUR_PROJECT_ID
```

After deploying, hard refresh with Ctrl+Shift+R and check `/assets/zephyr-portal.png` at your live Firebase URL.


## Latest update
Seven real screenshot project cards (Zephyr portal, safety dashboard, MZ login, coffee, college, employee management, ecommerce) appear in a 3-column desktop grid. Technologies: HTML5, CSS3, JavaScript, Git, GitHub, GSAP (Firebase and Figma removed), three per desktop row. Mobile grids adapt to screen size. To deploy, run `firebase deploy --only hosting --project YOUR_PROJECT_ID` from this folder.
