import React, { useState } from 'react'
import Previewer from './Previewer'

import "./Options.css"

export default function Options() {
    const [borderTopRight, setBorderTopRight] = useState(0)
    const [borderTopLeft, setBorderTopLeft] = useState(0)
    const [borderBottomLeft, setBorderBottomLeft] = useState(0)
    const [borderBottomRight, setBorderBottomRight] = useState(0)

    return (
        <div className="options">
            <div className="group-input">
                <div className="input-group">
                    <h4>Border Top Right</h4>
                    <input type="range" max="50" name="btright" value={borderTopRight} onChange={e => setBorderTopRight(e.target.value)} />
                </div>
                <div className="input-group">
                    <h4>Border Top Left</h4>
                    <input type="range" max="50" name="btleft" value={borderTopLeft} onChange={e => setBorderTopLeft(e.target.value)} />
                </div>
                <div className="input-group">
                    <h4>Border Bottom Right</h4>
                    <input type="range" max="50" name="bbright" value={borderBottomRight} onChange={e => setBorderBottomRight(e.target.value)} />
                </div>
                <div className="input-group">
                    <h4>Border Bottom Right</h4>
                    <input type="range" max="50" name="bbleft" value={borderBottomLeft} onChange={e => setBorderBottomLeft(e.target.value)} />
                </div>
            </div>
            <Previewer
                borderTopRightRadius={borderTopRight}
                borderTopLeftRadius={borderTopLeft}
                borderBottomRightRadius={borderBottomRight}
                borderBottomLeftRadius={borderBottomLeft}
            />
        </div>
    )
}
