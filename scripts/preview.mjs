import http from "node:http"
import { readFile } from "node:fs/promises"
import { join, extname } from "node:path"

// Local preview of the static export (out/). `next start` does not serve
// `output: "export"`, so a tiny static server fills that gap for local
// inspection / self-hosting a review build.
const root = join(process.cwd(), "out")
const port = Number(process.env.PORT || 4173)
const types = {
	".html": "text/html",
	".css": "text/css",
	".js": "application/javascript",
	".avif": "image/avif",
	".png": "image/png",
	".svg": "image/svg+xml",
	".json": "application/json",
	".ico": "image/x-icon",
	".webmanifest": "application/manifest+json",
}

http
	.createServer(async (req, res) => {
		let p = decodeURIComponent(req.url.split("?")[0])
		if (p === "/") p = "/index.html"
		const fp = join(root, p)
		try {
			const data = await readFile(fp)
			res.setHeader("Content-Type", types[extname(fp)] || "application/octet-stream")
			res.end(data)
		} catch {
			try {
				const data = await readFile(join(root, "404.html"))
				res.writeHead(404, { "Content-Type": "text/html" })
				res.end(data)
			} catch {
				res.writeHead(404)
				res.end("404")
			}
		}
	})
	.listen(port, () => console.log(`Hoardodile site preview → http://localhost:${port}`))
