import React, { useState } from 'react'

import { TestUseMemo } from '../../components'


const btnStyle = {
    border: "1px solid black",
    padding: "5px 10px"
}

export const Part_1 = () => {

    const [count1, setCount1] = useState(0)

    console.log("PART_1")
    return (
        <div>
            <h2>Part_1</h2>
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
            <TestUseMemo count={{ count1, setCount1 }} />
        </div>
    )
}
