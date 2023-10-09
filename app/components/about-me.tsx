
import React from "react";

const AboutMe = ({ className }: { className?: String }) => {
	return (
		<section
			className={`about-me ${className} relative`}
			style={{ zIndex: 500 }}
		>
			{/* radial-gradient(circle, #ffffff00, #1f2025c9), */}
			<div className="flex flex-col-reverse lg:flex-row items-center w-[90%] sm:w-[89%] m-auto">
				<div
					className="relative overflow-hidden w-full h-[20rem] lg:w-[25rem] lg:h-[25rem] rounded-2xl mt-10 lg:mr-10 lg:mt-[initial] bg-cover bg-center shadow-2xl"
					style={{
						zIndex: 100,
						background: "url('/images/about-me.jpg')",
						backgroundPosition: "center",
						backgroundSize: "cover",
					}}
				>
					<div></div>
				</div>

				<div className="flex-1">
					<h2 className="text-2xl mb-10 relative after:rounded-full after:content-[''] after:absolute after:bg-black dark:after:bg-white after:w-[4rem] after:h-[.1rem] after:left-0 after:bottom-[-.5rem]">
						About <span className="font-bold text-brown">Me</span>
					</h2>

					<p className="text-gray text-gray-500 dark:text-gray-400 text-justify">
						As a software engineer, my fervor lies in the creation
						of streamlined and impactful solutions for intricate
						challenges. I am deeply committed to the art of
						problem-solving, utilizing my skills to design and
						implement software that not only meets but exceeds
						expectations. My enthusiasm drives me to constantly
						innovate, ensuring that the solutions I craft are not
						just efficient, but also highly effective. With a
						relentless pursuit of excellence, I thrive in the
						ever-evolving landscape of technology, consistently
						seeking opportunities to harness its potential and make
						a meaningful impact on the world through my coding
						expertise.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
