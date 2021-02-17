import React from 'react'

const Contact = () => {
	return (
		<div>
			<div>
				<h1>Contact Me</h1>
				<p>Whether you'd like to get ask me any questions about my previous work or have any job related questions, feel free to fill out the form below and I'll get back to you as soon as I can.</p>
			</div>
			<div className="contact-form">
				<form action="https://formspree.io/f/xknpyvyk" method="POST">
					<div className="contact-your-email">
						<input type="email" name="email" placeholder="Your Email" />
					</div>
					<br />
					<div className="contact-your-message"> <textarea name="message" placeholder="Your Message"></textarea>
					</div>
					<br />
					<div className="contact-send-button">
						<button type="submit">SEND</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Contact
