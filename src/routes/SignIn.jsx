import React from "react";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";

const SignIn = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
