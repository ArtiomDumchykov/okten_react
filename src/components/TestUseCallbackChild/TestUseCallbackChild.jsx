import React, { memo, useState } from 'react'

export const TestUseCallbackChild = memo(({ heavySum }) => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
    console.log("TestUseCallbackChild");

    return (
        <div style={{
            border: "1px solid red",
            padding: "10px"
        }}>
            <h2>TestUseCallbackChild</h2>
            <p>heavySum: {heavySum()}</p>
            <ul>
                {
                    !!numbers?.length && [...numbers].map((item, index) => <li key={index}>item: {item}</li>)
                }
            </ul>
        </div>
    )
})
