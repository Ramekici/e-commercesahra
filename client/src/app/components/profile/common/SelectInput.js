import React from 'react';

export default function SelectInput({value, values}) {

    return (
        <select className="custom-select" value={value}>
            {values.map(val => {
                return (
                <option value= {val.value} key={val.id}> {val.value} </option>  
                )
            })}
        </select>
    )
}
