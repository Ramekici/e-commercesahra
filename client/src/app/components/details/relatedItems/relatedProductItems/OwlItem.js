import React from 'react';
import { Link } from 'react-router-dom';


export default function OwlItem({image, pId , isim, indirim, fiyat, imageWidths, cloned}) {

    return (
        <div className={ cloned ? "owl-item active" : "owl-item cloned"} style={{width: `${imageWidths}px`, marginRight: "10px"}}>
          <div className="product">
            <figure className="product-image">
              <Link to={'/details/' + pId}>
                <img src={image} alt="ImageS"/>
              </Link>
            </figure>
            <div className="product-meta">
              <h3 className="product-title">
              <a href="#!"> {isim} </a></h3>
              <div className="product-price">
                <span> {indirim ? indirim : fiyat} ₺ </span>
                <span className="product-action">
                  <a href="#!"> Sepete Ekle </a>
                </span>
              </div>
              <a href="#!" className="product-like">..</a>
            </div>
          </div>
        </div>
    )
}
