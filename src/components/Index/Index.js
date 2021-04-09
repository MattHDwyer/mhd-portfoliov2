import React from 'react'
import '../../App.css'
import About from '../About/About'
import Skills from '../Skills/Skills'

function Index() {
	return (
		<div>
			<h1>Matthew Dwyers Portfolio</h1>
			<div className="indexContainer">
				<About />
				<Skills />
			</div>
		</div >
	)
}

export default Index
