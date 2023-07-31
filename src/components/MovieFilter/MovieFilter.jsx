// import React, { useEffect, useRef, useState } from 'react';
// import { useForm } from 'react-hook-form';

// import './MoviesFilter.scss';

// import { useGenre } from '../../hooks';

// const initialForm = {
//     search: '',
//     genre: '',
//     year: ''
// }

// export const MovieFilter = () => {
//     const { genres } = useGenre();

//     const { register, handleSubmit, formState: {errors}, setValue } = useForm();

//     const [selectDataForm, setSelectDataForm] = useState(initialForm)
//     // const [selectedGenre, setSelectedGenre] = useState('all');
//     // const [selectedYear, setSelectedYear] = useState('all');

//     useEffect(() => {
//         if (selectDataForm) {
//             setValue("search", selectDataForm.search)
//             setValue("genre", selectDataForm.genre)
//             setValue("year", selectDataForm.year)
//         }

//     }, [selectDataForm])
//     console.log("selectDataForm", console.log("selectDataForm"));
//     const handleSearchForm = (data) => {
//         console.log('Search Query:', data);
//         // Perform search logic here
//     };

//     return (
//         <section className="movies-filter">
//             <div className="mofies-filter__container _container">
//                 <div className="movies-filter__body">
//                     <form
//                         className='form__search'
//                         onSubmit={handleSubmit(handleSearchForm)}
//                     >
//                         <div className="form-search__container">
//                             <div className="form-search__body">
//                                 <div className="search-input-wrap">
//                                     <div>
//                                         {/* Search field for movie */}
//                                         <input type="text" {...register('search')} />
//                                     </div>
//                                     <div className='form-search-btn-wrap'>
//                                         <button type="submit">Search</button>
//                                     </div>
//                                 </div>
//                                 <div className="filter__actions">
//                                     <CustomSelect options={genres} register={{...register('genre')}}  initialValue={selectDataForm?.genre} onSelect={handleSearchForm}/>
//                                     <CustomSelect options={arrYears()} register={{...register('year')}}  initialValue={selectDataForm?.year} onSelect={handleSearchForm}/>
//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };


// function CustomSelect({ options, initialValue = 'all', onSelect, register }) {
//     const [selectedValue, setSelectedValue] = useState(initialValue);
//     const [isDropdownOpen, setDropdownOpen] = useState(false);
//     const optionsListRef = useRef(null);

//     const handleOptionSelect = (value) => {
//         setSelectedValue(value);
//         setDropdownOpen(false);
//         onSelect(value); // Pass the selected value back to the parent component
//     };

//     const toggleDropdown = () => {
//         setDropdownOpen((prevState) => !prevState);
//     };

//     return (
//         <div className={`custom-select ${isDropdownOpen ? 'open' : ''}`}>
//             <div className="selected-value" onClick={toggleDropdown}>
//                 {selectedValue}
//             </div>
//             <ul className={`options-list ${isDropdownOpen ? 'open' : ''}`} ref={optionsListRef}>
//                 <li className="option" onClick={() => handleOptionSelect('all')}>
//                     <input type="text" {...register} hidden/>
//                     all
//                 </li>
//                 {options.map((option) => (
//                     <li 
//                         key={option.id} 
//                         className="option" 
//                         onClick={() => handleOptionSelect(option.name)}
//                     >
//                         <input type="text" {...register} hidden/>
//                         {option.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }




// function arrYears(currentYear = new Date().getFullYear()) {
//     const years = Array.from({ length: currentYear - 1970 + 1 }, (_, index) => 1970 + index);
//     return years.map((item) => ({ id: item, name: item })).reverse();
// }

import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import './MoviesFilter.scss';

import { useGenre } from '../../hooks';

const initialForm = {
    search: '',
    genre: '',
    year: ''
}

export const MovieFilter = () => {
    const { genres } = useGenre();

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [selectDataForm, setSelectDataForm] = useState(initialForm)

    useEffect(() => {
        if (selectDataForm) {
            setValue("search", selectDataForm.search)
            setValue("genre", selectDataForm.genre)
            setValue("year", selectDataForm.year)
        }
    }, [selectDataForm, setValue])

    const handleSearchForm = (data) => {
        console.log('Search Query:', data);
        // Perform search logic here
    };

    const handleGenreSelect = (value) => {
        setSelectDataForm(prevState => ({ ...prevState, genre: value }));
    };

    const handleYearSelect = (value) => {
        setSelectDataForm(prevState => ({ ...prevState, year: value }));
    };

    return (
        <section className="movies-filter">
          <div className="mofies-filter__container _container">
            <div className="movies-filter__body">
              <form
                className='form__search'
                onSubmit={handleSubmit(handleSearchForm)}
              >
                <div className="form-search__container">
                  <div className="form-search__body">
                    <div className="search-input-wrap">
                      <div>
                        {/* Search field for movie */}
                        <input type="text" {...register('search', { required: true })} />
                      </div>
                      {errors.search && <span className="error-message">This field is required.</span>}
                      <div className='form-search-btn-wrap'>
                        <button type="submit">Search</button>
                      </div>
                    </div>
                    <div className="filter__actions">
                      <CustomSelect options={genres} initialValue={selectDataForm?.genre} onSelect={(value) => setSelectDataForm(prev => ({ ...prev, genre: value }))} />
                      <CustomSelect options={arrYears()} initialValue={selectDataForm?.year} onSelect={(value) => setSelectDataForm(prev => ({ ...prev, year: value }))} />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      );
};

function CustomSelect({ options, initialValue = 'all', onSelect, register }) {

    const [selectedValue, setSelectedValue] = useState(initialValue);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const optionsListRef = useRef(null);

    const handleOptionSelect = (value) => {
        setSelectedValue(value);
        setDropdownOpen(false);
        onSelect(value); // Pass the selected value back to the parent component
      };


    const toggleDropdown = () => {
        setDropdownOpen((prevState) => !prevState);
    };

    return (
        <div className={`custom-select ${isDropdownOpen ? 'open' : ''}`}>
            <div className="selected-value" onClick={toggleDropdown}>
                {selectedValue}
            </div>
            <ul className={`options-list ${isDropdownOpen ? 'open' : ''}`} ref={optionsListRef}>
                <li className="option" onClick={() => handleOptionSelect('all')}>
                    {/* <input type="text" {...register} hidden /> */}
                    all
                </li>
                {options.map((option) => (
                    <li
                        key={option.id}
                        className="option"
                        onClick={() => handleOptionSelect(option.name)}
                    >
                        {/* <input type="text" {...register} hidden /> */}
                        {option.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function arrYears(currentYear = new Date().getFullYear()) {
    const years = Array.from({ length: currentYear - 1970 + 1 }, (_, index) => 1970 + index);
    return years.map((item) => ({ id: item, name: item })).reverse();
}
