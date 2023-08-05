import React, { Component } from 'react'

import './Comments.scss';

import { commentsService } from '../../services';
import { Comment } from './Comment/Comment';

export class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    async componentDidMount() {
        try {
            const {data} = await commentsService.getAll_Comments()
            this.setState(prev => ({...prev, comments: data}))
        } catch (error) {
            console.log(error);
        }
    }

  render() {
    const {comments} = this.state
    return (
        <>
            {
                !!comments?.length 
                ? (
                    <ul className='comments__list'>
                        {[...comments].map(item => <Comment comment={item} key={`${item.postId}_${item.id}`}/>)}
                    </ul>
                )
                : <div>not comments</div>
            }
        </>
    )
  }
}

