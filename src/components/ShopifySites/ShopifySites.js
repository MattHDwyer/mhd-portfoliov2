import React/*, { useState, useEffect } */ from 'react';
import StarredSites from '../StarredSites/StarredSites';
import NonStarredSites from '../Sites/NonStarredSites';

const ShopifySites = () => {

	return (
		<>
			<h1>Shopify Sites with Tower Systems</h1>
			<p>Coming soon will be a collection of all the Shopify sites that I've deployed with Tower Systems for my clients.</p>
			<StarredSites />
			<NonStarredSites />
		</>
	)
}

export default ShopifySites
