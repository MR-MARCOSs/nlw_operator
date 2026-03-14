import { Button } from "@/components/ui/button"

export default function ComponentsPage() {
	return (
		<div className="min-h-screen bg-zinc-950 p-12">
			<h1 className="text-zinc-50 text-2xl font-bold mb-12">UI Components</h1>

			<section className="space-y-6">
				<h2 className="text-zinc-400 text-sm font-mono uppercase tracking-wider">
					Button
				</h2>

				<div className="space-y-4">
					<div className="space-y-2">
						<span className="text-zinc-500 text-xs font-mono block">
							variant=&quot;primary&quot; (default)
						</span>
						<div className="flex items-center gap-4">
							<Button>$ roast_my_code</Button>
							<Button disabled>$ roast_my_code</Button>
						</div>
					</div>

					<div className="space-y-2">
						<span className="text-zinc-500 text-xs font-mono block">
							variant=&quot;secondary&quot;
						</span>
						<div className="flex items-center gap-4">
							<Button variant="secondary">$ share_roast</Button>
							<Button variant="secondary" disabled>
								$ share_roast
							</Button>
						</div>
					</div>

					<div className="space-y-2">
						<span className="text-zinc-500 text-xs font-mono block">
							variant=&quot;link&quot;
						</span>
						<div className="flex items-center gap-4">
							<Button variant="link">$ view_all &gt;&gt;</Button>
							<Button variant="link" disabled>
								$ view_all &gt;&gt;
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
