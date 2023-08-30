import React, {FC, PropsWithChildren,} from 'react'

import './Car.scss';
import { useNavigate } from 'react-router-dom';

import { ICar } from '../../../intefaces'
import { useAppDispatch } from '../../../hooks';
import { carsActions } from '../../../reduxRTK/slices';


interface IProps extends PropsWithChildren {
    car: ICar,   
}

export const Car: FC<IProps> = ({ car } ) => {

    const dispatch = useAppDispatch()
    
    const navigate = useNavigate()

    
    const { id, brand } = car

    const handleInfoCar = () => {
        navigate(`${id}`, {state: car})
    }

    const handleUpdateCar = () => {
        dispatch(carsActions.setCarForUpdate({car}))
    }

    const handleDeleteCar = async () => {
        if (!window.confirm(`Delete car id: ${id}`)) {
            return
        } else {
            await dispatch(carsActions.deleteCar({id}))
        }
    }

    return (
        <li className='cars__item'>
            <div className='cars__id-text'>id: {id}</div>
            <div className='cars__brand-text'>brand: {brand}</div>
            <div className="cars_actions">
                <div className="actions-btn-wrap">
                    <button
                        className="action__btn update-btn"
                         onClick={handleUpdateCar}
                    >
                        update
                    </button>
                </div>
                <div className="actions-btn-wrap">
                    <button 
                        className="action__btn delete-btn"
                        onClick={handleDeleteCar}
                    >
                        delete
                    </button>
                    <button 
                        className="action__btn info-btn"
                        onClick={handleInfoCar}
                    >
                        info
                    </button>
                </div>
            </div>
        </li>
    )
}
