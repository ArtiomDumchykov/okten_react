import React, { useContext } from 'react';

import './Posts.scss'

import { Post } from '../Post/Post';

import { UserPostsContext } from '../../App';

export  function Posts() {

  const {userPosts, userNameId} = useContext(UserPostsContext)
  return (
    <div className='user-posts__container _container'>
        <h2 className='user-name__title'>User Name: {userNameId}</h2>
        <ul className='user__posts-list'>
            {
              !!userPosts?.length && [...userPosts].map(item => <Post post={item} key={item.id + "_" + item.userId}/>)
            }
        </ul>
    </div>
  )
}
