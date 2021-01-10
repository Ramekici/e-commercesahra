import React from 'react';
import './MenuButton.css';

const MenuButton = () => {
    return (
        <button className="navbar-toggler order-2 collapsed" 
        type="button" data-toggle="collapse" data-target=".navbar-collapse" 
        aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
        </button>
    )
}

export default MenuButton;