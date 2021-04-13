import React/*, { useState, useEffect } */ from 'react';
import StarredSites from '../StarredSites/StarredSites';
import NonStarredSites from '../Sites/NonStarredSites';
import './ShopifySites.css'

const ShopifySites = () => {

	return (
		<>
			<h1>Shopify Sites with Tower Systems</h1>
			<div class="shopifySitesContainer">
				<p>Below is a collection of majority the Shopify sites that I've deployed with Tower Systems for my clients. Majority of my work is done with independant small business retailers, however, I've also work with The University of Newcastle and a couple of Toyworld Franchises.</p>
			</div>
			<StarredSites />
			<NonStarredSites />
		</>
	)
}

export default ShopifySites
