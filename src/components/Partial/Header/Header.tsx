import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

import { authSerivice } from '../../../services';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { authActions } from '../../../reduxRTK/slices';

import { Navbar } from '../../Navbar/Navbar';

export const Header: FC = () => {

    const dispatch = useAppDispatch()
    const {me} = useAppSelector(state => state.auth)

    if (authSerivice.getAccessToken() && !me) {
        dispatch(authActions.me())
    }

    return (
        <header className='header'>
            <div className="header__container _container">
                <div className="header__body">
                {
                    me 
                        ? 
                            <>
                                <Navbar />  
                                <div>{me.username} -- {new Date(me.last_login).toDateString()}</div>
                            </>
                        :
                            <div>
                                <NavLink  className="item-nav__link" to={'/auth/login'}>Login</NavLink>
                                <NavLink  className="item-nav__link" to={'/auth/register'}>Register</NavLink>
                            </div>
                }
                    
                </div>
                
            </div>
        </header>
    )
}
