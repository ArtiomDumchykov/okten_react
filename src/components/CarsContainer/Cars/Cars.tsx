import React, { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';

import './Cars.scss';

import { Car } from '../Car/Car';
import { ICar } from '../../../intefaces';

interface IProps extends PropsWithChildren {
    cars: ICar[],
    setTriggerCar: Dispatch<SetStateAction<boolean>>
    setCarForUpdate: Dispatch<SetStateAction<ICar>>
}

export const Cars:FC<IProps> = ({cars, setTriggerCar, setCarForUpdate}) => {
    return (
        <div>
            <ul className="cars__list">
                {
                    !!cars?.length && cars.map(car => 
                        <Car 
                            car={car} 
                            key={car.id}
                            setTriggerCar={setTriggerCar}
                            setCarForUpdate={setCarForUpdate}
                        />
                    )
                }
            </ul>
        </div>
    )
}
