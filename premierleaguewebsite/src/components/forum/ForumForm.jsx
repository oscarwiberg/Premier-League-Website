import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postActions';
import './ForumForm.css';

const ForumForm = (props) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onChangeUsername = (e) => {
    setTitle(e.target.value);
  };

  const onChangePost = (e) => {
    setBody(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title: title,
      body: body,
    };

    props.createPost(newPost);
  };

  return (
    <div className="formContainer">
      <form onSubmit={onSubmit}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            onChange={onChangeUsername}
            name="username"
            value={title}
            placeholder="Write your username here"
          />
        </div>
        <div>
          <br />
          <label>Post:</label>
          <br />
          <textarea
            name="post"
            onChange={onChangePost}
            placeholder="Write your message/post here"
            value={body}
          ></textarea>
        </div>
        <br />
        <button type="submit">Send your message</button>
      </form>
    </div>
  );
};
export default connect(null, { createPost })(ForumForm);
