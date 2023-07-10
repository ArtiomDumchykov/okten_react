import React, { useEffect, useState } from 'react';

import styles from './Posts.module.scss'
import { usePosts, usePreLoader } from '../../hooks'
import { Post } from './Post/Post'
import { PreLoader } from '../PreLoader/PreLoader';


export function Posts() {
	const { posts } = usePosts()
	const {preLoader} = usePreLoader(posts)
	
	return (
		<>	
			{
				!preLoader ? (
						<div className={styles.posts__container + " _container"}>
							<ul className={styles.posts__list}>
								{
									!!posts.length && [...posts].map(item => <Post key={item.id} post={item} />)
								}
							</ul>
						</div>
				)
				: (
					<PreLoader/>
				)
			}
		</>
	)
}
