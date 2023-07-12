import React from 'react'
import styles from './User.module.scss'

export  function User({user, setUserId}) {
    const {id, name, username, phone, email} = user
    return (
        <li className={styles["user__item"]}>
            <div className={styles["item__description-text"]}>
                <p className={styles["text-item"]}>ID: {id}</p>
                <p className={styles["text-item"]}>User Name: {username}</p>
                <p className={styles["text-item"]}>Name: {name}</p>
                <p className={styles["text-item"]}>Phone: {phone}</p>
                <p className={styles["text-item"]}>Email: {email}</p>
            </div>
            <div className={styles.btn__wrap}>
                <button className={styles.btn} onClick={() => setUserId(id)}>getPosts</button>
            </div>
        </li>
    )
}
