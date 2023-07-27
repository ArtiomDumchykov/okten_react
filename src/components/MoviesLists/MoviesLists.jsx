import React from 'react';

import './MoviesLists.scss';

import { Movie } from './Movie/Movie';
import { useScrollPagination } from '../../hooks/usePagination';

export function MoviesLists({ callback, params }) {

    const { lastElementRef, data } = useScrollPagination(callback, params)

    return (
        <section className='movies'>
            <div className="movies__container _container">
                <h2 className='movies__title-header'>MoviesLists</h2>
                <div className="movies__content">
                    <div className="movies-list-wrap">
                        <ul className='movies__list'>
                            {
                                !!data?.results?.length && data.results.map((item, index) => <Movie movie={item} key={item.id + index} />)
                            }
                            <span ref={lastElementRef}></span>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

