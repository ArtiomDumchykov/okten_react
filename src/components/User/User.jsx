import React, { useContext, createContext } from 'react';

import styles from './User.module.scss';

import { Button } from '../';
import { UserDetails, UserAddress, UserCompany } from './';



export const UserContext = createContext({})

export function User({ user, ...rest }) {
    const { address, company, ...restUser } = user;


    //  const handleShowFilterPosts = ({ userId, userName }) => {
    // //   const filterData = [...usersPosts].filter(item => item.userId === userId)
    // //   console.log("DATA filter", filterData);
    // //   setPosts(filterData)
    // //   setPosts(prev => {
    // //     console.log("PREV", prev);
    // //     return {...prev, filterData}
    // //   })
    // //   setPosts(prev => ({
    // //     ...prev,
    // //     userName,
    // //     userId,
    // //     userPosts: filterData
    // //   }))
    // }


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
                    // onClick={() => handleShowFilterPosts({userId: restUser.id, userName: restUser.name})}
                    {...rest}
                >
                    get Posts
                </Button>

            </li>
        </UserContext.Provider>
    )
}
