import { createI18n } from "@hoardodile/i18n/create-i18n"
import { uiCatalogFor } from "@hoardodile/i18n/catalogs/ui"
import siteEn from "@/app/locales/site.en.json"
import siteZh from "@/app/locales/site.zh.json"
import type { i18n as I18nInstance } from "i18next"

export type SiteLang = "en" | "zh"

const RESOURCES = {
	en: { site: siteEn, ui: uiCatalogFor("en") },
	zh: { site: siteZh, ui: uiCatalogFor("zh") },
}

/**
 * Build a site i18next instance for one language, loading only that
 * language's `site` + `ui` resources. Each locale page creates its own
 * instance so the static HTML for `/zh` renders Chinese (and hydration
 * stays consistent) instead of a shared English-first singleton.
 */
export function createSiteI18n(lang: SiteLang): I18nInstance {
	return createI18n({ resources: { [lang]: RESOURCES[lang] }, lng: lang })
}
