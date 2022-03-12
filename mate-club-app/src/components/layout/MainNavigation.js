import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Mate Club</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!authCtx.isLoggedIn && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {!authCtx.isLoggedIn && (
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <Link to="/" onClick={logoutHandler}>Logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
