import React from 'react'

export default function ModalCreditKartPayment({errorMessage, onClickHandler}) {
    
    return (
    
    <div className={errorMessage ? "modal fade show": "modal fade"} 
        style={errorMessage ? {display:"block", paddingTop:"8rem"}: {display:"none"}}
         id="exampleModal" tabindex="-1" role="dialog" >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ödeme</h5>
                    <button type="button" className="close" onClick={onClickHandler}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {errorMessage}
                </div>
                </div>
            </div>
        </div>);
    
}
