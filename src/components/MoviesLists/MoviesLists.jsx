import React, { useEffect, useRef, useState } from 'react';
import './MoviesLists.scss';

import { movieService } from '../../setvices';

import { Movie } from './Movie/Movie';


const useMoviesPagination = ({page, setPage, setMovies, lastElementRef}) => {
    
 
    useEffect(() => {
        (async() => {
            const moviesObserver = new IntersectionObserver(async ([entry, observer]) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    const {data} = await movieService.getAll({page}); 
                    console.log(data);
                    if (data?.request?.status === 422 || page === 500) {
                        moviesObserver.disconnect();
                        console.log("End Films");
                        return
                    }

                    console.log("End ul");
                  
                    setMovies(prev => [...prev, ...data.results])  
                }
            },
            { threshold: 0.5 })



            // const endElement = lastElementRef.current
            const endElement = document.querySelector(".movies__list > .span:last-child");
            console.log(endElement);
            if (endElement) {
                moviesObserver.observe(endElement)
            }

            return () => {
                moviesObserver.disconnect();
            };
        })()
    }, [page, setPage])
}

export function MoviesLists() {
    const [page, setPage] = useState(1);
    const lastElementRef = useRef(null)

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const {data} = await movieService.getAll({page});
                setMovies(data.results)
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])

    useMoviesPagination({page, setPage, setMovies, lastElementRef })
  return (
    <section className='movies'>
        <div className="movies__container _container">
            <h2 className='movies__title-header'>MoviesLists</h2>
            <div className="movies__content">
                <div className="movies-list-wrap">
                    <ul className='movies__list'>
                        {
                            !!movies?.length && [...movies].map(item => <Movie movie={item} key={item.id}/>)
                        }
                        { !!movies?.length && <span ref={lastElementRef} className='span'></span>}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
