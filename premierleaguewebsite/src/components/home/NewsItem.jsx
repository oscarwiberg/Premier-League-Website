import React, { useState, useEffect } from 'react';
import './NewsItem.css';

const NewsItem = () => {
  const [posts, setPosts] = useState([]);
  // const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
  //     .then((response) => response.json())
  //     .then((json) => setPhotos(json));
  // }, []);

  const postItems = posts.map((post) => (
    <div key={post.id} className="Card">
      <img src="https://via.placeholder.com/600/92c952" alt={post.id} />
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  ));

  return <div>{postItems}</div>;
};

export default NewsItem;
