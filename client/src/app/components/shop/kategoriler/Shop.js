import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import { productStatus, getProducts } from '../../../../features/products/productSlice';
import ShopGenel from '../shopUI/ShopGenel';


const Shop = (props) => {
    const [sorting, setsorting] = useState("artan");
    const dispatch = useDispatch();
    const products = useSelector(productStatus);
    const onSortHandler = (el) => {
      setsorting(el);
    }

    useEffect(() => {
      dispatch(getProducts(products.pageNumber, sorting));
    },[dispatch, products.pageNumber, sorting]);
    return <ShopGenel products={products} onClickHandler = {onSortHandler} />
    
}
export default Shop;
