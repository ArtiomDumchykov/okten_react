import React from 'react';

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
