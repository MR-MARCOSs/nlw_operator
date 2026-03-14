import type { Metadata } from "next"
import { AppNavbar } from "@/components/app/app-navbar"
import "./globals.css"

export const metadata: Metadata = {
	title: "NLW Operator",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className="bg-[#0A0A0A] text-[#FAFAFA]">
				<div className="min-h-screen flex flex-col">
					<AppNavbar />
					{children}
				</div>
			</body>
		</html>
	)
}
