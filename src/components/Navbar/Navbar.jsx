import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';
import { Context } from '../../HOC';


export function Navbar() {

    const { authContext: {isLogin} } = useContext(Context)
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

                <li className='header_nav__item'>
                    <NavLink
                        className="item-nav__link"
                        to={"/favorite"}
                    >
                        favorite
                        <span className='span'></span>
                    </NavLink>
                </li>

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