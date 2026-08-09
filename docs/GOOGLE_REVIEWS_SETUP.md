# Google Yorumları Kurulumu

1. Google Cloud’da Places API etkinleştirin
2. `.env` içine `GOOGLE_PLACES_API_KEY` ve `GOOGLE_PLACE_ID` ekleyin
3. Anahtar istemciye sızdırılmaz (server-only)
4. API yoksa puan gizlenir; `content/testimonials.ts` ile manuel gerçek yorum eklenebilir
