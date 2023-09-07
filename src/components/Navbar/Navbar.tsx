import React, { FC } from 'react'
import {NavLink} from 'react-router-dom';

import './Navbar.scss';

interface INavbarLinks {
    [K: string]: string
}

const navbarLinks:INavbarLinks = {
    cars: "cars",
}

export const Navbar: FC = () => {
  return (
    <nav className="header__nav">
            <ul className='header-nav__list'>
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
