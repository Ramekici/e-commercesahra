import React from 'react';

import './Deneme.scss';

export default function Deneme({image1, image2, image3}) {
    const images= [
        {image: image1, id:"image-1"},
        {image: image2, id:"image-2"},
        {image: image3, id:"image-3"}
    ];
    return (
        <div className="wrapper-new mb-5">
            <nav className="lil-nav">
                {images.map(item => {
                    return(
                        <a href={"#"+ item.id} key ={"#"+ item.id}>
                            <img className="lil-nav__img" src= {item.image} alt="Yosemite" />
                        </a>
                    )
                })}
            </nav>
            <div className="gallery">
                {images.map(item => {
                    return(
                        <img className="gallery__img" key ={item.id} id={item.id} src= {item.image} alt="Yosemite" />
                    )
                })}
            </div>
        </div>
    )
}
