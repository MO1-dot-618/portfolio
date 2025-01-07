import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";

import "./styles/projects.css";

const Projects = () => {

    const codedDescription = (
        <span>
            <p>I've worked on a variety of small projects since beginning my coding journey in 2015, mainly C programs for engineering projects (arduino and microcontrolers) and I loved programming since! It fascinated me how you can control a hardware with simple lines of code (not always simple!).</p>
			<p>I used C, C++ and python during my engineering studies. but it wasn't until 2023, when I started ALX SW engineering course that I gave web development another try and I gained a lot of knowledge and skills: learning by doing!</p>
			<p>I worked on a few web projects, most of them in collaboartion with my husband Reda Cherkaoui. And I am working on more and more projects.</p>
        </span>
    )

    const codedTitle = (
        <span>
            Fruits of hard work!
        </span>
    )
    useEffect(() => {
		document.title = `Projects | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-container">
						<div className="title projects-title">
                            {INFO.project.title !== "" ? INFO.project.title : codedTitle}
						</div>

						<div className="subtitle projects-subtitle">
                            {INFO.project.description !== "" ? INFO.project.description : codedDescription}
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
