import React from 'react'

export const  PersonsCharacter = (props) => {
    const {characters} = props
    return (
        <>
            <ul>
                {characters.length && characters.map(item => <PersonsCharacter character={item} key={item.id}/>)}
            </ul>
        </>
    )
}
