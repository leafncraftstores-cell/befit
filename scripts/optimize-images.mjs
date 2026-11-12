/**
 * Image optimiser for self-hosted photos.
 *
 *   1. Put original photos in  assets/photos/  (JPG / PNG / WebP, ideally ≥ 1920px wide).
 *   2. Run  npm run images
 *   3. Use them in data/images.ts as  src: "/img/<file-name>.webp"
 *
 * For every photo this writes responsive WebP files to public/img/:
 *   <name>-384.webp … <name>-1920.webp  (the widths next/image asks for; see lib/image-loader.ts)
 * Files are skipped when they are already up to date.
 */
import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import { extname, basename, join } from "node:path";
import sharp from "sharp";

const SRC = "assets/photos";
const OUT = "public/img";
export const WIDTHS = [384, 640, 828, 1080, 1440, 1920];
const QUALITY = 68;
/** Budget per file: quality is stepped down until the file fits */
const MAX_BYTES = 200 * 1024;

await mkdir(OUT, { recursive: true });
const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

let written = 0;
for (const file of files) {
  const name = basename(file, extname(file));
  const input = join(SRC, file);
  const srcTime = (await stat(input)).mtimeMs;
  const meta = await sharp(input).metadata();

  for (const w of WIDTHS) {
    const out = join(OUT, `${name}-${w}.webp`);
    try {
      if ((await stat(out)).mtimeMs >= srcTime) continue;
    } catch {
      /* not generated yet */
    }
    const resized = sharp(input).resize({
      width: Math.min(w, meta.width ?? w),
      withoutEnlargement: true,
    });
    let q = QUALITY;
    let buf = await resized.clone().webp({ quality: q, effort: 5 }).toBuffer();
    while (buf.length > MAX_BYTES && q > 32) {
      q -= 8;
      buf = await resized.clone().webp({ quality: q, effort: 5 }).toBuffer();
    }
    await writeFile(out, buf);
    written++;
  }
}
console.log(`optimize-images: ${files.length} photos, ${written} files written to ${OUT}/`);
