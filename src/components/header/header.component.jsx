import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// stylesheets
//import "./header.styles.scss";

//  styled components
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
} from "./header.styles";

// using svg images in react
import { ReactComponent as Logo } from "../../assets/crown.svg";

// firebase componet registry
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

// CSS in JS styling in react

const linkStyle = {
	padding: "10px 15px ",
	fontSize: "22px",
	cursor: "pointer",
};

const Header = ({ currentUser, hidden, signOutStart }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<Link style={linkStyle} to="/shop">
				SHOP
			</Link>
			<Link style={linkStyle} to="/contact">
				CONTACT
			</Link>
			{currentUser ? (
				<Link to="/" style={linkStyle} onClick={signOutStart}>
					SIGN OUT
				</Link>
			) : (
				<Link style={linkStyle} to="/signin">
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
