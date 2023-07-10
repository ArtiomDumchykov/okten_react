import React, { useState } from 'react';
import './App.css';
import { Users, Launches, Posts} from './components';
import { UserPosts } from './components/Users';


function App() {
 

  return (
    <>
      <div className='wrapper'>
        <Posts />
        
      </div>
    </>
  );
}

export default App;
