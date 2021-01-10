import React from 'react';
import {Link} from 'react-router-dom';
import Canta from '../../../../../assets/canta/bebek.jpg';
import Cuzdan from '../../../../../assets/canta/bebekCantas.jpg';

export default function Product({fiyat, isim}) {
    return (
        <div className="col-6 col-lg-3">
            <div className="product">
                <button className="btn-wishlist btn-sm" type="button" 
                    style={{zIndex:"20", position:"absolute", right:"1.3em", top:"1.3em"}}
                    data-original-title="Favorilere Ekle">
                    <i className="far fa-heart"></i>
                </button>
                <figure className="product-image">
                    <Link to="/shop">
                        <img src={Canta} alt="Imagem"/>
                        <img src={Cuzdan} alt="Imagem"/>
                    </Link>
                </figure>
                <div className="product-meta">
                    <h3 className="product-title">
                    <a href="product-classNameic.html"> {isim} </a></h3>
                    <div className="product-price">
                    <span> {fiyat} ₺ </span>
                    <span className="product-action">
                        <button style={{border:"none", color:"red"}}>Sepete Ekle</button>
                    </span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
