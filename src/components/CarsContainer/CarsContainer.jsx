import React from 'react';

import { Cars } from './Cars/Cars';
import { CarForm } from './CarForm/CarForm';

export function CarsContainer() {
  return (
    <div>
        <CarForm />
        <br />
        <Cars />
    </div>
  )
}
