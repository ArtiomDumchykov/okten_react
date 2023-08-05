import React, { Component } from 'react';

import './Comment.scss';
export class Comment extends Component{
    render() {
        const {id,name, email, body} = this.props.comment
        return (
            <li className='comments__item'>
                <div>
                    <div>title: {name}</div>
                    <div>{body}</div>
                </div>
                <div>ID: {id}, Email: {email}</div>
            </li>
        )
    }
}
