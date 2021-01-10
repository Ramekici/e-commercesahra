import React from 'react';
import './styles.css';

const Track = (props) => {
  const { trackRef } = props;
    return (
      <span className="irs-line" ref={trackRef} tabIndex="0"></span>
    );
}

export default Track;
