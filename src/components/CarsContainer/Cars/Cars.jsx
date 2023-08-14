import React from 'react';

import { useCars } from '../../../hooks';
import { Car } from '../Car/Car';

export function Cars() {

    const { cars } = useCars();

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
                            car={item}
                            key={item.id}
                        />
                    )
                }
            </ul>
        </div>
    )
}
