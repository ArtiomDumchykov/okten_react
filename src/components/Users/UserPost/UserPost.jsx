import React from 'react'
import styles from './UserPost.module.scss'

export  function UserPost({post}) {
    const {userId, id: postId, title, body: text} = post
    return (
        <li>
            <div className="post-text">
                <div className="post-title-wrap">
                    <h2 className="post-title">Tiltle: {title}</h2>
                    <p className="post__text">{text}</p>
                </div>
                <p className="post__user">UserId: {userId}, PostId: {postId}</p>
            </div>
        </li>
    )
}
