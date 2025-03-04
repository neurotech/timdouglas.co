export type TechnologyCardProps = {
	technology: string;
	example: string;
	progress: number;
};

const getProgressSegment = (progress: number) => {
	if (progress <= 0.33) {
		return "low";
	}

	if (progress > 0.33 && progress < 0.66) {
		return "medium";
	}

	return "high";
};

export const TechnologyCard = ({
	technology,
	example,
	progress,
}: TechnologyCardProps) => {
	return (
		<>
			<section id="technology">
				<section id="technology-details">
					<h4>{technology}</h4>
					<div id="progress">
						<div
							id="bar"
							className={getProgressSegment(progress)}
							style={{ width: `${progress * 100}%` }}
						/>
					</div>
				</section>
				<h5>{example}</h5>
			</section>
		</>
	);
};
