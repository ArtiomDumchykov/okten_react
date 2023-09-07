import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Cars } from './Cars/Cars';
import { CarsForm } from './CarsForm/CarsForm';

export const CarsContainer: FC = () => {

    return (
        <div>
            <Outlet />
            <CarsForm />
            <br />
            <br />
            <Cars/>
        </div>
    )
}
