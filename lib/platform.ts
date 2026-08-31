export type Platform = "windows" | "macos" | "linux" | "other"

/**
 * Best-effort client platform detection. `navigator.userAgentData.platform`
 * is the modern field; falls back to `navigator.platform` / the UA string.
 */
export function detectPlatform(): Platform {
	if (typeof navigator === "undefined") return "other"
	const data = (navigator as { userAgentData?: { platform?: string } })
		.userAgentData
	const raw = data?.platform || navigator.platform || navigator.userAgent || ""
	const value = raw.toLowerCase()
	if (value.includes("win")) return "windows"
	if (value.includes("mac")) return "macos"
	if (value.includes("linux") || value.includes("x11")) return "linux"
	return "other"
}
