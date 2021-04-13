import React from 'react'
import './About.css';
import resume from '../../data/Matt-Dwyer-CV-April-2021.pdf'

const About = () => {
	return (
		<>
			<h1>About Me</h1>
			<div className="aboutContainer">
				<div className="aboutTextLeft">
					<div className="aboutParagraphContainer">
						<p>I'm a passionate, enthusastic and driven web developer currently working for <a href="https://towersystems.com.au" target="_blank" rel="noreferrer">Tower Systems.</a> I've been working at Tower since February 2020, my role involves developing Shopify sites for our clients and integrating Tower's Point of Sale software. I've developed and help manage over 60+ webstores, with many more to come in 2021. To view some of my work check out my <a href="/shopify-portfolio">Shopify Portfolio Page!</a></p>
						<br />
						<div className="centerButton">
							<a className="aboutLinkButton" href={resume} target="_blank" rel="noreferrer"><strong>View My CV</strong></a>
						</div>
						<br className="aboutSeperator" />
						<p>When I'm not sitting behind the desk coding you can find me playing basketball, searching for my ball on the golf course or giving myself an adrenline rush; whether that's sky diving or go karting. Most Sunday nights you will probably find me in front of a TV watching Formula 1, supporting Daniel Ricciardo in the Mclaren and the flying Red Bulls.</p>
						<div className="aboutImageContainer">
							<img className="aboutSkyDiveImg" src="https://imgur.com/KZI1b5M.jpg" alt="Sky diving in noosa" />
						</div>
						<p>Throughout 2021 I plan on completing 4 projects, which you will be able to find out more on my <a href="/portfolio" rel="noreferrer">Portfolio page</a>, these projects are:</p>
						<ol className="aboutList">
							<li className="aboutListItem">OEA Website</li>
							<li className="aboutListItem">ElonDogeBuyer</li>
							<li className="aboutListItem">LiftM8?</li>
							<li className="aboutListItem">Esports Job Finder</li>
						</ol>
						<p>As I start these projects, I'll post more information about them over on my <a href="/projects">projects page!</a></p>
						<br className="aboutSeperator" />
						<p>
							If you've got any questions about my work or skills feel free to <a href="/contact">contact me</a> or check out my <a href="/skills">skills page.</a>
						</p>
					</div>
					<div className="aboutImageContainer">
						<img className="aboutDisplayImg" src="https://imgur.com/QbUtqxu.jpg" alt="Myself at the golden gate bridge" />
					</div>
				</div>
			</div>
		</>
	)
}

export default About;
