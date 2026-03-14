import { type ComponentProps, forwardRef } from "react"
import { type VariantProps, tv } from "tailwind-variants"

const buttonVariants = tv({
	base: [
		"inline-flex items-center justify-center gap-2",
		"font-[family-name:var(--font-jetbrains-mono)]",
		"cursor-pointer transition-opacity hover:opacity-80",
		"disabled:opacity-50 disabled:cursor-not-allowed",
	],
	variants: {
		variant: {
			primary:
				"bg-emerald-500 text-zinc-950 font-medium text-[13px] py-2.5 px-6",
			secondary:
				"bg-transparent text-zinc-50 text-xs border border-[#2A2A2A] py-2 px-4",
			link: "bg-transparent text-gray-500 text-xs border border-[#2A2A2A] py-1.5 px-3",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
})

type ButtonVariants = VariantProps<typeof buttonVariants>

type ButtonProps = ComponentProps<"button"> & ButtonVariants

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={buttonVariants({ variant, className })}
				{...props}
			/>
		)
	},
)

Button.displayName = "Button"

export { Button, buttonVariants, type ButtonProps }
