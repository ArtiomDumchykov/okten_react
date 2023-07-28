import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';
import { ROUTES } from '../../routes';

export function Navbar() {
    return (
        <nav className="header__nav">
            <ul className='header-nav__list'>
                <li className='header_nav__item'>
                    <NavLink
                        className="item-nav__link"
                        to={ROUTES.MAIN}
                    >
                        Home
                        <span className='span'></span>
                    </NavLink>
                </li>
                <li className='header_nav__item'>
                    <NavLink
                        className="item-nav__link"
                        to={ROUTES.MOVIES_LIST}
                    >
                        movies
                        <span className='span'></span>
                    </NavLink>
                </li>

                <li className='header_nav__item'>
                    <NavLink
                        className="item-nav__link"
                        to={ROUTES.FAVORITE}
                    >
                        favorite
                        <span className='span'></span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}