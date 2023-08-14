import React from 'react'
import { carsService } from '../../../services';

export  function Car({car, setAddCar, setCarUpdate}) {
    const {id, brand, price, year} = car;


    const deleteCar = async() => {
        try {
            if (!window.confirm("Delete car?")) {
                return
            } else {
                const response = await carsService.deleteCar(id);
                setAddCar(prev => !prev)
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <li
        style={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",
            border: "1px solid black",
            padding: "10px 15px",
            width: '400px'
        }}
    >
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px"
            }}
        >
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
        <div 
            style={{
                display: "flex",
                gap: "10px"
            }}
        >
            <button
                style={{
                    padding: "7px 15px",
                    border: "1px solid black"
                }}
                onClick={() => setCarUpdate(car)}
            >
                update
            </button>
            <button 
                style={{
                    padding: "7px 15px",
                    border: "1px solid black"
                }}
                onClick={deleteCar}
            >
                delete
            </button>
        </div>
    </li>
  )
}
