import React, { useState, useEffect } from 'react';
import './Forum.css';

const Forum = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  const postItems = posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));

  return (
    <div>
      <h1>Forum Component</h1>
      {postItems}
    </div>
  );
};

export default Forum;
