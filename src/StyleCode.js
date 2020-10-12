import React from 'react'

export default function StyleCode({ borderTopRightRadius, borderTopLeftRadius, borderBottomRightRadius, borderBottomLeftRadius }) {
    const text = `{\nborder-top-right-radius: ${borderTopRightRadius}%;\nborder-top-left-radius: ${borderTopLeftRadius}%;\nborder-bottom-right-radius: ${borderBottomRightRadius}%;\nborder-bottom-left-radius: ${borderBottomLeftRadius}%;\n}`

    return (
        <div>
            <button><h1>Click me to copy</h1></button> <br />
            <textarea name="css" id="css" readOnly={true} cols="40" rows="7" value={text}>
            </textarea>
        </div>
    )
}
