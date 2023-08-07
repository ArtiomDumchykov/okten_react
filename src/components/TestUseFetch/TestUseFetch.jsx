import React, { useRef, useState } from 'react'

import { useFetch } from '../../hooks'
import { User } from '../User/User'
import { Post } from '../Post/Post'
import { Comment } from '../Comment/Comment'

const initialization = [
    "/users",
    "/posts",
    "/comments",
]

const itialComponent = {
    users: (data) => <User user={data}/>,
    posts: (data) => <Post post={data}/>,
    comments: (data) => <Comment comment={data}/>,
}

export const TestUseFetch = () => {
    const [select, setSelect] = useState(initialization[0])
    const selectRef = useRef(null)
    
    const {data, setData} = useFetch(select);

    const handleselected = () => {
        const target = selectRef.current;
        setSelect(target.value)
    }

  return (
    <div>
        <h2>TestUseFetch</h2>

        <select onChange={() => handleselected()} ref={selectRef}>
            {initialization.map((item, index) => <option value={item} key={index}>{item}</option>)}
        </select>

        <div>
            <ul>
                {
                    !!data?.length && [...data].map(item => itialComponent[select.slice(1)](item))
                }
            </ul>
        </div>

    </div>
  )
}




