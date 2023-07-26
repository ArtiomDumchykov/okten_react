import React from 'react'
import { NavLink } from 'react-router-dom';

import './Navbar.scss'

const navbarLinks = {
    todos: "todos",
    albums: "albums",
    comments: "comments",
}

export function Navbar() {
    return (
        <nav className="header__nav">
            <ul className='header_nav__list'>
                <li className='header_nav__item'>
                    <NavLink
                        className="item_nav__link"
                        to={navbarLinks.todos}
                    >
                        todos
                    </NavLink>
                </li>
                <li className='header_nav__item'>
                    <NavLink
                        className="item_nav__link"
                        to={navbarLinks.albums}
                    >
                        albums
                    </NavLink>
                </li>
                <li className='header_nav__item'>
                    <NavLink
                        className="item_nav__link"                        
                        to={navbarLinks.comments}
                    >
                        comments
                    </NavLink>
                </li>



            </ul>
        </nav>
    )
}
