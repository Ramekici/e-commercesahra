import React from 'react';

export default function TitleBrandPrice({isim, marka, fiyat, indirim}) {
    return (
        <div>
            <span className="item-brand"> {marka} </span>
            <h1 className="item-title text-capitalize"> {isim} </h1>
            <span className="item-price">
            <s className="text-muted text-red"> {indirim ? fiyat : null } ₺ </s> 
            {indirim ? indirim : fiyat} ₺ </span>
        </div>
    )
}
