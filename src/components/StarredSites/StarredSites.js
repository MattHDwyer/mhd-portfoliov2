import React/*, { useEffect, useState } */ from 'react';
import './StarredSites.css'
// import loadingSpinner from '../../loadingGear.svg'
// import axios from 'axios';
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const StarredSite = () => {

	// const [loading, setLoading] = useState(true);
	// const [sites, setSites] = useState([]);

	// useEffect(() => {
	// 	axios.get('http://localhost:8888/php-mhd-portfolio/api/website/read.php')
	// 		.then(res => setSites(res.data.sites))
	// 		.finally(() => setLoading(false))
	// }, []);

	// let StarredSites = [];
	// const StarredSitesFill = () => {
	// 	sites.map((siteDetail, index) => {
	// 		if (siteDetail.starred === true && siteDetail.screenshotUrl !== "") {
	// 			StarredSites.push(siteDetail)
	// 		}
	// 	})
	// }
	// StarredSitesFill();

	// const [current, setCurrent] = useState(0);
	// const length = StarredSites.length;
	// const timeVar = 6000;

	// const nextSlide = () => {
	// 	setCurrent(current === length - 1 ? 0 : current + 1)
	// }

	// const prevSlide = () => {
	// 	setCurrent(current === 0 ? length - 1 : current - 1)
	// }
	// setInterval(nextSlide, timeVar)
	return (
		<>
		</>
	);
};

export default StarredSite;