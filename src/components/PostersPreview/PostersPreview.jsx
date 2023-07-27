import React from 'react'

import styles from './PostersPreview.module.scss'
import { PosterPreview } from './PosterPreview/PosterPreview';

const utils_casts = {
    limit: 5,
    all: null,
    chunks: {},
    total: null
}

const createChunks = (array) => {
    if (!array || typeof array !== "object") return;

    const totalChunks =  Math.ceil(array.length / utils_casts.limit);
    
    for (let i = 1; i <= totalChunks; i++) {
        const startIndex = (i - 1) * utils_casts.limit;
        const endIndex = i * utils_casts.limit;
        utils_casts.chunks[`page_${i}`] = [...array].slice(startIndex, endIndex);
    }

    const lastChunk = utils_casts.chunks[`page_${totalChunks}`]
    const preLastChunk = utils_casts.chunks[`page_${totalChunks - 1}`]
    if (lastChunk.length < 5) {
        console.log(lastChunk);

        
    }

}

export function PostersPreview({ casts }) {

    createChunks(casts)



    const handlePrev = () => {

    }

    const handleNext = () => {

    }

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
                        {/* <PosterPreview/> */}
                    {/* ))} */}

                    {
                        !!casts?.length && [...casts].map(item => <PosterPreview cast={item} key={item.id}/>)
                    }

                </div>
            </div>
        </>
    )
}
