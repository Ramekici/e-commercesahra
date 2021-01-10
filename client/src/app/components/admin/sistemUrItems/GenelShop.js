import React from 'react';
import Spinner from '../../UI/spinner/Spinner';
import Pagination from '../../shop/shopUI/shopGenelItems/Pagination';
import Urunler from './Urunler';

export default function GenelShop({products}) {
    
    return (
            <section className="mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row gutter-2 gutter-lg-4">
                            {products.urunler ? products.urunler.products.map(product => {
                                return (
                                <Urunler key={product._id}
                                    product={product}
                                    pId={product._id}
                                    sektor = {product.sektor}
                                    marka = {product.isim}
                                    fiyat= {product.fiyat}
                                    indirim= {product.indirim}
                                    image1= {product.imagePath1}
                                    renk = {product.renk} />  
                                )
                            }) : <Spinner/>}    
                            </div>
                            <div className="row">
                                <div className="col">
                                    <nav className="d-inline-block">
                                        <Pagination/>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
