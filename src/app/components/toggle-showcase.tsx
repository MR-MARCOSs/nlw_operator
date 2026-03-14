"use client"

import { useState } from "react"
import {
	ToggleLabel,
	ToggleRoot,
	ToggleThumb,
	ToggleTrack,
} from "@/components/ui/toggle"

function ToggleShowcase() {
	const [toggleOn, setToggleOn] = useState(true)
	const [toggleOff, setToggleOff] = useState(false)

	return (
		<div className="flex items-center gap-8">
			<ToggleRoot checked={toggleOn} onCheckedChange={setToggleOn}>
				<ToggleTrack>
					<ToggleThumb />
				</ToggleTrack>
				<ToggleLabel>roast mode</ToggleLabel>
			</ToggleRoot>

			<ToggleRoot checked={toggleOff} onCheckedChange={setToggleOff}>
				<ToggleTrack>
					<ToggleThumb />
				</ToggleTrack>
				<ToggleLabel>roast mode</ToggleLabel>
			</ToggleRoot>
		</div>
	)
}

export { ToggleShowcase }
