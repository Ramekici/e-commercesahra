import React from 'react'

export default function UstSekmem() {
    return (
        <div className="col-12 mb-3">
            <ul className="nav nav-tabs lavalamp" id="myTab" role="tablist" style={{border:"none"}}>
                <div className="lavalamp-object ease" 
                style={{transitionDuration: "0.2s", width: "145.797px", 
                height: "26px", transform: "translate(0px, 0px)"}}></div>
              <li className="nav-item lavalamp-item" style={{zIndex: "5", position: "relative"}}>
                <a className="nav-link active" id="home-tab" data-toggle="tab" style={{border:"none"}}
                href="#home" role="tab" aria-controls="home" aria-selected="true"> Benzer Ürünler </a>
              </li>
            </ul>
          </div>
    )
}
