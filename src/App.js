import React, { useState, createContext } from 'react';
import './App.css';
import { Child_1 as Child1, Child_2 as Child2 } from './components';


export const ArrayOneContext = createContext(null)
export const ArrayTwoContext = createContext(null)

function App() {
  const [arr1, setArr1] = useState([1, 2, 3])
  const [arr2, setArr2] = useState([1, 2, 3])


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
    switch (random) {
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
      <ArrayOneContext.Provider value={{arr1, handlePushArr1}}>
        <ArrayTwoContext.Provider value={{arr2, handlePushArr2}}>
          <div style={{
            padding: "20px 15px",
          }}>
            <Child1/>
            <hr
              style={{
                display: "block",
                height: "5px",
                backgroundColor: "red",
                margin: "10px 0"
              }}
              onMouseOver={() => handlePushTo()}
            />
            <Child2/>
          </div>
        </ArrayTwoContext.Provider>
      </ArrayOneContext.Provider>

    </>
  );
}

export default App;
