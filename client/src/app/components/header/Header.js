import React from 'react'
import Brand from './headerAlt/Brand';
import Bars from './headerAlt/Bars';
import NavbarSag from './headerAlt/NavbarSag';
import NavbarSol from './headerAlt/NavbarSol';


const Header = (props) => {
    return (
        <header className="header header-sticky separator-bottom" style={{backgroundColor:"black"}}>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <Brand/>
                        <Bars />
                        <NavbarSol/>
                        <NavbarSag/>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;