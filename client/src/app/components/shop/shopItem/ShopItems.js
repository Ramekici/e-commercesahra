import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { sendCartItems } from '../../../../../features/products/cartSlice';

export default function ShopItems({pId, pName, price, image1, image2, product, renk1}) {
  const dispatch = useDispatch();
  const addToCart = (product, count, renk) => {
    const payload = {product:product, count: count, renk:renk}
    dispatch(sendCartItems(payload));
  }
  return (
        <div className="col-6 col-lg-3">
            <div className="product">
                  <figure className="product-image">
                    <Link to={"details/"+ pId}>
                      <img src= {image1} alt="products2"/>
                      <img src= {image2} alt="products1"/>
                    </Link>
                  </figure>
                  <div className="product-meta">
                    <h3 className="product-title text-capitalize"><Link to={"details/"+ pId}> {pName} </Link></h3>
                    <div className="product-price">
                        <span> {price} ₺</span>
                        <span className="product-action">
                        <Link to="/cart" type="button" onClick={() => addToCart(product, 1, renk1)}> Sepete Ekle </Link>
                        </span>
                        <span className="product-action">
                        <Link to={"/details/" + pId}> İncele </Link>
                        </span>
                    </div>
                    <Link to="/account-wishlist" className="far fa-heart product-like"></Link>
                  </div>
                </div>
            </div> 
    )
}


