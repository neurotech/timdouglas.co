import { Stack } from "../components/Stack";

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
		<Stack spacing={0.33}>
			<h4>{title}</h4>
			<h5>{company}</h5>
			<h6>{dates}</h6>
		</Stack>
	);
};
