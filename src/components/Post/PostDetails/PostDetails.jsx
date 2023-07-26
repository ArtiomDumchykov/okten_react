import React from 'react';
import { useOutletContext } from 'react-router-dom';

export function PostDetails({ postDetail }) {
    const { id, title } = postDetail;
    const { commentId } = useOutletContext();

    return (
        <div className='post-details'>
            <h4>PostDetailsID: {commentId}</h4>
            <div>ID: {id}</div>
            <div>Title: {title}</div>
        </div>
    )
}
