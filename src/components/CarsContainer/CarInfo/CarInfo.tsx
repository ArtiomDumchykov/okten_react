import React, { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import './CarInfo.scss';

import { ICar } from '../../../intefaces'
import { useAppDispatch, useAppSelector } from '../../../hooks';

import { authActions } from '../../../reduxRTK/slices';
interface IProps extends PropsWithChildren {
    car: ICar
}

export const CarInfo: FC<IProps> = ({ car }) => {
    
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const {me} = useAppSelector(state => state.auth)
    dispatch(authActions.me())

    if (!me && !car) {
        navigate("/auth/login")
        return null
    }

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
