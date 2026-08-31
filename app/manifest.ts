import type { MetadataRoute } from "next"
import { SITE_NAME, SITE_URL } from "@/lib/site"
import { SITE_DESCRIPTION } from "@/lib/seo"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Hoardodile",
		short_name: "Hoardodile",
		description: SITE_DESCRIPTION.en,
		start_url: "/",
		scope: "/",
		display: "standalone",
		background_color: "#272822",
		theme_color: "#272822",
		icons: [
			{ src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
			{ src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
			{
				src: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
		],
	}
}
