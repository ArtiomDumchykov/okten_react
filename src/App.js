import React, { createContext, useState } from 'react';
import './App.css';

import { Posts, Users } from './components';


export const AppContext = createContext(null)

function App() {
  console.log("Render");
  const [posts, setPosts] = useState({ userName: null, userId: null, userPosts: null })

  // const handleShowFilterPosts = (arr, { userId, userName }) => {
  //     console.log(userId, userName);
  //   //   const filterData = [...usersPosts].filter(item => item.userId === userId)
  //   //   console.log("DATA filter", filterData);
  //   //   setPosts(prev => ({
  //   //     ...prev,
  //   //     userName,
  //   //     userId,
  //   //     userPosts: filterData
  //   //   }))
  //   }
    

  return (
    <div className='wrapper'>
      <AppContext.Provider value={{posts, setPosts}}>
        <Users />
        <Posts />
      </AppContext.Provider>
    </div>
  );
}

export default App;
