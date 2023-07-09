import React from 'react';
import PropTypes from "prop-types"
// import styles from './PostDetail.module.scss';

export  function PostDetail({post}) {
  const {id, userId, title, body: text} = post
  return (
    <>
      <h3>Post ID: {id}, UserId: {userId}<br/> Title: {title} </h3>
      <p>{text}</p>
    </>
  )
}


PostDetail.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string
  })
}