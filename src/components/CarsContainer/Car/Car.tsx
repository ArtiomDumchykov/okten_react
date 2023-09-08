import React, {FC, PropsWithChildren} from 'react'

import './Car.scss';

import { ICar } from '../../../intefaces'
import { carsActions } from '../../../reduxRTK/slices';
import { carsService } from '../../../services';
import { useCar } from '../../../hooks';

import emptyCar from '../../../assets/empty.jpg'

interface IProps extends PropsWithChildren {
    car: ICar,   
}

export const Car: FC<IProps> = ({ car } ) => {
    const {image, setImage, fileInputRef, navigate, dispatch} = useCar()
    
    const { id, brand, photo } = car

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

    const handleAddPhoto = async () => {
            const formData = new FormData()
            const file: Blob = fileInputRef.current.files[0] 
            formData.append('photo', file)
            await carsService.addPhoto(id, formData)
            setImage(URL.createObjectURL(file))
    }

    return (
        <li className='cars__item'>
            <div className="cars__img-wrap">
                <img 
                    src={image || photo || emptyCar} alt={brand} 
                    style={{cursor:  'pointer', width: "500px", height: "400px"}}
                />
            </div>
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
                <div className="actions-btn-wrap">
                    <input 
                        type="file" 
                        accept={'image/jpeg, image/jpg, image/png'}
                        style={{display: 'none'}}
                        onChange={handleAddPhoto}
                        ref={fileInputRef}
                    />
                </div>
            </div>
        </li>
    )
}
