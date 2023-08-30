import React, { FC } from 'react'
import { CarInfo } from '../../components/CarsContainer'
import { useOutletContext } from 'react-router-dom'
import { IContextType } from '../../layouts'
import { BackButton } from '../../componentsUI'

export const CarsInfoPage: FC = () => {
    const { car } = useOutletContext<IContextType>();
    return (
        <>
            <BackButton/>
            <CarInfo car={car} />
        </>
    )
}
