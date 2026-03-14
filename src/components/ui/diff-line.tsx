import { type ComponentProps, forwardRef } from "react"
import { type VariantProps, tv } from "tailwind-variants"

const diffLineRootVariants = tv({
	base: "flex gap-2 py-2 px-4 font-[family-name:var(--font-jetbrains-mono)] text-[13px]",
	variants: {
		variant: {
			removed: "bg-[#1A0A0A]",
			added: "bg-[#0A1A0F]",
			context: "bg-transparent",
		},
	},
	defaultVariants: {
		variant: "context",
	},
})

const diffLinePrefixVariants = tv({
	base: "",
	variants: {
		variant: {
			removed: "text-red-500",
			added: "text-emerald-500",
			context: "text-[#4B5563]",
		},
	},
	defaultVariants: {
		variant: "context",
	},
})

const diffLineCodeVariants = tv({
	base: "",
	variants: {
		variant: {
			removed: "text-[#A3A3A3]",
			added: "text-[#FAFAFA]",
			context: "text-[#A3A3A3]",
		},
	},
	defaultVariants: {
		variant: "context",
	},
})

type DiffLineRootVariants = VariantProps<typeof diffLineRootVariants>

type DiffLineRootProps = ComponentProps<"div"> & DiffLineRootVariants

type DiffLinePrefixProps = ComponentProps<"span"> & DiffLineRootVariants

type DiffLineCodeProps = ComponentProps<"span"> & DiffLineRootVariants

const prefixMap = {
	removed: "-",
	added: "+",
	context: " ",
} as const

const DiffLineRoot = forwardRef<HTMLDivElement, DiffLineRootProps>(
	({ className, variant = "context", ...props }, ref) => {
		return <div ref={ref} className={diffLineRootVariants({ variant, className })} {...props} />
	},
)

const DiffLinePrefix = forwardRef<HTMLSpanElement, DiffLinePrefixProps>(
	({ className, variant = "context", ...props }, ref) => {
		const currentVariant = variant

		return (
			<span
				ref={ref}
				className={diffLinePrefixVariants({ variant: currentVariant, className })}
				{...props}
			>
				{prefixMap[currentVariant]}
			</span>
		)
	},
)

const DiffLineCode = forwardRef<HTMLSpanElement, DiffLineCodeProps>(
	({ className, variant = "context", ...props }, ref) => {
		return (
			<span
				ref={ref}
				className={diffLineCodeVariants({
					variant,
					className,
				})}
				{...props}
			/>
		)
	},
)

DiffLineRoot.displayName = "DiffLineRoot"
DiffLinePrefix.displayName = "DiffLinePrefix"
DiffLineCode.displayName = "DiffLineCode"

export {
	DiffLineRoot,
	DiffLinePrefix,
	DiffLineCode,
	diffLineRootVariants,
	diffLinePrefixVariants,
	diffLineCodeVariants,
	type DiffLineRootProps,
	type DiffLinePrefixProps,
	type DiffLineCodeProps,
}
