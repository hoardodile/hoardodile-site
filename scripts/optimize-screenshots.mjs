import { existsSync, mkdirSync, readdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const websiteRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const srcDir = join(websiteRoot, "tmp-shots")
const outDir = join(websiteRoot, "public", "screenshots")
const LANGS = ["en", "zh"]

let total = 0
for (const lang of LANGS) {
	const src = join(srcDir, lang)
	if (!existsSync(src)) {
		console.log(`[screenshots:opt] skip ${lang}`)
		continue
	}
	const dest = join(outDir, lang)
	mkdirSync(dest, { recursive: true })
	for (const file of readdirSync(src)) {
		if (!file.endsWith(".png")) continue
		const name = file.replace(/\.png$/, "")
		await sharp(join(src, file))
			.resize({ width: 1400, withoutEnlargement: true })
			.avif({ quality: 55 })
			.toFile(join(dest, `${name}.avif`))
		total += 1
		console.log(`[screenshots:opt] ${lang}/${name}.avif`)
	}
}
console.log(`[screenshots:opt] done → ${outDir} (${total} files)`)
