# Favicon package for suraj-pawar-portfolio

## What's inside
- `favicon.svg` — the master vector source (edit this if you want to tweak colors/shape later)
- `favicon.ico` — classic multi-res icon (16/32/48px) for old browsers, tab bars, bookmarks
- `icon-16.png`, `icon-32.png`, `icon-48.png`, `icon-64.png` — individual PNG sizes
- `apple-touch-icon.png` (180×180) — icon used when someone adds your site to an iPhone/iPad home screen
- `android-chrome-192x192.png`, `android-chrome-512x512.png` — Android home-screen / PWA icons
- `site.webmanifest` — tells Android/Chrome which icons to use when your site is installed as an app

## Where to put the files
Drop **all files** into your `public/` folder (root of what gets served), so they're reachable at:
```
https://suraj-pawar-portfolio.vercel.app/favicon.ico
https://suraj-pawar-portfolio.vercel.app/favicon.svg
https://suraj-pawar-portfolio.vercel.app/apple-touch-icon.png
https://suraj-pawar-portfolio.vercel.app/android-chrome-192x192.png
https://suraj-pawar-portfolio.vercel.app/android-chrome-512x512.png
https://suraj-pawar-portfolio.vercel.app/site.webmanifest
```

## Add this to your `<head>`
This is the same pattern used by Google, GitHub, YouTube, etc. — a modern SVG favicon (crisp on retina/dark-mode-aware browsers) with PNG/ICO fallbacks for older browsers and mobile home screens:

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#2A1F6E">
```

That's it — no build step needed. Redeploy and the new icon will show in browser tabs, bookmarks, and if someone adds your site to their phone's home screen.

## Design notes
An interlocked **S·P** monogram (sharing a single stroke between the S and the P) on a deep indigo-to-violet squircle, with a small warm-gold accent dot as the signature detail. Bold, high-contrast, and simplified enough to stay legible down to 16×16px — the same constraint that keeps GitHub's and Slack's marks readable in a browser tab.
