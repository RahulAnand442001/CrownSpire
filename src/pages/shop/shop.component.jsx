import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
// custom components
import CollectionOverview from "../../components/collections-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const ColectionOverviewWithSpinner = WithSpinner(
	CollectionOverview,
);

const CollectionPageWithSpinner =
	WithSpinner(CollectionPage);
class ShopPage extends React.Component {
	constructor() {
		super();
		this.state = {
			loading: true,
		};
	}
	unsubscribeFromSnapShot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef =
			firestore.collection("collections");
		this.unsubscribeFromSnapShot = collectionRef.onSnapshot(
			async (snapshot) => {
				const collectionsMap =
					convertCollectionsSnapshotToMap(snapshot);
				updateCollections(collectionsMap);
				this.setState({ loading: false });
			},
		);
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<ColectionOverviewWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
