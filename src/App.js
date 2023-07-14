import React, { useState, createContext } from 'react';
import './App.css';

import { useGetUsersPosts, useGetUsers } from './hooks';

import { Posts, Users } from './components';

export const UsersContext = createContext(null)
export const UserPostsContext = createContext(null)

function App() {
  const { users } = useGetUsers();
  const { usersPosts } = useGetUsersPosts()

  const [posts, setPosts] = useState({ userName: null, userId: null, userPosts: [] })

  const handleFilterUserPosts = ({ userId, userName }) => {
    const filterData = [...usersPosts].filter(item => item.userId === userId)
    setPosts(prev => ({
      ...prev,
      userName,
      userId,
      userPosts: filterData
    }))
  }

  console.log("Render");
  return (
    <>
      <UsersContext.Provider value={{ users, handleFilterUserPosts }}>
        <div className='wrapper'>
          <Users />
          {
            !!posts?.userPosts?.length && <UserPostsContext.Provider value={{ posts }}>
              <Posts />
            </UserPostsContext.Provider>
          }
        </div>
      </UsersContext.Provider>
    </>
  );
}

export default App;
