import React from 'react';
import { Outlet } from 'react-router-dom';

export const CarsLayout = () => {
    return (
        <section className='cars' style={{ padding: "20px 0" }}>
            <div className="cars__container _container">
                <h2 className='cars__title'>Cars</h2>
                <div className="cars__body">
                    <Outlet />
                </div>
            </div>
        </section>
    )
}
