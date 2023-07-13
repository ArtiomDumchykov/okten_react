import React, { useContext } from 'react'
import styles from './UserDetails.module.scss'
import { UserContext } from '../User'

export function UserDetails() {
    const {restUser: userDetails} = useContext(UserContext);
    const { id, name, username, phone, email } = userDetails;

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
