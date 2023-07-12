import React, { useState } from 'react';
import './App.css';

import {useUsers} from './hooks';

import { Users } from './components';



function App() {
  console.log("RENDER");
  const { users } = useUsers();
  
  const [userId, setUserId] = useState(null)

  const handleGetUserPosts = ({userId, userName}) => {
    alert(userId + userName)
    setUserId(userId)
  }

  return (
    <>
      <div className='wrapper'>
        <Users users={users} handleGetUserPosts={handleGetUserPosts}/>
        {/* {!!userId && <Button>gdhdahasdhadha</Button>} */}
      </div>
    </>
  );
}


export default App;
