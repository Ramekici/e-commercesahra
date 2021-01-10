import React from 'react';
import '../../../../../scss/variables/owl-carousel.css';

export default function ButtonBack({geri, onChanged }) {

    return (
        <button type="button" role="presentation" 
            className= {geri ? "owl-prev": "owl-prev disabled"} 
            onClick={onChanged}>
            <span aria-label="Previous">‹</span>
        </button>
    )
}
