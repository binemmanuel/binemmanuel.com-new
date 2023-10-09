const IconContainer = ({
	children,
	className,
}: {
	children: JSX.Element[] | JSX.Element;
	className?: String;
}) => {
	return (
		<div
			className={`h-14 w-14 flex justify-center items-center rounded-full ${className}`}
		>
			{children}
		</div>
	);
};

export default IconContainer;
