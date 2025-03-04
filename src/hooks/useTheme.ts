import { useState } from "react";

type Theme = "light" | "dark" | "light dark";

export const useTheme = () => {
	const savedTheme = localStorage.getItem("timdouglas-co-theme") as Theme;
	const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
	const metaTag = document.getElementById("theme");
	const [theme, setTheme] = useState<Theme>(savedTheme || systemTheme);

	if (theme) metaTag?.setAttribute("content", theme);
	if (!savedTheme) localStorage.setItem("timdouglas-co-theme", theme);

	const toggle = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		localStorage.setItem("timdouglas-co-theme", newTheme);
		setTheme(newTheme);
	};

	return { theme, toggle };
};
