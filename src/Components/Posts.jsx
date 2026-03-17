/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { Link } from "react-router";
export default function Posts() {
  const [posts, setPosts] = useState();

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.id}>
                {post.title} <Link to={`/posts/${post.id}`}>Read more</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
