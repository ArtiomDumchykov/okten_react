import React, { useState } from 'react';
import './App.css';
import { Users, Launches, Posts} from './components';
import { UserPosts } from './components/Users';


function App() {
  const [userId, setUserId] = useState(null) 

  return (
    <>
      <div className='wrapper'>
        <Posts />
        {/* <Launches/> */}
    
        {/* <Users setUserId={setUserId}/>
        {!!userId && <UserPosts userId={userId}/>} */}
      </div>
    </>
  );
}

export default App;
