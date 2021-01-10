import React from 'react';
import { Link } from 'react-router-dom';

export default function AllProducts() {
    return (
        <section className="my-7">
            <div className="container">
                <div className="row">
                <div className="col">
                    <div className="banner bg-purple px-2 py-3 px-md-4 py-md-5 text-white">
                    <div className="decoration decoration-top"></div>
                    <div className="row align-items-center gutter-1 gutter-md-4 text-center text-md-left">
                        <div className="col-md-6">
                        <h3 className="text-uppercase mb-0">
                            <b>FIRSAT</b> ÜRÜNLERİNDE <b> 50% İNDİRİM</b>
                        </h3>
                        </div>
                        <div className="col-md-6 text-md-right">
                        <Link to="/shop" className="btn btn-outline-white text-white">Tüm Ürünleri Göster</Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
