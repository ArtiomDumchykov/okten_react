import React, { useState } from 'react';
import './App.css';
import { Users, Launches, Posts, PreLoader } from './components';
import { UserPosts } from './components/Users';
import { usePosts } from './hooks';

function App() {
  const [userId, setUserId] = useState(null) 

  const [preLoader, setPreLoader] = useState(true)

  return (
    <>
      <div className='wrapper'>
        {/* <Posts /> */}
        {/* <Launches/> */}
    
        <Users setUserId={setUserId}/>
        {!!userId && <UserPosts userId={userId}/>}

        {/* { !preLoader && <Posts />} */}
      </div>
      {/* {preLoader &&  <PreLoader/>} */}
    </>
  );
}

export default App;
