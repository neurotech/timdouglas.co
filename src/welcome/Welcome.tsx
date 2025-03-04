import { Link } from "wouter";
import { Stack } from "../components/Stack";
import { Header } from "../components/Header";

export const Welcome = () => {
	return (
		<>
			<Header />
			<main id="welcome">
				<Stack>
					<section>
						I'm Tim, a full stack developer based in Orange, Australia.
					</section>
					<section>Blurb here</section>
					<section>
						Please take a look at <Link href="/cv">my CV</Link>, or{" "}
						<Link href="/contact">get in touch</Link>.
					</section>
				</Stack>
			</main>
		</>
	);
};
