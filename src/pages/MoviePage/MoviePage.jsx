import React from 'react'
import { useParams } from 'react-router-dom'
import { MovieListsCard } from '../../components'

export function MoviePage() {
    const { movieId } = useParams()
    console.log(movieId);
  return (
    <section className='movie' style={{padding: "25px 0"}}>
        <div className="movie__container _container">
            {/* <h2 className='movie__title-header'>Movie</h2> */}
            <div className="movie__content">
                {!!movieId && <MovieListsCard movieId={movieId}/>}
            </div>
        </div>
    </section>
  )
}
