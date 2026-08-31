import type { Metadata, Viewport } from "next"
import { SitePage } from "@/components/SitePage"
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/site"
import { SITE_TITLE, SITE_DESCRIPTION, SITE_KEYWORDS } from "@/lib/seo"

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: SITE_TITLE.zh,
	description: SITE_DESCRIPTION.zh,
	keywords: [...SITE_KEYWORDS.zh],
	alternates: {
		canonical: "/zh/",
		languages: { en: "/", zh: "/zh/", "x-default": "/" },
	},
	openGraph: {
		siteName: SITE_NAME,
		type: "website",
		locale: "zh_CN",
		url: SITE_URL + "/zh/",
		title: SITE_TITLE.zh,
		description: SITE_DESCRIPTION.zh,
		images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Hoardodile" }],
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_TITLE.zh,
		description: SITE_DESCRIPTION.zh,
		images: [OG_IMAGE],
	},
	robots: { index: true, follow: true },
	manifest: "/manifest.webmanifest",
	icons: {
		icon: [
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
			{ url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
		],
		apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
	},
}

export const viewport: Viewport = { themeColor: "#272822" }

export default function ChinesePage() {
	return <SitePage lang="zh" />
}
