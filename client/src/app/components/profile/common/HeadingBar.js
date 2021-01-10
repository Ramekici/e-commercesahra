import React from 'react'

export default function HeadingBar({heading, veri}) {
    return (
        <div className="col-12">
            <h3 className="mb-0"> {heading} </h3>
            {veri ? <span className="eyebrow"> {veri} </span> :null}
        </div>
    )
}
