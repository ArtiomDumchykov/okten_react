import React from 'react'

export function Button(props) {
    const { type, classNameWrap, classNameBtn, styleWrap, styleBtn, children, ...rest} = props
    return (
        <div className={classNameWrap} style={styleWrap}>
            <button
                type={type}
                className={classNameBtn}
                style={styleBtn}
                {...rest}
            >
                {children}
            </button>
        </div>
    )
}
