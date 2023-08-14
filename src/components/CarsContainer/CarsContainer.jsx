import React, { useState } from 'react'

import { Cars } from './Cars/Cars';
import { CarForm } from './CarForm//CarForm'

export function CarsContainer() {

  const [addCar, setAddCar] = useState(null);
  const [carUpdate, setCarUpdate] = useState(null)

  return (
    <div>
        <CarForm 
          setAddCar={setAddCar} 
          carUpdate={carUpdate} 
          setCarUpdate={setCarUpdate}
        />
        <br />
        <Cars 
          addCar={addCar}
          setAddCar={setAddCar}
          setCarUpdate={setCarUpdate}
        />
    </div>
  )
}
