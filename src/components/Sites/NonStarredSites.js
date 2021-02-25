import React, { useEffect, useState } from 'react';
import axios from 'axios';
import loadingSpinner from '../../loadingGear.svg'
import './NonStarredSites.css'
import ReactMarkdown from 'react-markdown'

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

	// const [current, setCurrent] = useState(0);
	// const length = nonStarredSites.length;
	// let timeVar = 6000;

	// const nextSlide = () => {
	// 	setCurrent(current === length - 1 ? 0 : current + 1)
	// }

	// const prevSlide = () => {
	// 	setCurrent(current === 0 ? length - 1 : current - 1)
	// }


	// setTimeout(nextSlide, timeVar)


	return (
		<div className="nonStarredSitesSectionContainer">

			{loading ? <img src={loadingSpinner} alt="Page loading spinner" /> : nonStarredSites.map((siteDetail, index) => {

				return (<div className="nonStarredSiteItem" id={siteDetail.id} key={index}>

					<img className="nonStarredScreenshot" src={siteDetail.screenshotUrl} alt={siteDetail.name} />
					<div className="onHoverInfo">
						<h3>{siteDetail.name}</h3>
						<div className="nonStarredFeatures">
							{siteDetail.features !== null && <ReactMarkdown>{siteDetail.features}</ReactMarkdown>}
						</div>

					</div>


				</div>)

			})}
		</div>
	);
};

export default Site;