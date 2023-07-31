import React, { useState } from 'react';

export const MoviesFilter = ({ onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleGenreChange = (event) => {
    const selectedOptions = event.target.options;
    const selectedGenres = [];
    for (let i = 0; i < selectedOptions.length; i++) {
      if (selectedOptions[i].selected) {
        selectedGenres.push(selectedOptions[i].value);
      }
    }
    setSelectedGenres(selectedGenres);
  };

  const handleStartYearChange = (event) => {
    setStartYear(event.target.value);
  };

  const handleEndYearChange = (event) => {
    setEndYear(event.target.value);
  };

  const handleSearch = () => {
    const filterParams = {
      searchQuery,
      selectedGenres,
      startYear,
      endYear,
    };
    onFilterChange(filterParams);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Enter movie title"
      />
      <select multiple value={selectedGenres} onChange={handleGenreChange}>
        <option value="28">Action</option>
        <option value="35">Comedy</option>
        <option value="18">Drama</option>
        {/* Add more genres as needed */}
      </select>
      <label>Start Year:</label>
      <input
        type="number"
        value={startYear}
        onChange={handleStartYearChange}
        placeholder="Start Year"
      />
      <label>End Year:</label>
      <input
        type="number"
        value={endYear}
        onChange={handleEndYearChange}
        placeholder="End Year"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};


