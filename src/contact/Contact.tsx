import { Header } from "../components/Header";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
	return (
		<>
			<Header heading="Tim Douglas" subheading="Say hello." linkHome />
			<main id="contact">
				<ContactCard
					variant="Email"
					value="hello@timdouglas.co"
					url="mailto:hello@timdouglas.co"
				/>
				<ContactCard
					variant="GitHub"
					value="github.com/neurotech"
					url="https://github.com/neurotech"
				/>
				<ContactCard
					variant="LinkedIn"
					value="linkedin.com/in/neurotech"
					url="https://www.linkedin.com/in/neurotech"
				/>
			</main>
		</>
	);
};
