import React, { Component } from 'react';
import './styles.css';

export default class HighlightedTrack extends Component {


  render() {
    const { offset,length } = this.props;
    return (
      <div
        style={{left:`${offset}`, width:`${length}`}}
        className="irs-bar"
      >
      </div>
    );
  }
}