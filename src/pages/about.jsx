import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/about.css";

const About = () => {

    const codedDescription = (
        <span>
            <p>
			I am a polyvalent engineer from Casablanca, Morocco. I studied Electrical engineering at the National School of Arts and Crafts (ENSAM) at Casablanca and I studied Software Engineering at ALX Africa.
			I have worked with a startup to get more users to their mobile app and manage map makers and operations processes, I had a lot of fun trying a new activity every couple of weeks, seeing results within weeks, and retrying new things, I love working on agile innovative projects 
			I spent another year or so working a service designer, managing requirements and tests. I had a chance to connect with an amazing team, onboard and support many of the new comers.
            </p>
            <p>
                Beyond my professional pursuits, I am a huge metal fan (referring to the meme). I also like to spend my spare time writing (I just published my first amateur magazine!).
				I love lifting and the one and only video game I want to rock (Dofus). And who doesn't love traveling? I love to visit as many places as possible, my dream is to travel the world and discover all the different cultures!
            </p>
        </span>
    )

    const codedTitle = (
        <span>
            Hello!
        </span>
    )

    useEffect(() => {
		document.title = `About | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title !== "" ? INFO.about.title : codedTitle}
                                </div>

								<div className="subtitle about-subtitle">
									{INFO.about.description !== "" ? INFO.about.description : codedDescription}
                                </div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="./about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
