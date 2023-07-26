import React from 'react';

import { Header, Main } from '../../components'
import { Outlet } from 'react-router-dom';

export function MainLayout() {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
        </>
    )
}
