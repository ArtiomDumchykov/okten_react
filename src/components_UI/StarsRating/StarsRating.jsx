import React from 'react';
import styles from './StartRaiting.module.scss'

export const StarsRating = ({ rating }) => {
    return (
        <div className={styles.rating}>
            <div className={styles.rating_stars}>
                <div className={styles.rating_stars_back}>
                    {[...Array(10)].map((_, index) => (
                        <span key={index} />
                    ))}
                </div>
                <div
                    className={styles.rating_stars_fill}
                    style={{ width: `${Math.round(rating * 5) * 2}%` }}
                >
                    {[...Array(10)].map((_, index) => (
                        <span key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};
