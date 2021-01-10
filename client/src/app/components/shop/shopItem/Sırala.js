import React from 'react';
import { Link } from 'react-router-dom';

export default function Sırala({onClickHandler}) {
    return (
        <div className="dropdown">
            <Link className="btn btn-outline-secondary btn-sm dropdown-toggle" to="/"
                role="button" id="dropdownMenuLink-2" data-toggle="dropdown" aria-haspopup="true" 
                aria-expanded="false">
                Sırala
            </Link>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink-2">
                <button className="dropdown-item" onClick = {() => onClickHandler("azalan")}>Fiyat Azalan</button>
                <button className="dropdown-item" onClick = {() => onClickHandler("artan")}>Fiyat Artan</button>
            </div>
        </div>
    )
}
