import {
	AnalysisCardDescription,
	AnalysisCardHeader,
	AnalysisCardRoot,
	AnalysisCardTitle,
} from "@/components/ui/analysis-card"
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
import { DiffLineCode, DiffLinePrefix, DiffLineRoot } from "@/components/ui/diff-line"
import { ToggleShowcase } from "./toggle-showcase"

const sampleCode = [
	"function calculateTotal(items) {",
	"  var total = 0;",
	"  for (var i = 0; i < items.length; i++) {",
	"    total = total + items[i].price;",
	"  }",
	"}",
].join("\n")

function SectionTitle({ children }: { children: string }) {
	return (
		<div className="flex items-center gap-2">
			<span className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-emerald-500 font-bold">
				//
			</span>
			<span className="font-[family-name:var(--font-jetbrains-mono)] text-sm text-[#FAFAFA] font-bold">
				{children}
			</span>
		</div>
	)
}

export default function ComponentsPage() {
	return (
		<div className="min-h-screen bg-[#0A0A0A] p-12 flex flex-col gap-16">
			<h1 className="flex items-center gap-2">
				<span className="font-[family-name:var(--font-jetbrains-mono)] text-2xl text-emerald-500 font-bold">
					//
				</span>
				<span className="font-[family-name:var(--font-jetbrains-mono)] text-2xl text-[#FAFAFA] font-bold">
					component_library
				</span>
			</h1>

			<section className="flex flex-col gap-6">
				<SectionTitle>buttons</SectionTitle>
				<div className="flex items-center gap-4">
					<Button>$ roast_my_code</Button>
					<Button variant="secondary">$ share_roast</Button>
					<Button variant="link">$ view_all &gt;&gt;</Button>
				</div>
			</section>

			<section className="flex flex-col gap-6">
				<SectionTitle>toggle</SectionTitle>
				<ToggleShowcase />
			</section>

			<section className="flex flex-col gap-6">
				<SectionTitle>badge_status</SectionTitle>
				<div className="flex items-center gap-6">
					<BadgeRoot variant="critical">
						<BadgeDot variant="critical" />
						<BadgeText>critical</BadgeText>
					</BadgeRoot>
					<BadgeRoot variant="warning">
						<BadgeDot variant="warning" />
						<BadgeText>warning</BadgeText>
					</BadgeRoot>
					<BadgeRoot variant="good">
						<BadgeDot variant="good" />
						<BadgeText>good</BadgeText>
					</BadgeRoot>
					<BadgeRoot variant="critical">
						<BadgeDot variant="critical" />
						<BadgeText>needs_serious_help</BadgeText>
					</BadgeRoot>
				</div>
			</section>

			<section className="flex flex-col gap-6">
				<SectionTitle>cards</SectionTitle>
				<AnalysisCardRoot className="max-w-[480px]">
					<AnalysisCardHeader>
						<BadgeRoot variant="critical">
							<BadgeDot variant="critical" />
							<BadgeText>critical</BadgeText>
						</BadgeRoot>
					</AnalysisCardHeader>
					<AnalysisCardTitle>using var instead of const/let</AnalysisCardTitle>
					<AnalysisCardDescription>
						the var keyword is function-scoped rather than block-scoped, which can
						lead to unexpected behavior and bugs. modern javascript uses const for
						immutable bindings and let for mutable ones.
					</AnalysisCardDescription>
				</AnalysisCardRoot>
			</section>

			<section className="flex flex-col gap-6">
				<SectionTitle>code_block</SectionTitle>
				<CodeBlockRoot className="max-w-[560px]">
					<CodeBlockHeader>
						<CodeBlockWindowDots />
						<span className="flex-1" />
						<CodeBlockFileName>calculate.js</CodeBlockFileName>
					</CodeBlockHeader>
					<CodeBlockBody>
						<CodeBlockLineNumbers code={sampleCode} />
						<CodeBlockContent code={sampleCode} lang="javascript" />
					</CodeBlockBody>
				</CodeBlockRoot>
			</section>

			<section className="flex flex-col gap-6">
				<SectionTitle>diff_line</SectionTitle>
				<div className="flex flex-col max-w-[560px]">
					<DiffLineRoot variant="removed">
						<DiffLinePrefix variant="removed" />
						<DiffLineCode variant="removed">var total = 0;</DiffLineCode>
					</DiffLineRoot>
					<DiffLineRoot variant="added">
						<DiffLinePrefix variant="added" />
						<DiffLineCode variant="added">const total = 0;</DiffLineCode>
					</DiffLineRoot>
					<DiffLineRoot variant="context">
						<DiffLinePrefix variant="context" />
						<DiffLineCode variant="context">
							for (let i = 0; i &lt; items.length; i++) &#123;
						</DiffLineCode>
					</DiffLineRoot>
				</div>
			</section>
		</div>
	)
}
