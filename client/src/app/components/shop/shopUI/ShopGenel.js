import React from 'react';
import Spinner from '../../UI/spinner/Spinner';
import Pagination from './shopGenelItems/Pagination';
import FilterModal from '../../modals/FilterModal';
import SiralaFiltreleItems from './shopGenelItems/SiralaFiltreleItems';
import ItemShop from './shopGenelItems/ItemShop';

export default function ShopGenel({products, onClickHandler}) {
    
    return (
        <section className="hero">
            <FilterModal/>
            <div className="mt-4">
                <div className="container">
                    <SiralaFiltreleItems products={products} onClickHandler={onClickHandler}/>
                    <div className="row">
                        <div className="col">
                            <div className="row gutter-2 gutter-lg-3">
                            {products.urunler ? products.urunler.products.map(product => {
                                return (
                                <ItemShop key={product._id}
                                    product={product}
                                    pId={product._id}
                                    sektor = {product.sektor}
                                    marka = {product.isim}
                                    fiyat= {product.fiyat}
                                    indirim= {product.indirim}
                                    image1= {product.imagePath1}
                                    renkler = {product.renk} />  
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
            </div>
        </section>
    )
}
