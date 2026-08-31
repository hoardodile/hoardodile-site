"use client"

import { useTranslation } from "react-i18next"
import { Button } from "@hoardodile/ui/components/button"
import { SectionLabel } from "@hoardodile/ui/components/section-label"
import { DownloadButton } from "./DownloadButton"

export function CtaSection() {
	const { t } = useTranslation("site")

	return (
		<section className="border-t border-border">
			<div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-24">
				<div className="mx-auto max-w-reading text-center">
					<SectionLabel tone="muted">{t("cta.eyebrow")}</SectionLabel>
					<h2 className="mt-4 font-doc text-doc-heading font-bold text-foreground">
						{t("cta.title")}
					</h2>
					<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
						<DownloadButton />
						<Button
							variant="outline"
							nativeButton={false}
							render={<a href="https://github.com/hoardodile/hoardodile" />}
						>
							{t("nav.docs")}
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
