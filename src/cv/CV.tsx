import "./cv.css";
import { Header } from "../components/Header/Header";
import { TechnologyCard } from "./components/TechnologyCard";

export const CV = () => {
	return (
		<>
			<Header heading="Tim Douglas" subheading="Curriculum Vitae" linkHome />
			<main id="cv">
				<section id="employment">
					<h3>{"Employment"}</h3>

					<section id="cards">
						<section id="card">
							<section id="row">
								<h4>Phocas Software</h4>
								<h4>Oct. 2017 to Present</h4>
							</section>

							<section id="row">
								<h5>
									Senior Software Engineer <span id="pipe">&#8226;</span> Aug.
									2022 to Present
								</h5>
								<h5>Orange, NSW & Remote</h5>
							</section>

							<section>
								<hr />
							</section>
							<section>
								<ul>
									<li>
										I played a core role in the conceptualisation, planning, and
										development of the standalone versions of Financial
										Statements and Industry Analytics, both requiring a
										separation process from the Phocas Analytics monolith.
										<ul>
											<li>
												<strong>Stack:</strong> TypeScript (React, Redux, MobX,
												zod); C# (Web API); SQL (PostgreSQL); AWS Lambda;
												GraphQL; Docker; Octopus; GitHub Actions; Jenkins
											</li>
										</ul>
									</li>
									<li>
										Collaborated with another developer to build an internal
										repository of UI components to share across product
										codebases to ensure UI & UX consistency and improved
										maintainability. This project grew from a two person spike
										into a mature shared project with stakeholders involved from
										multiple aspects of the business.
									</li>
									<li>
										Over the period of Jan. 2023 to Mar. 2023, I volunteered to
										undergo a secondment to the Professional Services team in
										Phocas. This experience was invaluable in contributing to my
										growth as an engineer, namely due to the following:
										<ul>
											<li>
												I worked on Jira tickets that involved implementing
												solutions to customer problems within the Phocas
												product.
											</li>
											<li>
												Collaborating directly with customers via Zoom to ensure
												these solutions matched their needs and achieved their
												desired outcomes.
											</li>
											<li>
												Working within a costing & budget focused model gave me
												a fresh perspective on how different teams operate and
												how that affects motivation.
											</li>
										</ul>
									</li>
								</ul>
							</section>

							<section id="row">
								<h5 id="subheading">
									Software Developer <span id="pipe">&#8226;</span> Oct. 2017 to
									Aug. 2022
								</h5>
							</section>

							<section>
								<hr />
							</section>

							<section>
								<>
									<p>Prior to my promotion to Senior Software Engineer:</p>
									<ul>
										<li>
											I made high-quality, sustained contributions to the Phocas
											Analytics monolith codebase driven by customer needs,
											feedback, and market trends.
											<ul>
												<li>
													<strong>Stack:</strong> JavaScript/TypeScript (jQuery,
													Ampersand, React, Redux); C# (Web API, MVC); SQL (SQL
													Server); WPF; Octopus; GitHub Actions; Jenkins
												</li>
											</ul>
										</li>
										<li>
											I was a key contributor to the creation and continued
											improvement of the Phocas Financial Statements product.
											<ul>
												<li>
													The Financial Statements product was a success and
													played a crucial part of Phocas being able to get
													access to additional sources of new customers
													previously inaccessible to the business.
												</li>
											</ul>
										</li>
										<li>
											I applied a customer-led approach to all aspects of the
											software development process, from ideation through to
											release.
										</li>
									</ul>
								</>
							</section>
						</section>

						<section id="card">
							<section id="row">
								<h4>Rosebank College</h4>
								<h4>Sept. 2008 to Apr. 2017</h4>
							</section>

							<section id="row">
								<h5>e-Learning Manager</h5>
								<h5>Five Dock, NSW</h5>
							</section>

							<section>
								<hr />
							</section>
							<section>
								<ul>
									<li>
										Implemented, managed, and maintained Edumate. The primary
										goal for this was to provide reliable tools to staff to
										improve efficiency of day-to-day school administration and
										operations.
									</li>
									<li>
										Successfully implemented Canvas as a replacement for Moodle,
										primarily motivated by Canvas' richer support for more
										varied educational experiences, superior UX, and solid
										customer support.
									</li>
									<li>
										Provided effective and impactful training to teaching,
										support, and executive staff in the form of presentations,
										handouts, and screencasts.
									</li>
									<li>
										Delivered over 150 SQL-based custom reports via Edumate to
										teaching, support, and executive staff.
									</li>
								</ul>
							</section>
						</section>

						<section id="card">
							<section id="row">
								<h4>Stella Maris College</h4>
								<h4>Apr. 2004 to Sept. 2008</h4>
							</section>

							<section id="row">
								<h5>Content Developer</h5>
								<h5>Manly, NSW</h5>
							</section>
						</section>
					</section>
				</section>

				<section id="technologies">
					<h3>{"Technologies"}</h3>
					<section id="cards">
						<section id="row">
							<TechnologyCard
								technology="Frontend"
								example="React, MobX, HTML, CSS"
								progress={0.9}
							/>
							<TechnologyCard
								technology="Backend"
								example="C#, node.js"
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

				<section id="references">
					{"References are available upon request."}
				</section>
			</main>
		</>
	);
};
