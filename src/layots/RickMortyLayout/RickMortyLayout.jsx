import React from 'react';
import { Outlet } from 'react-router-dom';

export const RickMortyLayout = () => {
  return (
      <section className='rickmorty' style={{padding: "20px 0"}}>
            <div className="rickmorty__container _container">
                <h2 className='rickmorty__title'>Rick & Morty</h2>
                <div className="rickmorty__body">
                    <Outlet/>
                </div>
            </div>
        </section>
  )
}
