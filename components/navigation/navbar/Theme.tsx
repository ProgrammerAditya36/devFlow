'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Theme = () => {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="outline-0 ring-0 cursor-pointer"
				>
					<SunIcon className="size-[1.2rem] rotate-0 dark:-rotate-90 scale-100 dark:scale-0 transition-all" />
					<MoonIcon className="absolute size-[1.2rem] rotate-90 dark:rotate-0 scale-0 dark:scale-100 transition-all" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="border-0">
				<DropdownMenuItem
					onClick={() => setTheme('light')}
					className="hover:border border-0 cursor-pointer"
				>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme('dark')}
					className="hover:border border-0 cursor-pointer"
				>
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme('system')}
					className="hover:border border-0 cursor-pointer"
				>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default Theme;
