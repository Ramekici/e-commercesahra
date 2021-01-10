import React, { useState, useRef, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {productStatus } from '../../../../features/products/productSlice';
import UstSekmem from './relatedProductItems/UstSekmem';
import OwlItem from './relatedProductItems/OwlItem';
import OwlNav from './relatedProductItems/OwlNav';
import OwlDots from './relatedProductItems/OwlDots';

export default function RelatedProducts() {
    const products = useSelector(productStatus);
    const elemanRef = useRef();
    const [width, setWidth] = useState(355);
    const [factor, setFactor] = useState(0);
    const [widthTrans, setWidthTrans] = useState(0);
    

    useEffect(() => {
        const handleFirst = () => {
        if(elemanRef.current.offsetWidth > 1200) {
            setWidth((elemanRef.current.offsetWidth-40)/5)
        } else if(elemanRef.current.offsetWidth < 1200 && elemanRef.current.offsetWidth > 800 ) {
            setWidth((elemanRef.current.offsetWidth-30)/4)
        } else if(elemanRef.current.offsetWidth < 800 && elemanRef.current.offsetWidth > 450 ) {
            setWidth((elemanRef.current.offsetWidth-20)/3)
        } else {
            setWidth(elemanRef.current.offsetWidth);
        }};
        handleFirst();
        const handleResize = () => {
            handleFirst();  
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [elemanRef]);

    const onSetCarouselHandler = (hrk) => { 
        setFactor(factor+hrk);
        if (factor >= 4) {
            setFactor(1)
        } else if (factor < 0) {
            setFactor(4)
        }
        setWidthTrans(factor*width + width);     
    }

    return (
        <section className="no-overflow my-5">
            <div className="container">
                <div className="row">
                    <UstSekmem/>
                    <div className="col">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="owl-carousel owl-carousel-arrows visible 
                                owl-loaded owl-drag" ref={elemanRef}
                                data-items="[4,4,2,1]" data-margin="10" 
                                data-loop="true" data-dots="true" 
                                data-nav="true">
                                    <div className="owl-stage-outer">
                                        <div className="owl-stage" style={{transform: `translate3d(-${widthTrans}px, 0px, 0px)`, 
                                        transition: "all 0s ease 0s", width: `${width*12}px`}}>
                                            {products.urunler  ? products.urunler.products.map(item => {
                                                return <OwlItem
                                                cloned = "false"
                                                imageWidths = {width}
                                                image= {item.imagePath1}
                                                key = {item._id}
                                                pId = {item._id}
                                                isim={item.isim}
                                                indirim={item.indirim} 
                                                fiyat={item.fiyat}/>
                                            }) : null}
                                            {products.urunler  ? products.urunler.products.map(item => {
                                                return <OwlItem
                                                cloned = "true"
                                                imageWidths = {width}
                                                image= {item.imagePath1}
                                                key = {item._id}
                                                pId = {item._id}
                                                isim={item.isim}
                                                indirim={item.indirim} 
                                                fiyat={item.fiyat}/>
                                            }) : null}
                                        </div>
                                    </div>
                                    <OwlNav onClickHandler = {onSetCarouselHandler} />
                                    <OwlDots onClickHandler = {onSetCarouselHandler}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
