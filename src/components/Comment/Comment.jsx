import React from 'react'

import './Comment.scss';

export const  Comment = ({comment}) => {
    const {postId, id, email,  name: title, body: text} = comment
    return (
        <li className='comment__item'>
            <h2>PostID: {postId}, Title: {title}</h2>
            <p>{text}</p>
            <div>
                <span>email: {email}</span>
            </div>
        </li>
    )
}