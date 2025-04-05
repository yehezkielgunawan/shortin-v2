import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { metadataContent } from "@/services/metadata";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = metadataContent({
	title: "Yehezgun's Next.js 14 Starter Template",
	description:
		"A starter template for Next.js 14 with TypeScript, Tailwind CSS, and Daisy UI",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<ThemeProvider
					defaultTheme="system"
					enableSystem
					themes={["nord", "dim"]}
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
