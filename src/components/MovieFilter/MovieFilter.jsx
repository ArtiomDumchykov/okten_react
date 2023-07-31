// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';


// import { movieService } from '../../services';
// // import { MoviesFilter, MoviesLists } from '../../components';

// export const  MoviesFilterPage = () => {
//   const params = useParams();
//   const [filterParams, setFilterParams] = useState(params); // Add state for the filter parameters

//   // Function to handle changes in the filter parameters
//   const handleFilterChange = (newFilterParams) => {
//     setFilterParams(newFilterParams);
//   };

//   return (
//     <>
//       {/* Pass the filter parameters to the MoviesLists component */}
//       {/* <MoviesFilter onFilterChange={handleFilterChange} />
//       <MoviesLists callback={movieService.getAll} params={{ ...filterParams }} /> */}
//     </>
//   );
// }


// const useGenre = () => {
//     const [genres, setGenres] = useState([])
//     useEffect(() => {
//       (async() => {
//         try {   
//             const {data} = await movieService.getGenres()
//             console.log("data", data);
//             setGenres(data?.genres)
//         } catch (error) {
//             console.log(error);
//         }
//       })()
//     }, [])

//     return {
//         genres, setGenres
//     }
// }

// export const MoviesFilter = ({ onFilterChange }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedGenres, setSelectedGenres] = useState([]);
//   const [startYear, setStartYear] = useState('');
//   const [endYear, setEndYear] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleGenreChange = (event) => {
//     const selectedOptions = event.target.options;
//     const selectedGenres = [];
//     for (let i = 0; i < selectedOptions.length; i++) {
//       if (selectedOptions[i].selected) {
//         selectedGenres.push(selectedOptions[i].value);
//       }
//     }
//     setSelectedGenres(selectedGenres);
//   };

//   const handleStartYearChange = (event) => {
//     setStartYear(event.target.value);
//   };

//   const handleEndYearChange = (event) => {
//     setEndYear(event.target.value);
//   };

//   const handleSearch = () => {
//     const filterParams = {
//       searchQuery,
//       selectedGenres,
//       startYear,
//       endYear,
//     };
//     onFilterChange(filterParams);
//   };

//   const { genres, setGenres} = useGenre()
//   return (
//     <div>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={handleSearchChange}
//         placeholder="Enter movie title"
//       />
//       <select 
//         multiple 
//         value={selectedGenres} 
//         onChange={handleGenreChange}>
//         {
//         !!genres?.length && [...genres].map(item => {
//             const {id: genreId, name: genreName} = item;
//             return (
//                 <option 
//                     value={genreId}
//                     className='genre__item'
//                 >
//                     genreName
//                     </option>
//             )
//         })
//         }
//         {/* Add more genres as needed */}
//       </select>
//       <label>Start Year:</label>
//       <input
//         type="number"
//         value={startYear}
//         onChange={handleStartYearChange}
//         placeholder="Start Year"
//       />
//       <label>End Year:</label>
//       <input
//         type="number"
//         value={endYear}
//         onChange={handleEndYearChange}
//         placeholder="End Year"
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };



import React, { useEffect, useState } from 'react';
import { movieService } from '../../services';

import './MoviesFilter.scss';

const useGenre = () => {
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await movieService.getGenres();
                setGenres(data?.genres);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return {
        genres,
        setGenres,
    };
};

export const MoviesFilter = ({ onFilterChange }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');

    useEffect(() => {
        // Reset genres and years when the component is mounted
        setSelectedGenres([]);
        setStartYear('');
        setEndYear('');
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    //   const handleGenreChange = (event) => {
    //     const selectedOptions = event.target.options;
    //     const selectedGenres = [];
    //     for (let i = 0; i < selectedOptions.length; i++) {
    //       if (selectedOptions[i].selected) {
    //         selectedGenres.push(selectedOptions[i].value);
    //       }
    //     }
    //     setSelectedGenres(selectedGenres);
    //   };

    const handleGenreChange = (event) => {
        const selectedOptions = event.target.options;
        const selectedGenres = [];
        for (let i = 0; i < selectedOptions.length; i++) {
            if (selectedOptions[i].selected && selectedOptions[i].value !== 'all') {
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
            startYear: startYear || 'all',
            endYear: endYear || 'all',
        };
        onFilterChange(filterParams);
    };

    const { genres } = useGenre();
    return (
        <div className="movies-filter">
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Enter movie title"
            />
            <select multiple value={selectedGenres} onChange={handleGenreChange} className="genre__select">
                <option value="all" disabled hidden>
                    All
                </option>
                {genres?.map((item) => {
                    const { id: genreId, name: genreName } = item;
                    return (
                        <option
                            value={genreId}
                            key={genreId}
                            className={selectedGenres.includes(genreId) ? 'show-option' : 'hide-option'}
                        >
                            {genreName}
                        </option>
                    );
                })}
            </select>
            <label>Start Year:</label>
            <input
                type="number"
                value={startYear}
                onChange={handleStartYearChange}
                placeholder="All"
            />
            <label>End Year:</label>
            <input
                type="number"
                value={endYear}
                onChange={handleEndYearChange}
                placeholder="All"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};
