import React, { useState } from 'react'
import { TestUseCallBack } from '../../components'

const btnStyle = {
  border: "1px solid black",
  padding: "5px 10px"
}

export const Part_2 = () => {

  const [count1, setCount1] = useState(0)

  console.log("PART_2")
  return (
      <div>
          <h2>Part_2</h2>
          <div>
              <h3>action count2 btn</h3>
              <button
                  style={btnStyle}
                  onClick={() => setCount1(prev => prev + 1)}
              >
                  count1 +1
              </button>
              <button
                  style={btnStyle}
                  onClick={() => setCount1(prev => prev - 1)}
              >
                  count1 -1
              </button>
          </div>
          <TestUseCallBack count={{ count1, setCount1 }} />
      </div>
  )
}