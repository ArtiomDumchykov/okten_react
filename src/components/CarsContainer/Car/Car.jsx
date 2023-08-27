import React from 'react'
import { useDispatch } from 'react-redux';

import { carsActions } from '../../../reduxTK';

export function Car({ car }) {

    const dispatch = useDispatch();

    const { id, brand, price, year } = car;

    const handleUpdateCar = (car) => {
        dispatch(carsActions.setCarForUpdate(car))
    }

    const handleDeleteCar = (id) => {
        if (!window.confirm("Delete car?")) {
            return
        } else {
            dispatch(carsActions.deleteCar({id}));
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
                    // onClick={() => setCarUpdate(car)}
                    onClick={() => handleUpdateCar(car)}
                >
                    update
                </button>
                <button
                    style={{
                        padding: "7px 15px",
                        border: "1px solid black"
                    }}
                    onClick={() => handleDeleteCar(id)}
                >
                    delete
                </button>
            </div>
        </li>
    )
}
