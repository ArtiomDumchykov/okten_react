import React, { FC } from 'react'
import { Header, Main } from '../../components'
import { Outlet } from 'react-router-dom'


export const MainLayout: FC = () => {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
        </>
    )
}
