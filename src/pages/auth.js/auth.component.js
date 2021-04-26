import React from "react";

// auth components
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

//stylesheet
import "./auth.styles.scss";

const SignInSignUpPage = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
