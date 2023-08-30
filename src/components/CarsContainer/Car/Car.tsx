import React, { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react'

import './Car.scss';

import { ICar } from '../../../intefaces'
import { carsService } from '../../../services';
import { useNavigate } from 'react-router-dom';

interface IProps extends PropsWithChildren {
    car: ICar,
    setTriggerCar: Dispatch<SetStateAction<boolean>>,
    setCarForUpdate: Dispatch<SetStateAction<ICar>>,
    
}

export const Car: FC<IProps> = ({ car, setTriggerCar, setCarForUpdate }) => {
    
    const navigate = useNavigate()
    
    const { id, brand } = car

    const handleInfoCar = () => {
        navigate(`${id}`, {state: car})
    }

    const handleUpdatecar = () => {
        setCarForUpdate(car)
    }

    const handleDeleteCar = async () => {
        if (!window.confirm(`Delete car id: ${id}`)) {
            return
        } else {
            await carsService.deleteById(id);
            setTriggerCar(prev => !prev);
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
                         onClick={handleUpdatecar}
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
