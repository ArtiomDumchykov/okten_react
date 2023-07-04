import React from "react";

import styles from './PersonComponent.module.scss';

export const PersonComponent = props => {

    const {name} = props.person
    
    return (
        
        <div className={styles.title}>hello world {name}</div>
        
    )
}