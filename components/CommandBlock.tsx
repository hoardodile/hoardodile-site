"use client"

export function CommandBlock({ code }: { code: string }) {
	return (
		<pre className="overflow-x-auto whitespace-pre rounded-md border border-border bg-background p-3 font-mono text-xs leading-relaxed text-secondary-foreground">
			{code}
		</pre>
	)
}
