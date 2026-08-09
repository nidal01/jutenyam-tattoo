# Jutenyam Tattoo & Piercing

Tokat Merkez’de dövme, piercing ve kalıcı makyaj stüdyosu için üretime hazır Next.js web sitesi.

## Teknolojiler

- Next.js (App Router) + React + TypeScript strict
- Tailwind CSS 4
- Zod, Lucide React
- Vitest, Playwright, axe-core
- pnpm

## Kurulum

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Komutlar

| Komut | Açıklama |
|-------|----------|
| `pnpm dev` | Geliştirme sunucusu |
| `pnpm build` | Production build |
| `pnpm start` | Production sunucu |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | TypeScript |
| `pnpm test` | Birim testleri |
| `pnpm test:e2e` | Playwright E2E |
| `pnpm test:a11y` | Erişilebilirlik testleri |
| `pnpm format` | Prettier |
| `pnpm optimize:hero` | Hero görsel türevleri |

## Çevre değişkenleri

`.env.example` dosyasına bakın:

- `NEXT_PUBLIC_SITE_URL`
- `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`
- GA4 / Google Ads / Meta Pixel kimlikleri ve enable bayrakları

Secret değerleri istemciye göndermeyin. Places API anahtarı yalnızca sunucuda kullanılır.

## Görsel ekleme

1. Hero: `input-assets/nuran-delen-hero.png` → `pnpm optimize:hero`
2. Portföy: `input-assets/portfolio/...` → optimize kopya → `content/portfolio.ts`
3. Görsel yoksa site CSS yer tutucu gösterir; stok iş görseli kullanılmaz

## Portföy / yorum / sertifika

- Portföy: `clientConsent === true` ve `published === true` şart
- Google yorumları: API veya `content/testimonials.ts` (sahte yok)
- Sertifikalar: `content/certificates.ts` + `featureFlags.showCertificates`

## Analitik ve çerez

Onay olmadan GA4 / Ads / Pixel yüklenmez. Banner: Reddet, Kabul et. Detaylı tercihler footer’dan açılabilir.

## Vercel deployment

1. Projeyi Vercel’e bağlayın
2. Env değişkenlerini ekleyin
3. Domain: `jutenyamtattoo.com`

Ayrıntı: [docs/DEPLOYMENT_GUIDE.md](docs/DEPLOYMENT_GUIDE.md)

## İçerik güncelleme

[docs/CONTENT_UPDATE_GUIDE.md](docs/CONTENT_UPDATE_GUIDE.md)

## Güvenlik

`next.config.ts` CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS (prod), frame koruması.

## Yasal uyarı

Yasal sayfalar taslaktır; hukuk danışmanı tarafından gözden geçirilmelidir.
