import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';
import './ForumForm.css';

const ForumForm = (props) => {
  const [username, setUsername] = useState('');
  const [post, setPost] = useState('');

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePost = (e) => {
    setPost(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      username: username,
      post: post,
    };

    //   fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10', {
    //     method: 'POST',
    //     headers: {
    //       'content-type': 'application/json',
    //     },
    //     body: JSON.stringify(newPost),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));
    props.createPost(newPost);
  };

  return (
    <div>
      <h1>Add post</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Username:</label>
          <br />
          <input
            type="text"
            onChange={onChangeUsername}
            name="username"
            value={username}
          />
        </div>
        <div>
          <br />
          <label>Post:</label>
          <br />
          <textarea name="post" onChange={onChangePost} value={post}></textarea>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default connect(null, { createPost })(ForumForm);
