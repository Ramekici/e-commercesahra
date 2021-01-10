import React from 'react'
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../../features/auth/authSlice';
import Eleman from './Eleman';


const Header = (props) => {
    const isAuth = useSelector(selectAuth);
    const listItems = [
        {id:1, name: "Anasayfa", lit: "", isAuth: true },
        {id:2, name: "Ürünler", lit: "/urunler", megamenu: "megamenu", isAuth: true },
        {id:3, name: "Admin", lit: "/admin", isAuth: isAuth.isAuthenticated && isAuth.personelData.admin}]
    
        return (
                   <div className="collapse navbar-collapse order-3 order-lg-1" id="navbarMenu">
                        <ul className="navbar-nav mr-auto">
                            {listItems.map(item => {
                                if(item.isAuth === true ) {
                                    return (
                                        <Eleman 
                                            name={item.name}
                                            link={item.lit}
                                            id={item.id}
                                            dropdown= {item.dropdown}
                                            megamenu = {item.megamenu}
                                            key ={item.id}
                                        />
                                    )
                                }
                                return null;
                            })}     
                        </ul>
                    </div>
    )
}

export default Header;