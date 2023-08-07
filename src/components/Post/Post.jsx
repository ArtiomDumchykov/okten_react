import React from 'react';

import './Post.scss'

export const  Post = ({post}) => {
    const { id, title, body: text } = post
    return (
        <li className='post__item'>
            <h2 className='title'>ID: {id}, Title: {title}</h2>
            <p className='text'>{text}</p>
        </li>
    )
}