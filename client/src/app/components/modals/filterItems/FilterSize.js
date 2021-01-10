import React from 'react'

export default function FilterSize() {
    return (
        <div className="widget">
              <span className="widget-collapse d-lg-none" data-toggle="collapse" data-target="#collapse-3" 
              aria-expanded="false" aria-controls="collapse-3" role="button">
                Filter by Size
              </span>
              <div className="d-lg-block collapse" id="collapse-3">
                <span className="widget-title">Size</span>
                <div className="widget-content">
                  <div className="btn-group-toggle btn-group-square" data-toggle="buttons">
                    <label className="btn active">
                      <input type="checkbox" name="options" id="option1" checked readOnly/> S
                    </label>
                    <label className="btn">
                      <input type="checkbox" name="options" id="option2"/> M
                    </label>
                    <label className="btn">
                      <input type="checkbox" name="options" id="option3"/> L
                    </label>
                    <label className="btn">
                      <input type="checkbox" name="options" id="option4"/> XL
                    </label>
                  </div>
                </div>
              </div>
            </div>
    )
}
