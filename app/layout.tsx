import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';
import './globals.css';

const inter = localFont({
	src: './fonts/Inter.ttf',
	variable: '--font-inter',
	weight: '100 200 300 400 500 600 700 800 900',
});

const spaceGrotesk = localFont({
	src: './fonts/SpaceGrotesk.ttf',
	variable: '--font-space-grotesk',
	weight: '300 400 500 600 700',
});
export const metadata: Metadata = {
	title: 'DevFlow',
	description:
		'A community-driven platforn for asking and answering programing question. Get help, share knowledge, and collaborate with developers from around the world . Explpre topics in web development, mobile app development , algorithms , data structires and more.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
