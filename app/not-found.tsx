"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { I18nProvider, setI18n } from "@hoardodile/i18n/react"
import { createSiteI18n, type SiteLang } from "@/lib/i18n"
import { SectionLabel } from "@hoardodile/ui/components/section-label"
import { Button } from "@hoardodile/ui/components/button"
import type { i18n as I18nInstance } from "i18next"

const cache: Partial<Record<SiteLang, I18nInstance>> = {}
function i18nFor(lang: SiteLang): I18nInstance {
	let instance = cache[lang]
	if (instance === undefined) {
		instance = createSiteI18n(lang)
		cache[lang] = instance
		setI18n(instance)
	}
	return instance
}

function NotFoundContent({ home }: { home: string }) {
	const { t } = useTranslation("site")
	return (
		<div className="flex min-h-svh flex-col bg-background text-foreground">
			<div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-start justify-center px-5 md:px-8">
				<SectionLabel tone="muted">{t("notFound.eyebrow")}</SectionLabel>
				<h1 className="mt-4 font-doc text-doc-title font-bold text-foreground">
					{t("notFound.title")}
				</h1>
				<p className="mt-4 max-w-[48ch] text-ui leading-relaxed text-secondary-foreground">
					{t("notFound.body")}
				</p>
				<div className="mt-8">
					<Button
						variant="outline"
						nativeButton={false}
						render={<a href={home} />}
					>
						{t("notFound.home")}
					</Button>
				</div>
			</div>
		</div>
	)
}

export default function NotFound() {
	// Default to English so the static/SSR first render matches; the actual
	// language is detected on the client from the URL (a single /404 is
	// shared by both locales, so we can't know it at build time).
	const [lang, setLang] = useState<SiteLang>("en")
	const i18n = i18nFor(lang)

	useEffect(() => {
		const detected: SiteLang = window.location.pathname.startsWith("/zh")
			? "zh"
			: "en"
		setLang(detected)
		document.documentElement.lang = detected
	}, [])

	return (
		<I18nProvider i18n={i18n}>
			<NotFoundContent home={lang === "zh" ? "/zh/" : "/"} />
		</I18nProvider>
	)
}
