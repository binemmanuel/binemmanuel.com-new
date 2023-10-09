import AboutMe from "./components/about-me";
import Skills from "./components/skills";
import Tagline from "./components/tagline";

export default function Home() {
	return (
		<>
			<Tagline className="mt-10 md:mt-36 w-[90%] sm:w-[89%] mx-auto" />

			<AboutMe className="mt-20 md:mt-36 dark:bg-[#23242a] bg-[#23242a05] py-10" />

			<Skills className="my-20 md:my-36 w-[90%] sm:w-[89%] mx-auto" />
		</>
	);
}
