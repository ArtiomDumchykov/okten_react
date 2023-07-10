import React from 'react'
import { usePreLoader, useUsers } from '../../hooks';
import { User } from './User/User';
import styles from './Users.module.scss';
import { PreLoader } from '../PreLoader/PreLoader';


export function Users({ setUserId }) {
	const { users } = useUsers();
	const {preLoader} = usePreLoader(users)

	return (
		<>
			{
				!preLoader ? (
					<div className={styles.users__container + " _container"}>
						<ul className={styles.users__list}>
							{!!users?.length && [...users].map(item => <User user={item} key={item.email + "_" + item.id} setUserId={setUserId} />)}
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
