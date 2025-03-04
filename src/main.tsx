import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Welcome } from "./welcome/Welcome";
import { Route, Router } from "wouter";
import { CV } from "./cv/CV";
import { Contact } from "./contact/Contact";

const node = document.getElementById("app");

if (node) {
	createRoot(node).render(
		<StrictMode>
			<Router>
				<Route path="/" component={Welcome} />
				<Route path="/contact" component={Contact} />
				<Route path="/cv" component={CV} />
			</Router>
		</StrictMode>,
	);
}
