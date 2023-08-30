import React, { FC, PropsWithChildren } from 'react';

import './CarInfo.scss';

import { ICar } from '../../../intefaces'

interface IProps extends PropsWithChildren {
    car: ICar
}

export const CarInfo: FC<IProps> = ({ car }) => {
    const { id, brand, price, year } = car
    return (
        <div className='car__info'>
            <p>id: {id}</p>
            <p>brand: {brand}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
        </div>
    )
}
