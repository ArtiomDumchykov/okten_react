import React from 'react';

export const Character = ({ character }) => {
    const { id, name, image } = character;
    return (
        <li>
            <div>
                <div>id: {id}</div>
                <div>name: {name}</div>
                <img src={image} alt={name} />
            </div>
        </li>
    )
}
