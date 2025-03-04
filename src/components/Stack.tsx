import { Children, type ReactNode } from "react";

type StackProps = {
	children: ReactNode;
	spacing?: number;
	direction?: "row" | "column";
};

export const Stack = ({
	children,
	spacing = 1,
	direction = "column",
}: StackProps) => (
	<div id="stack" style={{ flexDirection: direction }}>
		{Children.map(children, (child) => (
			<div
				id="stack-child"
				key={"index"}
				style={{ paddingBottom: `calc(var(--spacing) * ${spacing})` }}
			>
				{child}
			</div>
		))}
	</div>
);
