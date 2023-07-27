import React from 'react'

import styles from './PostersPreview.module.scss'
import { PosterPreview } from './PosterPreview/PosterPreview';
export function PostersPreview({ casts }) {

    console.log(casts);

    return (
        <>
            <h2>PostersPreview</h2>
            <div className={styles.posters}>
                <div className={styles.buttonContainer}>
                    <button 
                        className={styles.button}
                        // onClick={handlePrev}
                    >
                        prev
                        {/* <FaArrowCircleLeft /> */}
                    </button>
                    <button 
                        className={styles.button}
                        // onClick={handleNext}
                    >
                        next
                        {/* <FaArrowCircleRight /> */}
                    </button>
                </div>
                <div className={styles.posters__card}>
                    {/* {chunk.map((item) => ( */}
                        <PosterPreview/>
                    {/* ))} */}
                </div>
            </div>
        </>
    )
}
