import React, {useRef, useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {carouselState, setValue} from '../../../../../features/carousel/carouselSlice';

import Figure from './Figure';
import ButtonBack from './ButtonBack';
import ButtonNext from './ButtonNext';
import ImageDetails from './ImageDetails';


export default function FigureCarousel({image1, image2, image3}) {
    const images= [
        {image: image1, id:"resim1"},
        {image: image2, id:"resim2"},
        {image: image3, id:"resim3"}
    ];
    const [ileri, setileri] = useState(true);
    const [geri, setgeri] = useState(false);
    const dispatch = useDispatch();
    const carousel = useSelector(carouselState);
    const value = carousel.value;
   
    const onChangeIleri = () => {
        if(value === 0){
            dispatch(setValue(-width));
            setgeri(true);
        } else if (value ===  -width) {
            dispatch(setValue(-2* width));
            setileri(false);
        }
    }
    const onChangeGeri = () => {
        if(value === -2*width){
            dispatch(setValue(-width));
            setileri(true);
        } else if (value === -width) {
            dispatch(setValue(0));
            setgeri(false);
        }
    }
    const myRef = useRef(null);
    const [width, setwidth] = useState(582);
    useEffect(() => {
        setwidth(myRef.current.offsetWidth);
        const handleResize = () => {
            setwidth(myRef.current.offsetWidth);
            dispatch(setValue(0)); 
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [dispatch, width, myRef]);
    useEffect(() => {
        if(value === 0){
            setgeri(false);
        }else if(value=== -width) {
            setgeri(true);
            setileri(true);
        }else if(value=== -2*width) {
            setileri(false);
        }
    }, [width, value])

    return (
        <div className="row gutter-1 justify-content-between">
            <div className="col-lg-10 order-lg-2">
                <div className="owl-carousel gallery owl-loaded owl-drag" ref={myRef}>
                    <div className="owl-stage-outer">
                        <div className="owl-stage" style={{transform: `translate3d(${value}px, 0px, 0px)`, 
                            transition: 'all 0s ease 0s', width: `${3*width}px`}}>
                                { images.map(img => {
                                    return(
                                        <div className="owl-item" style={{width: `${width}px`}} 
                                        key={img.image}>
                                            <Figure image = {img.image}/>
                                        </div>
                                    )
                                })
                                }
                        </div>
                    </div>
                    <div className="owl-nav">
                        <ButtonBack  geri = {geri} onChanged={()=> onChangeGeri()}/>
                        <ButtonNext ileri = {ileri} onChanged={()=> onChangeIleri()}/>
                    </div>
                    <div className="owl-dots disabled"></div>
                </div>
            </div>
            <div className="col-lg-2 text-center text-lg-left order-lg-1">
                <ImageDetails 
                    image1={image1}
                    image2={image2}
                    image3={image3}
                    widthEl={width}
                />
            </div>
        </div>
    )
}
