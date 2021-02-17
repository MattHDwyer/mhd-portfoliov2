import React from 'react';
import './Header.css'

const Header = () => {
	return (
		<header className="headerContainer">
			<h3 className="headerItem">Matt Dwyer | Web Developer & Designer</h3>
			<nav className="navContainer">
				<ul className="navbar">
					<li className="navItem"><a className="navLink" href="/">Home</a></li>
					<li className="navItem"><a className="navLink" href="/about">About</a></li>
					<li className="navItem"><a className="navLink" href="/skills">Skills</a></li>
					<li className="navItem"><a className="navLink" href="/shopify-portfolio">Shopify Portfolio</a></li>
					<li className="navItem"><a className="navLink" href="/contact">Contact</a></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header