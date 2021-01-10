import React from 'react';

export default function KartNumInput({title, type, col, value, onChangeHandler, err, name }) {
    return (
        <div className={"form-group " + col}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                    <i className="far fa-credit-card"></i></span>
                </div>
                <input type={type} className="form-control" name={name}
                maxlength="19" autoComplete="cc-number"
                placeholder={title} onChange={onChangeHandler} value={value}/>
                { err ? <div className="invalid-feedback" style={{display:"block"}}> 
                 {err} </div> : null}
            </div>  
        </div>
    )
}
