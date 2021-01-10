import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValue, carouselState } from '../../../../../features/carousel/carouselSlice';

export default function ImageDetails({image1, image2, image3, widthEl}) {
    const dispatch = useDispatch();
    const setImages = (width) => {
        dispatch(setValue(width))
    };
    const value = useSelector(carouselState);

    const images= [
        {image: image1, id:1211, onClickHandler: () => setImages(0), isActive: value.value === 0 ? "active" : null },
        {image: image2, id:1212, onClickHandler: () => setImages(-widthEl), isActive: value.value=== -widthEl ? "active" : null },
        {image: image3, id:1213, onClickHandler: () => setImages(-2*widthEl), isActive: value.value === -2*widthEl ? "active" : null }];


    return (
        <div className="owl-thumbs" data-slider-id="1">
            {images.map(img =>{
                return (
                    <span className={"owl-thumb-item "+ img.isActive} 
                        key={img.id} onClick={img.onClickHandler}>
                        <img src= {img.image} alt="" 
                        style={{ height:"100px", objectFit:"fill", objectPosition:"center"}} />
                    </span>
                )
            })}
        </div>
    )
}
