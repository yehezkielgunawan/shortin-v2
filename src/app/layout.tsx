import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { metadataContent } from "@/services/metadata";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = metadataContent({
	title: "Shortin",
	description: "Shorten your URLs with Shortin - the ultimate URL shortener.",
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
