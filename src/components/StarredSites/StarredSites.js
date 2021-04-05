import React, { useEffect, useState } from 'react';
import axios from 'axios';
import loadingSpinner from '../../loadingGear.svg'
import './StarredSites.css'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const StarredSite = () => {

	const [loading, setLoading] = useState(true);
	const [sites, setSites] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:8888/php-mhd-portfolio/api/website/read.php')
			.then(res => setSites(res.data.sites))
			.finally(() => setLoading(false))
	}, []);

	let StarredSites = [];
	const StarredSitesFill = () => {
		sites.map((siteDetail, index) => {
			if (siteDetail.starred === true && siteDetail.screenshotUrl !== "") {
				StarredSites.push(siteDetail)
			}
		})
	}
	StarredSitesFill();

	const [current, setCurrent] = useState(0);
	const length = StarredSites.length;
	const timeVar = 6000;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}
	setInterval(nextSlide, timeVar)
	return (
		<div className="starredSitesSectionContainer">
			<div className="sliderContainer">
				<FaArrowLeft className="leftArrow" onClick={prevSlide} />
				{loading ? <img src={loadingSpinner} alt="Page loading spinner" /> : StarredSites.map((siteDetail, index) => {

					return (<div className={index === current ? 'slide active' : 'slide'} id={siteDetail.id} key={index}>
						{index === current && (
							<div className="slideInfo">
								<a href={siteDetail.url} target="_blank" rel="noreferrer"><h3>{siteDetail.name}</h3></a>
								<br />
								<div className="screenshotContainer">
									<img className="screenshotPreview" src={siteDetail.screenshotUrl} alt={siteDetail.name} />
								</div>
							</div>

						)}
					</div>)

				})}
				<FaArrowRight className="rightArrow" onClick={nextSlide} />
			</div>
		</div >
	);
};

export default StarredSite;