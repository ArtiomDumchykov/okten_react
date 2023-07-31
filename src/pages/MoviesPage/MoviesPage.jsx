import React from 'react';
import { useParams } from 'react-router-dom';

import { movieService } from '../../services';
import {MovieFilter, MoviesLists } from '../../components';

export function MoviesPage() {

    const params = useParams();


    return (
        <>
            {/* TODO */}
            {/* <MovieFilter/> */}
            <MoviesLists callback={movieService.getAll} params={{ ...params }} />
        </>
    )
}
