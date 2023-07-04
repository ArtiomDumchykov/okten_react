import React from 'react';
import './App.css';

import { PersonsCharacter } from './_components';


import {data} from './_db'


function App() {


  return (
    <>
      <div className='_container'>
        <PersonsCharacter data={data}/>
      </div>

    </>
  );
}

export default App;
