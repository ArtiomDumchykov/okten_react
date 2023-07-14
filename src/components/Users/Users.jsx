import React from 'react';

import styles from './Users.module.scss';

import { User } from '../User/User';

import { useGetUsers } from '../../hooks';

export function Users() {

    const { users} = useGetUsers();

    return (
        <>
            <div className={styles.users__container + " _container"}>
                <ul className={styles.users__list}>
                    {
                        !!users?.length && [...users].map(item => <User user={item} key={item.id} /> )
                    }
                </ul>
            </div>
        </>
    )
}
