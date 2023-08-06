import React, { Component } from 'react'

import './CommentsPage.scss';

import { Comments } from '../../components';


export class CommentsPage extends Component{
    render() {
        return (
            <div className='comments'>
                <div className="comments__cocntainer _container">
                    <div className="comments__title_header">
                        <h2 className='comments__title'>Comments</h2>
                    </div>
                    <div className="comments__content_wrap">
                            <Comments />
                    </div>
                </div>
            </div>
        )
    }
}
