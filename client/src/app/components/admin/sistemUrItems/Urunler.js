import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../../shop/shopUI/shopGenelItems/Shop.scss';
import { setGosterilen } from '../../../../features/profiles/profilesSlice';
import {deleteProducts, getProductDetail} from '../../../../features/products/productSlice';
export default function Urunler({pId, indirim, fiyat, image1, marka, sektor, product, renk}) {
    
    const dispatch = useDispatch();

    return (
            <div className="col-lg-3 col-md-6 col-sm-6 px-2 mb-4">
                <div className="card product-card">
                    <Link className="card-img-top d-block overflow-hidden" to={"/details/"+ pId}>
                        <img src= {image1} alt="Product" 
                        style={{maxHeight:"200px", objectFit:"cover", objectPosition:"center", margin:"auto"}}/>
                    </Link>
                    <div className="card-body py-2">
                        <Link className="product-meta d-block font-size-xs pb-2 text-capitalize" to="/"> {sektor} </Link>
                        <h3 className="product-title d-block text-capitalize"> {marka}</h3>
                        <div className="d-flex justify-content-between">
                            <div className="product-price">
                                <span className="text-accent pr-1"> {indirim ? indirim : fiyat} ₺ </span>
                                {indirim ? <del className="font-size-sm text-red"> {fiyat} ₺ </del> : null}
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="text-center pb-2">
                            {renk.map((item, i) => {
                              return(   <div className="custom-control custom-option custom-control-inline mb-2" key={i+13244}>
                                            <input className="custom-control-input" type="radio" name="color1" id={i+13244}/>
                                            <label className="custom-option-label rounded-circle" htmlFor={i+13244}>
                                                <span className="custom-option-color rounded-circle" style={{backgroundColor: `${item}`}}></span>
                                            </label>
                                        </div> )
                            })}
                        </div>
                        <div className="row">
                            <div className="col-6 text-center">
                                <button className="nav-link-style font-size-ms underline" 
                                style={{border:"none", color:"red"}}
                                    type="button" onClick={()=> dispatch(deleteProducts(pId))}>
                                    <i className="fas fa-trash-alt font-size-sm mr-1"></i>
                                    Sil
                                </button>
                            </div>
                            <div className="col-6 text-center">
                                <Link className="nav-link-style font-size-ms underline text-blue" 
                                to={"/admin/edit/"+ pId} 
                                onClick={()=> {
                                    dispatch(setGosterilen(2));
                                    dispatch(getProductDetail(pId));
                                    }}>
                                <i className="fas fa-edit mr-1"></i> Gncl </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="d-sm-none"/>
            </div>
    )
}