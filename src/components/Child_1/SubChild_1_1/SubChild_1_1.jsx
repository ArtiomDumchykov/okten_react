import React, { useContext } from 'react'
import { Context } from '../../../App';

export function SubChild_1_1() {
    const { arr1: data } = useContext(Context)
    console.log(data);
    return (
        <div>
            <h3>SubChild_1_1</h3>
            <div style={{
                display: "flex",
                gap: "7px",
                padding: "10px 0 10px 20px"
            }}>
                {!!data?.length && [...data].map(item => <span key={item}>Data: {item}</span>)}
            </div>
        </div>
    )
}
