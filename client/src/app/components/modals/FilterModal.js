import React, {useState, useEffect, useRef, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterModalStatus, setFilterModalToggle, 
  setOffsetTrack } from '../../../features/modals/modalSlice';
import {filterPrice, filterMarka, filterRenk, getProductKategori } from '../../../features/products/productSlice';


import FilterCategory from './filterItems/FilterCategory';
import FilterBrand from './filterItems/FilterBrand';
import FilterColor from './filterItems/FilterColor';
import FilterPrice from './filterItems/FilterPrice';

export default function FilterItem() {
  const modalRef = useRef();

  const filterStatus= useSelector(filterModalStatus);
  const filterPrc= useSelector(filterPrice);
  const filterMrk= useSelector(filterMarka);
  const filterRnk= useSelector(filterRenk);
  const dispatch = useDispatch();
  const [filterPosition, setfilterPosition] = useState("modal fade sidebar");
  useEffect(() => {
    if (filterStatus) {
      setfilterPosition("modal fade sidebar show d-block");     
    } else {
      setfilterPosition("modal fade sidebar");
    };
  },[filterStatus]);

  const onTrackHandler= () => {
    dispatch(setOffsetTrack(modalRef.current.offsetLeft));
  }

  const tracker = useCallback(
    () => {
      dispatch(setOffsetTrack(modalRef.current.offsetLeft))
    },
    [dispatch, modalRef],
  )

  const onSubmitFilterHandler = () => {

    const data = {
      marka:[...filterMrk],
      renk:[...filterRnk],
      low:filterPrc.startValue,
      high:filterPrc.endValue
    }
    dispatch(getProductKategori(1, "cuzdan" , "artan", data));  
  }

    return (
          <div className={filterPosition} >
            <div className="modal-dialog" ref={modalRef}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Filtreleme</h5>
                  <button type="button" className="close" onClick={()=> dispatch(setFilterModalToggle())}>
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body" >
                    <FilterCategory/>
                    <FilterBrand/>
                    <FilterColor/>
                    <FilterPrice onTrackHandler={onTrackHandler} tracker={tracker}/>
                </div>
                <div className="modal-footer">
                  <div className="container-fluid">
                    <div className="row gutter-0">
                      <div className="col">
                        <button onClick={() => {
                          onSubmitFilterHandler();
                          dispatch(setFilterModalToggle()) }} 
                        className="btn btn-lg btn-block btn-primary">Filtrele</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}
