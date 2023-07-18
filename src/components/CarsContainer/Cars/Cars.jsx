import React from 'react';

import { useCars } from '../../../hooks';
import { Car } from '../Car/Car';

export function Cars({ addCar, setAddCar, setCarUpdate }) {

    const { cars } = useCars(addCar)

    return (
        <div>
            <ul
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                }}
                className="cars__list"
            >
                {
                    !!cars?.length && [...cars].map(item => 
                        <Car
                            setAddCar={setAddCar}
                            setCarUpdate={setCarUpdate}
                            car={item}
                            key={item.id}
                        />
                    )
                }
            </ul>
        </div>
    )
}
