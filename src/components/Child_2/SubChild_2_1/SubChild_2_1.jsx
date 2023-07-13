import React, { useContext } from 'react'
import { Button } from '../../Button/Button'
import { Context } from '../../../App'
import { counter } from '../../../utils'

const c = counter(4); // стартовое значение счетчика

export function SubChild_2_1() {
  const { handlePushArr1 } = useContext(Context)

  return (
    <div>
      <h3>SubChild_2_1</h3>
      <Button
        styleBtn={{
          border: "1px solid black",
          padding: "7px 10px",
          margin: "10px 0"
        }}
        onClick={() => handlePushArr1(c.count)}
      >
        clickBtn
      </Button>
    </div>
  )
}
