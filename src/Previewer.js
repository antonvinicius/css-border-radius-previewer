import React from 'react'
import StyleCode from "./StyleCode"

export default function Previewer({ borderTopRightRadius, borderTopLeftRadius, borderBottomRightRadius, borderBottomLeftRadius }) {
    const style = {
        borderTopRightRadius: borderTopRightRadius + "%",
        borderTopLeftRadius: borderTopLeftRadius + "%",
        borderBottomRightRadius: borderBottomRightRadius + "%",
        borderBottomLeftRadius: borderBottomLeftRadius + "%"
    }
    console.log(borderTopRightRadius)
    return (
        <>
            <div className="box" style={style}>
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
