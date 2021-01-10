import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CartIncDecBut from './CartIncDecBut';

import { deleteCartItems } from '../../../../features/products/cartSlice';

export default function CartModalItem({isim, fiyat, image1, renk, id, count, productId}) {
    const dispatch = useDispatch();
    const delCartproduct = (id) => {
        dispatch(deleteCartItems(id))
    }
    return (
        <div className="col-12">
            <div className="cart-item cart-item-sm">
                <div className="row align-items-center">
                    <div className="col-lg-9">
                      <div className="media media-product align-items-center">
                        <Link to={"details/" + id}>
                            <img src= {image1} alt="product"/>
                        </Link>
                        <div className="media-body">
                            <h5 className="media-title text-capitalize"> {isim} </h5>
                            <span className="media-subtitle"> Renk: 
                            <span className="media-subtitle"
                            style={{ zIndex:10, color:`${renk}`, textTransform:"capitalize"}}>
                                {renk}
                            </span>
                            </span>    
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 text-center text-lg-right">
                        <span className="cart-item-price"> {fiyat} ₺ </span>
                    </div>
                    <button onClick= {() => delCartproduct(productId)} className="cart-item-close">
                        <i className="fas fa-times text-red"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
