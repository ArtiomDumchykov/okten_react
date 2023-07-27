import React from 'react';

import { MoviesLists } from '../../components'
import { movieService } from '../../setvices';
import { useParams } from 'react-router-dom';

export function MoviesPage() {

  const params = useParams();

  console.log("params", params);
  return (
    <>
        <MoviesLists callback={movieService.getAll} params={{...params}}/>
    </>
  )
}
