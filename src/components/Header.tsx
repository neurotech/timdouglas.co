import { Link } from "wouter";

type HeaderProps = {
	heading?: string;
	subheading?: string;
	linkHome?: boolean;
};

export const Header = ({
	heading = "Hello!",
	subheading,
	linkHome = false,
}: HeaderProps) => {
	const headingContent = <h1>{heading}</h1>;
	return (
		<header>
			{linkHome ? <Link href="/">{headingContent}</Link> : headingContent}
			{subheading && <h2>{subheading}</h2>}
		</header>
	);
};
