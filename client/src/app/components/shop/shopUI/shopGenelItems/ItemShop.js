import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../../features/products/cartSlice';
import * as actionAuth from '../../../../../features/auth/authSlice';

import './Shop.scss';

import FavorilereEkle from './items/FavorilereEkle';
import Info from './items/Info';

export default function ItemShop({pId, indirim, fiyat, image1, marka, sektor, product, renkler}) {
    
    const dispatch = useDispatch();
    const [renk, setrenk] = useState(renkler[0]);
    const sepetim = useSelector(actions.productCart);
    const isAuth = useSelector(actionAuth.selectAuth);

    const onChangeHandler = (e) => {
        setrenk(e.target.value);    
        e.preventDefault();
    }

    const addToCart = (product, count) => {
        const payload = {product:product, count: count, renk:renk }
        dispatch(actions.sendCartItems(payload));
    }

    const [inCart, setinCart] = useState(false);
    useEffect(() => {
        const inCarted = sepetim.find(urun => urun.productId === pId);
        setinCart(inCarted);
    }, [pId, sepetim])
    
    const renklerim = renkler.map(item => {
        return(   
        <div className="custom-control custom-option custom-control-inline mb-2" key={pId+item}>
          <input className="custom-control-input" type="radio" 
            value={item} id={pId+item} check="false"
            onClick={onChangeHandler}/>
          <label className="custom-option-label rounded-circle" 
            style={renk === item ? {border:"1px solid red"}: {border:"1px solid black"}}
            htmlFor={pId+item}>
              <span className="custom-option-color rounded-circle" 
              style={{backgroundColor: `${item}`}}></span>
          </label>
        </div> )
      })

    return (
            <div className="col-lg-3 col-md-6 col-sm-6 px-2 mb-4">
                <div className="card product-card">
                    <span className="badge badge-danger badge-shadow"> Yeni </span>
                    {isAuth.isAuthenticated ?  <FavorilereEkle product= {product} /> : null}
                    <Link className="card-img-top d-block overflow-hidden" to={"/details/"+ pId}>
                        <img src= {image1} alt="Product" 
                        style={{width:"100%", maxHeight:"210px", objectFit:"cover", objectPosition:"center"}}/>
                    </Link>
                    <Info sektor= {sektor}
                    indirim={indirim} fiyat={fiyat} marka={marka} product={product}/>
                    <div className="card-body card-body-hidden">
                        <div className="text-center pb-2">
                        {renklerim}
                        </div>
                        <div className="row">
                            <div className="col-7 text-center mb-2">
                                {!inCart ? 
                                <button className="nav-link-style font-size-ms underline" style={{color:"orange", border:"none"}}
                                    onClick={() => addToCart(product, 1)}> 
                                    <i className="fas fa-shopping-cart font-size-sm mr-1"></i> Sepete Ekle 
                                </button> :  
                                <button className="nav-link-style font-size-ms underline" style={{color:"red", border:"none"}}
                                    onClick = {()=> dispatch(actions.deleteCartItems(pId))}> 
                                    <i className="fas fa-trash-restore-alt font-size-sm mr-1"></i> Sepette 
                                </button> 
                                }
                            </div>
                            <div className="col-5 text-center">
                                <Link className="nav-link-style font-size-ms underline" to={"/details/"+ pId}>
                                <i className="fas fa-eye align-middle mr-1"></i> İncele </Link>
                            </div>
                            </div>
                        </div>
                </div>
                <hr className="d-sm-none"/>
            </div>
    )
}
