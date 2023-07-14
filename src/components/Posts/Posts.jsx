import React, { useContext } from 'react';

import './Posts.scss'

import { Post } from '../Post/Post';

import { UserPostsContext } from '../../App';

export function Posts() {
  const { posts: { userName, userPosts } } = useContext(UserPostsContext)
  console.log("Render Users Posts");

  if (!userPosts.length) {
    return (
      <div style={{
        padding: "20px 0"
      }}>
        <h2>Not Posts</h2>
      </div>
    )
  }

  return (
    <div className='user-posts__container _container'>
      <h2 className='user-name__title'>User Name: {userName}</h2>
      <ul className='user__posts-list'>
        {
          !!userPosts?.length && [...userPosts].map(item => <Post post={item} key={item.id + "_" + item.userId} />)
        }
      </ul>
    </div>
  )
}
