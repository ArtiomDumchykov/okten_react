import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const navbarLinks = {

}

export function Navbar() {
    return (
        <nav className="header__nav">
            <ul className='header-nav__list'>
                <li className='header_nav__item'>
                    <NavLink
                        className="item-nav__link"
                        to={navbarLinks.link}
                    >
                        kink
                        <span className='span'></span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
