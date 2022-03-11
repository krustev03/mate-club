import { Link } from "react-router-dom";

import Wrapper from "../ui/Wrapper";
import classes from "./Home.module.css";

const Home = () => {
  return (
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
};

export default Home;
