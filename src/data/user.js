const INFO = {
	main: {
		title: "Portfolio - Software Engineer",
		name: "Malika Oubilla",
		email: "malikaoubilla@gmail.com",
		logo: "../headshot.png",
	},

	socials: {
		github: "https://github.com/MO1-dot-618",
		linkedin: "https://www.linkedin.com/in/malika-oubilla-1dot618/",
	},

	homepage: {
		title: "",
		description: "",
	},

	about: {
		title: "",
		description: "",
	},

    contact: {
		title: "",
		description: "",
	},

    project: {
		title: "",
		description: "",
	},

	projects: [
		{
			title: "E-card game",
			description:
				`Ecard, a cards game inspired from the anime Kaiji. The project is made in collaboration with Reda Cherkaoui.`,
            
            // I recommend not exceeding four logos here, leads to a poor mobile UX
			logos: [
                "../react-icon.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png",
            ],
            linkText2: "Live",
			link2: "https://redarshubi.github.io/ECard/",
			demo: "../project1.jpg"
		},

		{
			title: "Philosophy forum",
			description:
				`A philosophy forum with threads, posts, votes, live chat and private message. Made in collaboration with Reda Cherkaoui.`,
            logos: [
                "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
				"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/html/html.png",   
            ],
			demo: "../project2.png"
		},

		{
			title: "Cheesy life",
			description:
				`A website that provides information about cheese, all you need to know about it, nutritional facts, types and origin, recipes and much more. Collaboration work.`,
            logos: [
				"https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/css/css.png",
                "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/html/html.png",
            ],
			linkText1: "GitHub",
			link1: "https://github.com/MO1-dot-618/cheesy-life",
            linkText2: "Live",
			link2: "https://cheesy-life.onrender.com/",
			demo: "../project3.png"
		},

		{
			title: "Give me rock!",
			description:
				`A simple rock, paper, scissors game, themed with the anime Hunter x hunter. `,
            logos: [
				"../react-icon.png",
            ],
			linkText1: "GitHub",
			link1: "https://github.com/MO1-dot-618/Give-me-rock",
            linkText2: "Live",
			link2: "https://mo1-dot-618.github.io/Give-me-rock/",
			demo: "../project4.png"
		}
	],
};

export default INFO;
