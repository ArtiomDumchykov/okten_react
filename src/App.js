import React, { useState, createContext } from 'react';
import './App.css';
import { Child_1 as Child1, Child_2 as Child2 } from './components';


export const Context = createContext(null)


function App() {
  const [arr1, setArr1] = useState([1, 2, 3])
  const [arr2, setArr2] = useState([1, 2, 3, 4])


  // const handlePushArr1 = () => {
  //   setArr1(prev => {
  //     let lastElement = prev.at(-1);
  //     return [...prev, lastElement + 1]
  //   })
  // }

  // const handlePushArr2 = () => {
  //   setArr2(prev => {
  //     let lastElement = prev.at(-1);
  //     return [...prev, lastElement + 1]
  //   })
  // }

  const handlePushArr1 = (nextValue) => {
    console.log(nextValue);
    setArr1(prev =>  [...prev, nextValue])
  }

  const handlePushArr2 = (nextValue) => {
    console.log(nextValue);
    setArr2(prev => [...prev, nextValue])
  }


  /*
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
  */

  return (
    <>
      <Context.Provider value={{arr1, arr2, handlePushArr1, handlePushArr2}}>
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
              // onMouseOver={() => handlePushTo()}
            />
            <Child2/>
          </div>
      </Context.Provider>

    </>
  );
}

export default App;
