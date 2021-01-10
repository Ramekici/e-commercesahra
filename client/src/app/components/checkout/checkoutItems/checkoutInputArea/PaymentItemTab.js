import React from 'react';

export default function PaymentItemTab() {
    return (
        <div className="col-12 pb-1">
            <ul className="nav nav-tabs lavalamp" id="myTab" role="tablist">
                <div className="lavalamp-object ease" style={{transitionDuration: "0.2s", width: "95.0156px", height: "26px", transform: "translate(0px, 0px)"}}></div>
                <li className="nav-item lavalamp-item" style={{zIndex: "5", position: "relative"}}>
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"> Kredi Kart </a>
                </li>
                <li className="nav-item lavalamp-item" style={{zIndex: "5", position: "relative"}}>
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"> Havale </a>
                </li>
            </ul>
          </div>
    )
}
