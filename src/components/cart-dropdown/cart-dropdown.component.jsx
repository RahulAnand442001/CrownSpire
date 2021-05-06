import React from "react";
import { connect } from "react-redux";

//stylesheet
import "./cart-dropdown.styles.scss";

// custom components
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.map((cartItem) => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
		</div>

		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

const matchStateToProps = ({ cart: { cartItems } }) => ({
	cartItems,
});

export default connect(matchStateToProps)(CartDropdown);
