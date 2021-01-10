import React from 'react'

export default function Toasts({errorMessage, onClickHandler}) {

  const toastMes = errorMessage !== '' && errorMessage !== undefined ? 
              (<div aria-live="polite" aria-atomic="true" 
              className="d-flex justify-content-center align-items-center" 
              style={{minHeight: "400px"}}>
              <div className= "toast show"
                role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                  <strong className="mr-auto">Ödeme İşlemi</strong>
                  <button type="button" className="ml-2 mb-1 close" onClick={onClickHandler}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="toast-body">
                  {errorMessage}
                </div>
              </div>
            </div>) : 
            null;
  return toastMes;
}
