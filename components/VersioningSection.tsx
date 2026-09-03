"use client"

import { useTranslation } from "react-i18next"
import { SectionLabel } from "@hoardodile/ui/components/section-label"

const POINTS = [
	{ title: "versioning.p1t", body: "versioning.p1b" },
	{ title: "versioning.p2t", body: "versioning.p2b" },
	{ title: "versioning.p3t", body: "versioning.p3b" },
]

export function VersioningSection() {
	const { t } = useTranslation("site")

	return (
		<section id="versioning" className="scroll-mt-16 border-t border-border">
			<div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
				<div className="max-w-reading">
					<SectionLabel tone="muted">{t("versioning.eyebrow")}</SectionLabel>
					<h2 className="mt-4 font-doc text-doc-heading font-bold text-foreground">
						{t("versioning.title")}
					</h2>
					<p className="mt-3 text-ui leading-relaxed text-secondary-foreground">
						{t("versioning.body")}
					</p>
				</div>

				<div className="mt-10 grid gap-4 md:grid-cols-3">
					{POINTS.map((point) => (
						<div
							key={point.title}
							className="flex flex-col gap-3 rounded-lg bg-muted p-6"
						>
							<h3 className="text-ui font-semibold text-foreground">
								{t(point.title)}
							</h3>
							<p className="text-ui leading-relaxed text-secondary-foreground">
								{t(point.body)}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
