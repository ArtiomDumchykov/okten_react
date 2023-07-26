import React from 'react';

import './Post.scss'
import { usePost } from '../../hooks'
import { PostDetails } from './PostDetails/PostDetails'

export function Post() {
    const { post, setPost } = usePost()
    return (
        <div className='post'>
            {!!post && <PostDetails postDetail={post} />}
        </div>
    )
}
