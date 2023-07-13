import React, { useContext } from 'react';

import styles from './Users.module.scss';

import { User } from '../User/User';

import { UsersContext } from '../../App';

export function Users() {

    const { users } = useContext(UsersContext)
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
