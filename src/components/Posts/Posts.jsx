import React, { Component } from 'react'
import { postsService } from '../../services';
import { Post } from './Post/Post';

export  class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        try {
            const {data} = await postsService.getAll_Posts()
            this.setState({posts: data})
        } catch (error) {
            console.log(error);
        }
    }

  render() {
    const {posts} = this.state
    return (
      <>
      {
        !!posts?.length 
        ? (
            <ul className='comments__list'>
                        {[...posts].map(item => <Post post={item} key={item.id}/>)}
                    </ul>
        ) : <div>not posts</div>
      }
      </>
    )
  }
}
