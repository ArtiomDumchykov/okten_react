import React from 'react';
import PropTypes from 'prop-types';

import styles from './Launch.module.scss'

export  const Launch = ((props) => {
  const {mission_name, launch_year, links: {mission_patch_small}} = props.launch;
  return (
    <li className={styles.launches__item} >
      <div className={styles.launch__img_wrap + " _ibg"}>
          <img src={mission_patch_small} alt={mission_name} className={styles.launch__img}/>
      </div>
      <div className={styles.launch__text_info}>
        <p>Mission Name: {mission_name}</p>
        <p>Launch year: {launch_year}</p>
      </div>
    </li>
  )
})

Launch.propTypes = {
  launch: PropTypes.shape({
    mission_name: PropTypes.string,
    launch_year: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    links: PropTypes.shape({
      mission_patch_small: PropTypes.string
    })
  })
};