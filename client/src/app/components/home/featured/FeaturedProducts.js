import React from 'react';
import { Link } from 'react-router-dom';
import UstSekme from './items/UstSekme';
import Product from './items/Product';

export default function FeaturedProducts() {
    return (
        <section className="pb-7">
            <div className="container">
                <div className="row gutter-3 align-items-end">
                    <div className="col-md-8 col-sm-6">
                        <h2>Özel Ürünler</h2>
                    </div>
                    <div className="col-md-4 col-sm-6 text-md-right">
                       <UstSekme/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade active show" id="home" role="tabpanel">
                                <div className="row gutter-2 gutter-md-3">
                                    <Product fiyat={"120"} isim="Nehir"/>
                                    <Product fiyat={"120"} isim="Nilüfer"/>
                                    <Product/>
                                    <Product/>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel">
                                <div className="row gutter-2 gutter-md-3">
                                    <Product/>
                                    <Product/>
                                    <Product/>
                                    <Product/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <Link to={"/shop"} className="btn btn-outline-secondary">Daha Fazlası</Link>
                    </div>
                </div>
            </div>
    </section>
    )
}
