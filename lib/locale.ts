import type { SiteLang } from "@/lib/i18n"

/**
 * localStorage key for the user's *explicit* language choice, so the
 * client-side auto-redirect (the inline `<script>` in app/layout.tsx) does
 * not fight the manual LanguageToggle. The auto-redirect itself never writes
 * this key — it only reads it — so "auto-detect" keeps working on every
 * visit until the user explicitly picks a language. Keep the `"hd-lang"`
 * literal in the layout's inline script in sync with this constant.
 */
export const LOCALE_STORAGE_KEY = "hd-lang"

export function storeLanguage(lang: SiteLang): void {
	try {
		window.localStorage.setItem(LOCALE_STORAGE_KEY, lang)
	} catch {
		// Private mode / storage disabled: ignore. Auto-detection still works.
	}
}
