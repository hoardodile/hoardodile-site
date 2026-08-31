"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@hoardodile/ui/components/button"
import { LATEST_VERSION } from "@/lib/site"
import { DownloadPanel } from "./DownloadPanel"

export function DownloadButton({
	variant = "default",
}: {
	variant?: "default" | "outline"
}) {
	const { t } = useTranslation("site")
	const [open, setOpen] = useState(false)

	return (
		<>
			<Button variant={variant} onClick={() => setOpen(true)}>
				{t("download.buttonVersion", { version: LATEST_VERSION })}
			</Button>
			<DownloadPanel open={open} onOpenChange={setOpen} />
		</>
	)
}
