import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import CartModal from '../modals/CartModal';
import SearchModal from '../modals/SearchModal';
import BackDrop from '../UI/backdrop/Backdrop';
import Mfg from '../details/detail/Mfg';
import { carouselState } from '../../../features/carousel/carouselSlice';

const Layout = (props) => {
    const zoomP = useSelector(carouselState);
    return (
        <div>
            {zoomP.zoomProperty ? <Mfg image={zoomP.zoomImg} /> : null}
            <Header/>
            <CartModal/>
            <SearchModal/>
            <main>
                {props.children}
            </main>
            <Footer/>
            <BackDrop/>
        </div>
        
    )
}
export default Layout;