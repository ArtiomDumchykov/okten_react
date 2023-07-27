import React from 'react';

import { urls } from '../../../constans';

import "./Movie.scss"
import { useNavigate } from 'react-router-dom';

export function Movie({movie}) {
    const { id, poster_path, title, release_date, vote_average } = movie;

    const navigate = useNavigate()

    const data = +release_date.split('-')[0];
    const img = urls.posterUrl.base + poster_path || urls.notFoundPoster.base

  return (
    <li 
        className='movies-lists__item'
    >
        <div 
            className="movies-lists-item__img-wrap"
            style={{ backgroundImage: `url(${img})` }}
            onClick={() => navigate(`/movieInfo/${id}`) }
        >
            <p></p>
        </div>
        <div
            className='badges'
        >
            {data === new Date().getFullYear() &&  <span className="new__badges-text">NEW</span>}
        </div>
        <div className="movies-lists-item__info-short">
            <p>{title}</p>
            <p>{data} <span>Movie</span></p>
        </div>
    </li>
  )
}
