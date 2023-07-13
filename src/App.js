import React, { useState, createContext } from 'react';
import './App.css';
import { Child_1 as Child1, Child_2 as Child2 } from './components';


function App() {
  const [arr1, setArr1] = useState([1,2,3])
  const [arr2, setArr2] = useState([1,2,3])


  const handlePushArr1 = () => {
    setArr1(prev => {
      let lastElement = prev.at(-1);
      return [...prev, lastElement + 1]
    })
  }

  const handlePushArr2 = () => {
    setArr2(prev => {
      let lastElement = prev.at(-1);
      return [...prev, lastElement + 1]
    })
  }

  const handlePushTo = () => {
    const random = Math.floor(Math.random() * 3)
    switch(random) {
      case 0: 
        handlePushArr1();
        break;
      case 1: 
        handlePushArr2();
        break;
      default:
        handlePushArr1();
        handlePushArr2();
        break;
    }
  }

  return (
    <>
    <div style={{
      padding: "20px 15px",
    }}>
      <Child1 data={arr1} handlePushArr2={handlePushArr2}/>
      <hr 
        style={{
          display: "block",
          height: "5px",
          backgroundColor: "red",
          margin: "10px 0"
        }}
        onMouseOver={() => handlePushTo()}
      />
      <Child2 data={arr2} handlePushArr1={handlePushArr1}/>
    </div>
    </>
  );
}

export default App;
