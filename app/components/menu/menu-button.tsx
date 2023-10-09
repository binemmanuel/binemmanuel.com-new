"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type MenuItemProps = {
	title: string;
	href: string;
	closeMobileMenu?: () => void;
};

const MenuItem = ({ title, href, closeMobileMenu }: MenuItemProps) => {
	const pathname = usePathname();

	const activeClass = `${
		pathname == href
			? "before:bg-black dark:before:bg-white"
			: "before:bg-transparent"
	} `;

	return (
		<div className="relative">
			<Link
				href={href}
				className={`${activeClass} before:content-[''] before:absolute before:rounded before:left-2 before:top-[55%] before:translate-y-[-50%] dark:hover:before:bg-white hover:before:bg-black before:h-1.5 before:w-1.5 px-6 py-1.5 before:transition-all before:ease-in-out before:duration-[.15s]`}
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

export default MenuItem;
