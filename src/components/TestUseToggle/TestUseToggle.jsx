import React from 'react'
import { useToggle } from '../../hooks'

export  const TestUseToggle = () => {
    const {toggle, handleToggle} = useToggle(false)
  return (
    <div>
        <h2>TestUseToggle</h2>
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100px",
                height: "100px",
                background: !!toggle ? "red" : "green",
                color: !!toggle ? "green" : "red",
                transition: "all .3s ease"
            }}
            onClick={() => handleToggle()}
        >click me</div>
    </div>
  )
}
