import React, { FC, PropsWithChildren, } from 'react';

import './Cars.scss';

import { useCars } from '../../../hooks';
import { Car } from '../Car/Car';

interface IProps extends PropsWithChildren {

}

export const Cars:FC<IProps> = () => {

   const { cars } =useCars()

    return (
        <div>
            <ul className="cars__list">
                {
                    !!cars?.length && cars.map(car => 
                        <Car 
                            car={car} 
                            key={car.id}
                        />
                    )
                }
            </ul>
        </div>
    )
}
