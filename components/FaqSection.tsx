"use client"

import { useTranslation } from "react-i18next"
import { SectionLabel } from "@hoardodile/ui/components/section-label"

const FAQ = [
	{ q: "faq.q1", a: "faq.a1" },
	{ q: "faq.q2", a: "faq.a2" },
	{ q: "faq.q3", a: "faq.a3" },
	{ q: "faq.q4", a: "faq.a4" },
	{ q: "faq.q5", a: "faq.a5" },
	{ q: "faq.q6", a: "faq.a6" },
]

export function FaqSection() {
	const { t } = useTranslation("site")

	return (
		<section id="faq" className="scroll-mt-16 border-t border-border">
			<div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
				<div className="max-w-reading">
					<SectionLabel tone="muted">{t("faq.eyebrow")}</SectionLabel>
					<h2 className="mt-4 font-doc text-doc-heading font-bold text-foreground">
						{t("faq.title")}
					</h2>
				</div>

				<div className="mt-10 grid gap-x-6 gap-y-5 md:grid-cols-2">
					{FAQ.map((item) => (
						<div key={item.q} className="flex flex-col gap-1">
							<h3 className="text-ui font-semibold text-foreground">
								{t(item.q)}
							</h3>
							<p className="text-ui leading-relaxed text-secondary-foreground">
								{t(item.a)}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
