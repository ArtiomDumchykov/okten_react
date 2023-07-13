import React from 'react';

import './Posts.scss'

import { useUserPosts } from '../../hooks'

import { Post } from '../Post/Post';

export  function Posts({userId, userName}) {
    const {userPosts} = useUserPosts(userId);

  return (
    <div className='user-posts__container _container'>
        <h2 className='user-name__title'>User Name: {userName}</h2>
        <ul className='user__posts-list'>
            {
                !!userPosts?.length && [...userPosts].map(item => <Post post={item}/>)
            }
        </ul>
    </div>
  )
}
