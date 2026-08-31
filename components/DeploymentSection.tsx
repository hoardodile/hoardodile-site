"use client"

import { useTranslation } from "react-i18next"
import { SectionLabel } from "@hoardodile/ui/components/section-label"
import { CommandBlock } from "./CommandBlock"
import { DownloadButton } from "./DownloadButton"

type Option = { title: string; body: string } & ({ cmd: string } | { download: true })

const OPTIONS: Option[] = [
	{
		title: "deploy.dock_t",
		body: "deploy.dock_b",
		cmd: "docker compose up -d",
	},
	{
		title: "deploy.self_t",
		body: "deploy.self_b",
		cmd: "pnpm install\ncp .env.example .env\npnpm build\npnpm start",
	},
	{ title: "deploy.desk_t", body: "deploy.desk_b", download: true },
]

export function DeploymentSection() {
	const { t } = useTranslation("site")

	return (
		<section id="deploy" className="scroll-mt-16 border-t border-border">
			<div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
				<div className="max-w-reading">
					<SectionLabel tone="muted">{t("deploy.eyebrow")}</SectionLabel>
					<h2 className="mt-4 font-doc text-doc-heading font-bold text-foreground">
						{t("deploy.title")}
					</h2>
					<p className="mt-3 text-ui leading-relaxed text-secondary-foreground">
						{t("deploy.body")}
					</p>
				</div>

				<div className="mt-10 grid gap-4 md:grid-cols-3">
					{OPTIONS.map((option) => (
						<div
							key={option.title}
							className="flex flex-col gap-3 rounded-lg bg-muted p-6"
						>
							<h3 className="text-ui font-semibold text-foreground">
								{t(option.title)}
							</h3>
							<p className="text-ui leading-relaxed text-secondary-foreground">
								{t(option.body)}
							</p>
							{"cmd" in option ? (
								<CommandBlock code={option.cmd} />
							) : (
								<DownloadButton />
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
