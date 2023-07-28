import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

export function Navbar() {
    const isLogin = false
    return (
        <nav className="header__nav">
            <ul className='header-nav__list'>
                <li className='header_nav__item'>
                    <NavLink
                        className="item-nav__link"
                        to={"/"}
                    >
                        Home
                        <span className='span'></span>
                    </NavLink>
                </li>
                <li className='header_nav__item'>
                    <NavLink
                        className="item-nav__link"
                        to={"/moviesList"}
                    >
                        movies
                        <span className='span'></span>
                    </NavLink>
                </li>
                {
                    !!isLogin && (
                        <li className='header_nav__item'>
                            <NavLink
                                className="item-nav__link"
                                to={"/favorite"}
                            >
                                favorite
                                <span className='span'></span>
                            </NavLink>
                        </li>
                    )
                }
                {
                    !isLogin && (
                        <li className='header_nav__item'>
                            <NavLink
                                className="item-nav__link"
                                to={"/login"}
                            >
                                login
                                <span className='span'></span>
                            </NavLink>
                        </li>
                    )
                }


            </ul>
        </nav>
    )
}