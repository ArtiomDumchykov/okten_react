import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const navbarLinks = {
    part_1: 'part_1',
    part_2: 'part_2',
    part_3: 'part_3',
    part_4: 'part_4',
    part_5: 'part_5',
}

export function Navbar() {
    return (
        <nav className="header__nav">
            <ul className='header-nav__list'>
                <li className='header_nav__item'>
                    <NavLink
                        className="item-nav__link"
                        to={navbarLinks.part_1}
                    >
                        part_1
                        <span className='span'></span>
                    </NavLink>
                </li>
                <li className='header_nav__item'>
                    <NavLink
                        className="item-nav__link"
                        to={navbarLinks.part_2}
                    >
                        part_2
                        <span className='span'></span>
                    </NavLink>
                </li>
                <li className='header_nav__item'>
                    <NavLink
                        className="item-nav__link"
                        to={navbarLinks.part_3}
                    >
                        part_3
                        <span className='span'></span>
                    </NavLink>
                </li>
                <li className='header_nav__item'>
                    <NavLink
                        className="item-nav__link"
                        to={navbarLinks.part_4}
                    >
                        part_4
                        <span className='span'></span>
                    </NavLink>
                </li>
                <li className='header_nav__item'>
                    <NavLink
                        className="item-nav__link"
                        to={navbarLinks.part_5}
                    >
                        part_5
                        <span className='span'></span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
