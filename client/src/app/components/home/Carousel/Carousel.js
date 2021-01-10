import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import SwiperFooter from './carouselAlt/SwiperFooter';
import CarouselAltEl from './carouselAlt/CaruselAltEl';

import './SwiperYeni.css';

const Carousel = () => {

    const [ekranG, setekranG] = useState(1425);
    const anaEkranRefWidth =  useRef();
    useEffect(() => {
        setekranG(anaEkranRefWidth.current.clientWidth)
    }, []);
    useLayoutEffect(() => {
        function updateSize() {
          setekranG(anaEkranRefWidth.current.clientWidth)
        }
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);
        
    return (
            <div ref={anaEkranRefWidth} className="swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal mb-5">
                <CarouselAltEl width={ekranG} />   
                <SwiperFooter/>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
    )
}
export default Carousel;