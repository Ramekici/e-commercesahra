import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import Rating from './Rating';

export default function Info({sektor, indirim, fiyat, marka, product}) {

    const [ort, setort] = useState(0);
    useEffect(() => {
        let puanOrtalamas = 0;
        product.yorumlar.map(item => {
            return puanOrtalamas = puanOrtalamas + item.puan;
        });
        setort(puanOrtalamas/product.yorumlar.length);
    }, [product.yorumlar]);
    
    
    return (
        <div className="card-body py-2">
            <Link className="product-meta d-block font-size-xs pb-2 text-capitalize" 
                to={"/shop/" + sektor}> {sektor} 
            </Link>
            <h3 className="product-title d-block text-capitalize">
                <p> {marka} </p>
            </h3>
            <div className="d-flex justify-content-between">
                <div className="product-price">
                    <span className="text-accent pr-1"> {indirim ? indirim : fiyat} ₺ </span>
                    {indirim ? <del className="font-size-sm text-red"> {fiyat} ₺ </del>: null}
                </div>
                <div className="star-rating">
                    <Rating puan={ort}/>
                </div>
            </div>
        </div>
    )
}
