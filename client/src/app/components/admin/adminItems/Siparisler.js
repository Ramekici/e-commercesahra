import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderData, stateOrder } from '../../../../features/orders/orderSlice';
import OrderBox from '../../profile/common/OrderBox';

export default function Siparisler() {
    const dispatch = useDispatch();
    const orderData = useSelector(stateOrder);
    
    useEffect(() => {
        dispatch(getOrderData());
      }, [dispatch])

    return (
        <section className="row gutter-2 mb-2">
            {orderData.map(item=> {
                return <OrderBox
                orderAdres= {item.adres}
                tip = "admin"
                nameButton='Sipariş Onayla'
                yonlendir = "/admin/siparisler"
                orderId = {item._id} 
                orderData={item.urunler} key={item._id}/>
            })}
        </section>
    )
}
