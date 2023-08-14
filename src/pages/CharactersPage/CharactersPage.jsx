import React from 'react';

import { Characters } from '../../components';
import { BackButton } from '../../componentUI';

export const CharactersPage = () => {
    return (
        <div>
            <BackButton/>
            <Characters/>
        </div>
    )
}
