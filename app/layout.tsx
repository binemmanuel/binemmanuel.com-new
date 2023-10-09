import "./globals.css";

import type { Metadata } from "next";

import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
	title: "Home | Bin Emmanuel",
	applicationName: "Bin Emmanuel's Portfolio",
	icons: ["/favicon.png"],
	description:
		"A software developer who transforms ideas into digital reality. With a passion for innovation and a commitment to excellence in Gwarinpa, Abuja, Nigeria",
	authors: {
		name: "Bin Emmanuel",
		url: "https://binemmanuel.com",
	},
	keywords: [
		"Bin",
		"Emmanuel",
		"Bin Emmanuel",
		"PHP",
		"Flutter",
		"HTML",
		"CSS",
		"iOS",
		"Android",
		"JavaScript",
		"JS",
		"React",
		"React.js",
		"Next.js",
		"Next",
		"Programer",
		"Software Development",
		"Software",
		"Development",
		"Coding",
		"Programming",
		"Tech Stack",
		"Tech",
		"Stack",
		"Abuja",
		"Gwarinpa",
		"Nigeria",
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="text-lg ">
				<Header />

				<main className="">{children}</main>

				<Footer />
			</body>
		</html>
	);
}
