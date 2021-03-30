import React from 'react';
import './Header.css'
import { FaShopify, FaBrain, FaBookReader, FaEnvelope } from "react-icons/fa";

const Header = () => {
	return (
		<header className="headerContainer">
			{/* <h3 className="headerItem">Matt Dwyer | Web Developer & Designer</h3> */}
			<nav className="navContainer">
				<ul className="navbar">
					<li className="navItem"><a className="navLink" href="/">LOGO</a></li>
					<li className="navItem"><a className="navLink" href="/about"><FaBookReader />About</a></li>
					<li className="navItem"><a className="navLink" href="/skills"><FaBrain />Skills</a></li>
					<li className="navItem"><a className="navLink" href="/shopify-portfolio"><FaShopify /> Portfolio</a></li>
					<li className="navItem"><a className="navLink" href="/contact"><FaEnvelope />Contact</a></li>
					<li className="navItem"><a className="navLink" href="/">Home</a></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header