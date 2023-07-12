import React from 'react';

import styles from './User.module.scss';

import { UserDetails, UserAddress, UserCompany} from './';
import { Button } from '../'

export  function User({user, handleGetUserPosts, ...rest}) {
    const {address, company, ...restUser} = user;

  return (
    <li className={styles["user__item"]}>
        <UserDetails userDetails={restUser}/>
        <div>
            <UserAddress address={address}/>
            <UserCompany company={company}/>
        </div>
        <Button
            type={"button"}
            classNameWrap={styles.btn__wrap}
            classNameBtn={styles.btn}
            onClick={() => handleGetUserPosts({userId: restUser.id, userName: restUser.name})}
            {...rest}
        >
            get Posts
        </Button>

    </li>
  )
}
