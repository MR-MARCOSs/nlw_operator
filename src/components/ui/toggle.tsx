"use client"

import { Switch } from "@base-ui/react/switch"
import { type ComponentProps, forwardRef } from "react"
import { type VariantProps, tv } from "tailwind-variants"

const toggleRootVariants = tv({
	base: [
		"inline-flex items-center gap-3 cursor-pointer select-none",
		"[&[data-checked]_.toggle-track]:bg-emerald-500",
		"[&[data-checked]_.toggle-track]:justify-end",
		"[&[data-checked]_.toggle-thumb]:bg-[#0A0A0A]",
		"[&[data-checked]_.toggle-label]:text-emerald-500",
	],
	variants: {
		disabled: {
			true: "opacity-50 cursor-not-allowed",
			false: "",
		},
	},
	defaultVariants: {
		disabled: false,
	},
})

const toggleTrackVariants = tv({
	base: "toggle-track flex items-center w-10 h-[22px] rounded-[11px] p-[3px] bg-[#2A2A2A] justify-start transition-colors",
})

const toggleThumbVariants = tv({
	base: "toggle-thumb w-4 h-4 rounded-full bg-gray-500 transition-colors",
})

const toggleLabelVariants = tv({
	base: "toggle-label font-[family-name:var(--font-jetbrains-mono)] text-xs text-gray-500",
})

type ToggleRootVariants = VariantProps<typeof toggleRootVariants>

type ToggleRootProps = Omit<Switch.Root.Props, "className"> &
	ToggleRootVariants & {
		className?: string
	}

type ToggleTrackProps = ComponentProps<"span">

type ToggleThumbProps = Omit<Switch.Thumb.Props, "className"> & {
	className?: string
}

type ToggleLabelProps = ComponentProps<"span">

const ToggleRoot = forwardRef<HTMLElement, ToggleRootProps>(
	({ className, disabled, ...props }, ref) => {
		return (
			<Switch.Root
				ref={ref}
				className={toggleRootVariants({ disabled, className })}
				{...props}
			/>
		)
	},
)

const ToggleTrack = forwardRef<HTMLSpanElement, ToggleTrackProps>(
	({ className, ...props }, ref) => {
		return <span ref={ref} className={toggleTrackVariants({ className })} {...props} />
	},
)

const ToggleThumb = forwardRef<HTMLElement, ToggleThumbProps>(
	({ className, ...props }, ref) => {
		return (
			<Switch.Thumb
				ref={ref}
				className={toggleThumbVariants({ className })}
				{...props}
			/>
		)
	},
)

const ToggleLabel = forwardRef<HTMLSpanElement, ToggleLabelProps>(
	({ className, ...props }, ref) => {
		return <span ref={ref} className={toggleLabelVariants({ className })} {...props} />
	},
)

ToggleRoot.displayName = "ToggleRoot"
ToggleTrack.displayName = "ToggleTrack"
ToggleThumb.displayName = "ToggleThumb"
ToggleLabel.displayName = "ToggleLabel"

export {
	ToggleRoot,
	ToggleTrack,
	ToggleThumb,
	ToggleLabel,
	toggleRootVariants,
	toggleTrackVariants,
	toggleThumbVariants,
	toggleLabelVariants,
	type ToggleRootProps,
	type ToggleTrackProps,
	type ToggleThumbProps,
	type ToggleLabelProps,
}
