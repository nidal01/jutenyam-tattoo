# QA Raporu

Tarih: 2026-08-09

## Otomatik sonuçlar

| Komut | Sonuç |
|-------|--------|
| `pnpm lint` | Geçti |
| `pnpm typecheck` | Geçti |
| `pnpm test` (Vitest, 13) | Geçti |
| `pnpm test:e2e` (9) | Geçti |
| `pnpm test:a11y` (7) | Geçti |
| `pnpm build` | Geçti |

## Düzeltilen kritik hata

Çerez tercih kaydı `useSyncExternalStore` içinde her çağrıda yeni nesne üretiyordu; React runtime hatasına ve global-error ekranına yol açıyordu. Snapshot önbelleği eklendi.

## Manuel kontrol önerisi

- 360px yatay taşma
- Klavye ile menü / lightbox / çerez paneli
- WhatsApp / tel / yol tarifi smoke
