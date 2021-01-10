import React from 'react';
import OrderPreview from './OrderPreview';
import CartBox from '../../../cart/CartUI/CartBox';


export default function CheckoutRight({cart}) {
    
    return (
        <aside className="col-lg-4">
            <div className="row">
                <div className="col-12">
                    <OrderPreview sepetim={cart}/>
                </div>
                <div className="col-12 mt-1">
                    <CartBox sepetim={cart}/> 
                </div>
                <div className="col-12 mt-1">
                <button className="btn btn-primary btn-lg btn-block" type="submit">
                                        Sipariş Ver</button>
                </div>
            </div>
        </aside>
    )
}
