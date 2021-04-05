import React from 'react'
import './About.css';

const About = () => {
	return (
		<div className="aboutContainer">
			<h1>About Matthew Dwyer</h1>

			<p className="aboutTextLeft">I'm a young and passionate web designer and developer currently working for <a href="https://towersystems.com.au" target="_blank" rel="noreferrer">Tower Systems!</a> I've been working at Tower since February 2020, my role invovles developing Shopify sites for our clients and integrating Tower's Point of Sale (POS) software. I've developed and help manage over 60+ webstores, with many more to come on their 2021. To view some of my work checkout my <a href="/shopify-portfolio">Shopify Portfolio Page!</a></p>
			<br />
			<p className="aboutTextRight">When I'm not sitting behind the desk you can find me playing basketball, searching for my ball on the golf course or giving myself an adrenline rush; whether that's sky diving or go karting. Most Sunday nights you will probably find me in front of a TV watching Formula 1, supporting the Red Bulls.</p>
			<br />
			<p className="aboutTextLeft">Throughout 2021 I plan on completing 3 projects, which you will be able to find on my Portfolio page, these projects are:
				<ol className="aboutList">
					<li className="aboutListItem">OEA Website</li>
					<li  className="aboutListItem">LiftM8</li>				
					<li  className="aboutListItem">Esports Job Finder</li>
				</ol>
			</p>
			<br />
			<p className="aboutTextLeft">
				If you've got any questions about my work or skills feel free to <a href="/contact">contact me</a> or checkout my <a href="/skills">skills page.</a>
			</p>
		</div>
	)
}

export default About;
