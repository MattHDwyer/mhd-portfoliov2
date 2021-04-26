import React from 'react';
import './ShopifySitePreviews.css'
import sitesData from '../../data/shopifySites.json';

const Site = () => {
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

	return (
		<div className="nonStarredSitesSectionContainer">

			{nonStarredSites.map((siteDetail, index) => {
				return (
					<div className="nonStarredSiteItem" id={siteDetail.id} key={index}>
						<a href={siteDetail.url} rel="noreferrer" target="_blank">
							<img className="nonStarredScreenshot" src={siteDetail.screenshotUrl} alt={siteDetail.name} />
						</a>
					</div>
				)
			})}

		</div>
	);
};

export default Site;