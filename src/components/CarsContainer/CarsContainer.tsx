import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { ICar } from '../../intefaces';
import { useCars } from '../../hooks';

import { Cars } from './Cars/Cars';
import { CarsForm } from './CarsForm/CarsForm';

export const CarsContainer: FC = () => {

    const [triggerCar, setTriggerCar] = useState<boolean>(null)
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null)

    const { cars } = useCars(triggerCar);

    return (
        <div>
            <Outlet />
            <CarsForm 
                carForUpdate={carForUpdate}
                setCarForUpdate={setCarForUpdate}
                setTriggerCar={setTriggerCar}
            />
            <br />
            <br />
            <Cars
                cars={cars}
                setTriggerCar={setTriggerCar}
                setCarForUpdate={setCarForUpdate}
            />
        </div>
    )
}
