import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productCart, getCartItems } from '../../../features/products/cartSlice';
import { selectAuth, setAuthRedirect } from '../../../features/auth/authSlice';
import CartItem from './CartUI/CartItem';
import CartBox from './CartUI/CartBox';
import CartHeader from './CartUI/CartHeader';
import CartTitle from './CartUI/CartTitle';

export default function Cart() {
  const dispatch = useDispatch();
  let location = useLocation();

  const onClickHandler = () => {
    setAuthRedirect(location.pathname);
  }

  useEffect(()=> {
    dispatch(getCartItems())
  },[dispatch]);

  const sepetim = useSelector(productCart);
  const isAuth = useSelector(selectAuth);
  const sepet = sepetim.length > 0 ? (
          <section className="hero pb-5">
            <div className="container">
              <div className="row mb-1 d-none d-lg-flex">
                <div className="col-lg-8">
                  <CartHeader/>
                </div>
              </div>  
              <div className="row gutter-2 gutter-lg-4 justify-content-end">
                <div className="col-lg-8 cart-item-list">
                  {sepetim.map(sepet => {
                    return (<CartItem 
                              isim = {sepet.isim}
                              fiyat = {sepet.fiyat}
                              image1 = {sepet.imagePath1}
                              id = {sepet._id}
                              productId = {sepet.productId}
                              renk ={sepet.renk}
                              key = {sepet._id}
                              count = {sepet.count}
                              />)
                  })}
                </div>
                <div className="col-lg-4">
                  <Link to="/shop" className="btn btn-block btn-secondary my-2">
                    <i className="fas fa-caret-left mr-1"></i>Alışverişe Geri Dön</Link> 
                  <CartBox sepetim={sepetim} />
                  <Link to={isAuth.isAuthenticated ? "/checkout": "/auth"} onClick = {onClickHandler}
                  className="btn btn-primary btn-block mt-2"> Ödeme 
                  <i className="fas fa-caret-right ml-1"></i></Link>     
                </div>
              </div>
            </div>
          </section>) :
          <section className="hero text-center mb-5">
            <h1 className="text-center"> Sepetinizde herhangi bir ürün bulunmamaktadır.</h1>
            <Link to="/shop" className="btn btn-secondary my-2">
              <i className="fas fa-caret-left mr-1"></i>Alışverişe Geri Dön
            </Link>
          </section>;
        return (
          <>
            <CartTitle/>
            {sepet}
          </>
        );
    
}
