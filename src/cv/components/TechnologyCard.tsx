export type TechnologyCardProps = {
	technology: string;
	details: string[];
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

export const TechnologyCard = ({ technology, details, progress }: TechnologyCardProps) => {
	return (
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
			<hr />
			<h5 id="subdued">
				{details.map((detail, index) => `${detail}${index + 1 < details.length ? ", " : ""}`)}
			</h5>
		</section>
	);
};
