import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { productCart, sendCartItems, deleteCartItems} from '../../../../../features/products/cartSlice';


import SharingProduct from './SharingProduct';


export default function SepetEkle({detailP, id, renk}) {
    const dispatch = useDispatch();
    const sepetim = useSelector(productCart);
    const [inCart, setinCart] = useState(false);
    useEffect(() => {
        let inCarted = sepetim.find(urun => urun.productId === id);
        setinCart(inCarted);
    }, [id, sepetim])

    const addToCart = (product, count, renk) => {
        const productData = {product: product, count: count, renk: renk ? renk : detailP.renk[0]}
        dispatch(sendCartItems(productData));
    }
    return (
        <div className="row">
            <div className="col-md-8">
                {!inCart ? <button className="btn btn-block btn-lg btn-primary"
                onClick={() => addToCart(detailP, 1, renk)}> Sepete Ekle </button> :
                <button className="btn btn-block btn-lg btn-secondary"
                onClick = {()=> dispatch(deleteCartItems(id))}> Ürünü Sepetten Çıkar </button> 
                }
            </div>
            <div className="col-12 mt-1">
                <ul className="nav nav-actions">
                    <li className="nav-item">
                        <Link to={"/account-wishlist"} className="nav-link"> Favorilere Ekle </Link>
                    </li>
                    <SharingProduct />
                </ul>
            </div>
        </div>
    )
}
