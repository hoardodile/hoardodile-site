"use client"

import { useTranslation } from "react-i18next"
import { SectionLabel } from "@hoardodile/ui/components/section-label"

const STEPS = [
	{ step: "01", title: "plugins.step1t", body: "plugins.step1b" },
	{ step: "02", title: "plugins.step2t", body: "plugins.step2b" },
	{ step: "03", title: "plugins.step3t", body: "plugins.step3b" },
]

type Plugin = { nameKey: string; descKey: string }

const BUILT_IN: Plugin[] = [
	{ nameKey: "plugins.fileName", descKey: "plugins.fileDesc" },
	{ nameKey: "plugins.galleryName", descKey: "plugins.galleryDesc" },
	{ nameKey: "plugins.pdfName", descKey: "plugins.pdfDesc" },
]

const MARKETPLACE: Plugin[] = [
	{ nameKey: "plugins.mangaName", descKey: "plugins.mangaDesc" },
	{ nameKey: "plugins.novelName", descKey: "plugins.novelDesc" },
	{ nameKey: "plugins.animName", descKey: "plugins.animDesc" },
]

const MARKETPLACE_URL = "https://github.com/hoardodile/marketplace"

export function PluginsSection() {
	const { t } = useTranslation("site")

	return (
		<section id="plugins" className="scroll-mt-16 border-t border-border">
			<div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
				<div className="max-w-reading">
					<SectionLabel tone="muted">{t("plugins.eyebrow")}</SectionLabel>
					<h2 className="mt-4 font-doc text-doc-heading font-bold text-foreground">
						{t("plugins.title")}
					</h2>
					<p className="mt-3 text-ui leading-relaxed text-secondary-foreground">
						{t("plugins.body")}
					</p>
				</div>

				<div className="mt-10 grid gap-4 md:grid-cols-3">
					{STEPS.map((item) => (
						<div key={item.step} className="flex flex-col gap-2">
							<span className="text-tiny font-semibold tracking-label text-muted-foreground">
								{item.step}
							</span>
							<div className="h-px w-8 bg-border-strong" />
							<h3 className="text-ui font-semibold text-foreground">
								{t(item.title)}
							</h3>
							<p className="text-ui leading-relaxed text-secondary-foreground">
								{t(item.body)}
							</p>
						</div>
					))}
				</div>

				<div className="mt-10 border-t border-border pt-6">
					<span className="text-tiny font-semibold tracking-label text-muted-foreground">
						{t("plugins.builtIn")}
					</span>
					<ul className="mt-4 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
						{BUILT_IN.map((plugin) => (
							<li key={plugin.nameKey} className="flex flex-col gap-1">
								<span className="text-ui font-medium text-foreground">
									{t(plugin.nameKey)}
								</span>
								<p className="text-ui leading-relaxed text-secondary-foreground">
									{t(plugin.descKey)}
								</p>
							</li>
						))}
					</ul>

					<div className="mt-8 border-t border-border pt-6">
						<div className="flex items-center justify-between gap-4">
							<span className="text-tiny font-semibold tracking-label text-muted-foreground">
								{t("plugins.marketplace")}
							</span>
							<a
								href={MARKETPLACE_URL}
								target="_blank"
								rel="noreferrer"
								className="text-ui font-medium text-primary transition-colors hover:underline"
							>
								{t("plugins.more")}
							</a>
						</div>
						<ul className="mt-4 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
							{MARKETPLACE.map((plugin) => (
								<li key={plugin.nameKey} className="flex flex-col gap-1">
									<span className="text-ui font-medium text-foreground">
										{t(plugin.nameKey)}
									</span>
									<p className="text-ui leading-relaxed text-secondary-foreground">
										{t(plugin.descKey)}
									</p>
								</li>
							))}
						</ul>
					</div>

					<p className="mt-6 text-ui text-muted-foreground">
						{t("plugins.writeOwn")}
					</p>
				</div>
			</div>
		</section>
	)
}
