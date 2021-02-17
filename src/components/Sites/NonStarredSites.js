import React, { useEffect, useState } from 'react';
import axios from 'axios';
import loadingSpinner from '../../loadingGear.svg'
import './NonStarredSites.css'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Site = () => {

	// Set Loading State
	const [loading, setLoading] = useState(true);
	// Set sites state
	const [sites, setSites] = useState([]);

	// GET request to retrieve list of Shopify sites from PHP backend
	useEffect(() => {
		axios.get('http://localhost:8888/php-mhd-portfolio/api/website/read.php')
			.then(res => setSites(res.data.sites))
			.finally(() => setLoading(false))
	}, []);

	// Set nonStarredSites array
	let nonStarredSites = [];
	// Function to fill non-starred sites into the nonStarredSites array
	const nonStarredSitesFill = () => {
		sites.map((siteDetail) => {
			if (siteDetail.starred !== true && siteDetail.screenshotUrl !== "") {
				return nonStarredSites.push(siteDetail)
			}
		})
	}
	// Execute the nonStarredSites function
	nonStarredSitesFill();

	const [current, setCurrent] = useState(0);
	const length = nonStarredSites.length;
	let timeVar = 6000;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}


	setTimeout(nextSlide, timeVar)


	return (
		<div className="nonStarredSitesSectionContainer">
			<FaArrowLeft className="leftArrow" onClick={prevSlide} />
			<FaArrowRight className="rightArrow" onClick={nextSlide} />
			<div className="NSsliderContainer">
				{loading ? <img src={loadingSpinner} alt="Page loading spinner" /> : nonStarredSites.map((siteDetail, index) => {

					return (<div className={index === current ? 'slide active' : 'slide'} id={siteDetail.id} key={index}>
						{index === current && (
							<div className="slideInfo">
								<a href={siteDetail.url} target="_blank" rel="noreferrer"><h3>{siteDetail.name}</h3></a>
								<br />
								<img className="screenshotPreview" src={siteDetail.screenshotUrl} alt={siteDetail.name} />
							</div>

						)}
					</div>)

				})}
			</div>
		</div>
	);
};

export default Site;