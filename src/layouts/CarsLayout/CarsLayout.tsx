import React from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import './CarsLayout.scss'

import { ICar } from '../../intefaces';

type IContextType = {
    car: ICar | null
}

export const CarsLayout = () => {
    const {state: car} = useLocation()
    // console.log(car)

    // const params = useParams()
    // console.log(params);

    return (
        <section className='cars' style={{ padding: "20px 0" }}>
            <div className="cars__container _container">
                <h2 className='cars__title'>
                    {!car ? "Cars" : `Car Info: id ${car.id}`}
                </h2>
                <div className="cars__body">
                    <Outlet context={{car} satisfies IContextType}/>
                </div>
            </div>
        </section>
    )
}

export type {
    IContextType
}