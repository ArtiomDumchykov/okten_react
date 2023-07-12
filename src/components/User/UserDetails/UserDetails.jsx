import React from 'react'
import styles from './UserDetails.module.scss'

export function UserDetails({ userDetails }) {
    const { id, name, username, phone, email } = userDetails
    return (
        <div className={styles["item__description-text"]}>
            <p className={styles["text-item"]}>ID: {id}</p>
            <p className={styles["text-item"]}>User Name: {username}</p>
            <p className={styles["text-item"]}>Name: {name}</p>
            <p className={styles["text-item"]}>Phone: {phone}</p>
            <p className={styles["text-item"]}>Email: {email}</p>
        </div>
    )
}
