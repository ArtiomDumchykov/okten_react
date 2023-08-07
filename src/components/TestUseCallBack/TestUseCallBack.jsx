import React, { useCallback, useMemo, useState } from 'react'
import { TestUseCallbackChild } from '../TestUseCallbackChild/TestUseCallbackChild';

const btnStyle = {
    border: "1px solid black",
    padding: "5px 10px"
}

const heavyCalculations = (count1) => {
    console.log("heavy calculation")
    let sum = 0;
    for (let i = 0; i < 1_000_000; i++) {
        sum += count1;
    }
    return sum
}

export const TestUseCallBack = ({count}) => {
   const [count2, setCount2] = useState(0);

   const {count1} = count

    // const heavySum = useMemo(() => heavyCalculations(count1), [count1])
    const heavySum = useCallback(() => heavyCalculations(count1), [count1])

   const handleInc = () => setCount2(prev => prev + 1)

    console.log("chilldren")
  return (
    <div style={{
        border: "1px solid black",
        padding: "10px"
    }}>
        <h3>TestUseMemo</h3>
        <div>heavySum: {heavySum()}</div>
        <div>count1: {count1}</div>
        <div>count2: {count2}</div>

        <div>
            <h3>action count2 btn</h3>
            <button style={btnStyle} onClick={() => handleInc()}>count2 +1</button>
            <button style={btnStyle} onClick={() => setCount2(prev => prev - 1)}>count2 -1</button>
        </div>

        <div>
            <TestUseCallbackChild heavySum={heavySum}/>
        </div>
    </div>
  )
}
