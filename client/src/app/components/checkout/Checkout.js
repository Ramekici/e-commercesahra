import React from 'react';
import {Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';

import CheckoutInputArea from './checkoutItems/CheckoutInputArea';
import CheckoutModalAdres from '../modals/CheckoutModalAdres';
import CheckoutModalPayment from '../modals/CheckoutModalPayment';
import { stateOrder } from '../../../features/orders/orderSlice';
import Spinner from '../UI/spinner/Spinner';

const Checkout = (props) => {
    
    const orderStatus = useSelector(stateOrder);

    return (
            <div className="hero">
                <CheckoutModalAdres/>
                <CheckoutModalPayment/>
                {orderStatus.loading ? <Spinner/> : null}
                <section className="no-overflow pt-0">
                    <div className="container">
                        <CheckoutInputArea/>
                    </div>
                </section>
                {orderStatus.completed ? <Redirect to='/order-completed'/> : null}
            </div>);
}


export default Checkout;