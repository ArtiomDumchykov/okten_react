import React from 'react';
import { UserPost } from '../UserPost/UserPost';
import { useUserPosts } from '../../../hooks';

export  function UserPosts({userId}) {
    const {userPosts} = useUserPosts(userId)
    return (
        <div>
            <ul>
                {!!userPosts?.length && [...userPosts].map(item => <UserPost post={item} key={`${item.userId}_${item.id}`}/>)}
            </ul>
        </div>
    )
}
