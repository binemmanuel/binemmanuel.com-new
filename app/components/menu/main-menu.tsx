import MobileMenu from "./mobile-menu";
import DesktopMenu from "./desktop-menu";

const MainMenu = () => {
	return (
		<menu>
			<DesktopMenu />

			<MobileMenu />
		</menu>
	);
};

export default MainMenu;
