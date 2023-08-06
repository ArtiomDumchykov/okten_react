import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const navbarLinks = {
    posts: "posts",
    comments: "comments",
    cars: 'cars'
}

export function Navbar() {
    return (
        <nav className="header__nav">
            <ul className='header-nav__list'>
                <li className='header_nav__item'>
                    <NavLink
                        className="item-nav__link"
                        to={navbarLinks.posts}
                    >
                        posts
                        <span className='span'></span>
                    </NavLink>
                </li>
                <li className='header_nav__item'>
                    <NavLink
                        className="item-nav__link"
                        to={navbarLinks.comments}
                    >
                        comments
                        <span className='span'></span>
                    </NavLink>
                </li>
                <li className='header_nav__item'>
                    <NavLink
                        className="item-nav__link"
                        to={navbarLinks.cars}
                    >
                        cars
                        <span className='span'></span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
