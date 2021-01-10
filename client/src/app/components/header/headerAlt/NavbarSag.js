import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { productCart } from '../../../../features/products/cartSlice';
import { selectAuth, logoutUser } from '../../../../features/auth/authSlice';
import { setSearchModalToggle, setCartModalToggle } from '../../../../features/modals/modalSlice';
import { setGosterilen } from '../../../../features/profiles/profilesSlice';
import './Navbar.css';

export default function NavbarMenu2() {
    const sepetim = useSelector(productCart);
    const authState = useSelector(selectAuth);
    const dispatch = useDispatch();

    return (
        <div className="navbar-collapse order-4 order-lg-3 collapse" id="navbarMenu2">
          <ul className="navbar-nav ml-auto">

            {authState.isAuthenticated ? 
            (<li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown-10" 
                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {authState.personelData.name}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown-10">
                <li><Link className="dropdown-item" to="profile" 
                  type='button' onClick={()=> dispatch(setGosterilen(1))} >Hesabım</Link></li>
                <li><Link className="dropdown-item" to="profile" 
                  type='button' onClick={()=> dispatch(setGosterilen(2))} >Siparişlerim</Link></li>
                <li><Link className="dropdown-item" to="profile" 
                  type='button' onClick={()=> dispatch(setGosterilen(3))} >Adreslerim</Link></li>
                <li><Link className="dropdown-item" to="profile" 
                  type='button' onClick={()=> dispatch(setGosterilen(4))} >Ödeme Bilgilerim</Link></li>
                <li><Link className="dropdown-item" to="profile" 
                  type='button' onClick={()=> dispatch(setGosterilen(5))} >Favorilerim</Link></li>
              </ul>
            </li> ):null}

            {authState.isAuthenticated ? 
            (<li className="nav-item">
              <Link className="nav-link" id="myBtn" type="button" 
                onClick={()=> dispatch(logoutUser())} to="/">Çıkış
                <i className="fas fa-sign-out-alt ml-1"></i>
              </Link>
            </li>):
            (<li className="nav-item">
              <Link className="nav-link" to="/auth">Giriş
                <i className="fas fa-sign-in-alt ml-1"></i> 
              </Link>
            </li>)}
            
            <li className="nav-item">
              <button className="nav-link" style={{backgroundColor:"black", border:"none"}} 
              type="button" onClick={()=> dispatch(setSearchModalToggle())}>
                <i className="fas fa-search"></i></button>
            </li>
            <li className="nav-item">
              <button className="nav-link" style={{backgroundColor:"black", border:"none"}} 
              type="button" onClick={()=> sepetim.length > 0 ? dispatch(setCartModalToggle()) : null}>
                <span className="fas fa-shopping-cart"></span>
                <sup style={{color:"orange", fontSize:"1rem"}}> {sepetim ? sepetim.length : 0} </sup>
              </button>
            </li>
          </ul>
        </div>
    )
}
