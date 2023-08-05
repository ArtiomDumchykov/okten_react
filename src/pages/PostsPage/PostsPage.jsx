import React, { Component } from 'react'
import { Posts } from '../../components'


export class PostsPage extends Component{
    render() {
        return (
            <div className='posts'>
                <div className="posts__container _container">
                    <div className="posts__title_header">
                        <h2 className='posts__title'>Posts</h2>
                    </div>
                    <div className="posts__content_wrap">
                            <Posts/>
                    </div>
                </div>
            </div>
        )
    }
}
