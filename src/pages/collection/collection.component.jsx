import React from "react";
import { connect } from "react-redux";

// stylesheet
import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollectionFromShop } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">
				{items.map((item) => (
					<div className="collection-item" key={item.id}>
						<CollectionItem item={item} />
					</div>
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollectionFromShop(ownProps.match.params.collectionId)(
		state,
	),
});

export default connect(mapStateToProps)(CollectionPage);
