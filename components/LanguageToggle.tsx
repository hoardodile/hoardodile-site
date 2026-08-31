"use client"

import { useTranslation } from "react-i18next"
import { useRouter } from "next/navigation"
import { cn } from "@hoardodile/ui/lib/utils"
import type { SiteLang } from "@/lib/i18n"

export function LanguageToggle({ className }: { className?: string }) {
	const { t, i18n } = useTranslation("site")
	const router = useRouter()
	const current = (i18n.language as SiteLang) || "en"
	const label = current === "en" ? t("lang.chinese") : t("lang.english")
	const target = current === "en" ? "/zh/" : "/"

	function toggle() {
		router.push(target)
	}

	return (
		<button
			type="button"
			onClick={toggle}
			className={cn(
				"inline-flex h-9 shrink-0 items-center rounded-lg px-3 text-ui font-medium text-secondary-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground",
				className,
			)}
		>
			{label}
		</button>
	)
}
