import React, { useContext } from 'react';


import './Header.scss';
import { Navbar } from '../../Navbar/Navbar';
import { Context } from '../../../HOC';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import { Logo } from '../../../components_UI';

export function Header() {

    const { authContext: { isLogin } } = useContext(Context)
    return (
        <header className='header'>
            <div className="header__container _container">
                <div className="header__body">
                    <Logo />
                    <Navbar />
                    <div className="actions">
                        <ul className='actions__list'>
                            {
                                !isLogin && (
                                    <li className="action__item login-action">
                                        <div className="action-login-wrap">
                                            <NavLink
                                                className="item-nav__link"
                                                to={ROUTES.LOGIN}
                                            >
                                                login
                                                <span className='span'></span>
                                            </NavLink>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
