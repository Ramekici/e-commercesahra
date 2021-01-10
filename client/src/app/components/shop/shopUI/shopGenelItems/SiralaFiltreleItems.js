import React from 'react';
import { useDispatch } from 'react-redux';
import Sirala from '../../shopItem/Sırala';
import { setFilterModalToggle } from '../../../../../features/modals/modalSlice';

export default function SiralaFiltreleItems({products, onClickHandler}) {
    const dispatch = useDispatch();
    return (
        <div className="row">
            <div className="col">
                <div className="row gutter-1 gutter-md-2 align-items-center">
                    <div className="col-md-6">
                        <span className="eyebrow"> {products.urunler ? products.urunler.maxProducts : null} Ürün </span>
                    </div>
                    <div className="col-md-6 text-md-right">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <Sirala onClickHandler = {onClickHandler} />
                            <button onClick={()=> dispatch(setFilterModalToggle())}
                                type="button" className="btn btn-sm btn-outline-secondary"> 
                                Filtrele 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
