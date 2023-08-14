import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;
    const navigate = useNavigate();
  return (
    <div  onClick={() => navigate('/rickmorty/characters', {state: {id: characters}})}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
  )
}
