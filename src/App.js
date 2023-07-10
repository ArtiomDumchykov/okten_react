import React, { useState } from 'react';
import './App.css';
import { Users, Launches, Posts } from './components';
import { UserPosts } from './components/Users';

function App() {
  const [userId, setUserId] = useState(null) 
  return (
    <>
      <Posts/>
      <Launches/>
  
      {/* <Users setUserId={setUserId}/>
      {!!userId && <UserPosts userId={userId}/>} */}
    </>
  );
}

export default App;
