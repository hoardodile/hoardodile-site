"use client"

import { useEffect } from "react"

export function Lightbox({
	src,
	alt,
	onClose,
}: {
	src: string
	alt: string
	onClose: () => void
}) {
	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key === "Escape") onClose()
		}
		window.addEventListener("keydown", onKey)
		return () => window.removeEventListener("keydown", onKey)
	}, [onClose])

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-8"
			role="dialog"
			aria-modal="true"
			aria-label={alt}
			onClick={onClose}
		>
			<img
				src={src}
				alt={alt}
				className="max-h-full max-w-full rounded-lg object-contain shadow-dialog"
				onClick={(e) => e.stopPropagation()}
			/>
			<button
				type="button"
				onClick={onClose}
				aria-label="Close"
				className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-lg text-white hover:bg-white/10"
			>
				×
			</button>
		</div>
	)
}
