import React, { useState, createContext } from 'react';
import './App.css';

import { useUserPosts, useUsers } from './hooks';

import { Posts, Users } from './components';

export const UsersContext = createContext(null)
export const UserPostsContext = createContext(null)

function App() {
  const { users } = useUsers();

  const [userId, setUserId] = useState(null)
  const [userNameId, setUserNameId] = useState(null)

  const { userPosts } = useUserPosts(userId);

  const handleGetUserPosts = ({ userId, userName }) => {
    setUserId(userId);
    setUserNameId(userName)
  }

  return (
    <>
      <UsersContext.Provider value={{ users, handleGetUserPosts }}>
        <div className='wrapper'>
          <Users />
          {
            !!userId && <UserPostsContext.Provider value={{ userPosts, userNameId }}>
              <Posts />
            </UserPostsContext.Provider>
          }
        </div>
      </UsersContext.Provider>
    </>
  );
}

export default App;
