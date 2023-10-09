import Link from "next/link";

const Logo = ({ hideShadow }: { hideShadow?: boolean }) => {
	return (
		<Link href="/" className="font-medium md:text-xl">
			Bin
			<span
				className={`${
					hideShadow
						? ""
						: "shadow-black dark:shadow-white shadow-2xl"
				} ml-2 bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 rounded-full`}
			>
				Emmanuel
			</span>
		</Link>
	);
};

export const LogoSecondary = ({ hideShadow }: { hideShadow?: boolean }) => {
	return (
		<Link
			href="/"
			className="font-medium md:text-xl text-white dark:text-black"
		>
			Bin
			<span
				className={`${
					hideShadow
						? ""
						: "shadow-black dark:shadow-white shadow-2xl"
				} bg-white dark:bg-black text-black dark:text-white ml-2 px-4 py-1.5 rounded-full`}
			>
				Emmanuel
			</span>
		</Link>
	);
};

export default Logo;
