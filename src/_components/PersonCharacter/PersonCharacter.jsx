import React from "react";
import PropTypes from 'prop-types';

import styles from './PersonCharacter.module.scss';

export const PersonCharacter = ({character: {id,name,surname, info,image}}) => {



    return (
        
        <li className={styles.item_character}>
            <div className={styles.item_wrap}>

                <div className={styles.item_img_wrap}>
                    <img src={image} alt={name} className={styles.item__img}/>
                </div>

                <div className={styles.info}>
                    <h2 className={styles.info_name_text}>Name: {name} {surname}</h2>
                </div>

            </div>
        </li>
        
    )
}

PersonCharacter.propTypes = {
    character: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        surname: PropTypes.string,
        info: PropTypes.string,
        image: PropTypes.string,
    })
}