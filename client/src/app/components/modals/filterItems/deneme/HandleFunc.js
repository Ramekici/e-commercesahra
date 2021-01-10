import React, { useEffect, useState } from 'react';
import {getMousePosition } from './utils/handle';
import './styles.css';

const Handle = ({ factor, step, handleMove, afterChange, handleRef, tabIndex, offset }) => {

  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [active, setActive] = useState(false);
  const [activeCount, setActiveCount] = useState(0);
  let currentPos;
  let lastPos;

  useEffect(() => {
    document.addEventListener('mousemove', _onDocumentMouseMove);
    document.addEventListener('mouseup', _onDocumentMouseUp);
  },[])

  const _onMouseEnter = () => {
      setHovered(true);
  };

  const _onMouseLeave = () => {
    setHovered(false);
  };

  const _onMouseDown = (event) => {
    _moveStart(event, getMousePosition(event));
  };

  const _onDocumentMouseMove = (event) => {
    if (active || activeCount === 0) {
      _move(event, getMousePosition(event));
    }
    setActiveCount(1);
  };

  const _onDocumentMouseUp = (event) => {
    if (active) {
      _move(event, getMousePosition(event));
      _moveEnd(event);
    }
  };

  const _onContextMenu = () => {
    setActive(false);
  };

  const _onTouchStart = (event) => {
    if (event.touches.length === 1) {
      event.preventDefault();
      _moveStart(event, getMousePosition(event.touches[0]));
    }
  };

  const _onTouchMove = (event) => {
      _move(event, getMousePosition(event.touches[0]));
  };

  const _onTouchEnd= (event) => {
    if (active) {
      event.stopPropagation();
      event.preventDefault();
      _move(event, getMousePosition(event.touches[0]));
      _moveEnd(event.touches[0]);
      afterChange();
    }
  };

  const _moveStart = (event, position) => {
    // event.preventDefault();
    event.stopPropagation();
    currentPos = position;
    lastPos = position;
    setActive(true);
  };

  const _move = (event, position) => {
    event.preventDefault();
    event.stopPropagation();
    let direction = position - lastPos;
    let distance = position - currentPos;
    let incrementFactor = 1;
    let increment = direction > 0 ? 1 : -1;
    if (direction * distance > ((factor || 1) * step)) {
      handleMove(increment);
      currentPos += incrementFactor * factor * step * increment;
    }
    lastPos = position;
  };

  const _moveEnd= () => {
    setActive(false);
    setActiveCount(0);
  };

  const _onFocus = () => {
    setFocused(true);
  };

  const _onBlur= () => {
    setFocused(false);
  };

  const _onKeyDown= (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
        event.stopPropagation();
        event.preventDefault();
        handleMove(-1);
        afterChange();
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
        event.stopPropagation();
        event.preventDefault();
        handleMove(1);
        afterChange();
      }
    };
    return (
      <div
        ref={handleRef}
        style={{left:`${offset}`}}
        tabIndex={tabIndex}
        className= {
          // eslint-disable-next-line no-sequences
          focused ? "handle handleStyle focusedHandleStyle ": "handle handleStyle ",
          active ? "handle handleStyle activeHandleStyle ": "handle handleStyle " ,
          hovered ? "handle handleStyle hoveredHandleStyle ": "handle handleStyle "
        }
        onFocus={_onFocus}
        onBlur={_onBlur}
        onKeyDown={_onKeyDown}
        onMouseEnter={_onMouseEnter}
        onMouseLeave={_onMouseLeave}
        onMouseDown={_onMouseDown}
        onContextMenu={_onContextMenu}
        onTouchStart={_onTouchStart}
        onTouchMove={_onTouchMove}
        onTouchEnd={_onTouchEnd}
      >
      </div>
    );
  }

 export default Handle;