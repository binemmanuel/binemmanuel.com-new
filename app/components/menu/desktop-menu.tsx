import MenuItem from "./menu-button";

const DesktopMenu = () => {
	return (
		<div id="desktop-menu" className="hidden md:flex ">
			<MenuItem href="/" title="Home" />
			<MenuItem href="/projects" title="Projects" />
			<MenuItem href="/contact" title="Contact" />
		</div>
	);
};

export default DesktopMenu;
