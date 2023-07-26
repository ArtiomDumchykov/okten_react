import React from 'react'

import './Todo.scss'
export function Todo({ todo }) {
    const { userId, id, title, completed } = todo
    return (
        <li className='todos__item'>
            <div>id: {id}, title: {title}</div>
            <div>status: {completed ? "completed" : "uncompleted"}</div>
        </li>
    )
}
