"use client"

import { useTranslation } from "react-i18next"
import { AppDialog } from "@hoardodile/ui/components/app-dialog"
import { Badge } from "@hoardodile/ui/components/badge"
import { Button } from "@hoardodile/ui/components/button"
import { detectPlatform, type Platform } from "@/lib/platform"
import { ASSETS, LATEST_VERSION, RELEASE_PAGE } from "@/lib/site"

type PlatformOption = {
	id: Exclude<Platform, "other">
	labelKey: string
	files: { key: string; url: string; primary?: boolean }[]
}

const PLATFORMS: PlatformOption[] = [
	{
		id: "windows",
		labelKey: "download.windows",
		files: [
			{ key: "download.installer", url: ASSETS.winInstaller, primary: true },
			{ key: "download.portableZip", url: ASSETS.winPortable },
		],
	},
	{
		id: "macos",
		labelKey: "download.macos",
		files: [{ key: "download.installer", url: ASSETS.macDmg, primary: true }],
	},
	{
		id: "linux",
		labelKey: "download.linux",
		files: [
			{ key: "download.installer", url: ASSETS.linuxAppImage, primary: true },
		],
	},
]

export function DownloadPanel({
	open,
	onOpenChange,
}: {
	open: boolean
	onOpenChange: (open: boolean) => void
}) {
	const { t } = useTranslation("site")
	const detected = detectPlatform()

	return (
		<AppDialog
			open={open}
			onOpenChange={onOpenChange}
			size="xl"
			eyebrow={t("download.eyebrow")}
			title={t("download.title", { version: LATEST_VERSION })}
			description={t("download.subtitle")}
			footer={
				<a
					href={RELEASE_PAGE}
					target="_blank"
					rel="noreferrer"
					className="text-ui font-medium text-primary transition-colors hover:underline"
				>
					{t("download.viewRelease")}
				</a>
			}
		>
			<div className="grid gap-4 md:grid-cols-3">
				{PLATFORMS.map((platform) => (
					<div
						key={platform.id}
						className="flex flex-col gap-3 rounded-lg bg-muted p-5"
					>
						<div className="flex items-center justify-between gap-3">
							<h3 className="text-ui font-semibold text-foreground">
								{t(platform.labelKey)}
							</h3>
							{detected === platform.id ? (
								<Badge>{t("download.detected")}</Badge>
							) : null}
						</div>
						<div className="flex flex-col gap-2">
							{platform.files.map((file) => (
								<Button
									key={file.key}
									variant={file.primary ? "default" : "outline"}
									nativeButton={false}
									render={<a href={file.url} />}
								>
									{t(file.key)}
								</Button>
							))}
						</div>
					</div>
				))}
			</div>

			{detected === "other" ? (
				<div className="mt-4">
					<p className="text-ui font-medium text-foreground">
						{t("download.notSureTitle")}
					</p>
					<p className="mt-1 text-ui text-secondary-foreground">
						{t("download.notSureBody")}
					</p>
				</div>
			) : null}

			<p className="mt-4 text-xs text-muted-foreground">
				{t("download.selfHostNote")}
			</p>
		</AppDialog>
	)
}
