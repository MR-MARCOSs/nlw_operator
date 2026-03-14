"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
	ToggleLabel,
	ToggleRoot,
	ToggleThumb,
	ToggleTrack,
} from "@/components/ui/toggle"

function HomeActions() {
	const [roastMode, setRoastMode] = useState(true)

	return (
		<div className="w-full max-w-[780px] flex items-center justify-between gap-4">
			<div className="flex items-center gap-4">
				<ToggleRoot checked={roastMode} onCheckedChange={setRoastMode}>
					<ToggleTrack>
						<ToggleThumb />
					</ToggleTrack>
					<ToggleLabel>roast mode</ToggleLabel>
				</ToggleRoot>
				<span className="font-[family-name:var(--font-ibm-plex-mono)] text-xs text-[#4B5563]">
					// maximum sarcasm enabled
				</span>
			</div>

			<Button>$ roast_my_code</Button>
		</div>
	)
}

export { HomeActions }
