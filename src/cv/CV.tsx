import { Header } from "../components/Header";
import { Stack } from "../components/Stack";
import { EmploymentCard } from "./EmploymentCard";
import { TechnologyCard } from "./TechnologyCard";

export const CV = () => {
	return (
		<>
			<Header heading="Tim Douglas" subheading="Curriculum Vitae" linkHome />
			<main id="cv">
				<Stack spacing={2}>
					<section id="employment">
						<h3>{"Employment"}</h3>
						<section id="cards">
							<EmploymentCard
								title="Senior Software Engineer"
								company="Phocas Software"
								dates="October 2017 to March 2025"
							/>
							<EmploymentCard
								title="e-Learning Manager"
								company="Rosebank College"
								dates="September 2008 to April 2017"
							/>
						</section>
					</section>

					<section id="technologies">
						<h3>{"Technologies"}</h3>
						<section id="cards">
							<section id="row">
								<TechnologyCard
									technology="Frontend"
									example="HTML, CSS, React"
									progress={0.9}
								/>
								<TechnologyCard
									technology="Backend"
									example="C#"
									progress={0.5}
								/>
							</section>

							<section id="row">
								<TechnologyCard
									technology="TypeScript"
									example="Frontend, node.js"
									progress={0.8}
								/>

								<TechnologyCard
									technology="DevOps"
									example="GitHub Actions, Octopus"
									progress={0.33}
								/>
							</section>
						</section>
					</section>

					<section id="skills-and-achievements">
						<h3>{"Skills and Achievements"}</h3>
						<section id="skills">
							<h4>{"Phocas Software"}</h4>
							<ul>
								<li>{"Team leadership"}</li>
								<li>{"Project management"}</li>
								<li>{"Agile methodologies"}</li>
							</ul>

							<h4>{"Rosebank College"}</h4>
							<ul>
								<li>
									Implemented, managed, and maintained Edumate from 2012 to
									2017.
								</li>
								<li>Produced over 150 custom reports, written in SQL.</li>
								<li>
									Created and maintained a Node.js application which integrated
									with Edumate; along with a live reporting dashboard (Vue.js)
								</li>
								<li>
									Created a cross-platform desktop application to aid with
									everyday diagnostics (Electron & Vue.js)
								</li>
								<li>
									Provided Edumate training to teaching and support staff in the
									form of presentations, handouts, and screencasts.
								</li>
								<li>
									Successfully implemented Canvas as a replacement for Moodle in
									2015.
								</li>
								<li>
									Built a Node.js application that automatically synchronises
									and transforms data between Canvas and Edumate. (Docker,
									NGINX, PostgreSQL)
								</li>
								<li>
									Customised several elements of Canvas' UI using jQuery/JS and
									CSS.
								</li>
							</ul>
						</section>
					</section>

					<section id="references">
						{"References are available upon request."}
					</section>
				</Stack>
			</main>
		</>
	);
};
