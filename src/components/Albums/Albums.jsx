import React from 'react';

import './Albums.scss';

import { useAlbums } from '../../hooks';
import { Album } from './Album/Album';

export function Albums() {

    const { albums, setAlbums } = useAlbums()

    return (
        <ul className='albums__list'>
            {
                !!albums?.length && [...albums].map(item => <Album album={item} key={`${item.id}_${item.userId}`} />)
            }
        </ul>
    )
}
