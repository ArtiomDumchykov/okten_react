import React from 'react';

import styles from './Posts.module.scss'
import { usePosts } from '../../hooks'
import { Post } from './Post/Post'

export function Posts() {
	const { posts } = usePosts()
	return (
		<div className={styles.posts__container + " _container"}>
			<ul className={styles.posts__list}>
				{
					!!posts.length && [...posts].map(item => <Post key={item.id} post={item} />)
				}
			</ul>
		</div>
	)
}
