import React, { useState } from 'react'
import Previewer from './Previewer'

export default function Options() {
    const [borderTopRight, setBorderTopRight] = useState(0)
    const [borderTopLeft, setBorderTopLeft] = useState(0)
    const [borderBottomLeft, setBorderBottomLeft] = useState(0)
    const [borderBottomRight, setBorderBottomRight] = useState(0)

    return (
        <>
            <input type="range" max="50" name="btright" value={borderTopRight} onChange={e => setBorderTopRight(e.target.value)} /> BorderTopRigth <br/>
            <input type="range" max="50" name="btleft" value={borderTopLeft} onChange={e => setBorderTopLeft(e.target.value)} /> BorderTopLeft <br/>
            <input type="range" max="50" name="bbright" value={borderBottomRight} onChange={e => setBorderBottomRight(e.target.value)} /> BorderBottomRigth <br/>
            <input type="range" max="50" name="bbleft" value={borderBottomLeft} onChange={e => setBorderBottomLeft(e.target.value)} /> BorderBottomLeft <br/>
            <Previewer 
                borderTopRightRadius={borderTopRight}
                borderTopLeftRadius={borderTopLeft} 
                borderBottomRightRadius={borderBottomRight} 
                borderBottomLeftRadius={borderBottomLeft} 
            />
        </>
    )
}
