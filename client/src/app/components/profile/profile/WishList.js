import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import HeadingBar from '../common/HeadingBar';

import { favorilerim, getFavoriItems, deleteFavoriItems } from '../../../../features/products/favoriSlice';

export default function WishList() {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFavoriItems())
    },[dispatch]);

    const favoriItems = useSelector(favorilerim);
    return (
        <div className="tab-pane fade active show">
            <div className="row">
               <HeadingBar heading="Beğendiklerim" 
               veri={`${favoriItems.favorilerim.length} Ürün`} />
            </div>
            <div className="row gutter-2">
                <div className="col-md-6 col-lg-4">
                    {favoriItems.favorilerim.map(item => {
                        return(
                            <div className="product" key={item._id}>
                                <figure className="product-image">
                                    <button className="btn btn-ico btn-rounded btn-white" 
                                    onClick={()=> dispatch(deleteFavoriItems(item._id))}>
                                        <i className="fas fa-trash-alt"></i></button>
                                    <Link to={"details/" + item.productId}>
                                        <img src={item.imagePath1} alt="product" 
                                        style={{width:"100%", maxHeight:"210px", 
                                        objectFit:"cover", objectPosition:"center"}}/>
                                    </Link>
                                </figure>
                                <div className="product-meta">
                                    <h3 className="product-title"> {item.isim} </h3>
                                    <div className="product-price">
                                    <span> { item.indirim ? item.indirim : item.fiyat } ₺ </span>
                                    <span className="product-action">
                                        <button className="btn btn-block">İncele</button>
                                    </span>
                                    </div>
                                    <Link to="/" className="product-like"></Link>
                                </div>
                            </div>
                        )

                    })}
                    
                </div>
            </div>
        </div>
    )
}
