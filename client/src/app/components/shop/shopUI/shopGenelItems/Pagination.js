import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { productStatus, setPageNumber } from '../../../../../features/products/productSlice';

export default function Pagination() {

    const dispatch = useDispatch();
    const products = useSelector(productStatus);
    const maxCount = products.urunler ? Math.ceil(products.urunler.maxProducts / 12) : null;
    var rows = [];
    for (let i = 1; i < maxCount+1; i++) {
        rows.push( 
            <li className="page-item" key={i} >
                <button className="page-link"  onClick = {
                    (e) => {
                        e.preventDefault();
                        dispatch(setPageNumber(i));
                    }
                } aria-current="page"> {i} </button>
            </li>
        );
    }

    return (
        <ul className="pagination">
            {rows}             
        </ul>
    )
}
