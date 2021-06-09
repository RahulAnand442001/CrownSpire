import React, { useState } from "react";
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

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";
import CartContext from "../../contexts/cart/cart.context";

// CSS in JS styling in react

const linkStyle = {
	padding: "10px 15px ",
	fontSize: "22px",
	cursor: "pointer",
};

const Header = ({ currentUser, signOutStart }) => {
	const [hidden, setHidden] = useState(true);
	const toggleHidden = () => setHidden(!hidden);

	return (
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
				<CartContext.Provider value={{ hidden, toggleHidden }}>
					<CartIcon />
				</CartContext.Provider>
			</OptionsContainer>
			{hidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
