import React from 'react';

import './Episodes.scss'

import { useEpisodes } from '../../../hooks';
import { Episode } from '../Episode/Episode';

export const Episodes = () => {

    const {episodes} = useEpisodes()

    return (
        <div>
            <ul className='episodes__list'>
                {
                    !!episodes?.length && [...episodes].map((item, index) => <li key={index + "_" + item.id}><Episode episode={item}/></li>)
                }
            </ul>
        </div>
    )
}
