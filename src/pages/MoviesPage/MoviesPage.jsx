import React from 'react';
import { useParams } from 'react-router-dom';

import { movieService } from '../../services';
import { MoviesFilter, MoviesLists } from '../../components';

export function MoviesPage() {

    const params = useParams();

    return (
        <>
            <div className="filter">
                <MoviesFilter/>
            </div>
            <MoviesLists callback={movieService.getAll} params={{ ...params }} />
        </>
    )
}
