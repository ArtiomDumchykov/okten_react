import React from 'react'
import { useUsers } from '../../hooks';
import { User } from './User/User';
import styles from './Users.module.scss';


export function Users({ setUserId }) {
	const { users } = useUsers()
	return (
		<div className={styles.users__container + " _container"}>
			<ul className={styles.users__list}>
				{!!users?.length && [...users].map(item => <User user={item} key={item.email + "_" + item.id} setUserId={setUserId} />)}
			</ul>
		</div>
	)
}
