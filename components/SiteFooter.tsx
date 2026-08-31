"use client"

import { useTranslation } from "react-i18next"
import { LanguageToggle } from "./LanguageToggle"

const PRODUCT = [
	{ labelKey: "nav.product", href: "#capabilities" },
	{ labelKey: "nav.plugins", href: "#plugins" },
	{ labelKey: "nav.screenshots", href: "#demo" },
	{ labelKey: "nav.faq", href: "#faq" },
]

const COMMUNITY = [
	{ label: "GitHub", href: "https://github.com/hoardodile/hoardodile" },
	{ label: "Docs", href: "https://github.com/hoardodile/hoardodile" },
	{ label: "Marketplace", href: "https://github.com/hoardodile/marketplace" },
]

export function SiteFooter() {
	const { t } = useTranslation("site")
	const year = new Date().getFullYear()

	return (
		<footer className="border-t border-border">
			<div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8">
				<div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
					<div className="flex flex-col gap-3">
						<div className="flex items-center gap-2.5">
							<img
								src="/logo.png"
								alt=""
								width={24}
								height={24}
								className="size-6 rounded-md object-cover"
								decoding="async"
							/>
							<span className="text-sm font-semibold text-foreground">
								{t("brand")}
							</span>
						</div>
						<p className="max-w-[40ch] text-ui leading-relaxed text-muted-foreground">
							{t("footer.tagline")}
						</p>
					</div>

					<div className="flex flex-col gap-2">
						<span className="text-tiny font-semibold tracking-label text-muted-foreground">
							{t("footer.product")}
						</span>
						{PRODUCT.map((link) => (
							<a
								key={link.labelKey}
								href={link.href}
								className="text-ui text-secondary-foreground transition-colors duration-150 hover:text-foreground"
							>
								{t(link.labelKey)}
							</a>
						))}
					</div>

					<div className="flex flex-col gap-2">
						<span className="text-tiny font-semibold tracking-label text-muted-foreground">
							{t("footer.community")}
						</span>
						{COMMUNITY.map((link) => (
							<a
								key={link.label}
								href={link.href}
								target="_blank"
								rel="noreferrer"
								className="text-ui text-secondary-foreground transition-colors duration-150 hover:text-foreground"
							>
								{link.label}
							</a>
						))}
					</div>
				</div>

				<div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
					<p className="text-xs text-muted-foreground">{t("footer.license")}</p>
					<p className="text-xs text-muted-foreground">
						© {year} {t("brand")}
					</p>
					<LanguageToggle className="h-8 px-2 text-xs" />
				</div>
			</div>
		</footer>
	)
}
