import React from "react";
import { Route } from "react-router-dom";

// custom components
import CollectionOverview from "../../components/collections-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
	<div className="shop-page">
		<Route exact path={`${match.path}`} component={CollectionOverview} />
		<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
	</div>
);

export default ShopPage;
