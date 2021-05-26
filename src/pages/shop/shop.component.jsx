import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

// redux components
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
	selectCollectionFetching,
	selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";

// custom components
import CollectionOverview from "../../components/collections-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

// HOC
const ColectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// class component
class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}

	render() {
		const { match, isCollectionFetching, isCollectionLoaded } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<ColectionOverviewWithSpinner
							isLoading={isCollectionFetching}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner
							isLoading={!isCollectionLoaded}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectCollectionFetching,
	isCollectionLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
