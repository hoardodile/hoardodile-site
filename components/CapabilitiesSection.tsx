"use client"

import { useTranslation } from "react-i18next"
import { MetaChip } from "@hoardodile/ui/components/meta-chip"

const CAPABILITY_KEYS = [
	{ h: "cap.h1", b: "cap.b1", chip: "cap.chip1" },
	{ h: "cap.h2", b: "cap.b2", chip: "cap.chip2" },
	{ h: "cap.h3", b: "cap.b3", chip: "cap.chip3" },
	{ h: "cap.h4", b: "cap.b4", chip: "cap.chip4" },
	{ h: "cap.h5", b: "cap.b5", chip: "cap.chip5" },
]

export function CapabilitiesSection() {
	const { t } = useTranslation("site")

	return (
		<section id="capabilities" className="scroll-mt-16 border-t border-border">
			<div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
				<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
					{CAPABILITY_KEYS.map((cap) => (
						<div
							key={cap.h}
							className="flex flex-col gap-3 rounded-lg bg-muted p-6"
						>
							<div className="flex items-start justify-between gap-3">
								<h3 className="font-doc text-doc-heading font-bold text-foreground">
									{t(cap.h)}
								</h3>
								<MetaChip>{t(cap.chip)}</MetaChip>
							</div>
							<p className="text-ui leading-relaxed text-secondary-foreground">
								{t(cap.b)}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
