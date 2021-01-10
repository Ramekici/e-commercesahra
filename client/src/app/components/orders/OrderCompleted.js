import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  { stateOrder } from '../../../features/orders/orderSlice';

export default function OrderCompleted() {
    const order = useSelector(stateOrder);

    return (
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
                            <div className="mb-7" style={{fontSize:"3rem"}}><span role="img" aria-label="kalp">❤️</span></div>
                            <h2 className="mb-5"> Siparişiniz Başarıyla Tamamlandı! </h2>
                            <p className="mb-7 text-gray-500">
                                Sipariş Numarası: <span className="text-body underline text-orange"> {order.status.paymentId} </span> 
                             Kişisel hesabınızdan sipariş durumunu takip edebilirsiniz.
                            </p>
                            <Link className="btn btn-dark" to={"/profile/" + order.lastOrderId}>
                            Siparişimi Görüntüle
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
    )
}
