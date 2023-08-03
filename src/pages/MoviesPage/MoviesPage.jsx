import React, {useState } from 'react';
import { useParams } from 'react-router-dom';

import { getSearchParams } from '../../utils';
import { movieService } from '../../services';
import { MovieFilter, MoviesLists } from '../../components';

export function MoviesPage() {

    let params = useParams();
    console.log("PARAMS", params);

    // const [selectDataForm, setSelectDataForm] = useState({...searchParams});
    // const [paramsFilter, setParamsFilter] = useState({ ...params, ...selectDataForm, })

    const [paramsFilter, setParamsFilter] = useState({ ...params,  ...getSearchParams(params) })

    return (
        <>
            {/* MoviesFilter work not right */}
            {/* <MovieFilter setParamsFilter={setParamsFilter} dataForm={{ selectDataForm, setSelectDataForm }} /> */}
            {/* <MoviesLists callback={movieService.getAll} params={{ ...paramsFilter, ...selectDataForm, ...searchParams }} /> */}

            <MoviesLists callback={movieService.getAll} params={{ ...paramsFilter}} />
        </>
    );
}