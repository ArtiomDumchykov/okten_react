import React from 'react';
import { UserPost } from '../UserPost/UserPost';
import { useUserPosts } from '../../../hooks';
import styles from './UserPosts.module.scss';

export  function UserPosts({userId}) {
    const {userPosts} = useUserPosts(userId)
    return (
        <div className={styles.posts__container + ' _container'}>
            <ul className={styles.users__list}>
                {!!userPosts?.length && [...userPosts].map(item => <UserPost post={item} key={`${item.userId}_${item.id}`}/>)}
            </ul>
        </div>
    )
}
