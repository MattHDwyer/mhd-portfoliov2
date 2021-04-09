import React from 'react';
import './Header.css'
import { FaShopify, FaBrain, FaBookReader, FaEnvelope, /*FaHome,*/ FaLinkedin } from "react-icons/fa";
import { GoGear } from 'react-icons/go';
import { IconContext } from "react-icons";

const Header = () => {

	const path = window.location.pathname;

	return (
		<header className="headerContainer">
			{/* <h3 className="headerItem">Matt Dwyer | Web Developer & Designer</h3> */}
			<nav className="navContainer">
				<ul className="navbar">
					<li className="navItem">
						<a className="navLinkLogo" href="/">
							<span className="logoText">Matt Dwyer<br />  <small>Web Developer</small></span>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fad"
								data-icon="angle-double-right"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								className="iconLogo "
							>
								<g className="fa-group">
									<path
										fill="currentColor"
										d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
										className="fa-secondary"
									></path>
									<path
										fill="currentColor"
										d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
										className="fa-primary"
									></path>
								</g>
							</svg>
						</a>
					</li>
					<IconContext.Provider value={{ className: "navIcon iconAbout" }}>
						<li className="navItem" >
							<a className={path === "/about" ? "navLinkActive" : "navLink"} href="/about">
								<FaBookReader /><span className="linkText">About</span>
							</a>
						</li>
					</IconContext.Provider>
					<IconContext.Provider value={{ className: "navIcon iconSkills" }}>
						<li className="navItem">
							<a className={path === "/skills" ? "navLinkActive" : "navLink"} href="/skills">
								<FaBrain /><span className="linkText">Skills</span>
							</a>
						</li>
					</IconContext.Provider>
					<IconContext.Provider value={{ className: "navIcon iconPortfolio" }}>
						<li className="navItem">
							<a className={path === "/portfolio" ? "navLinkActive" : "navLink"} href="/portfolio"><GoGear /><span className="linkText">Portfolio</span>
							</a>
						</li>
					</IconContext.Provider>
					<IconContext.Provider value={{ className: "navIcon iconShopify" }}>
						<li className="navItem">
							<a className={path === "/shopify-portfolio" ? "navLinkActive" : "navLink"} href="/shopify-portfolio">
								<FaShopify /><span className="linkText">Shopify Portfolio</span>
							</a>
						</li>
					</IconContext.Provider>
					<IconContext.Provider value={{ className: "navIcon iconContact" }}>
						<li className="navItem">
							<a className={path === "/contact" ? "navLinkActive" : "navLink"} href="/contact">
								<FaEnvelope /><span className="linkText">Contact Me</span>
							</a>
						</li>
					</IconContext.Provider>
					<IconContext.Provider value={{ className: "navIcon iconLinkedIn" }}>
						<li className="navItem">
							<a className="navLink" href="https://www.linkedin.com/in/matthew-dwyer-2ba778187/" rel="noreferrer" target="_blank">
								<FaLinkedin /><span className="linkText">LinkedIn</span>
							</a>
						</li>
					</IconContext.Provider>
				</ul>
			</nav>
		</header >
	);
};

export default Header