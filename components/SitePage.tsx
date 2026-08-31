"use client"

import { useEffect } from "react"
import { I18nProvider, setI18n } from "@hoardodile/i18n/react"
import type { i18n as I18nInstance } from "i18next"
import { createSiteI18n, type SiteLang } from "@/lib/i18n"
import { SITE_URL, SITE_NAME, RELEASE_PAGE } from "@/lib/site"
import { SITE_TITLE, SITE_DESCRIPTION } from "@/lib/seo"
import { SiteHeader } from "./SiteHeader"
import { Hero } from "./Hero"
import { WhySection } from "./WhySection"
import { CapabilitiesSection } from "./CapabilitiesSection"
import { PluginsSection } from "./PluginsSection"
import { PrivacySection } from "./PrivacySection"
import { DeploymentSection } from "./DeploymentSection"
import { ScreenshotsSection } from "./ScreenshotsSection"
import { FaqSection } from "./FaqSection"
import { CommunitySection } from "./CommunitySection"
import { CtaSection } from "./CtaSection"
import { SiteFooter } from "./SiteFooter"

/** One i18next instance per locale, cached so re-renders / StrictMode
    don't re-init it. */
const instances: Partial<Record<SiteLang, I18nInstance>> = {}
function siteI18n(lang: SiteLang): I18nInstance {
	let instance = instances[lang]
	if (instance === undefined) {
		instance = createSiteI18n(lang)
		instances[lang] = instance
		setI18n(instance)
	}
	return instance
}

function buildJsonLd(lang: SiteLang) {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "SoftwareApplication",
				name: "Hoardodile",
				description: SITE_DESCRIPTION[lang],
				applicationCategory: "MultimediaApplication",
				operatingSystem: "Windows, macOS, Linux",
				license: "https://www.gnu.org/licenses/gpl-3.0.html",
				offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
				downloadUrl: RELEASE_PAGE,
			},
			{
				"@type": "WebSite",
				name: "Hoardodile",
				url: SITE_URL + "/",
				inLanguage: lang === "en" ? "en" : "zh-CN",
			},
		],
	}
}

export function SitePage({ lang }: { lang: SiteLang }) {
	const i18n = siteI18n(lang)

	useEffect(() => {
		document.documentElement.lang = lang
	}, [lang])

	const jsonLd = buildJsonLd(lang)

	return (
		<I18nProvider i18n={i18n}>
			<div className="min-h-svh bg-background text-foreground">
				<SiteHeader />
				<main>
					<Hero />
					<WhySection />
					<CapabilitiesSection />
					<ScreenshotsSection />
					<PluginsSection />
					<PrivacySection />
					<DeploymentSection />
					<FaqSection />
					<CommunitySection />
					<CtaSection />
				</main>
				<SiteFooter />
			</div>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
		</I18nProvider>
	)
}
