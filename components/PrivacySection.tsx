"use client"

import { useTranslation } from "react-i18next"
import { SectionLabel } from "@hoardodile/ui/components/section-label"
import { Separator } from "@hoardodile/ui/components/separator"

const POINTS = [
	{ title: "privacy.p1t", body: "privacy.p1b" },
	{ title: "privacy.p2t", body: "privacy.p2b" },
	{ title: "privacy.p3t", body: "privacy.p3b" },
]

export function PrivacySection() {
	const { t } = useTranslation("site")

	return (
		<section id="privacy" className="scroll-mt-16 border-t border-border">
			<div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
				<div className="grid gap-10 md:grid-cols-2">
					<div className="max-w-reading">
						<SectionLabel tone="muted">{t("privacy.eyebrow")}</SectionLabel>
						<h2 className="mt-4 font-doc text-doc-heading font-bold text-foreground">
							{t("privacy.title")}
						</h2>
						<p className="mt-3 text-ui leading-relaxed text-secondary-foreground">
							{t("privacy.body")}
						</p>
					</div>

					<div className="flex flex-col">
						{POINTS.map((point, i) => (
							<div key={point.title} className="py-5">
								{i > 0 && <Separator className="mb-5" />}
								<h3 className="text-ui font-semibold text-foreground">
									{t(point.title)}
								</h3>
								<p className="mt-1 text-ui leading-relaxed text-secondary-foreground">
									{t(point.body)}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
