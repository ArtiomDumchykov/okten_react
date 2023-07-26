import React from 'react';

import './Todos.scss';

import { useTodos } from '../../hooks';
import { Todo } from './Todo/Todo';

export function Todos() {

    const { todos, setTodos } = useTodos()

    return (
        <ul className='todos__list'>
            {
                !!todos?.length && [...todos].map(item => <Todo todo={item} key={`${item.id}_${item.userId}`} />)
            }
        </ul>
    )
}
