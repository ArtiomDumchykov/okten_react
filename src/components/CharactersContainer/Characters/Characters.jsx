import React from 'react'

import { Character } from '../Character/Character';
import { useCharacters } from '../../../hooks';

export const Characters = () => {

    const {characters} = useCharacters();

    return (
        <div>
            <ul className="characters__list">
                {
                    !!characters?.length && [...characters].map(item => <Character character={item} key={item.id} />)
                }
            </ul>
        </div>
    )
}
