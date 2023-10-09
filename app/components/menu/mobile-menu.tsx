"use client";

import { useState } from "react";
import MobileMenuButton from "./mobile-menu-button";
import Logo from "../logo";
import SocialMenu from "./social-menu";
import { RiMenu5Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const MobileMenu = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const closeMobileMenu = () => setOpenMenu(false);

	return (
		<>
			<div
				id="mobile-menu"
				className={`${
					openMenu
						? "shadow-2xl translate-x-0"
						: "translate-x-[-100%] invisible"
				} absolute top-0 left-0 bottom-0 w-screen bg-white dark:bg-black transition-all duration-300 ease md:hidden `}
				style={{ zIndex: 9999 }}
			>
				<Header onOpenMenu={() => setOpenMenu(!openMenu)} />

				<MobileMenuButton
					href="/"
					title="Home"
					closeMobileMenu={closeMobileMenu}
				/>
				<MobileMenuButton
					href="/projects"
					title="Projects"
					closeMobileMenu={closeMobileMenu}
				/>
				<MobileMenuButton
					href="/contact"
					title="Contact"
					closeMobileMenu={closeMobileMenu}
				/>

				<SocialMenu className="mt-20 flex justify-center items-center" />
			</div>

			<button
				id="menu-button"
				className="md:hidden border border-gray-200 hover:bg-gray-200 transition-colors duration-300 p-3 rounded text-2xl"
				onClick={() => setOpenMenu(!openMenu)}
			>
				<RiMenu5Fill />
			</button>
		</>
	);
};

const Header = ({ onOpenMenu }: { onOpenMenu: () => void }) => {
	return (
		<div className="flex justify-between items-center pt-5 pb-10 px-5">
			<Logo />

			<button
				className="md:hidden border border-gray-200 hover:bg-gray-200 transition-colors duration-300 p-3 rounded text-2xl"
				onClick={onOpenMenu}
			>
				<AiOutlineClose />
			</button>
		</div>
	);
};

export default MobileMenu;
