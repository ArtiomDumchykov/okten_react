import React, { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom';

import { Comments } from '../../components';

import './CommentsPage.scss';

export const CommentsContext = createContext(null)

export function CommentsPage() {

    const [commentId, setCommentId] = useState(null)

    return (
        <div className='comments'>
            <div className="comments__cocntainer _container">
                <div className="comments__title_header">
                    <h2 className='comments__title'>Comments</h2>
                </div>
                <div className="comments__content_wrap">
                    <CommentsContext.Provider value={{ setCommentId }}>
                        <Comments />
                    </CommentsContext.Provider>
                    {
                        !!commentId && <Outlet context={{ commentId }} />
                    }
                </div>
            </div>
        </div>
    )
}
