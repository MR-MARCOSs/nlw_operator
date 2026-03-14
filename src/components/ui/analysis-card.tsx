import { type ComponentProps, forwardRef } from "react"
import { type VariantProps, tv } from "tailwind-variants"

const analysisCardRootVariants = tv({
	base: "flex flex-col gap-3 p-5 border border-[#2A2A2A]",
	variants: {
		variant: {
			default: "",
		},
	},
	defaultVariants: {
		variant: "default",
	},
})

const analysisCardHeaderVariants = tv({
	base: "flex items-center",
})

const analysisCardTitleVariants = tv({
	base: "font-[family-name:var(--font-jetbrains-mono)] text-[13px] text-[#E5E5E5]",
})

const analysisCardDescriptionVariants = tv({
	base: "font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[#A3A3A3] leading-6",
})

type AnalysisCardRootVariants = VariantProps<typeof analysisCardRootVariants>

type AnalysisCardRootProps = ComponentProps<"div"> & AnalysisCardRootVariants

type AnalysisCardHeaderProps = ComponentProps<"div">

type AnalysisCardTitleProps = ComponentProps<"h3">

type AnalysisCardDescriptionProps = ComponentProps<"p">

const AnalysisCardRoot = forwardRef<HTMLDivElement, AnalysisCardRootProps>(
	({ className, variant, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={analysisCardRootVariants({ variant, className })}
				{...props}
			/>
		)
	},
)

const AnalysisCardHeader = forwardRef<HTMLDivElement, AnalysisCardHeaderProps>(
	({ className, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={analysisCardHeaderVariants({ className })}
				{...props}
			/>
		)
	},
)

const AnalysisCardTitle = forwardRef<HTMLHeadingElement, AnalysisCardTitleProps>(
	({ className, ...props }, ref) => {
		return (
			<h3
				ref={ref}
				className={analysisCardTitleVariants({ className })}
				{...props}
			/>
		)
	},
)

const AnalysisCardDescription = forwardRef<
	HTMLParagraphElement,
	AnalysisCardDescriptionProps
>(({ className, ...props }, ref) => {
	return (
		<p
			ref={ref}
			className={analysisCardDescriptionVariants({ className })}
			{...props}
		/>
	)
})

AnalysisCardRoot.displayName = "AnalysisCardRoot"
AnalysisCardHeader.displayName = "AnalysisCardHeader"
AnalysisCardTitle.displayName = "AnalysisCardTitle"
AnalysisCardDescription.displayName = "AnalysisCardDescription"

export {
	AnalysisCardRoot,
	AnalysisCardHeader,
	AnalysisCardTitle,
	AnalysisCardDescription,
	analysisCardRootVariants,
	analysisCardHeaderVariants,
	analysisCardTitleVariants,
	analysisCardDescriptionVariants,
	type AnalysisCardRootProps,
	type AnalysisCardHeaderProps,
	type AnalysisCardTitleProps,
	type AnalysisCardDescriptionProps,
}
