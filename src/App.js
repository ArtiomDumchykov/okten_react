import React, { createContext } from 'react';
import './App.css';

import { useGetUsersPosts} from './hooks';

import { Posts, Users } from './components';




export const AppContext = createContext(null)

function App() {

  const { usersPosts } = useGetUsersPosts();

  console.log("Render");

  return (
    <div className='wrapper'>
      <AppContext.Provider value={{usersPosts}}>
        <Users />
        <Posts />
      </AppContext.Provider>
    </div>
  );
}

export default App;
