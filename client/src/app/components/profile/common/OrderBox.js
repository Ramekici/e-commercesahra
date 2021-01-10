import React from 'react';
import  { Link } from 'react-router-dom';

export default function OrderBox({orderId, orderData, orderStatus, 
  yonlendir, nameButton, tip, orderAdres}) {
    return (
      <div className="col-12">
        <div className="order">
          <div className="row align-items-center">
            <div className="col-lg-3">
                <h4 className="order-number">Sipariş Kodu: {orderId.slice(16,24).toUpperCase()}</h4>
                <Link to={yonlendir + orderId } 
                className="eyebrow underline"> {nameButton} </Link>
            </div>
            { tip === "admin" ? 
            <div className="col-lg-3">
              <span> {orderAdres.adres} </span>
              <span> {orderAdres.ilce} </span>
              <span> {orderAdres.il} </span>
              <span> {orderAdres.telefon} </span>
            </div>
              :<div className="col-lg-3">
                <span className="order-status"> {orderStatus} </span>
              </div>} 
            <div className="col-lg-6">
              <ul className="order-preview justify-content-end">
                {orderData.map(item => {
                  return <li key={item._id}>
                            <Link to="product-1.html" title={item.marka} data-toggle="tooltip" 
                            data-placement="top" 
                            data-original-title={item.marka}>
                            <p>{item.marka}</p>
                            <img src={item.imagePath} 
                            alt={item.marka}/>
                            </Link>
                        </li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}
