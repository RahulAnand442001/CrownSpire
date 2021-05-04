import React from "react";
import { connect } from "react-redux";
// stylesheets
import "./collection-item.styles.scss";

// custom components
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
	const { imageUrl, name, price } = item;
	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="name">${price}</span>
			</div>
			<CustomButton inverted onClick={() => addItem(item)}>
				ADD TO CART
			</CustomButton>
		</div>
	);
};

const matchDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, matchDispatchToProps)(CollectionItem);
