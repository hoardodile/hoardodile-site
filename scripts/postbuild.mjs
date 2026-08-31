import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"

// App Router: only the root layout can render `<html>`, so the static
// export always writes `lang="en"` — even for /zh. Bake the correct
// language into the Chinese page's HTML after build.
const file = join(process.cwd(), "out", "zh", "index.html")
if (!existsSync(file)) {
	console.log("postbuild: no /zh page to fix, skipped")
	process.exit(0)
}
const html = readFileSync(file, "utf8")
const fixed = html.replace('<html lang="en"', '<html lang="zh-CN"')
writeFileSync(file, fixed)
console.log("postbuild: set /zh html[lang] to zh-CN")
