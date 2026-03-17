/* eslint-disable react-hooks/set-state-in-effect */
import { useParams } from "react-router";
import { useState, useEffect } from "react";
export default function PostDetail() {
  const { id } = useParams();
  console.log(id);

  const [post, setPost] = useState();

  const getData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    const post = await response.json();
    setPost(post);
    console.log(post);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>{post && post.title}</h1>
      <p>{post && post.body}</p>
    </>
  );
}
