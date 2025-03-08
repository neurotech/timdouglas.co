type EmploymentCardProps = {
	title: string;
	company: string;
	dates: string;
};

export const EmploymentCard = ({
	title,
	company,
	dates,
}: EmploymentCardProps) => {
	return (
		<section id="card">
			<h4>{title}</h4>
			<h5>{company}</h5>
			<h6>{dates}</h6>
		</section>
	);
};
