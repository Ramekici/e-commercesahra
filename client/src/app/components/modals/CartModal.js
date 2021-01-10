import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { productCart } from '../../../features/products/cartSlice';
import { cartModalStatus, setCartModalToggle } from '../../../features/modals/modalSlice';
import { selectAuth } from '../../../features/auth/authSlice'
import CartModalItem from '../cart/CartUI/CartModalItem';

export default function CartModal() {
  const sepetim = useSelector(productCart);
  const cartStatus = useSelector(cartModalStatus);
  const isAuth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const [cartPosition, setcartPosition] = useState("modal fade sidebar");

  useEffect(() => {
    if (cartStatus) {
      setcartPosition("modal fade sidebar show d-block");
    } else {
      setcartPosition("modal fade sidebar");
    }
  },[cartStatus])
    return (
    <div className={cartPosition} tabIndex="-1" >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="cartLabel"> Sepetim </h5>
            <button type="button" className="close" onClick={()=> dispatch(setCartModalToggle())} >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row gutter-3">
              {sepetim ? sepetim.map(sepet => {
                      return (<CartModalItem 
                              isim = {sepet.isim}
                              fiyat = {sepet.fiyat}
                              image1 = {sepet.imagePath1}
                              id = {sepet._id}
                              productId = {sepet.productId}
                              renk ={sepet.renk}
                              key = {sepet._id}
                              count = {sepet.count}
                        />)
              }): null}
            </div>
          </div>
          <div className="modal-footer">
            <div className="container-fluid">
              <div className="row gutter-0">
                <div className="col d-none d-md-block">
                  <Link to="/cart" onClick={()=> dispatch(setCartModalToggle())}
                  className="btn btn-lg btn-block btn-secondary"> Sepete Git </Link>
                </div>
                <div className="col">
                  <Link to={isAuth.isAuthenticated ? "/checkout" : "/auth" } 
                    onClick={()=> dispatch(setCartModalToggle())}
                  className="btn btn-lg btn-block btn-primary"> Ödeme </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
