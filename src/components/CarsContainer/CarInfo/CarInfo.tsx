import React, { FC, PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './CarInfo.scss';

import { ICar } from '../../../intefaces'
import { useAppDispatch, useAppSelector } from '../../../hooks';

import { authActions } from '../../../reduxRTK/slices';

import emptyCar from '../../../assets/empty.jpg'
interface IProps extends PropsWithChildren {
    car: ICar
}

export const CarInfo: FC<IProps> = ({ car }) => {
    
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const {me} = useAppSelector(state => state.auth)
    
    console.log(me)

    useEffect(() => {
        dispatch(authActions.me())
    }, [dispatch])


    if (!me && !car) {
        navigate("/auth/login")
        return null
    }


    const { id, brand, price, year, photo } = car


    return (
        <div className='car__info'>
            <div className="car__img-wrap">
                <img 
                    src={photo || emptyCar} alt={brand} 
                    style={{cursor:  'pointer', width: "500px", height: "400px"}}
                />
            </div>
            <p>id: {id}</p>
            <p>brand: {brand}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
        </div>
    )
}
