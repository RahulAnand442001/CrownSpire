import React, { useState } from "react";
import { connect } from "react-redux";
// custom components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
	googleSignInStart,
	emailSignInStart,
} from "../../redux/user/user.actions";
//stylesheet
import "./signin.styles.scss";

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
	const [userCredentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const { email, password } = userCredentials;

	const handleChange = (event) => {
		const { value, name } = event.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = userCredentials;
		emailSignInStart(email, password);
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email & password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					value={email}
					required
					handleChange={handleChange}
					label="Email"
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					required
					handleChange={handleChange}
					label="Password"
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton
						type="button"
						onClick={googleSignInStart}
						isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
