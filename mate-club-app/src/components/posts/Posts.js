import { useEffect, useState } from "react";
import PostItem from "./PostItem";

import classes from "./Posts.module.css";

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://mate-club-default-rtdb.firebaseio.com/posts.json")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const posts = [];

        for (const key in responseData) {
          const post = {
            id: key,
            ...responseData[key],
          };

          posts.push(post);
        }

        setIsLoading(false);
        setLoadedPosts(posts);
      });
  }, []);

  if (isLoading) {
    return (
      <section className="centered">
        <h1>All Posts</h1>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="centered">
      <h1>All Posts</h1>
      <ul className={classes.posts}>
        {loadedPosts.map((post) => (
          <PostItem
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            date={post.date}
          />
        ))}
      </ul>
    </section>
  );
};

export default Posts;
