import React, { useEffect, useState } from 'react';
import ShopGenel from '../shopUI/ShopGenel';
import { useSelector, useDispatch } from 'react-redux';
import { productStatus, getProductKategori } from '../../../../features/products/productSlice';

export default function BayanCanta() {
    const [sorting, setsorting] = useState("artan");
    const dispatch = useDispatch();
    const products = useSelector(productStatus);
    useEffect(() => {
        dispatch(getProductKategori(products.pageNumber, "canta" , sorting));   
    }, [dispatch, products.pageNumber, sorting])
    const onSortHandler = (el) => {
        setsorting(el);
    }

    return (
        <div data-dismiss="modal" aria-label="close">
            <ShopGenel products={products} onClickHandler = {onSortHandler}/>
        </div>)
}
