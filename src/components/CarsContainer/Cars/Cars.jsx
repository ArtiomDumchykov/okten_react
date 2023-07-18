import React, { useState, useEffect } from 'react';

import { CarsService } from '../../../servives_v2';
import { Car } from '../Car/Car';

const carsService = new CarsService()

export const useCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        (async() => {
            try {
                const response = await carsService.getAll();

                setCars(response.data)

            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    return {
        cars, setCars
    }
}

export  function Cars() {
  
    const {cars, setCars} = useCars()

  return (
    <div>
        <ul className="cars__list">
            {
                !!cars?.length && [...cars].map(item => <Car car={item} key={item.id}/>)
            }
        </ul>
    </div>
  )
}
