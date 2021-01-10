import React from 'react'

export default function CheckoutModalPayment() {
    return (


    <div className="modal sidebar fade" id="payments" tabIndex="-1" 
    role="dialog" aria-labelledby="paymentsLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="paymentsLabel">Ödeme Kayıtlarım</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row gutter-3">
              <div className="col-12">
                <div className="custom-control custom-choice">
                  <input type="radio" name="choiceRadio2" className="custom-control-input" id="customChoice4"/>
                  <label className="custom-control-label text-dark" htmlFor="customChoice4">
                    Visa ends in 1537 Exp: 8/2022
                  </label>
                  <span className="choice-indicator"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
