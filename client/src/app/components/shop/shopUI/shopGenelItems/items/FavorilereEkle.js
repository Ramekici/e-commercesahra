import React from 'react';
import { useDispatch } from 'react-redux';
import { sendFavoriItems } from '../../../../../../features/products/favoriSlice';

export default function FavorilereEkle({product}) {
    const dispatch = useDispatch();

    return (
        <button className="btn-wishlist btn-sm" type="button"
            onClick={()=> dispatch(sendFavoriItems(product)) } 
            data-toggle="tooltip" data-placement="left" title="" 
            data-original-title="Favorilere Ekle">
            <i className="far fa-heart"></i>
        </button>
    )
}
