# Roamora Travel

An original responsive travel website built with Next.js App Router, TypeScript, Tailwind CSS 4, Framer Motion, Lucide React and Swiper. It exports static pages, making it suitable for Sites, static hosting, and Vercel.

## Run locally

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:4173. On Windows, run these commands inside the project folder in PowerShell.

## Checks and build

```bash
npm run lint
npm run typecheck
npm run build
```

The production website is in `out/`. With `output: 'export'`, serve this directory using a static hosting provider rather than `next start`. Vercel can detect Next.js and build the project with `npm run build`.

## Pages

Home, About, Services, Visa, Tours, Packages, Flights, Umrah, Insurance, Track, Contact, three individual package pages, and a custom 404. Sitemap and robots are generated at build time.

## Customise

- `src/config/site.ts`: name, email, phone, WhatsApp, office address, hours and deployed URL. Set WhatsApp to a real international number with country code before launch. Leaving it empty shows a helpful contact notice.
- `src/data/travel.ts`: destinations, sample packages, service descriptions, navigation, FAQs, and fictional testimonials.
- `src/app/globals.css`: color tokens, typography, spacing, responsive rules and marquee.
- `public/favicon.svg`: brand icon. The wordmark lives in `src/components/shell.tsx`.
- `public/images/`: local, compressed destination images; sources below.
- `src/components/home.tsx`: homepage, slider, reusable cards, counters, reviews, FAQ.
- `src/components/pages.tsx`: service pages, listing filters and package details.
- `src/components/forms.tsx`: contact form and demo tracker.

## Demo boundaries and remaining business setup

The contact form and newsletter validate and show an honest demo completion message. They do not send email or persist customer data. Application tracking uses only sample references `RM-DEMO-001` and `RM-DEMO-002`; it never accesses government systems. Testimonials, brand information and package prices are illustrative. The website does not accept payments or make bookings.

Before accepting enquiries, replace the business placeholders and connect a real server-side email/contact service with validation and spam protection. Connect newsletter consent and unsubscribe handling to your chosen provider. Replace fictional testimonials with verified customer reviews, and confirm actual prices, travel rules and supplier booking terms. Secrets belong on a server, never in client configuration. No environment variables are required for the demonstration.

## Accessibility and motion

Keyboard-accessible mobile dialog with focus containment, Escape closing and scroll locking; labelled forms, visible focus, semantic headings, skip link, accessible slider controls and accordion. Reduced-motion preference stops hero autoplay, disables marquee animation and limits transitions. Images have stable dimensions and fallback states.

## Photo sources

Free-to-use Unsplash photography (Unsplash License):
- Bali — Niklas Weiss: https://unsplash.com/photos/rice-terraces-in-tegelalang-bali--2WlTWZLnRc
- Cappadocia — Diego Allen: https://unsplash.com/photos/a-group-of-hot-air-balloons-flying-over-a-city-1abd7gaw3TE
- Hunza / Attabad Lake — Hamid Merchant: https://unsplash.com/photos/a-body-of-water-surrounded-by-mountains-l64w0PDeQSI

No assets, branding, contact information, text or code were taken from the animation reference.
