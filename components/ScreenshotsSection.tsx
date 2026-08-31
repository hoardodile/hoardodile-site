"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { SectionLabel } from "@hoardodile/ui/components/section-label"
import { Lightbox } from "./Lightbox"
import type { SiteLang } from "@/lib/i18n"

type Shot = { file: string; altKey: string }

const SHOTS: Shot[] = [
	{ file: "02-overview", altKey: "screenshots.altOverview" },
	{ file: "03-resources", altKey: "screenshots.altResources" },
	{ file: "04-resource-earth", altKey: "screenshots.altResource" },
	{ file: "08-character-marie", altKey: "screenshots.altCharacter" },
	{ file: "09-documents", altKey: "screenshots.altDocuments" },
	{ file: "12-search", altKey: "screenshots.altSearch" },
]

export function ScreenshotsSection() {
	const { t, i18n } = useTranslation("site")
	const lang = (i18n.language as SiteLang) || "en"
	const [selected, setSelected] = useState<Shot | null>(null)

	return (
		<section id="demo" className="scroll-mt-16 border-t border-border">
			<div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
				<div className="max-w-reading">
					<SectionLabel tone="muted">{t("screenshots.eyebrow")}</SectionLabel>
					<h2 className="mt-4 font-doc text-doc-heading font-bold text-foreground">
						{t("screenshots.title")}
					</h2>
					<p className="mt-3 text-ui leading-relaxed text-secondary-foreground">
						{t("screenshots.body")}
					</p>
				</div>

				<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{SHOTS.map((shot) => (
						<button
							key={shot.file}
							type="button"
							onClick={() => setSelected(shot)}
							className="group overflow-hidden rounded-lg border border-border bg-card text-left"
						>
							<img
								src={`/screenshots/${lang}/${shot.file}.avif`}
								alt={t(shot.altKey)}
								width={800}
								height={450}
								loading="lazy"
								className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
							/>
						</button>
					))}
				</div>

				<p className="mt-4 text-xs text-muted-foreground">
					{t("screenshots.note")}
				</p>
			</div>

			{selected !== null ? (
				<Lightbox
					src={`/screenshots/${lang}/${selected.file}.avif`}
					alt={t(selected.altKey)}
					onClose={() => setSelected(null)}
				/>
			) : null}
		</section>
	)
}
