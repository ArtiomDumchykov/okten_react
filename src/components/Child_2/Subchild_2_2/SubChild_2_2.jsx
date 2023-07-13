import React, { useContext } from 'react'
import {ArrayTwoContext } from '../../../App'

export  function SubChild_2_2() {
  const {arr2: data} = useContext(ArrayTwoContext)
  return (
    <div>
        <h3>SubChild_2_2</h3>
        <div style={{
            display: "flex",
            gap: "7px",
            padding: "10px 0 10px 20px"
        }}>
            {!!data?.length && [...data].map(item => <span key={item}>Data: {item}</span>)}
        </div>
    </div>
  )
}
