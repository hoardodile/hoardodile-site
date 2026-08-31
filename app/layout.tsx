import type { ReactNode } from "react"
import "./globals.css"

// Metadata is per-locale (see app/page.tsx and app/zh/page.tsx); the root
// layout owns the `<html>`/`<body>` skeleton only.
//
// Language auto-selection: the site is a static export (`output: "export"`)
// on GitHub Pages, so there is no middleware or server runtime to read
// `Accept-Language`. We negotiate on the client instead, and run the check
// as an inline (blocking) script at the top of `<body>` — during HTML parse,
// before the English body paints — so Chinese users don't see an English
// flash before being sent to `/zh/`.
//
// Rules: only the exact root `/` redirects (no bounce out of `/zh/`, 404s or
// subpaths); the browser's top language matching `zh`* triggers the Chinese
// redirect; and a user who explicitly chose English (see lib/locale.ts, key
// `LOCALE_STORAGE_KEY` = "hd-lang") is left alone.
export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className="dark theme-hoardodile" data-scroll-behavior="smooth">
			<body>
				<script
					dangerouslySetInnerHTML={{
						__html: `(function () {
							if (window.location.pathname !== "/") return;
							var primary = (navigator.languages && navigator.languages[0]) || navigator.language || "";
							if (!primary.toLowerCase().startsWith("zh")) return;
							var stored = null;
							try { stored = window.localStorage.getItem("hd-lang"); } catch (e) {}
							if (stored === "en") return;
							window.location.replace("/zh/");
						})();`,
					}}
				/>
				{children}
			</body>
		</html>
	)
}
