import React, { FC, PropsWithChildren } from 'react'


interface IProps extends  PropsWithChildren<{}> {}
// type IProps = PropsWithChildren<{}>;

export const Main:FC<IProps> = ({ children }) => {
    return (
        <main>{children}</main>
    )
}