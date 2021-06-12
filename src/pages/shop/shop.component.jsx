import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Spinner from "../../components/loading-spinner/spinner.componen";

// redux components
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

// custom components
const CollectionOverviewContainer = lazy(() =>
	import(
		"../../components/collections-overview/collections-overview.container"
	),
);
const CollectionsPageContainer = lazy(() =>
	import("../collection/collection.container"),
);

// class component
const ShopPage = ({ match, fetchCollectionsStart }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className="shop-page">
			<Suspense fallback={Spinner}>
				<Route
					exact
					path={`${match.path}`}
					component={CollectionOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionsPageContainer}
				/>
			</Suspense>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
