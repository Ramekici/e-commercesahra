import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderPreview(props) {
    return (

        <div className="card card-data bg-light">
          <div className="card-header py-2 px-3">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="fs-18 mb-0"> Sepetim </h3>
              </div>
              <div className="col text-right">
                <Link to="/cart"  className="underline eyebrow"> Güncelle </Link>
              </div>
            </div>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-line">
              {props.sepetim.map(urun => {
                return (
                  <li className="list-group-item d-flex justify-content-between 
                  text-dark align-items-center" key={urun._id}>
                    {urun.isim.toUpperCase()} x {urun.count}
                  <span> {urun.fiyat * urun.count} ₺</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
    )
}
