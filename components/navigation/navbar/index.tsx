import Image from 'next/image';
import Link from 'next/link';

import { auth } from '@/auth';
import ROUTES from '@/constants/routes';

import MobileNavigation from './MobileNavigation';
import ThemeToggle from './ThemeToggle';

const Navbar = async () => {
	const session = await auth();

	return (
		<nav className="z-50 fixed flex-between gap-5 shadow-light-300 dark:shadow-none p-6 sm:px-12 w-full background-light900_dark200">
			<Link href={ROUTES.HOME} className="flex items-center gap-1">
				<Image
					src="/images/site-logo.svg"
					width={23}
					height={23}
					alt="Dev Overflow Logo"
				/>

				<p className="max-sm:hidden font-space-grotesk text-dark-100 dark:text-light-900 h2-bold">
					Dev<span className="text-primary-500">Overflow</span>
				</p>
			</Link>

			<div className="flex-between gap-5">
				<ThemeToggle />

				<MobileNavigation />
			</div>
		</nav>
	);
};

export default Navbar;
