import React from 'react'

import StyleCode from "./StyleCode"

export default function Previewer({ borderTopRightRadius, borderTopLeftRadius, borderBottomRightRadius, borderBottomLeftRadius }) {
    const style = {
        backgroundColor: "black",
        width: "300px",
        height: "300px",
        borderTopRightRadius: borderTopRightRadius + "%",
        borderTopLeftRadius: borderTopLeftRadius + "%",
        borderBottomRightRadius: borderBottomRightRadius + "%",
        borderBottomLeftRadius: borderBottomLeftRadius + "%"
    }
    console.log(borderTopRightRadius)
    return (
        <>
            <div style={style}>
            </div>
            <StyleCode 
                borderTopRightRadius={borderTopRightRadius}
                borderTopLeftRadius={borderTopLeftRadius}
                borderBottomRightRadius={borderBottomRightRadius}
                borderBottomLeftRadius={borderBottomLeftRadius}
            />
        </>
    )
}
