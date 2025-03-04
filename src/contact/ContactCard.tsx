import "./contact-card.css";

type ContactCardProps = {
	variant: string;
	value: string;
	url: string;
};

export const ContactCard = ({ variant, value, url }: ContactCardProps) => {
	return (
		<section id="contact-card">
			<div id="variant">{variant}</div>
			<a id="value" type="button" href={url} target="_blank" rel="noreferrer">
				{value}
			</a>
		</section>
	);
};
