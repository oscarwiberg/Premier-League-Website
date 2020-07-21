import React, { useState, useEffect } from 'react';
import './NewsItem.css';

// Hämta data från JSON placeholder (bild, titel och text)

const NewsItem = () => {
  const [posts, setPosts] = useState([]);
  const [photos, setPhoto] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
      .then((response) => response.json())
      .then((json) => setPhoto(json));
  }, []);

  const photoItems = photos.map((photo) => (
    <div key={photo.id} className="Photo">
      <img src={photo.url} alt="Photo" />
    </div>
  ));

  const postItems = posts.map((post) => (
    <div key={post.id} className="Card">
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  ));

  return <div>{postItems}</div>;
};

export default NewsItem;
