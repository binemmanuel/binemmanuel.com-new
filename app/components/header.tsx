import Logo from "./logo";
import MainMenu from "./menu/main-menu";

const Header = () => {
	return (
		<header className="flex justify-between items-center py-5 md:pt-14 w-[90%] sm:w-[90%] md:w-[90%] mx-auto">
			<Logo />

			<MainMenu />
		</header>
	);
};

export default Header;
