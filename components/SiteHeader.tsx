"use client"

import { useTranslation } from "react-i18next"
import { DownloadButton } from "./DownloadButton"
import { LanguageToggle } from "./LanguageToggle"

export function SiteHeader() {
	const { t } = useTranslation("site")

	const NAV = [
		{ label: t("nav.product"), href: "#capabilities", external: false },
		{ label: t("nav.plugins"), href: "#plugins", external: false },
		{ label: t("nav.screenshots"), href: "#demo", external: false },
		{ label: t("nav.faq"), href: "#faq", external: false },
		{
			label: t("nav.docs"),
			href: "https://github.com/hoardodile/hoardodile",
			external: true,
		},
	]

	return (
		<header className="sticky top-0 z-40 border-b border-border bg-background">
			<div className="mx-auto flex min-h-nav max-w-[1200px] items-center gap-6 px-5 py-2 md:px-8">
				<a href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Hoardodile">
					<img
						src="/logo.png"
						alt=""
						width={28}
						height={28}
						className="size-7 rounded-md object-cover"
						decoding="async"
					/>
					<span className="text-sm font-semibold text-foreground">
						{t("brand")}
					</span>
				</a>

				<nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
					{NAV.map((item) => (
						<a
							key={item.label}
							href={item.href}
							{...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
							className="rounded-lg px-3 py-1.5 text-ui font-medium text-secondary-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground"
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className="ml-auto flex items-center gap-2">
					<LanguageToggle className="hidden md:inline-flex" />
					<DownloadButton />
				</div>
			</div>
		</header>
	)
}
