'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

import { Button } from '@/components/ui/button';

import {
	AnimationStart,
	AnimationVariant,
	createAnimation,
} from '@/theme/theme-animations';

interface ThemeToggleAnimationProps {
	variant?: AnimationVariant;
	start?: AnimationStart;
	showLabel?: boolean;
	url?: string;
}

export default function ThemeToggle({
	variant = 'circle-blur',
	start = 'top-left',
	showLabel = false,
	url = '',
}: ThemeToggleAnimationProps) {
	const { theme, setTheme } = useTheme();

	const styleId = 'theme-transition-styles';

	const updateStyles = React.useCallback((css: string, name: string) => {
		if (typeof window === 'undefined') return;

		let styleElement = document.getElementById(styleId) as HTMLStyleElement;

		console.log('style ELement', styleElement);
		console.log('name', name);

		if (!styleElement) {
			styleElement = document.createElement('style');
			styleElement.id = styleId;
			document.head.appendChild(styleElement);
		}

		styleElement.textContent = css;

		console.log('content updated');
	}, []);

	const toggleTheme = React.useCallback(() => {
		const animation = createAnimation(variant, start, url);

		updateStyles(animation.css, animation.name);

		if (typeof window === 'undefined') return;

		const switchTheme = () => {
			setTheme(theme === 'light' ? 'dark' : 'light');
		};

		if (!document.startViewTransition) {
			switchTheme();
			return;
		}

		document.startViewTransition(switchTheme);
	}, [theme, setTheme]);

	return (
		<Button
			onClick={toggleTheme}
			variant="ghost"
			size="icon"
			className="group relative p-0 w-9 h-9"
			name="Theme Toggle Button"
		>
			<SunIcon className="size-[1.2rem] rotate-0 dark:-rotate-90 scale-100 dark:scale-0 transition-all" />
			<MoonIcon className="absolute size-[1.2rem] rotate-90 dark:rotate-0 scale-0 dark:scale-100 transition-all" />
			<span className="sr-only">Theme Toggle </span>
			{showLabel && (
				<>
					<span className="hidden group-hover:block -top-10 absolute px-2 border rounded-full">
						{' '}
						variant = {variant}
					</span>
					<span className="hidden group-hover:block -bottom-10 absolute px-2 border rounded-full">
						{' '}
						start = {start}
					</span>
				</>
			)}
		</Button>
	);
}
