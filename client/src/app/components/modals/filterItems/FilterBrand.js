import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productStatus, getProductMarka, setFilterMarka, deleteFilterMarka} from '../../../../features/products/productSlice';

export default function FilterBrand() {
  const products = useSelector(productStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductMarka());
  }, [dispatch])

  const handleInputChangeItem = (event) => {
    if(event.target.checked) {
      dispatch(setFilterMarka(event.target.value));
    } else if (!event.target.checked) {
      dispatch(deleteFilterMarka(event.target.value));
    }
  }
    return (
            <div className="widget">
              <span className="widget-collapse d-lg-none" data-toggle="collapse" 
                data-target="#collapse-2" aria-expanded="false" 
                aria-controls="collapse-2" role="button">
                Markaları Filtreleme
              </span>
              <div className="d-lg-block collapse" id="collapse-2">
                <span className="widget-title">Markalar</span>
                <div className="widget-content">
                  <ul>
                    {products.markalar ? products.markalar.map((item, i) => {
                      return (
                        <li key={i}>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" value={item} check="false"
                              onChange={handleInputChangeItem} id={i+1200} />
                            <label className="custom-control-label text-capitalize" htmlFor={i+1200}> {item} </label>
                          </div>
                        </li>)
                    }): null}
                  </ul>
                </div>
              </div>
            </div>
    )
}
