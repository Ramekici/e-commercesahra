import React from 'react';
import { Link } from 'react-router-dom';

export default function Brand() {
    return (
        <Link to="/" className="navbar-brand order-1 order-lg-2">
            <img src={require('../../../../assets/Logo.jpg')}  style = {{width:"60px", borderRadius:"20px"}} 
            alt="Logo"/>
        </Link> 
    )
}
