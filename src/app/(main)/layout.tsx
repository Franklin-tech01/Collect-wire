// import Header from "@/components/layout/Header";
// import Navigation from "@/components/layout/Navigation";
// import type { Metadata } from "next";
// import { League_Spartan } from "next/font/google";
// import "../globals.css"; // Make sure you’re using CSS with the necessary styles and resets.

// const leagueSpartan = League_Spartan({
// 	subsets: ["latin"], // Adjust subsets if needed
// 	weight: ["400", "700"], // Add weights as required
// 	variable: "--font-league-spartan", // Define a CSS variable
// });

// export const metadata: Metadata = {
// 	title: "QualitrendsGS",
// 	description: "At Qualitrends we build your visions.",
// 	openGraph: {
// 		type: "website",
// 		locale: "en_US",
// 		url: "https://qualitrendsng.com",
// 		title: "QualitrendsGS",
// 		description: "At Qualitrends we build your visions.",
// 		images: [
// 			{
// 				url: "https://qualitrendsng.com/wp-content/uploads/2023/08/1-1.png",
// 				width: 1200,
// 				height: 630,
// 				alt: "QualitrendsGS",
// 			},
// 		],
// 		siteName: "QualitrendsGS",
// 	},
// };

// type LayoutProps = {
// 	children: React.ReactNode;
// };

// const Layout = ({ children }: LayoutProps) => {
// 	return (
// 		<html lang='en'>
// 			<body className={`${leagueSpartan.variable} antialiased`}>
// 				<section className='flex h-screen'>
// 					<Navigation />
// 					<div className='w-full lg:ml-[278px] lg:w-[calc(100%-278px)]'>
// 						<Header />
// 						<main className='bg-white max-lg:container lg:w-full min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-80px)] py-4 lg:p-7 mt-[72px] lg:mt-20 max-lg:pb-20'>
// 							{children}
// 						</main>
// 					</div>
// 				</section>
// 			</body>
// 		</html>
// 	);
// };

// export default Layout;

import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "../globals.css";

const leagueSpartan = League_Spartan({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-league-spartan",
});

export const metadata: Metadata = {
	title: "Collectwire",
	description: " At Collectwire we build your visions.",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://qualitrendsng.com",
		title: "Collectwire",
		description: "At Collectwire we build your visions.",
		images: [
			{
				url: "https://qualitrendsng.com/wp-content/uploads/2023/08/1-1.png",
				width: 1200,
				height: 630,
				alt: "Collectwire",
			},
		],
		siteName: "Collectwire",
	},
};

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<html lang='en'>
			<body className={`${leagueSpartan.variable} antialiased`}>
				<section className='flex h-screen'>
					<Navigation />
					<div className='w-full lg:ml-[278px] lg:w-[calc(100%-278px)]'>
						<Header />
						<main className='bg-white max-lg:container lg:w-full min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-80px)] py-4 lg:p-7 mt-[72px] lg:mt-20 max-lg:pb-20'>
							{children}
						</main>
					</div>
				</section>
			</body>
		</html>
	);
};

export default Layout;
