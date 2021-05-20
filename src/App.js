import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// stylesheet
import "./App.css";

// curstom components (pages)
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/auth.js/auth.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";

// firebase util components
import {
	auth,
	createUserProfileDocument,
} from "./firebase/firebase.utils";

// redux components
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

// react class component
class App extends React.Component {
	// monitoring status of user Authentication
	unsubscribeFromAuth = null;

	// managing continuous auth status of user
	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(
			async (userAuth) => {
				if (userAuth) {
					const userRef = await createUserProfileDocument(
						userAuth,
					);
					userRef.onSnapshot((snapshot) => {
						setCurrentUser({
							currentUser: {
								id: snapshot.id,
								...snapshot.data(),
							},
						});
					});
				}
				setCurrentUser(userAuth);
			},
		);
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route
						exact
						path="/checkout"
						component={CheckoutPage}
					/>
					<Route
						exact
						path="/signin"
						render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<SignInSignUpPage />
							)
						}
					/>
				</Switch>
			</>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App);
