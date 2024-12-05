import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

import { League_Spartan } from "next/font/google";
// import "./globals.css"; // Make sure you’re using CSS with the necessary styles and resets.

const leagueSpartan = League_Spartan({
	subsets: ["latin"], // Adjust subsets if needed
	weight: ["400", "700"], // Add weights as required
	variable: "--font-league-spartan", // Define a CSS variable
});

export const metadata: Metadata = {
	title: "Join Waitlist", // Page title
	description: "Sign up for the waitlist and be among the first to know.", // Page description
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body style={{ fontFamily: "League Spartan, sans-serif" }}>
				{children}
			</body>
		</html>
	);
}
