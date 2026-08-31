import type { ReactNode } from "react"
import "./globals.css"

// Metadata is per-locale (see app/page.tsx and app/zh/page.tsx); the root
// layout owns the `<html>`/`<body>` skeleton only.
export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className="dark theme-hoardodile" data-scroll-behavior="smooth">
			<body>{children}</body>
		</html>
	)
}
