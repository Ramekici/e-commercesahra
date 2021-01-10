import React from 'react'
import { Link }from 'react-router-dom';


export default function Havale() {
    return (
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="row gutter-1">
                  <div className="form-group col-md-8">
                    <input type="email" className="form-control" id="mail" placeholder="Email"/>
                  </div>
                  <div className="form-group col-md-4">
                    <Link  to="#!" className="btn btn-block btn-secondary">Pay with paypal</Link>
                  </div>
                </div>
              </div>
    )
}
