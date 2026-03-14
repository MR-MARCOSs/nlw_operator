import { HomeActions } from "@/components/app/home-actions"
import { BadgeDot, BadgeRoot, BadgeText } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	CodeBlockBody,
	CodeBlockContent,
	CodeBlockFileName,
	CodeBlockHeader,
	CodeBlockLineNumbers,
	CodeBlockRoot,
	CodeBlockWindowDots,
} from "@/components/ui/code-block"
import Link from "next/link"

const sampleCode = [
	"function calculateTotal(items) {",
	"  var total = 0;",
	"  for (var i = 0; i < items.length; i++) {",
	"    total = total + items[i].price;",
	"  }",
	"",
	"  if (total > 100) {",
	"    console.log(\"wow\")",
	"  }",
	"",
	"  return total * 0.9",
	"}",
	"",
	"// TODO: handle tax calculation",
	"// TODO: add currency formatting",
].join("\n")

const leaderboardRows = [
	{
		rank: 1,
		score: 1.2,
		code: "eval(\"alert('hacked')\")",
		language: "javascript",
		severity: "critical" as const,
	},
	{
		rank: 2,
		score: 1.9,
		code: "if (x = true) return x + y",
		language: "typescript",
		severity: "critical" as const,
	},
	{
		rank: 3,
		score: 2.1,
		code: "SELECT * FROM users WHERE id = " + "id",
		language: "sql",
		severity: "warning" as const,
	},
]

export default function Home() {
	return (
		<main className="w-full">
			<div className="w-full max-w-6xl mx-auto px-6 pt-20 pb-16 flex flex-col gap-16">
				<section className="w-full flex flex-col items-center gap-3">
					<h1 className="w-full max-w-[780px] flex items-center gap-3">
						<span className="font-[family-name:var(--font-jetbrains-mono)] text-[36px] leading-none font-bold text-emerald-500">
							$
						</span>
						<span className="font-[family-name:var(--font-jetbrains-mono)] text-[36px] leading-none font-bold text-[#E5E5E5]">
							paste your code. get roasted.
						</span>
					</h1>

					<p className="w-full max-w-[780px] font-[family-name:var(--font-ibm-plex-mono)] text-sm text-[#6B7280]">
						// drop your code below and we'll rate it - brutally honest or full
						 roast mode
					</p>

					<CodeBlockRoot className="w-full max-w-[780px]">
						<CodeBlockHeader>
							<CodeBlockWindowDots />
							<span className="flex-1" />
							<CodeBlockFileName>calculateTotal.js</CodeBlockFileName>
						</CodeBlockHeader>
						<CodeBlockBody>
							<CodeBlockLineNumbers code={sampleCode} />
							<CodeBlockContent code={sampleCode} lang="javascript" />
						</CodeBlockBody>
					</CodeBlockRoot>

					<HomeActions />

					<div className="w-full max-w-[780px] flex items-center justify-center gap-6">
						<span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[#4B5563]">
							2,847 codes roasted
						</span>
						<span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#4B5563]">
							.
						</span>
						<span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[#4B5563]">
							avg score: 4.2/10
						</span>
					</div>
				</section>

				<section className="w-full max-w-[960px] mx-auto flex flex-col gap-6">
					<div className="w-full flex items-center justify-between">
						<div className="flex items-center gap-2">
							<span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold text-emerald-500">
								//
							</span>
							<span className="font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold text-[#E5E5E5]">
								shame_leaderboard
							</span>
						</div>

						<Button variant="link">$ view_all &gt;&gt;</Button>
					</div>

					<p className="font-[family-name:var(--font-ibm-plex-mono)] text-[13px] text-[#4B5563]">
						// the worst code on the internet, ranked by shame
					</p>

					<div className="w-full border border-[#2A2A2A] bg-[#0F0F0F]">
						<div className="h-10 px-5 border-b border-[#2A2A2A] grid grid-cols-[56px_72px_1fr_120px_110px] items-center">
							<span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#4B5563]">
								#
							</span>
							<span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#4B5563]">
								score
							</span>
							<span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#4B5563]">
								code
							</span>
							<span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#4B5563]">
								lang
							</span>
							<span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#4B5563]">
								verdict
							</span>
						</div>

						{leaderboardRows.map((row) => (
							<div
								key={row.rank}
								className="px-5 py-4 border-b last:border-b-0 border-[#2A2A2A] grid grid-cols-[56px_72px_1fr_120px_110px] items-center gap-2"
							>
								<span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#A3A3A3]">
									{row.rank}
								</span>
								<span className="font-[family-name:var(--font-jetbrains-mono)] text-[13px] font-bold text-red-500">
									{row.score}
								</span>
								<span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#A3A3A3] truncate">
									{row.code}
								</span>
								<span className="font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#6B7280]">
									{row.language}
								</span>
								<BadgeRoot variant={row.severity}>
									<BadgeDot variant={row.severity} />
									<BadgeText>{row.severity}</BadgeText>
								</BadgeRoot>
							</div>
						))}
					</div>

					<div className="w-full py-4 flex items-center justify-center">
						<span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[#4B5563]">
							showing top 3 of 2,847 .
						</span>
						<Link
							href="/leaderboard"
							className="ml-1 font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[#6B7280] hover:text-[#A3A3A3] transition-colors"
						>
							view full leaderboard &gt;&gt;
						</Link>
					</div>
				</section>
			</div>
		</main>
	)
}
