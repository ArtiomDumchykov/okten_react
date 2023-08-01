import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { movieService } from '../../services';
import { MovieFilter, MoviesLists } from '../../components';


export function MoviesPage() {

  const params = useParams();
  const [selectDataForm, setSelectDataForm] = useState({});
  const [paramsFilter, setParamsFilter] = useState({...params, ...selectDataForm,})

  console.log(selectDataForm);

  return (
    <>
      <MovieFilter setParamsFilter={setParamsFilter} dataForm={{selectDataForm, setSelectDataForm}}/> 
      <MoviesLists callback={movieService.getAll} params={{ ...paramsFilter }}  />
    </>
  );
}