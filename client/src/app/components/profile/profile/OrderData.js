import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { stateUserOrder, getOrderDataUser } from '../../../../features/orders/orderSlice';
import { selectAuth } from '../../../../features/auth/authSlice';

import HeadingBar from '../common/HeadingBar';
import OrderBox from '../common/OrderBox';
import Pagination from '../../UI/pagination/Pagination';


export default function OrderData() {

  const dispatch = useDispatch();
  const orderData = useSelector(stateUserOrder);
  const authData = useSelector(selectAuth);

  useEffect(() => {
    dispatch(getOrderDataUser(authData.userId))
  }, [dispatch, authData])

  const [gosterilenOrder, setGosterilenOrder] = useState(orderData.slice(0, 4));
  const [aktifSyf, setaktifSyf] = useState(1);

  const onSetPage = (i) => {
    setaktifSyf(i+1);
  }

  useEffect(() => {
    setGosterilenOrder(orderData.slice((aktifSyf-1)*4, (aktifSyf-1)*4+4))
  }, [aktifSyf, orderData]);

    return (
        <div className="tab-pane fade show active">
         { orderData.length > 0 ?
        <div className="row">
          <div className="col-6">
            <HeadingBar heading="Siparişlerim" veri={orderData.length + " Sipariş"}/>
          </div>
          { orderData.length > 4 ?
          <div className="col-6" style={{display: "flex", justifyContent : "flex-end"}}>
              <Pagination pageLength = {orderData.length} 
                maxEl={4} setPage= {onSetPage} aktifSyf={aktifSyf}/>
          </div> : null}
        </div> : 
        <p>Kayıtlı siparişiniz bulunmamaktadır.</p>}
      <div className="row gutter-2">
        {gosterilenOrder.map(order => {
          return (
            <OrderBox
              key = {order._id}
              yonlendir = "/account-orders/"
              nameButton='Siparişi Görüntüle'
              orderId = {order._id}
              orderData= {order.urunler}
              orderStatus= {order.orderStatus}
              orderCost= {order.orderCost}/>
          )
        })}
      </div>
    </div>
    )
}
