import React from 'react'

export default function OwlNav({onClickHandler}) {
    return (
        <div className="owl-nav" style={{display:"inline-block"}}>
            <button type="button" onClick = {() => onClickHandler(-1)}>
                <span aria-label="Previous" className="fas fa-arrow-left"></span></button>
            <button type="button" onClick = {() => onClickHandler(1)}>
                <span aria-label="Next" className="fas fa-arrow-right"></span>
            </button>
        </div>
    )
}
