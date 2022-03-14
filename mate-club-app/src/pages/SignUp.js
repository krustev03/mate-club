import { Fragment, useContext } from "react";
import { Navigate } from "react-router-dom";
import SignUpForm from "../components/user-forms/SignUpForm";
import AuthContext from "../store/auth-context";

const SignUpPage = () => {
  const authCtx = useContext(AuthContext);

  console.log(authCtx.isLoggedIn);

  let content;

  if (authCtx.isLoggedIn === false) {
    content = (
      <section>
        <h1 className="centered">Sign Up</h1>
        <SignUpForm />
      </section>
    );
  } else {
    content = <Navigate to="/" />;
  }

  return <Fragment>{content}</Fragment>;
};

export default SignUpPage;
