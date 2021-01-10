import React from 'react'

export default function ShippingItem() {
    return (
        <div className="row align-items-end mb-2">
        <div className="col-md-6">
          <h2 className="h3 mb-0"><span className="text-muted">03.</span> Shipping</h2>
        </div>
      </div>
      <div className="row gutter-1">
        <div className="col-md-6">
          <div className="custom-control custom-choice">
            <input type="radio" name="choice-shipping" className="custom-control-input" 
            id="choice-shipping-1">
            <label className="custom-control-label text-dark" for="choice-shipping-1">
              <span className="d-flex justify-content-between mb-1 eyebrow">Standard 
              <span className="text-muted">Free</span></span>
              Estimated 10-20 days shipping. Lorem Ipsum is simply dummy text of the printing and typesetting.
            </label>
            <span className="choice-indicator"></span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="custom-control custom-choice">
            <input type="radio" name="choice-shipping" className="custom-control-input" 
            id="choice-shipping-2">
            <label className="custom-control-label text-dark" for="choice-shipping-2">
              <span className="d-flex justify-content-between mb-1 eyebrow">Express 
              <span className="text-muted">$49</span></span>
              Estimated 10-20 days shipping. Lorem Ipsum is simply dummy text of the printing and typesetting.
            </label>
            <span className="choice-indicator"></span>
          </div>
        </div>
      </div>
    </div>
    )
}
