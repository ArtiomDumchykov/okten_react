import React from 'react';

import './App.css';

import { CommentsPage } from './pages/CommentsPage/CommentsPage';

function App() {
  console.log("render");
  return (
    <div>
      <CommentsPage/>
    </div>
  );
}

export default App;
