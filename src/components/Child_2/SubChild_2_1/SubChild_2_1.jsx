import React from 'react'
import { Button } from '../../Button/Button'

export  function SubChild_2_1({handlePushArr1}) {
  return (
    <div>
        <h3>SubChild_2_1</h3>
        <Button 
         styleBtn={{
            border: "1px solid black",
            padding: "7px 10px",
            margin: "10px 0"
           }}
        onClick={() => handlePushArr1()}
        >
            clickBtn
        </Button>
    </div>
  )
}
