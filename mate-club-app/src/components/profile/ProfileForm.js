import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";

import classes from "../layout/Form.module.css";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext)

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBfrQCWpsnhI14mkPWnZf2jnG3XgQ8QuYQ",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        header: {
          "Content-Type": "application/json"
        },
      }
    ).then((res => {
      // assumption: Always succeeds!
    }));
  };

  return (
    <form className={`${classes.form} centered`} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" minLength="7" ref={newPasswordInputRef} />
      </div>
      <div className={classes.actions}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;