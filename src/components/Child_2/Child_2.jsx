import React from 'react'
import { SubChild_2_1 as SubChild21 } from './SubChild_2_1/SubChild_2_1'
import { SubChild_2_2 as SubChild22} from './Subchild_2_2/SubChild_2_2'

export  function Child_2() {
  return (
    <div>
        <h2>Child_2</h2>
        <SubChild21/>
        <SubChild22/>
    </div>
  )
}
