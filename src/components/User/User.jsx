import React from 'react'

import './User.scss'

export const  User = ({user}) => {
    const {id, name, username, phone, email} = user
    return (
        <li className='user__item'>
               <div>
                <p>ID: {id}</p>
                <p>User Name: {username}</p>
                <p>Name: {name}</p>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
            </div>
        </li>
    )
}
