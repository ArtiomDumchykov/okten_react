import React from 'react';

import styles from './Users.module.scss';

import { User } from '../User/User';

export  function Users({users, handleGetUserPosts, ...rest}) {

    

  return (
    <>
        <div className={styles.users__container + " _container"}>
            <ul className={styles.users__list}>
                {
                    !!users?.length && [...users].map(item => {
                        return <User user={item} key={item.id} handleGetUserPosts={handleGetUserPosts} {...rest}/>
                    })
                }
            </ul>
        </div>
    </>
  )
}
