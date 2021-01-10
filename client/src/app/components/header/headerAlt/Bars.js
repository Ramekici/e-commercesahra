import React from 'react'

export default function Bars() {
    return (
        <button className="navbar-toggler order-2" type="button" 
            data-toggle="collapse" data-target=".navbar-collapse" 
            aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
        </button>
    )
}
