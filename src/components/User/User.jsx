import React, { useContext, createContext } from 'react';

import styles from './User.module.scss';

import { UserDetails, UserAddress, UserCompany } from './';
import { Button } from '../';

import { UsersContext } from '../../App';

export const UserContext = createContext({})

export function User({ user, ...rest }) {
    const { address, company, ...restUser } = user;
    const { handleFilterUserPosts } = useContext(UsersContext)
    return (
        <UserContext.Provider value={{address, company, restUser}}>

            <li className={styles["user__item"]}>
                <UserDetails/>
                <div>
                    <UserAddress/>
                    <UserCompany/>
                </div>
                <Button
                    type={"button"}
                    classNameWrap={styles.btn__wrap}
                    classNameBtn={styles.btn}
                    onClick={() => handleFilterUserPosts({ userId: restUser.id, userName: restUser.name })}
                    {...rest}
                >
                    get Posts
                </Button>

            </li>
        </UserContext.Provider>
    )
}
