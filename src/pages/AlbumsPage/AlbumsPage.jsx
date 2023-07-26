import React from 'react';

import './AlbumsPage.scss'
import { Albums } from '../../components'

export function AlbumsPage() {
    return (
        <div className='albums'>
            <div className="albums__cocntainer _container">
                <div className="albums__title_header">
                    <h2 className='albums__title'>Albums</h2>
                </div>
                <div className="albums__content_wrap">
                    <Albums />
                </div>
            </div>
        </div>
    )
}
