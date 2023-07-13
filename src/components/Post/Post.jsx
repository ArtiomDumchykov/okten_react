import React from 'react';

import './Post.scss'

export  function Post({post}) {
  const {id: postId, userId, title, body: text} = post
  return (
    <li className="post__item">
            <div className="post__text">
                <div className="post-title-wrap">
                    <h2 className="post-title">Tiltle: {title}</h2>
                    <p className="post__text">{text}</p>
                </div>
                <p className="post__user">UserId: {userId}, PostId: {postId}</p>
            </div>
    </li>
  )
}
