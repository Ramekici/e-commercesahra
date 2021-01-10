import React, { Component } from 'react';
import {getMousePosition } from './utils/handle';

export default class Handle extends Component {


  state= {
    hovered: false,
    focused: false,
    active: false,
  };

  componentWillMount(){
    // injectStyle();
  }

  componentDidMount() {
    document.addEventListener('mousemove', this._onDocumentMouseMove);
    document.addEventListener('mouseup', this._onDocumentMouseUp);
  }

 

  componentWillUnmount(){
    // removeStyle();
  }

  _onMouseEnter = () => {
      this.setState({hovered: true});
  };

  _onMouseLeave = () => {
      this.setState({hovered: false});
  };

  _onMouseDown = (event) => {
      this._moveStart(event, getMousePosition(event));
  };

  _onDocumentMouseMove = (event) => {
    if (this.state.active || this.state.activeCount === 0) {
      this._move(event, getMousePosition(event));
    }
    this.setState({activeCount: 1 });
  };

  _onDocumentMouseUp = (event) => {
    if (this.state.active) {
      this._move(event, getMousePosition(event));
      this._moveEnd(event);
    }
  };

  _onContextMenu = () => {
    this.setState({active: false});
  };

  _onTouchStart = (event) => {
    if (event.touches.length === 1) {
      event.preventDefault();
      this._moveStart(event, getMousePosition(event.touches[0]));
    }
  };

  _onTouchMove = (event) => {
      this._move(event, getMousePosition(event.touches[0]));
  };

  _onTouchEnd= (event) => {
    if (this.state.active) {
      event.stopPropagation();
      event.preventDefault();
      this._move(event, getMousePosition(event.touches[0]));
      this._moveEnd(event.touches[0]);
      this.props.afterChange();
    }
  };

  _moveStart = (event, position) => {
    // event.preventDefault();
    event.stopPropagation();
    this.currentPos = position;
    this.lastPos = position;
    this.setState({active: true });
  };

  _move = (event, position) => {
    event.preventDefault();
    event.stopPropagation();
    const { factor, step, handleMove } = this.props;
    let direction = position - this.lastPos;
    let distance = position - this.currentPos;
    let incrementFactor = 1;
    const increment = direction > 0 ? 1 : -1;
    if (direction * distance > ((factor || 1) * step)) {
      handleMove(increment);
      this.currentPos += incrementFactor * factor * step * increment;
    }
    this.lastPos = position;
  };

  _moveEnd= () => {
    this.setState({active: false, activeCount: 0});
  };

  _onFocus = () => {
    this.setState({focused: true });
  };

  _onBlur= () => {
    this.setState({focused: false });
  };

  _onKeyDown= (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
        event.stopPropagation();
        event.preventDefault();
        this.props.handleMove(-1);
        this.props.afterChange();
      } else if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
        event.stopPropagation();
        event.preventDefault();
        this.props.handleMove(1);
        this.props.afterChange();
      }
  };

  currentPos;
  lastPos;

  render() {
    const { handleRef, tabIndex, offset, sinif } = this.props;
    return (
      <div
        ref={handleRef}
        style={{left:`${offset}`}}
        tabIndex={tabIndex}
        className= {sinif}
        onFocus={this._onFocus}
        onBlur={this._onBlur}
        onKeyDown={this._onKeyDown}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
        onMouseDown={this._onMouseDown}
        onContextMenu={this._onContextMenu}
        onTouchStart={this._onTouchStart}
        onTouchMove={this._onTouchMove}
        onTouchEnd={this._onTouchEnd}
      >
      </div>
    );
  }
}