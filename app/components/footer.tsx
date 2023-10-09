import Link from "next/link";
import Logo, { LogoSecondary } from "./logo";

const Footer = () => {
	return (
		<footer className="p-10 bg-[#000]">
			<div className="flex flex-col sm:flex-row justify-between ">
				<div>
					<LogoSecondary hideShadow={true} />

					<p className="text-gray-400 text-sm mt-5">
						I build products to help businesses be successful
					</p>
				</div>

				<p className=" text-gray-400 text-sm mt-5">
					Copyright &copy; 2018 - 2023.{" "}
					<Link href="/" className="text-semibold text-gray-200 ">
						Bin Emmanuel
					</Link>{" "}
					All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
