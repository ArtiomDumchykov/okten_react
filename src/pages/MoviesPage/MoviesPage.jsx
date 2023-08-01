// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// import { movieService } from '../../services';
// import {MovieFilter, MoviesLists } from '../../components';


// export function MoviesPage() {

//     const params = useParams();
   

//     const [searchParams, setSearchParams] = useState({...params})
//     const [callbackRequest, setCallbackRequest] = useState("getAll")

//     console.log("searchParams", searchParams);


//     return (
//         <>
//             {/* TODO */}
//             <MovieFilter t={{searchParams, setSearchParams, callbackRequest, setCallbackRequest}}/>
//             <MoviesLists callback={movieService[callbackRequest]} params={{ ...searchParams }} />
//         </>
//     )
// }


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieService } from '../../services';
import { MovieFilter, MoviesLists } from '../../components';


export function MoviesPage() {

  const params = useParams();

  const [searchParams, setSearchParams] = useState({ ...params, });


  return (
    <>
      {/* <MovieFilter t={{ searchParams, setSearchParams}} /> */}
      <MoviesLists callback={movieService.getAll} params={{ ...searchParams }} />
    </>
  );
}