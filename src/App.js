import React, { createContext } from 'react';
import './App.css';

import { Posts, Users } from './components';
import { handleShowFilterPosts } from './components';

export const AppContext = createContext(null)

function App() {
  console.log("Render");

  return (
    <div className='wrapper'>
      <AppContext.Provider value={{handleShowFilterPosts}}>
        <Users />
        <Posts />
      </AppContext.Provider>
    </div>
  );
}

export default App;
