import React, { useContext } from 'react'
import { Button } from '../../Button/Button'
import { ArrayTwoContext } from '../../../App'

export  function SubChild_1_2() {
  const {handlePushArr2} = useContext(ArrayTwoContext)
  return (
    <div>
        <h3>SubChild_1_2</h3>
        <Button
           styleBtn={{
            border: "1px solid black",
            padding: "7px 10px",
            margin: "10px 0"
           }}
           onClick={() => handlePushArr2()}
        >clickBtn</Button>
    </div>
  )
}
