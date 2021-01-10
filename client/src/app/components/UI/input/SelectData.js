import React from 'react'

export default function SelectData({title, col, value, onChangeHandler, err, name, dataSet}) {
    return (
        <div className={"form-group "+ col}>
            <label htmlFor= {name}> {title} </label>
            <select name={name} onChange = {onChangeHandler} value={value} className="form-control" >
                {dataSet.map(item =>{
                    return <option key={item.id} value={item.value}>{item.value}</option>
                })}
            </select>
            { err ? <div className="invalid-feedback" style={{display:"block"}}> 
                 {err} </div> : null}
        </div>
    )
}
