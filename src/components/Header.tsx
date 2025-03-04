import { Link } from "wouter";
import { ThemeToggle } from "./ThemeToggle/ThemeToggle";

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
	const headingContent = <h1 id="nolink">{heading}</h1>;
	return (
		<header>
			{linkHome ? <Link href="/">{headingContent}</Link> : headingContent}
			<ThemeToggle />
			{subheading && <h2>{subheading}</h2>}
		</header>
	);
};
