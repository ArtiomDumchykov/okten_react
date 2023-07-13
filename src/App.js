import React, { useState } from 'react';
import './App.css';

import {useUsers} from './hooks';

import { Posts, Users } from './components';



function App() {
  console.log("RENDER");
  const { users } = useUsers();
  
  const [userId, setUserId] = useState(null)
  const [userNameId, setUserNameId] = useState(null)

  const handleGetUserPosts = ({userId, userName}) => {
    // alert(userId + userName)
    setUserId(userId);
    setUserNameId(userName)
  }

  return (
    <>
      <div className='wrapper'>
        <Users users={users} handleGetUserPosts={handleGetUserPosts}/>
        
        {!!userId && <Posts userId={userId} userName={userNameId}/>}
      </div>
    </>
  );
}


export default App;
