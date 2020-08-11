import React, { useEffect } from 'react';
import './Forum.css';
import ForumForm from './ForumForm';
import { fetchPosts, createPost } from '../../actions/postActions';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Forum = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  useEffect(() => {
    props.posts.unshift(props.newPost);
  }, [props.newPost]);

  const postItems = props.posts.map((post) => (
    <div key={uuidv4()}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));

  return (
    <div>
      <ForumForm />
      <hr />
      {postItems}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts, createPost })(Forum);
