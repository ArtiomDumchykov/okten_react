// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import './MoviesFilter.scss';
// import { useGenre } from '../../hooks';
// import { SelectFilter } from '../SelectFilter/SelectFilter';

// const initialForm = {
//   search: '',
//   with_genres: '',
//   primary_release_year: ''
// }

// export const MovieFilter = ({t}) => {
// const { setSearchParams, setCallbackRequest } = t;
//   const { genres } = useGenre();
//   const { register, handleSubmit, setValue } = useForm();
//   const [selectDataForm, setSelectDataForm] = useState(initialForm);

//     useEffect(() => {
//       setValue('search', selectDataForm.search);
//       setValue('with_genres', selectDataForm.genre);
//       setValue('primary_release_year', selectDataForm.year);
  
//       // Call the search function here whenever selectDataForm changes
//       handleSearchForm(selectDataForm);
//     }, [selectDataForm, setValue]);
  
//     const handleSearchForm = (data) => {
//       setSearchParams(prev => ({...prev, ...data}))
//       setCallbackRequest("search")
      
      
//       // Здесь выполняется логика поиска
//       // You can make the API call or perform the search logic here
//       // Use the data object which contains the form fields' values
//       // For example, you can make a fetch request to a backend API with the form data.
//     };

//   return (
//     <section className="movies-filter">
//       <div className="movies-filter__container _container">
//         <div className="movies-filter__body">
//           <form
//             className='form__search'
//             onSubmit={handleSubmit(handleSearchForm)}
//           >
//             <div className="form-search__container">
//               <div className="form-search__body">
//                 <div className="search-input-wrap">
//                   <div>
//                     {/* Поле для поиска фильмов */}
//                     <input type="text" {...register('search')} />
//                   </div>
//                   <div className='form-search-btn-wrap'>
//                     <button type="submit">Поиск</button>
//                   </div>
//                 </div>
//                 <div className="filter__actions">
//                   <SelectFilter options={genres} register={register} onSelect={(value) => setSelectDataForm(prevState => ({ ...prevState, with_genres: value }))} />
//                   <SelectFilter options={arrYears()} register={register} onSelect={(value) => setSelectDataForm(prevState => ({ ...prevState, primary_release_year: value }))} />
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };
// function arrYears(currentYear = new Date().getFullYear()) {
//     const years = Array.from({ length: currentYear - 1970 + 1 }, (_, index) => 1970 + index);
//     return years.map((item) => ({ id: item, name: item })).reverse();
// }

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './MoviesFilter.scss';
import { useGenre } from '../../hooks';
import { SelectFilter } from '../SelectFilter/SelectFilter';

const initialForm = {
  search: '',
  with_genres: '',
  primary_release_year: ''
};

export const MovieFilter = ({ t }) => {
  const { setSearchParams, } = t;
  const { genres } = useGenre();
  const { register, handleSubmit, setValue } = useForm();
  const [selectDataForm, setSelectDataForm] = useState(initialForm);

  useEffect(() => {
    setValue('with_genres', selectDataForm.with_genres);
    setValue('primary_release_year', selectDataForm.primary_release_year);

    handleSearchForm(selectDataForm);
  }, [selectDataForm, setValue]);

  const handleSearchForm = (data) => {
    setSearchParams((prev) => ({ ...prev, ...data }));
  };

  return (
    <section className="movies-filter">
      <div className="movies-filter__container _container">
        <div className="movies-filter__body">
          <form className="form__search" onSubmit={handleSubmit(handleSearchForm)}>
            <div className="form-search__container">
              <div className="form-search__body">
                {/* <div className="search-input-wrap">
                  <div>
                    <input type="text" {...register('search')} />
                  </div>
                  <div className="form-search-btn-wrap">
                    <button type="submit">Поиск</button>
                  </div>
                </div> */}
                <div className="filter__actions">
                  <SelectFilter
                    options={genres}
                    register={register}
                    onSelect={(value) => setSelectDataForm((prevState) => ({ ...prevState, with_genres: value }))}
                  />
                  <SelectFilter
                    options={arrYears()}
                    register={register}
                    onSelect={(value) =>
                      setSelectDataForm((prevState) => ({ ...prevState, primary_release_year: value }))
                    }
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};


function arrYears(currentYear = new Date().getFullYear()) {
    const years = Array.from({ length: currentYear - 1970 + 1 }, (_, index) => 1970 + index);
    return years.map((item) => ({ id: item, name: item })).reverse();
}

