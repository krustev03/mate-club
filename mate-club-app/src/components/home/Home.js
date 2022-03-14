import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import Wrapper from "../ui/Wrapper";
import classes from "./Home.module.css";

const Home = () => {
  const authCtx = useContext(AuthContext);

  const userEmail = authCtx.userEmail;

  let content;

  if (!authCtx.isLoggedIn) {
    content = (
      <Wrapper>
        <h1>Welcome to Mate Club!</h1>
        <div className={classes.actions}>
          <p>Already have an account? Login now!</p>
          <Link to="/login">Login</Link>
        </div>
        <div className={classes.actions}>
          <p>Want to join the biggest social media? Create your account now!</p>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </Wrapper>
    );
  } else {
    content = (
      <Wrapper>
        <h1>Hello, {userEmail}!</h1>
        <div className={classes.actions}>
          <p>Wonder what your mates are doing? Go and see their newest posts!</p>
          <Link to="/posts">Posts</Link>
        </div>
        <div className={classes.actions}>
          <p>Everyone wants to have more friends. Find yours in the user list!</p>
          <Link to="/users">Users</Link>
        </div>
      </Wrapper>
    );
  }

  return <Fragment>{content}</Fragment>;
};

export default Home;
