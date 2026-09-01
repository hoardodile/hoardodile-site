/**
 * Per-locale SEO metadata. Shared by `generateMetadata` and the JSON-LD
 * in the page, so the two never drift.
 */
export const SITE_TITLE = {
	en: "Hoardodile — a self-hosted library for the things you keep",
	zh: "Hoardodile — 自托管存储库",
} as const

export const SITE_DESCRIPTION = {
	en: "Hoardodile is a self-hosted digital archive. Images, documents, PDFs, video, audio, pages, archives, comics, 2D Skel and novels are collected in one place, previewed in place, and kept on your own storage — with no telemetry.",
	zh: "Hoardodile 是一个自托管数字归档工具。图片、文档、PDF、视频、音频、网页、压缩包、漫画、小说与 2D 骨骼集中收藏、就地预览，并保存在你自己的存储上；无遥测。",
} as const

export const SITE_KEYWORDS = {
	en: [
		"self-hosted",
		"archive",
		"digital hoarding",
		"media library",
		"privacy",
		"plugin",
	],
	zh: ["自托管", "归档", "数字囤积", "媒体库", "隐私优先", "插件"],
} as const
