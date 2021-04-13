import React from 'react'
import './Contact.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from 'react-icons';

const Contact = () => {
	return (
		<>
			<h1>Contact Me</h1>
			<div className="contactContainer">
				<div className="contactTextContainer">
					<p>Whether you'd like to get to know me better or ask me any questions about my current projects, previous work or have any job related questions, feel free to fill out the form below or contact me on LinkedIn and I'll get back to you as soon as I can.</p>
					<div className="contactDetailsContainer">
						<IconContext.Provider value={{ className: `contactIcon iconLinkedIn` }}>
							<a href="https://www.linkedin.com/in/matthew-dwyer-2ba778187/" target="_blank" rel="noreferrer">
								<FaLinkedin />
							</a>
						</IconContext.Provider>
						<IconContext.Provider value={{ className: `iconGitHub contactIcon` }}>
							<a href="https://github.com/MattHDwyer" target="_blank" rel="noreferrer">
								<FaGithub />
							</a>
						</IconContext.Provider>
					</div>
				</div>
				<form className="contactFormContainer" action="https://formspree.io/f/xknpyvyk" method="POST">
					<div className="contactEmailContainer">
						<input className="contactEmail" type="email" name="email" placeholder="Your Email" />
					</div>
					<br />
					<div className="contactMessageContainer">
						<textarea className="contactMessage" name="message" placeholder="Your Message"></textarea>
					</div>
					<br />
					<button className="contactButton" type="submit"><strong>SEND</strong></button>
				</form>
			</div>
		</>
	)
}

export default Contact
