import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


import { movieService } from '../../services';
import { MoviesFilter, MoviesLists } from '../../components';

export const  MoviesFilterPage = () => {
  const params = useParams();
  const [filterParams, setFilterParams] = useState(params); // Add state for the filter parameters

  // Function to handle changes in the filter parameters
  const handleFilterChange = (newFilterParams) => {
    setFilterParams(newFilterParams);
  };

  return (
    <>
      {/* Pass the filter parameters to the MoviesLists component */}
      <MoviesFilter onFilterChange={handleFilterChange} />
      <MoviesLists callback={movieService.getAll} params={{ ...filterParams }} />
    </>
  );
}

