import React from "react";
import Spinner from "../loading-spinner/spinner.component";

const WithSpinner =
	(WrappedComponent) =>
	({ isLoading, ...otherProps }) => {
		return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
	};

export default WithSpinner;
