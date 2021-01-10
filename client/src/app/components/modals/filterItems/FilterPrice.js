import React from 'react';
import '../../../../scss/variables/_ion-slider.scss';
import SliderControlled from './deneme/SliderControlled';

export default function FilterPrice({onTrackHandler, tracker}) {
    return (
            <div className="widget active">
              <span className="widget-collapse d-lg-none" data-toggle="collapse" 
              data-target="#collapse-5" aria-expanded="true" aria-controls="collapse-5" role="button">
                Fiyat Filtrelemesi
              </span>
              <div className="d-lg-block collapse show" id="collapse-5">
                <span className="widget-title">Fiyat</span>
                  <div className="widget-content">
                    <SliderControlled onTrackHandler={onTrackHandler} tracker={tracker}/>
                    <input type="text" className="rangeslider irs-hidden-input" name="Range Slider" 
                    value="" tabIndex="-1" readonly/>
                </div>
              </div>
            </div>
    )
}
