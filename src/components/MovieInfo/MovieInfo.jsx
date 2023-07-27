import React from 'react'
import { urls } from '../../constans';
import './MovieInfo.scss'
import GenreBadge from '../../components_UI/GenreBadge/GenreBadge';
import { StarsRating } from '../../components_UI';
import { useNavigate } from 'react-router-dom';

export function MovieInfo({ movie }) {
    const { title, vote_average, original_language, genres, budget, runtime, release_date, overview } = movie;

    const backdropPath = movie?.poster_path ? urls.posterUrl.base + movie.poster_path : urls.notFoundPoster.base;
    const releaseDate = +release_date.split('-')[0];

    const navigate = useNavigate()
    return (
        <>
            <div className="movie__info-info">
                <div className='movie-info-info__content'>
                    <div
                        style={{ backgroundImage: `url(${backdropPath})` }}
                        className="backdrop-path"

                    >
                        <p></p>
                    </div>
                    <div className="movie-info__decription-wrap">
                        <div className="short-description-wrap">
                            <h2 className="movie-info-info__title">{title}</h2>
                            <div className="short-description__btn">
                                <button>play</button>
                                <button>favorite</button>
                            </div>

                            <div className="movie-info__short-decription">
                                <h2 className="movie-info-short-dectiption__title">About the film</h2>
                                <div className='movie-info-short-desctiption-field-wrap'>
                                    <span className='short-description-field'>Retying</span>
                                    <span>{vote_average}</span>
                                    <StarsRating rating={vote_average} />
                                </div>
                                <div className='movie-info-short-desctiption-field-wrap'>
                                    <span className='short-description-field'>Countries</span>
                                    <span>{original_language}</span>
                                </div>
                                <div className='movie-info-short-desctiption-field-wrap  genre-field'>
                                    <span className='short-description-field'>Genre</span>
                                    <div className="genre">
                                        {
                                            genres.map((value) => <GenreBadge key={value.id} genre={value} />)
                                        }
                                    </div>
                                </div>
                                <div className='movie-info-short-desctiption-field-wrap'>
                                    <span className='short-description-field'>Budget</span>
                                    <span>{budget}</span>
                                </div>
                                <div className='movie-info-short-desctiption-field-wrap'>
                                    <span className='short-description-field'>Runtime</span>
                                    <span>{runtime} min</span>
                                </div>
                                <div className='movie-info-short-desctiption-field-wrap'>
                                    <span className='short-description-field'>Release date</span>
                                    <span
                                        className='realese_date-text'
                                        onClick={() => navigate(`/filterMovie/years/${releaseDate}`)}
                                    >{releaseDate}</span>
                                </div>

                            </div>
                        </div>
                        <div className="overview">
                            <p>
                                <strong>Description</strong> {overview}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
