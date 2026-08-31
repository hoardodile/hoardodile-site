"use client"

import { useTranslation } from "react-i18next"

export function WhySection() {
	const { t } = useTranslation("site")

	return (
		<section className="border-t border-border">
			<div className="mx-auto max-w-content px-5 py-16 md:px-8 md:py-20">
				<div className="max-w-reading">
					<p className="font-doc text-doc leading-[1.65] text-foreground">
						{t("why.text")}
					</p>
				</div>
			</div>
		</section>
	)
}
