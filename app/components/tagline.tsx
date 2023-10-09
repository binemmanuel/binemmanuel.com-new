import Image from "next/image";
import SocialMenu from "./menu/social-menu";

const Tagline = ({ className }: { className?: String }) => {
	return (
		<section
			id="tagline"
			className={`flex flex-col lg:flex-row justify-between items-center text-lg md:text-2xl ${className}`}
		>
			<div id="about" className="lg:mr-10">
				<h1>
					<span className="text-gray-500 dark:text-gray-400 transition-all duration-500">
						{"Hi I'm"}
					</span>
					<br />
					<span className="text-2xl md:text-4xl lg:text-6xl transition-all duration-500">
						👋🏿 <strong>Bin Emanuel</strong>
					</span>
				</h1>

				<p className="pt-5 text-gray-500 dark:text-gray-400">
					{
						"A software developer who transforms ideas into digital reality. With a passion for innovation and a commitment to excellence, I craft elegant solutions that make a difference. Explore my world of programming/coding creativity and let's shape the future together."
					}
				</p>

				<SocialMenu
					id="desktop-social-icons"
					className="mt-10 hidden md:flex"
				/>
			</div>

			<div
				id="profile-picture"
				className="mt-10 sm:mt-32 lg:mt-[initial] transition-all duration-500"
			>
				<div
					className="relative overflow-hidden bg-slate-100 w-60 h-60 md:w-96 md:h-96 rounded-full border-black  border-2 md:border-4 shadow-2xl transition-all duration-500"
					style={{ zIndex: 100 }}
				>
					<Image
						src="/images/profile-picture.png"
						alt="Profile Picture"
						fill={true}
					/>
				</div>
			</div>

			<SocialMenu
				id="mobile-social-icons"
				className="mt-10 md:hidden flex justify-center items-center"
			/>
		</section>
	);
};

export default Tagline;
