import React from 'react'
import '../../App.css'
import About from '../About/About'
import Skills from '../Skills/Skills'

function Index() {
	return (
		<div>
			<h1>Matthew Dwyers Portfolio</h1>
			<p style={{ textAlign: 'center' }}>This site is currently a work in progress. Please forgive any lack of information or current bugs.</p>
			<div className="indexContainer">
				<About />
				<Skills />
			</div>
		</div >
	)
}

export default Index
