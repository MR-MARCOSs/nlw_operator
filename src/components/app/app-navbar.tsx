import Link from "next/link"

function AppNavbar() {
	return (
		<header className="w-full h-14 bg-[#0A0A0A] border-b border-[#2A2A2A]">
			<div className="w-full max-w-6xl h-full mx-auto px-6 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2">
					<span className="font-[family-name:var(--font-jetbrains-mono)] text-xl font-bold text-emerald-500">
						&gt;
					</span>
					<span className="font-[family-name:var(--font-jetbrains-mono)] text-lg font-medium text-[#FAFAFA]">
						devroast
					</span>
				</Link>

				<span className="font-[family-name:var(--font-jetbrains-mono)] text-[13px] text-[#6B7280]">
					leaderboard
				</span>
			</div>
		</header>
	)
}

export { AppNavbar }
