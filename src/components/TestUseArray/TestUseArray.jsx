import React, { useRef } from 'react'

import { counter } from '../../utils';
import { useArray } from '../../hooks'

const c = counter(0);

export const TestUseArray = () => {
    const todosRef = useRef(null)
    const {data, add, remove} = useArray([])

    /*
        Если ли смысл в таких случаях обворачивать в useMemo useCallback handleFunc?
        Мои ответ -  нет
    
    */

    const handleAddTodos = () => {
        const todo = {
            id: c.count,
            text: todosRef.current.value
        }

        add(todo);
        resetInput()
    }

    const handleRemoveTodos = (id) => {
        remove(id)
    }

    const resetInput = () => todosRef.current.value = ""

  return (
    <div>
        <h2>Todos</h2>
        <div>
            <input type="text" ref={todosRef}/>
            <button onClick={() => handleAddTodos()}>add</button>
        </div>
        <ul>
            {
                !!data?.length && [...data].map((todo, index) => <li data-key={index + "_" + todo.id} onClick={() => handleRemoveTodos(todo.id)} key={index + "_" + todo.id}>{todo.text}</li>)
            }
        </ul>
    </div>
  )
}
