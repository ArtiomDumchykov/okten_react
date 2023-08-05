import React from 'react';

import './Todos.scss'
import { Todos } from '../../components';

export function TodosPage() {
    return (
        <div className='todos'>
            <div className="todos__cocntainer _container">
                <div className="todos__title_header">
                    <h2 className='todos__title'>Todos</h2>
                </div>
                <div className="todos__content_wrap">
                    <Todos />
                </div>
            </div>
        </div>
    )
}
