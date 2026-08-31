"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@hoardodile/ui/components/button"
import { SectionLabel } from "@hoardodile/ui/components/section-label"
import { MetaChip } from "@hoardodile/ui/components/meta-chip"
import { LATEST_VERSION, RELEASE_PAGE } from "@/lib/site"
import type { SiteLang } from "@/lib/i18n"
import { DownloadButton } from "./DownloadButton"
import { Lightbox } from "./Lightbox"

export function Hero() {
	const { t, i18n } = useTranslation("site")
	const lang = (i18n.language as SiteLang) || "en"
	const [preview, setPreview] = useState(false)
	const shotSrc = `/screenshots/${lang}/03-resources.avif`
	const shotAlt = t("screenshots.altResources")

	return (
		<div className="mx-auto max-w-[1200px] px-5 pb-16 pt-16 md:px-8 md:pb-20 md:pt-24">
			<div className="grid gap-10 lg:grid-cols-2 lg:items-center">
				<div>
					<div className="flex items-center gap-2">
						<SectionLabel tone="muted">{t("hero.eyebrow")}</SectionLabel>
						<a
							href={RELEASE_PAGE}
							target="_blank"
							rel="noreferrer"
							className="transition-colors hover:text-primary"
							aria-label={`Hoardodile v${LATEST_VERSION}`}
						>
							<MetaChip>v{LATEST_VERSION}</MetaChip>
						</a>
					</div>
					<h1 className="mt-4 max-w-[16ch] font-doc text-3xl font-bold leading-[1.15] text-foreground sm:text-4xl md:text-doc-title">
						{t("hero.title")}
					</h1>
					<p className="mt-6 max-w-[54ch] text-ui leading-relaxed text-secondary-foreground md:text-doc">
						{t("hero.subtitle")}
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-3">
						<DownloadButton />
						<Button variant="outline" nativeButton={false} render={<a href="#deploy" />}>
							{t("deploy.self_t")}
						</Button>
						<Button
							variant="outline"
							nativeButton={false}
							render={
								<a href="https://github.com/hoardodile/marketplace" />
							}
						>
							{t("hero.marketplace")}
						</Button>
					</div>
				</div>

				<button
					type="button"
					onClick={() => setPreview(true)}
					className="group overflow-hidden rounded-lg border border-border bg-card text-left"
				>
					<img
						src={shotSrc}
						alt={shotAlt}
						width={800}
						height={450}
						className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
					/>
				</button>
			</div>

			{preview ? (
				<Lightbox src={shotSrc} alt={shotAlt} onClose={() => setPreview(false)} />
			) : null}
		</div>
	)
}
