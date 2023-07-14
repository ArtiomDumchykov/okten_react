import React, { createContext } from 'react';
import './App.css';

import { Posts, Users } from './components';

export const AppContext = createContext(null)

function App() {
  console.log("Render");

  return (
    <div className='wrapper'>
      <AppContext.Provider value={{}}>
        <Users />
        <Posts />
      </AppContext.Provider>
    </div>
  );
}

export default App;
