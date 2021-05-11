import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	// const publishableKey = `${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`;
	const publishableKey =
		"pk_test_51IptsGSFbSKAxxKb3BcrDCnFsweZr2EHZoCzBBW9jJYlXULVIb15Enh4ttXJRgZUY9YwZ6DCuuiriz8VREbh32MB00HX60thW8";
	const onToken = (token) => {
		alert("Payment successfull");
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="Crownion Clothings Ltd."
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
