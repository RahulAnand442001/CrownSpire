import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = `${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`;
	const onToken = (token) => {
		alert("Payment successfull");
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="GCROWN Clothing Ltd."
			billingAddress
			shippingAddress
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
			allowRememberMe
		/>
	);
};

export default StripeCheckoutButton;
