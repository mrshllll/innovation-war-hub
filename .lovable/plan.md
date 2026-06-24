# UI Innovation War 2026 — Landing Page

A premium, dark-mode competition landing page with a registration modal that saves submissions to Lovable Cloud (Supabase).

## Design system

- Dark by default: pure black + deep charcoal surfaces, organic radial gradient meshes for ambient glow.
- Accent: vibrant lime / neon emerald gradient (`--accent` + `--accent-glow`) used for primary CTA, pillar outlines, and section highlights.
- Typography via `<link>` in `__root.tsx`: Space Grotesk (display/headers, heavy weights) + Plus Jakarta Sans (body).
- Reusable tokens added to `src/styles.css` under `@theme inline` + `:root/.dark`: `--accent`, `--accent-glow`, `--gradient-primary`, `--shadow-glow`, `--glass-bg`, `--glass-border`. No hardcoded colors in components.
- Subtle motion via framer-motion (hero fade/rise, modal spring).

## Page sections (single route: `/`)

1. **Sticky nav** — small UIIW 2026 wordmark + anchor links (Theme, Pillars, Partners) + mini "Daftar" button.
2. **Hero** — eyebrow chip "2026 Edition", H1 "UI Innovation War 2026", sub-headline framing it as Indonesia's premier business innovation battle, dual CTAs:
   - Primary glowing lime button "Daftar Sekarang" (opens modal).
   - Outlined ghost button "Access Guidebook" (`href="#"`).
   - Background: layered radial green mesh + faint grid.
3. **Grand Theme banner** — high-contrast centered showcase card with the full theme string, glowing border, "Grand Theme 2026" label.
4. **Innovation Pillars** — 3-card responsive grid (1 col mobile → 3 col desktop), glassmorphic dark cards with animated lime outline on hover: Business Plan Innovation, Sustainable Strategy, Circular Tech. Each has icon (lucide), title, short blurb.
5. **Collaboration / Partners** — full-width banner "Sponsorship & Media Partners" + short copy + "Connect with Us" button (`mailto:partners@uiiw2026.id` placeholder).
6. **Footer** — wordmark, copyright, tiny social row.

## Registration modal ("Daftar Sekarang")

- shadcn `Dialog` with framer-motion-style spring entrance.
- Fields (react-hook-form + zod):
  - Team Name (1–100)
  - Team Leader Name (1–100)
  - Email (valid email, ≤255)
  - WhatsApp Number (digits/+/spaces, 8–20)
  - Pitch Deck Link (valid URL, ≤500)
- Submit → inserts via Supabase browser client into `registrations` table.
- Toast (sonner) on success/error, reset + close on success, loading state on button.

## Backend (Lovable Cloud)

Enable Lovable Cloud, then a migration:

- Table `public.registrations`:
  - `id uuid pk default gen_random_uuid()`
  - `team_name text not null check (char_length<=100)`
  - `leader_name text not null check (char_length<=100)`
  - `email text not null check (char_length<=255)`
  - `whatsapp text not null check (char_length<=20)`
  - `pitch_deck_url text not null check (char_length<=500)`
  - `created_at timestamptz not null default now()`
- Grants: `INSERT` to `anon` and `authenticated`; `ALL` to `service_role`. No SELECT to anon (submissions are private).
- RLS enabled. Policy: `FOR INSERT TO anon, authenticated WITH CHECK (true)` — public can submit, nobody can read from the client.

## Files

- `src/styles.css` — add lime accent tokens, gradient/shadow/glass tokens, keep oklch format.
- `src/routes/__root.tsx` — add Google Fonts `<link>` preconnect + Space Grotesk + Plus Jakarta Sans; update default title/description to UIIW 2026; add `<Toaster />` (sonner).
- `src/routes/index.tsx` — assemble page from section components; head() with UIIW-specific title/description/OG.
- `src/components/uiiw/Hero.tsx`, `ThemeBanner.tsx`, `Pillars.tsx`, `Partners.tsx`, `SiteNav.tsx`, `SiteFooter.tsx`, `RegisterDialog.tsx`.
- Supabase migration for `registrations` table + grants + RLS.

## Technical notes

- Insert uses the browser `supabase` client (publishable key) — safe because only INSERT is allowed for anon.
- Zod schema shared between form validation and trimmed payload sent to DB.
- Fully responsive (mobile-first): hero CTAs stack on mobile, pillars 1→3 cols, theme card scales typography down.
- All colors via semantic tokens; no `text-white`/`bg-black` literals in components.

