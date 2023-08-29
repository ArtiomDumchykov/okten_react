import React from 'react';

import { Characters } from '../../components';
import { BackButton } from '../../componentUI';
import { useSelector } from 'react-redux';

export const CharactersPage = () => {
    return (
        <div>
            <BackButton/>
            <Characters/>
        </div>
    )
}
