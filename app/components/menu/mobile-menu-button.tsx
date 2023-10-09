"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItemProps } from "./menu-button";

const MobileMenuButton = ({ title, href, closeMobileMenu }: MenuItemProps) => {
	const pathname = usePathname();

	const activeClass = `${
		pathname == href
			? "bg-black dark:bg-white text-white dark:text-black after:absolute after:content-[''] after:h-2 after:w-2 after:bg-white dark:after:bg-black after:rounded after:right-4 after:top-[50%] after:translate-y-[-50%]"
			: ""
	} `;

	return (
		<div className="relative">
			<Link
				href={href}
				className={`${activeClass} dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white px-5 py-4 block transition-all duration-[.15s] `}
				onClick={() => {
					if (!closeMobileMenu) return;

					closeMobileMenu();
				}}
			>
				{title}
			</Link>
		</div>
	);
};

export default MobileMenuButton;
