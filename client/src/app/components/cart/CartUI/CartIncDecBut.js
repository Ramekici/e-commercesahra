import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCartItemCount } from '../../../../features/products/cartSlice';


export default function CartIncDecBut({id, count, productId}) {
    const [countEl, setcountEl] = useState(count);
    const onIncCount = () => {
        if(countEl < 10) {
            setcountEl(countEl+1);
            dispatch(updateCartItemCount(id, countEl+1)); 
        }
    }
    const onDecCount = () => {
        if(countEl > 1) {
            setcountEl(countEl-1);
            dispatch(updateCartItemCount(id, countEl-1)); 
        } 
    }
    const dispatch = useDispatch();
    
    return (
        <div className="col-4 col-lg-2 text-center">
            <div className="counter">
                <span className="counter-minus fas fa-minus" onClick={() => onDecCount()}></span>
                    <input type="number" className="counter-value" 
                            value= {countEl} readOnly/>
                <span className="counter-plus fas fa-plus"  onClick={() => onIncCount()}></span>
            </div>
        </div>
    )
}
