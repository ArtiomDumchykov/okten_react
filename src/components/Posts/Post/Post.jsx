import React from 'react';
import PropTypes from 'prop-types';

import { usePost } from '../../../hooks';
import { PostDetail } from '../PostDetail/PostDetail';

import styles from "./Post.module.scss"

export  function Post({post}) {

  const {id, title} = post;
  const {postDetail, isShow, setIsShow} = usePost(id);

  return (
    <li className={styles.posts__item}>
      <div>
        <h2>ID: {id}, Title: {title}</h2>
      </div>
      <div className={styles.btn__wrap}>
        <button onClick={() => setIsShow(prev => !prev)}>{isShow ? 'Hide' : 'Show'}</button>
      </div>
      <div className={isShow ? styles.post__detail : ""}>
        {isShow &&  <PostDetail post={postDetail}/>}
      </div>
    </li>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  })
}