import React/*, { useState, useEffect } */ from 'react';
import StarredSites from '../StarredSites/StarredSites';
import NonStarredSites from '../Sites/NonStarredSites';
import './ShopifySites.css'

const ShopifySites = () => {

	return (
		<>
			<h1>Shopify Sites with Tower Systems</h1>
			<div class="shopifySitesContainer">
				<p>Below is a collection of all the Shopify sites that I've deployed with Tower Systems for my clients.</p>
			</div>
			<StarredSites />
			<NonStarredSites />
		</>
	)
}

export default ShopifySites
