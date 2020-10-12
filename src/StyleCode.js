import React, { useState } from 'react'
import { useRef } from 'react'

export default function StyleCode({ borderTopRightRadius, borderTopLeftRadius, borderBottomRightRadius, borderBottomLeftRadius }) {
    const [copySuccess, setCopySuccess] = useState('')
    const textArea = useRef()
    const text = `{\nborder-top-right-radius: ${borderTopRightRadius}%;\nborder-top-left-radius: ${borderTopLeftRadius}%;\nborder-bottom-right-radius: ${borderBottomRightRadius}%;\nborder-bottom-left-radius: ${borderBottomLeftRadius}%;\n}`

    const copyToClipBoard = e => {
        textArea.current.select()
        document.execCommand('copy')
        setCopySuccess('Copied!')
    }

    return (
        <div className="copy">
            <button onClick={copyToClipBoard}><h1>Copy CSS</h1></button> <br />
            <textarea ref={textArea} style={{ resize: "none" }} name="css" id="css" readOnly={true} cols="40" rows="7" value={text}>
            </textarea>
        </div>
    )
}
