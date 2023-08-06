import React, { Component } from 'react'

export class Post extends Component {
    render() {
        const { id, title, body } = this.props.post
        return (
            <li >
                <div>ID: {id}</div>
                <div>Title: {title}</div>
                <p>{body}</p>
            </li>
        )
    }
}
