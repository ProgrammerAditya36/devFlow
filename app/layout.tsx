import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import React from 'react';

import './globals.css';
import { auth } from '@/auth';
import { Toaster } from '@/components/ui/toaster';

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

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
				/>
			</head>
			<SessionProvider session={session}>
				<body
					className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
				>
					<ThemeProvider
						attribute={'class'}
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
					<Toaster />
				</body>
			</SessionProvider>
		</html>
	);
}
