import React from 'react';
import '../../../../../scss/variables/owl-carousel.css';

export default function ButtonNext({ileri, onChanged}) {
    return (
        <button type="button" role="presentation" 
        className={ileri ? "owl-next" : "owl-next disabled"} 
        onClick={onChanged}>
            <span aria-label="Next">›</span>
        </button>
    )
}
