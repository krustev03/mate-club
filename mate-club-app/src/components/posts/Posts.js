import PostItem from "./PostItem";

import classes from "./Posts.module.css";

const Posts = () => {
  return (
    <section className="centered">
      <h1>All Posts</h1>
      <ul className={classes.posts}>
        <li>
          <PostItem />
        </li>
        <li>
          <PostItem />
        </li>
      </ul>
    </section>
  );
};

export default Posts;
