import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const source = path.join(root, "input-assets/nuran-delen-hero.png");

if (!existsSync(source)) {
  console.error(
    "Kaynak bulunamadı: input-assets/nuran-delen-hero.png\nGörseli ekledikten sonra tekrar çalıştırın: pnpm optimize:hero",
  );
  process.exit(1);
}

const outs = [
  { file: "public/images/hero/hero-desktop.webp", width: 1400 },
  { file: "public/images/hero/hero-tablet.webp", width: 1024 },
  { file: "public/images/hero/hero-mobile.webp", width: 750 },
  { file: "public/images/artist/nuran-delen.webp", width: 900 },
  { file: "public/images/og/og-home.jpg", width: 1200, jpeg: true },
];

for (const out of outs) {
  const target = path.join(root, out.file);
  mkdirSync(path.dirname(target), { recursive: true });
  const pipeline = sharp(source).rotate().resize({
    width: out.width,
    withoutEnlargement: true,
  });
  if (out.jpeg) {
    await pipeline.jpeg({ quality: 82, mozjpeg: true }).toFile(target);
  } else {
    await pipeline.webp({ quality: 82 }).toFile(target);
  }
  console.log("created", out.file);
}

console.log("Hero türevleri hazır. Yüz değiştirme veya yapay güzelleştirme uygulanmadı.");
