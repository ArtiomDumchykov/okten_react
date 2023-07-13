import React from 'react'

export function Button(props) {
    const { type, classNameWrap, classNameBtn, children, ...rest} = props
    return (
        <div className={classNameWrap}>
            <button
                type={type}
                className={classNameBtn}
                {...rest}
            >
                {children}
            </button>
        </div>
    )
}
