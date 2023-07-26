import React from 'react'

import './Comments.scss';

import { Comment } from './Comment/Comment';
import { useComments } from '../../hooks';

export function Comments() {

    const { comments, setcomments } = useComments()

    return (
        <ul className='comments__list'>
            {
                !!comments?.length && [...comments].map(item => <Comment comment={item} key={`${item.postId}_${item.id}`} />)
            }
        </ul>
    )
}
