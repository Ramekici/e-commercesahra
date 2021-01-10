import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setAnaSayfaCar, carouselAnasayfaState} from '../../../../../features/carousel/carouselSlice';

export default function SwiperFooter() {
    const dispatch = useDispatch();
    const sayfa = useSelector(carouselAnasayfaState);

    const onSetPageHandler = (pg) => {
        if(pg>2){
            dispatch(setAnaSayfaCar(1));   
        } else if(pg <= 0){
            dispatch(setAnaSayfaCar(2)); 
        } else {
            dispatch(setAnaSayfaCar(pg))
        }
    }

    return (
        <div className="swiper-footer">
            <div className="container">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6">
                        <div className="swiper-pagination swiper-pagination-0 
                        swiper-pagination-clickable swiper-pagination-bullets">
                            <span className= {sayfa === 1 ? "swiper-pagination-bullet swiper-pagination-bullet-active":"swiper-pagination-bullet" }
                            tabIndex="0" role="button" onClick={() => onSetPageHandler(1)}></span>
                            <span className={sayfa === 2 ? "swiper-pagination-bullet swiper-pagination-bullet-active":"swiper-pagination-bullet" } 
                            tabIndex="0" role="button" 
                            onClick={() => onSetPageHandler(2)}></span>
                        </div>
                    </div>
                    <div className="col-lg-6 text-right">
                        <div className="swiper-navigation">
                            <div className="swiper-button-prev swiper-button-prev-0" tabIndex="0" role="button" onClick={() => onSetPageHandler(sayfa-1)}></div>
                            <div className="swiper-button-next swiper-button-next-0" tabIndex="0" role="button" onClick={() => onSetPageHandler(sayfa+1)}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
