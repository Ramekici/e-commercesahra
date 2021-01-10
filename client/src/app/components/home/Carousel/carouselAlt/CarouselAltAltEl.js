import React from 'react';
import {Link} from 'react-router-dom';

export default function CarouselAltAltEl({clnam, opa, width, 
    image, transform, title, link, kat}) {
    return (
        <div className={clnam}
            style={{width:`${width}px`, transitionDuration: "200ms", opacity:"1"}}>
            <div className="image image-overlay image-zoom" 
                    style={{backgroundImage:`url(${image})`}}></div>
            <div className="container">
                <div className="row align-items-end align-items-center vh-100">
                    <div className="col-lg-8 text-white"
                    style={{transitionDuration: "500ms", transform: `translate3d(${transform}%, 0px, 0px)`}}>
                        <h1 className="display-1 mb-2 font-weight-light"> {title} </h1>
                        <Link to={link} className="btn btn-sm btn-action" 
                        style={{backgroundColor:"white", color: "black"}}>Satın Al 
                        <span className="fas fa-arrow-right"></span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
