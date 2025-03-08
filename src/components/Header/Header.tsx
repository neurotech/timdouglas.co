import "./header.css";
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
	const headingContent = <h1 id={!linkHome ? "nolink" : ""}>{heading}</h1>;
	return (
		<header>
			<section>
				{linkHome ? <Link href="/">{headingContent}</Link> : headingContent}
				{subheading && <h2>{subheading}</h2>}
			</section>
			<hr />
		</header>
	);
};
