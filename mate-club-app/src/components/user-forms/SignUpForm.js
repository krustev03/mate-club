import Card from "../ui/Card";

import classes from "./UserForm.module.css";

const SignUpForm = () => {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            id="email" //ref={emailInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            required
            id="username"
            //ref={usernameInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            //ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Sign Up</button>
        </div>
      </form>
    </Card>
  );
};

export default SignUpForm;
