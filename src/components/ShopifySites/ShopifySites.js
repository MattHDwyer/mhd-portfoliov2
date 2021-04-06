import React/*, { useState, useEffect } */ from 'react';
import StarredSites from '../StarredSites/StarredSites';
import NonStarredSites from '../Sites/NonStarredSites';

const ShopifySites = () => {

	return (
		<>
			<StarredSites />
			<NonStarredSites />
		</>
	)
}

export default ShopifySites
