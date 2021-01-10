import React, {useState} from 'react'

export default function OwlDots({onClickHandler}) {
    const [toggle, settoggle] = useState(true);
    return (
        <div className="owl-dots">
            <button type="button" className={toggle ? "owl-dot active" : "owl-dot"} 
                onClick = {() => {
                    onClickHandler(-3);
                    settoggle(true);
                }}><span></span></button>
            <button type="button" className={toggle ? "owl-dot" : "owl-dot active"} 
                onClick = {() => {
                    onClickHandler(3);
                    settoggle(false);
                }}><span></span></button>
        </div>
    )
}
