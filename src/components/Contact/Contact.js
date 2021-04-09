import React from 'react'
import './Contact.css'

const Contact = () => {
	return (
		<>
			<h1>Contact Me</h1>
			<div className="contactContainer">
				<div className="contactTextContainer">
					<p>Whether you'd like to get ask me any questions about my current projects, previous work or have any job related questions, feel free to fill out the form below and I'll get back to you as soon as I can.</p>
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
