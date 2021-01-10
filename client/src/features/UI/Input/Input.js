import React from 'react';
import './Input.scss';

const Input = (props) => {
    let inputElement= null;

    switch (props.elementType){
        case('input'):
            inputElement=<input 
            className="input-group-overlay prepended-form-control"
            {...props.elementConfig}
            onChange={props.changed}
            value={props.value}/>;
            break;
        case('textarea'):
            inputElement=<textarea
            className="input-group-overlay prepended-form-control"
            {...props.elementConfig}
            onChange={props.changed}
            value={props.value}/>;
            break;
        case('select'):
            inputElement=<select 
            className="input-group-overlay prepended-form-control"
            onChange={props.changed}
            value={props.value}>
                {props.elementConfig.options.map(option=>(
                    <option key={option.value} value={option.value}>{option.displayValue}</option>
                ))}

            </select>;
            break;
        default:
            inputElement=<input 
            className="input-group-overlay prepended-form-control"
            {...props.elementConfig}
            onChange={props.changed}
            value={props.value}/>;
            break;

    }

    return inputElement;

};

export default Input;