import IconContainer from "./icon-container";
import { BiLogoCss3, BiLogoFlutter } from "react-icons/bi";
import { SiHtml5, SiIos, SiNextdotjs } from "react-icons/si";
import { FaPhp, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BsAndroid2 } from "react-icons/bs";

const Skills = ({ className }: { className: string }) => {
	return (
		<section
			className={`relative flex flex-col sm:flex-row sm:items-center overflow-hidden w-[100%] ${className}`}
			style={{ zIndex: 99999 }}
		>
			<h2 className="text-xl relative after:content-[''] after:rounded-full after:absolute after:bg-black dark:after:bg-white after:w-[2.8rem] after:h-[.1rem] sm:after:w-[.1rem] sm:after:h-full after:left-0 after:bottom-[-.5rem] sm:after:left-[initial] sm:after:bottom-[initial] after:right-[initial] sm:after:right-[-2rem] inline mr-20">
				Tech <span className="text-brown font-bold">STACK</span>
			</h2>

			<div
				id="skills"
				className="flex flex-wrap mt-10 sm:mt-0 text-4xl overflow-scroll flex-1"
			>
				<IconContainer className="text-[#61c9f9] mr-3 md:mr-10">
					<BiLogoFlutter />
				</IconContainer>

				<IconContainer className="text-[#e75d27] mr-3 md:mr-10">
					<SiHtml5 />
				</IconContainer>

				<IconContainer className="text-[#2762ea] mr-3 md:mr-10">
					<BiLogoCss3 />
				</IconContainer>

				<IconContainer className="text-[#e9d44d] mr-3 md:mr-10">
					<RiJavascriptFill />
				</IconContainer>

				<IconContainer className="text-[#4e5c93] mr-3 md:mr-10">
					<FaPhp />
				</IconContainer>

				<IconContainer className="text-[#0b7ea4] mr-3 md:mr-10">
					<FaReact />
				</IconContainer>

				<IconContainer className="text-black dark:text-white mr-3 md:mr-10">
					<SiNextdotjs />
				</IconContainer>

				<IconContainer className="text-[#32d780] mr-3 md:mr-10">
					<BsAndroid2 />
				</IconContainer>

				<IconContainer className="text-black dark:text-white">
					<SiIos />
				</IconContainer>
			</div>
		</section>
	);
};

export default Skills;
