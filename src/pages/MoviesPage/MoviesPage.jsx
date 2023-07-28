import React from 'react';
import { useParams } from 'react-router-dom';

import { movieService } from '../../services';
import { MoviesLists } from '../../components';

export function MoviesPage() {

    const params = useParams();

    return (
        <>
            <MoviesLists callback={movieService.getAll} params={{ ...params }} />
        </>
    )
}
