# HOAbot.ai - Landing Page

## 🚀 Marketing website for HOAbot.ai

Built with Next.js 16 + Tailwind CSS

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Deploy
```bash
vercel
```

### 3. Add Custom Domain
In Vercel dashboard:
- Settings → Domains
- Add `hoabot.ai`
- Follow DNS instructions

---

## Stripe Integration

Replace the placeholder URL in `app/page.tsx`:

```tsx
href="https://buy.stripe.com/test_placeholder"
```

With your real Stripe Payment Link:

1. Go to stripe.com → Products
2. Create "HOAbot Setup" - $999 one-time
3. Create "HOAbot Monthly" - $99/mo recurring
4. Create Payment Link
5. Paste URL in the code

---

## Demo Chatbot

Replace the demo section with actual iframe once demo.hoabot.ai is live:

```tsx
<iframe 
  src="https://demo.hoabot.ai" 
  className="w-full h-full border-0 rounded-lg"
  title="HOAbot Demo"
/>
```

---

## Customization

### Colors
Edit `tailwind.config.ts` to change brand colors

### Content
Edit `app/page.tsx` to update copy

### Fonts
Fonts are loaded from Google Fonts automatically (Inter)

---

## Structure

```
app/
  layout.tsx     # Site metadata, SEO
  page.tsx       # Main landing page
  globals.css    # Global styles

public/
  # Add images here
```

---

## Next Steps

1. ✅ Deploy to Vercel
2. ⏳ Set up Stripe Payment Links
3. ⏳ Build demo chatbot (demo.hoabot.ai)
4. ⏳ Add screenshot/video to hero
5. ⏳ Test checkout flow
6. ⏳ Launch! 🚀
