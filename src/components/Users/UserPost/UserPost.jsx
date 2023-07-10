import React from 'react'
import styles from './UserPost.module.scss'

export  function UserPost({post}) {
    const {userId, id: postId, title, body: text} = post
    return (
        <li className={styles["post__item"]}>
            <div className={styles["post__text"] || ""}>
                <div className={styles["post-title-wrap"]}>
                    <h2 className={styles["post-title"]}>Tiltle: {title}</h2>
                    <p className={styles["post__text"]}>{text}</p>
                </div>
                <p className={styles["post__user"]}>UserId: {userId}, PostId: {postId}</p>
            </div>
        </li>
    )
}
