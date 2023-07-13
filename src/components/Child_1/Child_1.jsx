import React from 'react'
import { SubChild_1_1 as SubChild11 } from './SubChild_1_1/SubChild_1_1'
import { SubChild_1_2 as SubChild12 } from './Subchild_1_2/SubChild_1_2'

export function Child_1() {
  return (
    <div>
      <h2>Child_1</h2>
      <SubChild11 />
      <SubChild12 />
    </div>
  )
}
