import React, { useState } from 'react';

import './Posts.scss'

import { Post } from '../Post/Post';

import { useGetUsersPosts } from '../../hooks';


export function Posts() {

  // const { usersPosts } = useGetUsersPosts();
  const [posts, setPosts] = useState({ userName: null, userId: null, userPosts: [] })

  console.log("Render Users Posts");
  if (!posts?.userPosts?.length) {
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
      <h2 className='user-name__title'>User Name: {posts?.userName}</h2>
      <ul className='user__posts-list'>
        {
          !!posts?.userPosts?.length && [...posts?.userPosts].map(item => <Post post={item} key={item.id + "_" + item.userId} />)
        }
      </ul>
    </div>
  )
}
