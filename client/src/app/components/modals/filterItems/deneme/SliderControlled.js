import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {setPriceItems} from '../../../../../features/products/productSlice';
import RangeSlider from './RangeSlider';
import './styles.css';


const SliderControlled  = ({onTrackHandler}) => {

  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(750);
  const dispatch = useDispatch();

  const onChange = (s, e) => {
    setStartValue(s);
    setEndValue(e)
  };

  useEffect(()=> {
    const fiyat = {startValue, endValue};
    dispatch(setPriceItems(fiyat));

  }, [dispatch, startValue, endValue])


    return (
        <div className="irs irs--flat js-irs-0">
          <RangeSlider
            step={10}
            valueStart={startValue}
            valueEnd={endValue}
            min={0}
            max={1000}
            onChange={onChange}
            onTrackHandler={onTrackHandler}
          />
        </div>
    );
  }

export default SliderControlled;