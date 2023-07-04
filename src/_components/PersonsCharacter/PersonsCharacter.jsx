import React from 'react';
import PropTypes from 'prop-types';

import styles from './PersonsCharacter.module.scss';

import { PersonCharacter } from '../';


export const  PersonsCharacter = ({data}) => {

    

    return (
        <>
            <ul className={styles.list}>
                {data.length && [...data].map(item => <PersonCharacter character={item} key={item.id}/>)}
            </ul>
        </>
    )
}

PersonsCharacter.propTypes = {
    data:  PropTypes.arrayOf(PropTypes.object)
}