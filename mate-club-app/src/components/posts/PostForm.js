import Card from "../ui/Card";
import classes from "../layout/Form.module.css";
import { useRef } from "react";

const PostForm = () => {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    // add data
    // date is date.now to string
  };

  return (
    <Card>
      <form className={classes.form} onClick={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Title</label>
          <input
            type="email"
            required
            id="email"
            ref={titleInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea required id="description" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Sign Up</button>
        </div>
      </form>
    </Card>
  );
};

export default PostForm;
