import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { productDetail } from '../../../../features/products/productSlice';
import { setZoom } from '../../../../features/carousel/carouselSlice';

import './Magnific-pop.css';

export default function Mfg(props) {
    const dispatch = useDispatch();
    const [foto, setfoto] = useState(props.image)
    const detailP = useSelector(productDetail);
    const Images = [detailP.imagePath1, detailP.imagePath2, detailP.imagePath3];
    const [Index, setIndex] = useState(Images.findIndex(item => item === props.image));

    const onClickHandler = (hrk) => {
        if(hrk === "ileri") {
            if(Index >= Images.length-1){
                setIndex(0);
                setfoto(Images[0]);
            } else {
                setIndex(Index+1);
                setfoto(Images[Index+1]);  
            }
        } else {
            if(Index===0){
                setIndex(Images.length-1)
                setfoto(Images[Images.length-1]);
            } else {
                setIndex(Index-1);
                setfoto(Images[Index-1]);
            }   
        }   
    }

    return (
        <>
        <div className="mfp-bg mfp-no-margins mfp-with-zoom mfp-ready"></div>
        <div className="mfp-wrap mfp-gallery mfp-close-btn-in 
            mfp-auto-cursor mfp-no-margins mfp-with-zoom mfp-ready" tabIndex="-1" 
            style={{overflow: "hidden auto", marginTop:"72px"}}>
                <div className="mfp-container mfp-s-ready mfp-image-holder">
            <div className="mfp-content">
                <div className="mfp-figure">
                    <button title="Close (Esc)" type="button" 
                        onClick={()=> dispatch(setZoom())}
                        className="mfp-close">×</button>
                    <figure>
                        <img className="mfp-img" src={foto} alt="" 
                        style={{maxHeight: "600px", minHeight:"400px"}}/>
                        <figcaption>
                            <div className="mfp-bottom-bar">
                                <div className="mfp-title"></div>
                                <div className="mfp-counter"> {Index+1} of {Images.length} </div>
                            </div>
                        </figcaption>
                    </figure>
                    </div>
                </div>
                <div className="mfp-preloader">Loading...</div>
                    <button title="Previous (Left arrow key)" type="button" 
                    onClick= {() => onClickHandler("geri")}
                    className="mfp-arrow mfp-arrow-left mfp-prevent-close"></button>
                    <button title="Next (Right arrow key)" type="button"
                    onClick= {() => onClickHandler("ileri")} 
                    className="mfp-arrow mfp-arrow-right mfp-prevent-close"></button>
                </div>
        </div>
        </>
    )
}
