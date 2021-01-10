import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartIncDecBut from './CartIncDecBut';

import { deleteCartItems } from '../../../../features/products/cartSlice';

export default function CartItem({isim, fiyat, image1, renk, id, count, productId}) {
    const dispatch = useDispatch();
    const delCartproduct = (productId) => {
        dispatch(deleteCartItems(productId))
    }

    return (
        <div className="cart-item">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                    <div className="media media-product align-items-center">
                        <Link to={"details/" + id }>
                            <img src= {image1} alt="products"/></Link>
                            <div className="media-body">
                                <h5 className="media-title" style={{textTransform:"capitalize"}}> {isim} </h5>
                                <span className="small"> Renk: </span>
                                <span className="small"
                                    style={{ zIndex:10, color:`${renk}`, textTransform:"capitalize"}}>
                                        {renk}
                                </span> 
                            </div>
                    </div>
                </div>
                <div className="col-4 col-lg-2 text-center">
                    <span className="cart-item-price"> {fiyat} ₺ </span>
                </div>
                <CartIncDecBut count={count} id={id} productId={productId}/>
                <div className="col-4 col-lg-2 text-center">
                    <span className="cart-item-price"> {fiyat * count} ₺ </span>
                </div>
                <button className="cart-item-close" onClick= {() => delCartproduct(productId)}>
                    <i className="text-red fas fa-times"></i>
                </button>
            </div>
        </div>
    )
}
