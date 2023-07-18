import React from 'react'

import { CarsService } from '../../../servives_v2';
const carsService = new CarsService()

export  function Car({car}) {
    const {id, brand, price, year} = car;


    const deleteCar = async() => {
        try {
            const response = await carsService.deleteCar(id);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            {/* <button onClick={()=>setCarForUpdate(car)}>update</button> */}
            <button onClick={deleteCar}>delete</button>
    </div>
  )
}
