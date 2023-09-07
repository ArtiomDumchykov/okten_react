import React, { FC } from 'react';

import './Header.scss';

import { Navbar } from '../../Navbar/Navbar';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { authSerivice } from '../../../services';
import { authActions } from '../../../reduxRTK/slices';
import { Link } from 'react-router-dom';

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
                                <Link to={'/auth/login'}>Login</Link>
                                <Link to={'/auth/register'}>Register</Link>
                            </div>
                }
                    
                </div>
                
            </div>
        </header>
    )
}
