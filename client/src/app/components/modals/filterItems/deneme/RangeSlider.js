import React, { useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {offsetTrackStatus} from '../../../../../features/modals/modalSlice';
import Track from './Track';
import HighlightedTrack from './HighlightedTrack';
import Handle from './Handle';
import './styles.css';
import {has, getValueOrAlt} from './utils/common';

const RangeSlider = ({ min, max, step, tabIndex, valueStart, valueEnd, 
  onChange, onTrackHandler}) => {
  const offsetTrack = useSelector(offsetTrackStatus);
  const [start, setstart] = useState(valueStart);
  const [end, setend] = useState(valueEnd);
  const [trackLength, settrackLength] = useState(0);
  const [handleSize, sethandleSize] = useState(0);
  const [factor, setfactor] = useState(1);


  const _setTrackDimensions = (track) => {
    if (track) {
      const trackLength = track.clientWidth;
      settrackLength(trackLength);
    }
  };

  const _setHandleSize = (handle) => {
    if (handle) {
      const handleSized = handle.clientWidth;
      if (handleSize === 0) {
       sethandleSize(handleSized);
      }
    }
  };

  const _startHandleMove = (increase) => {
    const newStart = _getStartValue(getValueOrAlt(start, min) + increase * step);
    if (newStart !== start) {
      _updateState(newStart, end);
      _onChange(newStart, end);
    }
  };

  const _endHandleMove = (increase) => {
    const newEnd = _getEndValue(getValueOrAlt(end, max) + increase * step);
    if (newEnd !== end) {
        _updateState(start, newEnd);
        _onChange(start, newEnd);
    }
  };

  const _onWrapperMouseDown = (event) => {
    onTrackHandler();
    _moveHandleToPosition(event.pageX);
  };

  const _onWrapperTouchStart = (event) => {
    if (event.touches.length === 1) {
      event.preventDefault();
      _moveHandleToPosition(
        event.touches[0].pageX
      );
    }
  };

  const _moveHandleToPosition = (position) => {
      const startPosition = getValueOrAlt(start/10, min);
      const endPosition = getValueOrAlt(end/10, max);
      let mouseDownPosition = (position - offsetTrack - 44) /factor;
      if (Math.abs(mouseDownPosition - startPosition) < Math.abs(mouseDownPosition - endPosition) ||
        mouseDownPosition < startPosition) {
        let newStarts = _getStartValue(mouseDownPosition.toFixed()*10);
        if (newStarts === undefined || newStarts !== start) {
          _updateState(newStarts, end);
          _onChange(newStarts, end);
        }
      } else {
        let newEnds = _getEndValue(mouseDownPosition.toFixed()*10);
        if (newEnds === undefined || newEnds !== end) {
          _updateState(start, newEnds);
          _onChange(start, newEnds);
        }
      }
  };

  const _getStartValue = (startVal) => {
    let startValue = startVal;
    if (startValue < min) {
      startValue = min;
    } else if (startValue > getValueOrAlt(end, max)) {
      startValue = getValueOrAlt(end, max);
    }
    return startValue;
  }

  const _getEndValue = (endPara) => {
    let endValue = endPara;
    if (endValue > max) {
      endValue = max;
    } else if (endValue < getValueOrAlt(start, min)) {
      endValue = getValueOrAlt(start, min);
    }
    return endValue;
  }

  const _updateState = (start, end) => {
    if (!has({valueStart, valueEnd}, 'value')) {
      setstart(start);
      setend(end);
    }
  };

  const _onChange = (start, end) => {
      onChange(start, end);
  };

  useEffect(()=> {
    let startValue = start;
    let endValue = end;
      if (trackLength) {
        const calculatedTrackWidth = trackLength - handleSize;
        setfactor(calculatedTrackWidth / (max - min)*10);
        if (startValue < min || endValue < min) {
          setstart(min);
        } else if (startValue > Math.min(end, max)) {
          setstart(Math.min(end, max)) ;
        } else {
          setstart(startValue);
        }
        setstart((start - min) * getValueOrAlt(factor, 1));
        if (endValue > max || startValue > max) {
          setend(max);
        } else if (endValue < Math.max(start, min)) {
          setend(Math.max(start, min));
        } else {
          setend(end);
        }
        setend((end - min) * getValueOrAlt(factor, 1));
      }
    }, [trackLength])
    
    return (  
      <div
        className="irs"
        onClick={_onWrapperMouseDown}
        onTouchStart={_onWrapperTouchStart}
      >
        <Track
          trackRef={_setTrackDimensions}
        />
          <span className="irs-min" style={{visibility: "visible"}}>0 ₺</span>
          <span className="irs-max" style={{visibility: "visible"}}>1 000 ₺</span>
          <span className="irs-from" style={{visibility: "visible", left: `${start/10-4}%`}}> {start} ₺</span>
          <span className="irs-to" style={{visibility: "visible", left: `${end/10-4}%`}}> {end} ₺</span>
          <span className="irs-single" style={{visibility: "hidden", left: "40.9741%"}}>218 — 785 ₺</span>
        <HighlightedTrack
          offset={`${start/10}%`}
          length={`${(end- start)/10}%`}
        />
        <span className="irs-shadow shadow-from" style={{display: "none"}}></span>
        <span className="irs-shadow shadow-to" style={{display: "none"}}></span>
        <Handle
          offset={`${start/10}%`}
          tabIndex={tabIndex || 0}
          handleRef={_setHandleSize}
          handleMove={_startHandleMove}
          factor={factor}
          step={step}
          sinif = "irs-handle from"
        />
        <Handle
          offset={`${end/10}%`}
          tabIndex={tabIndex || 0}
          handleRef={_setHandleSize}
          handleMove={_endHandleMove}
          factor={factor}
          step={step}
          sinif = "irs-handle to type_last"
        />
        
      </div>
    );
}

export default RangeSlider;