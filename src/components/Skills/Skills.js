import React, { useState } from 'react'
import { FaHtml5, FaCss3Alt, FaSass, FaShopify, FaJsSquare, FaNodeJs, FaPhp, FaReact, FaGit } from "react-icons/fa";
import { DiPhotoshop, DiMysql, DiMongodb } from "react-icons/di";
import { GiTalk, GiMagnifyingGlass } from "react-icons/gi";
import { IconContext } from "react-icons";
import Modal from 'react-modal';
import './Skills.css';

function Skills() {

	const skillsArr = [
		{
			name: "HTML 5",
			icon: <FaHtml5 />,
			description: "I work with HTML, CSS, Javascript and Liquid on a daily basis in my role as Tower's Shopify Developer."
		},
		{
			name: "CSS 3",
			icon: <FaCss3Alt />,
			description: "I work with HTML, CSS, Javascript and Liquid on a daily basis in my role as Tower's Shopify Developer. I'm continously learning new skills and tricks while styling with CSS and Javascript"
		},
		{
			name: "Shopify",
			icon: <FaShopify />,
			description: `I'm no stranger to Liquid or the Shopify interface. Everyday I'm involved with helping someone set up their Shopify Admin Panel or making changes to their template to suit their requests. To see some examples of my work, head over to my Shopify Portfolio page!`
		},
		{
			name: "Javascript",
			icon: <FaJsSquare />,
			description: "Javascript is one of the core languages to any web development project. I have a core understanding to the basic's and of course I'm continually learning new techniques everyday."
		},
		{
			name: "React",
			icon: <FaReact />,
			description: "I have a stable understanding of React and have coded a few projects (including this portfolio site), which you can see on my Portfolio page."
		},
		{
			name: "SEO",
			icon: <GiMagnifyingGlass />,
			description: "I have a solid basic understanding of SEO best practises and steps that can be taken to boost a website's SEO ranking."
		},
		{
			name: "PHP",
			icon: <FaPhp />,
			description: "I've written numerous amounts of scripts for Shopify and a few REST API endpoints in PHP. I've got a basic understanding and I'm continously learning."
		},
		{
			name: "MySQL",
			icon: <DiMysql />,
			description: "Majority of my projects databases are MySQL. I have a basic understanding of making SQL queries."
		},
		{
			name: "SCSS",
			icon: <FaSass />,
			description: "Along with CSS, SCSS (although it's being phased out) I have a familiar understanding of when it comes to styling websites, as this is what majority of the free templates used to use for Shopify."
		},
		{
			name: "Git",
			icon: <FaGit />,
			description: "I use Github for version control for all of my projects. It's also used to backup the template code from all of the Shopify sites that I create and make changes to."
		},
		{
			name: "Node JS",
			icon: <FaNodeJs />,
			description: "I have a basic understanding of Node JS. This language is the first started to learn on and will be used for in my future projects in 2021."
		},
		{
			name: "Photoshop",
			icon: <DiPhotoshop />,
			description: "I use Photoshop sporadically and have a strong knowledge on the basic features it provides. I use it to help create and optimise clients images they provide me for their Shopify site."
		},
		{
			name: "Communicating with Clients",
			icon: <GiTalk />,
			description: "On a daily basis I communicate with clients to discuss with them UI and UX design of their selected Shopify template. I also write documentation and provide training session for clients on how they can fully utilise their new Shopify site."
		},
		{
			name: "MongoDB",
			icon: <DiMongodb />,
			description: "I have used basic noSQL databases very rarely for projects when I was first learning to code."
		}
	]

	const [modalIsOpen, setIsOpen] = useState(false);
	const [currentSkill, setCurrentSkill] = useState(skillsArr[0]);

	const closeModal = () => {
		setIsOpen(false);
	}

	return (
		<div className="skillsContainer">
			<h1>My Skills</h1>
			<div className="skillsDescription">
				<p>
					Below is a list of my ever growing skills, to find out more where I developed or deploy these skills click on the icon!
				</p>
			</div>
			<div className="skillsGridContainer">

				{skillsArr.map((skill, index) => {
					return (
						<IconContext.Provider value={{ className: `skillIcon skill${skill.name.replace(/\s/g, '')}` }}>
							<div className="skillContainer" key={index}>
								<button className="skillButton" onClick={() => { setIsOpen(true); setCurrentSkill(skill); }}>
									<h4>{skill.name}</h4>
									{skill.icon}
								</button>
							</div>
						</IconContext.Provider>

					)
				})}
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					className="modalContainer"
				>
					<h3>{currentSkill.name}</h3>
					<p className="modalDescriptionText"> {currentSkill.description}</p>
					<IconContext.Provider value={{ className: `skillIcon skill${currentSkill.name.replace(/\s/g, '')} active` }}>
						{currentSkill.icon}
					</IconContext.Provider>
				</Modal>
			</div>
		</div >
	)
}

export default Skills
