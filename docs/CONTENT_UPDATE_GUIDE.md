# İçerik Güncelleme Rehberi

## Portföy görseli
1. `input-assets/portfolio/<kategori>/` altına koyun
2. `public/images/portfolio/` optimize kopya ekleyin
3. `content/portfolio.ts` öğesini `clientConsent: true`, `published: true` ile ekleyin

## Manuel Google yorumu
`content/testimonials.ts` — yalnızca gerçek yorum; puan alanıyla karıştırmayın

## Blog
`content/blog/` yeni dosya + `index.ts` import

## Telefon/saat
`config/business.config.ts`

## Sertifikalar
Belgeleri ekleyin → `content/certificates.ts` → `featureFlags.showCertificates = true`

## Logo
`public/logo/*.svg` değiştirin; `Logo` bileşeni aynı kalır
