import { type ComponentProps, forwardRef } from "react"
import { type VariantProps, tv } from "tailwind-variants"

const badgeRootVariants = tv({
	base: "inline-flex items-center gap-2 font-[family-name:var(--font-jetbrains-mono)] text-xs",
	variants: {
		variant: {
			critical: "text-red-500",
			warning: "text-amber-500",
			good: "text-emerald-500",
		},
	},
	defaultVariants: {
		variant: "critical",
	},
})

const badgeDotVariants = tv({
	base: "w-2 h-2 rounded-full",
	variants: {
		variant: {
			critical: "bg-red-500",
			warning: "bg-amber-500",
			good: "bg-emerald-500",
		},
	},
	defaultVariants: {
		variant: "critical",
	},
})

type BadgeRootVariants = VariantProps<typeof badgeRootVariants>

type BadgeRootProps = ComponentProps<"span"> & BadgeRootVariants

type BadgeDotProps = ComponentProps<"span"> & BadgeRootVariants

type BadgeTextProps = ComponentProps<"span">

const BadgeRoot = forwardRef<HTMLSpanElement, BadgeRootProps>(
	({ className, variant, ...props }, ref) => {
		return <span ref={ref} className={badgeRootVariants({ variant, className })} {...props} />
	},
)

const BadgeDot = forwardRef<HTMLSpanElement, BadgeDotProps>(
	({ className, variant, ...props }, ref) => {
		return (
			<span
				ref={ref}
				className={badgeDotVariants({ variant, className })}
				{...props}
			/>
		)
	},
)

const BadgeText = forwardRef<HTMLSpanElement, BadgeTextProps>(
	({ className, ...props }, ref) => {
		return <span ref={ref} className={className} {...props} />
	},
)

BadgeRoot.displayName = "BadgeRoot"
BadgeDot.displayName = "BadgeDot"
BadgeText.displayName = "BadgeText"

export {
	BadgeRoot,
	BadgeDot,
	BadgeText,
	badgeRootVariants,
	badgeDotVariants,
	type BadgeRootProps,
	type BadgeDotProps,
	type BadgeTextProps,
}
