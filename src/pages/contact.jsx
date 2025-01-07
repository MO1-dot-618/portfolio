import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/contact.css";

const Contact = () => {

    const codedDescription = (
        <span>
            Feel free to contact me for any opportunities you have or to collaborate on projects you love!
        </span>
    )

    const codedTitle = (
        <span>
            Hello, it's me!
        </span>
    )

    useEffect(() => {
		document.title = `Contact | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-container">
						<div className="title contact-title">
                            {INFO.contact.title !== "" ? INFO.contact.title : codedTitle}
						</div>

						<div className="subtitle contact-subtitle">
                            {INFO.contact.description !== "" ? INFO.contact.description : codedDescription}
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
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

export default Contact;
