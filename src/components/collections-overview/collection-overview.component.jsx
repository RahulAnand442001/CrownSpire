import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// stylesheet
import "./collection-overview.styles.scss";

// redux selectors
import { selectCollections } from "../../redux/shop/shop.selectors";

// custom components
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => (
	<div className="collections-overview">
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
