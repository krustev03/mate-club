import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";
import classes from "../layout/Form.module.css";

const PostForm = () => {
  const navigate = useNavigate();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const today = new Date();
    const date =
      today.getFullYear() +
      "." +
      (today.getMonth() + 1) +
      "." +
      today.getDate();

    const post = {
      title: enteredTitle,
      description: enteredDescription,
      date: date,
    };

    fetch("https://mate-club-default-rtdb.firebaseio.com/posts.json", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/posts");
    });
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            id="description"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Sign Up</button>
        </div>
      </form>
    </Card>
  );
};

export default PostForm;
