import React, { useEffect, useState } from 'react';

import { creaditService, movieService } from '../../services'
import { MovieInfo } from '../MovieInfo/MovieInfo'
import { PostersPreview } from '../PostersPreview/PostersPreview';

export function MovieListsCard({ movieId }) {
    const [data, setData] = useState(null);
    const [dataCredits, setDataCredits] = useState(null)
    useEffect(() => {
        (async () => {
            const { data } = await movieService.getById(movieId)
            const { data: creditData } = await creaditService.getAll(movieId)

            setData(data)
            setDataCredits(creditData)
        })()
    }, [movieId])


    return (
        <>
            {!!data && <MovieInfo movie={data} />}

            {!!dataCredits?.cast?.length && <PostersPreview casts={dataCredits.cast} />}
        </>
    )
}
