import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const btnStyle = {
    border: "1px solid black",
    padding: "7px 10px",

}


export const EpisodesPagination = () => {
    const {prevPage, nextPage} = useSelector(store => store.episodes)
    const [, setQuery] = useSearchParams();

    const toPrevPage = () => {
        setQuery(prev => ({...prev, page: +prev.get('page') - 1}))
    };


    const toNextPage = () => {
        setQuery(prev => ({...prev, page: +prev.get("page") + 1}))
    }
  return (
    <div style={{
        margin: "15px 0 0 0",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
    }}>
        <button style={btnStyle} disabled={!prevPage} onClick={toPrevPage}>prev</button>
        <button style={btnStyle} disabled={!nextPage} onClick={toNextPage}>next</button>
    </div>
  )
}
