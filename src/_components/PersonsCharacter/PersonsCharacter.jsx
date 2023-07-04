import React from 'react';
import PropTypes from 'prop-types';

import styles from './PersonsCharacter.module.scss';

import { PersonCharacter } from '../';


export const  PersonsCharacter = ({data}) => {

    const {results: [...characters]} = data

    return (
        <>
            <ul className={styles.list}>
                {characters.length && characters.map(item => <PersonCharacter character={item} key={item.id}/>)}
            </ul>
        </>
    )
}

PersonsCharacter.propTypes = {
    data: PropTypes.shape({
        info: PropTypes.object,
        results: PropTypes.arrayOf(PropTypes.object)
    })
}