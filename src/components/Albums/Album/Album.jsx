import React from 'react';

import './Album.scss';

export function Album({ album }) {
    const { userId, id, title } = album
    return (
        <li className='albums__item'>
            <div>id: {id}</div>
            <div>title: {title}</div>

        </li>
    )
}
