import "./theme-toggle.css";
import { useTheme } from "../../hooks/useTheme";
import { Moon } from "../icons/Moon";
import { Sun } from "../icons/Sun";

export const ThemeToggle = () => {
	const { theme, toggle } = useTheme();

	const handleToggle = () => {
		toggle();
	};

	const isLight = theme === "light";

	return (
		<button id="theme-toggle" type="button" onClick={handleToggle}>
			{isLight ? <Sun className={"active"} /> : <Moon className={"active"} />}
		</button>
	);
};
