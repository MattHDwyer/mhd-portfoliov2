import React, { useLayoutEffect, useState } from 'react';
import './NonStarredSites.css'
import Modal from 'react-modal';
import sitesData from '../../data/shopifySites.json';

const Site = () => {

	// Set Loading State
	// const [loading, setLoading] = useState(false);
	// // Set sites state
	// const [sites, setSites] = useState([]);

	// // GET request to retrieve list of Shopify sites from PHP backend
	// useEffect(() => {
	// 	axios.get('http://localhost:8888/php-mhd-portfolio/api/website/read.php')
	// 		.then(res => setSites(res.data.sites))
	// 		.finally(() => setLoading(false))
	// }, []);

	// Set nonStarredSites array
	let nonStarredSites = [];
	// Function to fill non-starred sites into the nonStarredSites array
	const nonStarredSitesFill = () => {
		sitesData.data.map((siteDetail) => {
			if (siteDetail.starred !== 1 && siteDetail.screenshotUrl !== null) {
				return nonStarredSites.push(siteDetail)
			}
			return nonStarredSites;
		})
	}
	// Execute the nonStarredSites function
	nonStarredSitesFill();

	function useWindowSize() {
		const [size, setSize] = useState([0, 0]);
		useLayoutEffect(() => {
			function updateSize() {
				setSize([window.innerWidth, window.innerHeight]);
			}
			window.addEventListener('resize', updateSize);
			updateSize();
			return () => window.removeEventListener('resize', updateSize);
		}, []);
		return size;
	}

	// function ShowWindowDimensions() {
	// 	const [width, height] = useWindowSize();
	// 	return <span>Window size: {width} x {height}</span>;
	// }


	let screenWidth = 4;
	let maxLength = 150;

	const SetScreenWidth = (props) => {
		const [width] = useWindowSize();
		if (width >= 0 && width <= 400) {
			screenWidth = 1;
			maxLength = 400;

		} else if (width >= 401 && width <= 900) {
			screenWidth = 2;
			maxLength = 150;

		} else if (width >= 901 && width <= 1100) {
			screenWidth = 3;
			maxLength = 50;

		} else if (width >= 1101 && width <= 1400) {
			screenWidth = 3;
			maxLength = 150;

		} else if (width > 1400) {
			screenWidth = 4;
			maxLength = 250;
		}
	}
	SetScreenWidth();


	const [modalIsOpen, setIsOpen] = useState(-10);

	const getModal = (index) => {
		setIsOpen(index);
	}

	const closeModal = () => {
		setIsOpen(-10);
	}


	return (
		<div className="nonStarredSitesSectionContainer">

			{nonStarredSites.map((siteDetail, index) => {

				return (<div className="nonStarredSiteItem" id={siteDetail.id} key={index}>
					{((index + 1) / screenWidth) % 1 === 0 ?
						<div className="lastColumn">
							<img className="nonStarredScreenshot" src={siteDetail.screenshotUrl} alt={siteDetail.name} />
							{/* <div className="onHoverInfo">
								<h3 className="slideOutTitle">{siteDetail.name}</h3>
								<div className="nonStarredFeatures">
									{siteDetail.features !== null &&
										<>
											{siteDetail.features.length > maxLength ?
												<>
													<p>{`${siteDetail.features.substring(0, maxLength)}...`}<br /> <button onClick={() => { getModal(index) }}>Read more</button></p>
													<Modal
														isOpen={modalIsOpen === index}
														onRequestClose={closeModal}
														ariaHideApp={false}
													>
														<h3>{siteDetail.name} </h3>
														<p>{siteDetail.features}</p>
														<button className="modalClose" onClick={() => { closeModal() }}>Close</button>
													</Modal>
												</>
												:
												<p>{siteDetail.features}</p>}
										</>
									}
								</div>

							</div> */}
						</div>
						:
						<>
							<img className="nonStarredScreenshot" src={siteDetail.screenshotUrl} alt={siteDetail.name} />
							{/* <div className="onHoverInfo">
								<h3 className="slideOutTitle">{siteDetail.name}</h3>
								<div className="nonStarredFeatures">
									{siteDetail.features !== null &&
										<>
											{siteDetail.features.length > maxLength ?
												<>
													<p>{`${siteDetail.features.substring(0, maxLength)}...`} <br /><button onClick={() => { getModal(index) }}>Read more</button></p>
													<Modal
														isOpen={modalIsOpen === index}
														onRequestClose={closeModal}
														ariaHideApp={false}
													>
														<div className="modalContainer">
															<h3>{siteDetail.name} </h3>
															<br />
															<p>{siteDetail.features}</p>
															<br />
															<button className="modalClose" onClick={() => { closeModal() }}>Close</button>
														</div>
													</Modal>
												</>
												:
												<p>{siteDetail.features}</p>}
										</>
									}
								</div>

							</div> */}

						</>
					}


				</div>)

			})}

		</div>
	);
};

export default Site;