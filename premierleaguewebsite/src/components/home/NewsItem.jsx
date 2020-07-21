import React, { useState, useEffect } from 'react';
import './NewsItem.css';

// Hämta data från JSON placeholder (bild, titel och text)

const NewsItem = () => {
  const [posts, setPosts] = useState([]);
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  const postItems = posts.map((post) => (
    <div key={post.id} className="Card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));

  return <div>{postItems}</div>;
};

export default NewsItem;
