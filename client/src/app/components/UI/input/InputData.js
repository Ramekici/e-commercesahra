import React from 'react';

const InputData  = ({title, id, type, col, value, onChangeHandler, pattern, format, err, name, autoComplete}) => {
    
    return (
        <div className={"form-group "+ col}>
            <label htmlFor= {id}> {title} </label>
            <input 
                id={id}
                name={name}
                type={type} 
                className="form-control" 
                placeholder= {format ? format: title}
                value={value}
                autoComplete={autoComplete}
                onChange={onChangeHandler}
                pattern={pattern}/>
            { err ? <div className="invalid-feedback" style={{display:"block"}}> 
                 {err} </div> : null}
            
        </div>
    )
}

export default InputData;