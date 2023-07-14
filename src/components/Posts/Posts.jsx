import React, { useEffect, useState } from 'react';

import './Posts.scss'

import { Post } from '../Post/Post';

import { useGetUsersPosts } from '../../hooks';


export const handleShowFilterPosts = ({ userId, userName }) => {
  console.log(userId, userName);
//   const filterData = [...usersPosts].filter(item => item.userId === userId)
//   console.log("DATA filter", filterData);
//   setPosts(prev => ({
//     ...prev,
//     userName,
//     userId,
//     userPosts: filterData
//   }))
}


export function Posts() {

  const {posts, setPosts, usersPosts } = useGetUsersPosts();
  // console.log("POSTS", posts);
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
