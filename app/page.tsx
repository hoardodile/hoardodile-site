import type { Metadata, Viewport } from "next"
import { SitePage } from "@/components/SitePage"
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/site"
import { SITE_TITLE, SITE_DESCRIPTION, SITE_KEYWORDS } from "@/lib/seo"

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: SITE_TITLE.en,
	description: SITE_DESCRIPTION.en,
	keywords: [...SITE_KEYWORDS.en],
	alternates: {
		canonical: "/",
		languages: { en: "/", zh: "/zh/", "x-default": "/" },
	},
	openGraph: {
		siteName: SITE_NAME,
		type: "website",
		locale: "en_US",
		url: SITE_URL + "/",
		title: SITE_TITLE.en,
		description: SITE_DESCRIPTION.en,
		images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Hoardodile" }],
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_TITLE.en,
		description: SITE_DESCRIPTION.en,
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

export default function EnglishPage() {
	return <SitePage lang="en" />
}
