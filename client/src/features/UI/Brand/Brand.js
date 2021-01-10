import React from 'react';
import { Link } from 'react-router-dom';

const Brand = () => {
    return (
        <Link to="/" class="navbar-brand order-1 order-lg-2">
            <img src="assets/images/logo.svg" alt="Logo"/>
        </Link>
    )
}
export default Brand;