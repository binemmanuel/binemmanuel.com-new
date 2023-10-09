import Link from "next/link";
import IconContainer from "../icon-container";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMenu = ({ id, className }: { id?: string; className?: string }) => {
	return (
		<div id={id} className={`${className}`}>
			<Link href="https://github.com/binemmanuel" target="_blank">
				<IconContainer className="bg-slate-100 dark:bg-[#ffffff08] text-black dark:text-white text-2xl shadow-xl mr-2">
					<BsGithub />
				</IconContainer>
			</Link>

			<Link href="https://facebook.com/binemmanuel.pro" target="_blank">
				<IconContainer className="bg-slate-100 dark:bg-[#ffffff08] text-[#0866FF] text-2xl mx-2 shadow-xl ">
					<BsFacebook />
				</IconContainer>
			</Link>

			<Link
				href="https://www.instagram.com/bin.emmanuel/"
				target="_blank"
			>
				<IconContainer className="bg-slate-100 dark:bg-[#ffffff08] text-[#F3425F] text-2xl mx-2 shadow-xl">
					<BsInstagram />
				</IconContainer>
			</Link>

			<Link
				href="https://www.linkedin.com/in/binemmanuel"
				target="_blank"
			>
				<IconContainer className="bg-slate-100 dark:bg-[#ffffff08] text-[#0a66c2] text-2xl mx-2 shadow-xl">
					<BsLinkedin />
				</IconContainer>
			</Link>
		</div>
	);
};

export default SocialMenu;
