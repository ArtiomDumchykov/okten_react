import React from "react";

import styles from './PersonCharacter.module.scss';

export const PersonCharacter = (props) => {

    // const {id,name,status,species,gender,image} = props.character
    console.log(props)
    return (
        
        // <li className={styles.title}>hello world {name || ""}</li>
        <li className={styles.title}>hello world {"Artem"}</li>
        
    )
}