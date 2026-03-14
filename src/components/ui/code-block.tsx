import { type ComponentProps } from "react"
import { codeToHtml, type BundledLanguage } from "shiki"
import { tv } from "tailwind-variants"

const codeBlockRootVariants = tv({
	base: "flex flex-col bg-[#111111] border border-[#2A2A2A] overflow-hidden",
})

const codeBlockHeaderVariants = tv({
	base: "flex items-center gap-3 h-10 px-4 border-b border-[#2A2A2A]",
})

const codeBlockWindowDotsVariants = tv({
	base: "flex items-center gap-2",
})

const codeBlockFileNameVariants = tv({
	base: "font-[family-name:var(--font-jetbrains-mono)] text-xs text-[#4B5563]",
})

const codeBlockBodyVariants = tv({
	base: "flex min-h-[300px]",
})

const codeBlockLineNumbersVariants = tv({
	base: "w-12 bg-[#0F0F0F] border-r border-[#2A2A2A] px-3 py-4 flex flex-col items-end gap-2",
})

const codeBlockContentVariants = tv({
	base: "flex-1 [&_.shiki]:m-0 [&_.shiki]:!bg-transparent [&_.shiki]:p-4 [&_.shiki]:overflow-x-auto [&_.shiki]:font-[family-name:var(--font-jetbrains-mono)] [&_.line]:text-[13px] [&_.line]:leading-7",
})

type CodeBlockRootProps = ComponentProps<"div">

type CodeBlockHeaderProps = ComponentProps<"div">

type CodeBlockWindowDotsProps = ComponentProps<"div">

type CodeBlockFileNameProps = ComponentProps<"span">

type CodeBlockBodyProps = ComponentProps<"div">

type CodeBlockLineNumbersProps = Omit<ComponentProps<"div">, "children"> & {
	code: string
}

type CodeBlockContentProps = Omit<ComponentProps<"div">, "dangerouslySetInnerHTML" | "children"> & {
	code: string
	lang: BundledLanguage
}

function CodeBlockRoot({ className, ...props }: CodeBlockRootProps) {
	return <div className={codeBlockRootVariants({ className })} {...props} />
}

function CodeBlockHeader({ className, ...props }: CodeBlockHeaderProps) {
	return <div className={codeBlockHeaderVariants({ className })} {...props} />
}

function CodeBlockWindowDots({ className, ...props }: CodeBlockWindowDotsProps) {
	return (
		<div className={codeBlockWindowDotsVariants({ className })} {...props}>
			<span className="w-2.5 h-2.5 rounded-full bg-red-500" />
			<span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
			<span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
		</div>
	)
}

function CodeBlockFileName({ className, ...props }: CodeBlockFileNameProps) {
	return <span className={codeBlockFileNameVariants({ className })} {...props} />
}

function CodeBlockBody({ className, ...props }: CodeBlockBodyProps) {
	return <div className={codeBlockBodyVariants({ className })} {...props} />
}

function CodeBlockLineNumbers({
	className,
	code,
	...props
}: CodeBlockLineNumbersProps) {
	const lineCount = code.split("\n").length

	return (
		<div className={codeBlockLineNumbersVariants({ className })} {...props}>
			{Array.from({ length: lineCount }).map((_, index) => (
				<span
					key={index}
					className="font-[family-name:var(--font-jetbrains-mono)] text-[13px] leading-5 text-[#4B5563]"
				>
					{index + 1}
				</span>
			))}
		</div>
	)
}

async function CodeBlockContent({
	className,
	code,
	lang,
	...props
}: CodeBlockContentProps) {
	const html = await codeToHtml(code, {
		lang,
		theme: "vesper",
	})

	return (
		<div
			className={codeBlockContentVariants({ className })}
			dangerouslySetInnerHTML={{ __html: html }}
			{...props}
		/>
	)
}

export {
	CodeBlockRoot,
	CodeBlockHeader,
	CodeBlockWindowDots,
	CodeBlockFileName,
	CodeBlockBody,
	CodeBlockLineNumbers,
	CodeBlockContent,
	codeBlockRootVariants,
	codeBlockHeaderVariants,
	codeBlockWindowDotsVariants,
	codeBlockFileNameVariants,
	codeBlockBodyVariants,
	codeBlockLineNumbersVariants,
	codeBlockContentVariants,
	type CodeBlockRootProps,
	type CodeBlockHeaderProps,
	type CodeBlockWindowDotsProps,
	type CodeBlockFileNameProps,
	type CodeBlockBodyProps,
	type CodeBlockLineNumbersProps,
	type CodeBlockContentProps,
}
