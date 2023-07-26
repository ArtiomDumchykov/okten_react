import React from 'react'
import { Navbar } from '../'


export function Header() {
  return (
    <header 
        className='header'
        style={{
            width: "100%",
            height: "100px",
            borderBottom: "1px solid black",
            backgroundColor: "grey",
            boxsShadow: "0 3px 10px rgba(0, 0, 0, 0.2)"
        }}
    >
    <div className="header__container _container">
        <div className="header__body">
            <Navbar/>
        </div>
    </div>
    </header>
  )
}
