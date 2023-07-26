import React from 'react';

import { Navbar } from '../Navbar/Navbar';

import './Header.scss';

export  function Header() {
  return (
    <header className='header'>
            <div className="header__container _container">
                <div className="header__body">
                    <Navbar />
                </div>
            </div>
        </header>
  )
}
