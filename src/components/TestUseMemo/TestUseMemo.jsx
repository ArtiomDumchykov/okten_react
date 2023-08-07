import React, { useMemo, useState } from 'react'


const btnStyle = {
    border: "1px solid black",
    padding: "5px 10px"
}


export const TestUseMemo =({count}) => {
   const [count2, setCount2] = useState(0);

   const {count1} = count

   const heavyCalculations = () => {
    console.log("heavy calculation")
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += count1;
    }
    return sum
}

    const heavySum = useMemo(() => heavyCalculations(count1), [count1])
    // const heavySum = () => heavyCalculations()

    const handleIcrement2 = () => setCount2(prev => prev + 1)
    const handleDecrement2 = () => setCount2(prev => prev - 1)
    console.log("chilldren")
  return (
    <div>
        <br />
        <hr />
        <br />

        <h3>TestUseMemo</h3>
        <div>heavySum: {heavySum}</div>
        <div>count1: {count1}</div>
        <div>count2: {count2}</div>

        <br />
        <hr />
        <br />
        
        <div>
            <h3>action count2 btn</h3>
            <button style={btnStyle} onClick={() => handleIcrement2()}>count2 +1</button>
            <button style={btnStyle} onClick={() => handleDecrement2()}>count2 -1</button>
        </div>
    </div>
  )
}
