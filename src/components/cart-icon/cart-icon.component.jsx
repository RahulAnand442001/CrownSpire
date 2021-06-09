import React, { useContext } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// stylesheet
import "./cart-icon.styles.scss";

// components
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import CartContext from "../../contexts/cart/cart.context";

const CartIcon = ({ itemCount }) => {
	const { toggleHidden } = useContext(CartContext);
	return (
		<div className="cart-icon" onClick={toggleHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
