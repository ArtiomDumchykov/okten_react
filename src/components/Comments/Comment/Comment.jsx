import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './Comment.scss';
import { CommentsContext } from '../../../pages/CommentsPage/CommentsPage';

export function Comment({ comment }) {
    const { postId, id, email, name, body } = comment;
    const navigate = useNavigate();
    const { setCommentId } = useContext(CommentsContext);

    const handleClick = () => {
        navigate(`posts/${id}`)
        setCommentId(id)
    }

    return (
        <li className='comments__item'>
            <div>
                <div>title: {name}</div>
                <div>{body}</div>
            </div>
            <div>ID: {id}, Email: {email}</div>
            <div>
                <button
                    onClick={handleClick}
                    style={{
                        border: "1px solid black",
                        padding: "7px 10px",
                        backgroundColor: "red"
                    }}
                >get post</button>
            </div>
        </li>
    )
}
