import React, { useEffect, useState } from 'react';

import { FavoriteLists } from '../../components'
import { isCheckLocalStorage } from '../../utils';
import { localStorageKeys } from '../../constans';



export function FavoritePage() {

    const {favoritesKey} = localStorageKeys;

    const isFavorites = isCheckLocalStorage(favoritesKey);

    const [favoritesData, setFavoritesData] = useState(isFavorites || [])

    return (
        <>
            <FavoriteLists favorites={favoritesData} />
        </>
    )
}
