import React, {useEffect} from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import { productStatus, getProducts } from '../../../../features/products/productSlice';
import GenelShop from '../sistemUrItems/GenelShop';

const SistemUrunleri = (props) => {
    const dispatch = useDispatch();
    const products = useSelector(productStatus);

    useEffect(() => {
      dispatch(getProducts(products.pageNumber, "artan"));
    },[dispatch, products.pageNumber]);
    return <GenelShop products={products}  />
    
}
export default SistemUrunleri;
