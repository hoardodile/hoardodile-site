"use client"

import { useTranslation } from "react-i18next"
import { SectionLabel } from "@hoardodile/ui/components/section-label"

const LINKS = [
	{ label: "GitHub", href: "https://github.com/hoardodile/hoardodile" },
	{ label: "Docs", href: "https://github.com/hoardodile/hoardodile" },
	{ label: "Marketplace", href: "https://github.com/hoardodile/marketplace" },
]

export function CommunitySection() {
	const { t } = useTranslation("site")

	return (
		<section id="community" className="scroll-mt-16 border-t border-border">
			<div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
				<div className="max-w-reading">
					<SectionLabel tone="muted">{t("community.eyebrow")}</SectionLabel>
					<h2 className="mt-4 font-doc text-doc-heading font-bold text-foreground">
						{t("community.title")}
					</h2>
					<p className="mt-3 text-ui leading-relaxed text-secondary-foreground">
						{t("community.body")}
					</p>
				</div>

				<div className="mt-8 flex flex-wrap gap-3">
					{LINKS.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target="_blank"
							rel="noreferrer"
							className="rounded-lg bg-muted px-3 py-2 text-ui font-medium text-secondary-foreground transition-colors duration-150 hover:bg-accent hover:text-foreground"
						>
							{link.label}
						</a>
					))}
				</div>
			</div>
		</section>
	)
}
