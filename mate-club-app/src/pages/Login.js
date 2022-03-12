import { Fragment, useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthContext from "../store/auth-context";
import LoginForm from "../components/user-forms/LoginForm";

const LoginPage = () => {
  const authCtx = useContext(AuthContext);

  console.log(authCtx.isLoggedIn)

  let content;

  if (authCtx.isLoggedIn === false) {
    content = (
      <section>
        <h1 className="centered">Login</h1>
        <LoginForm />
      </section>
    );
  } else {
    content = <Navigate to="/" />;
  }

  return <Fragment>{content}</Fragment>;
};

export default LoginPage;
