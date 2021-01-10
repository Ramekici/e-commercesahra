import React, {useRef, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSprings, animated} from 'react-spring';
import './CDeneme.scss';

import  Valiz  from '../../../../assets/canta/valiz.png';
import  Canta from '../../../../assets/canta/canta03.png';
import  Sal  from '../../../../assets/canta/bebek.jpg';
import  Ayak from '../../../../assets/canta/ayak.png';

export default function CarouselDeneme() {
    const [toggle, settoggle] = useState(false);
    const myRef= useRef();
    const [eleman, setEleman] = useState();
    useEffect(() => {
        var header = document.getElementById("myDiv");
        var btns = header.getElementsByClassName("carousel__navigation-button");
        for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("actif");
            current[0].className = current[0].className.replace(" actif", "");
            this.className += " actif";
            });
        }
    }, [eleman]);

    const carouselItems = [
        {id:"carousel__slide1", image: Canta, prev:"#carousel__slide4", 
        next:"#carousel__slide2", title:"Bebek Ürünlerinde %50 indirim", link:"/shop/bayan/bebek" },
        {id:"carousel__slide2", image: Valiz, prev:"#carousel__slide1", 
        next:"#carousel__slide3", title:"Yeni Ürünlerimiz", link:"/shop/bayan/bebek"},
        {id:"carousel__slide3", image: Sal, prev:"#carousel__slide2", 
        next:"#carousel__slide4", title:"Okul İhtiyaçları", link:"/shop/bayan/bebek" },
        {id:"carousel__slide4", image: Ayak, prev:"#carousel__slide3", 
        next:"#carousel__slide1", title:"Bebek Ürünlerinde 550 indirim", link:"/shop/bayan/bebek" }
    ]
   
    

    return (
        <section className="carousel_el mt-5" aria-label="Gallery">
            <ol className="carousel__viewport"  >
                {carouselItems.map((item, i) => {
                    return (
                    <li id={item.id} key={item.id}
                        tabIndex="0"
                        className="carousel__slide">
                        <span className="images" style={{backgroundImage: `url(${item.image})`, backgroundColor:"#f0eded"}}></span>
                        <div className="container">
                            <div className="row align-items-end align-items-center mt-10">
                                <div className="col-lg-6 text-dark">
                                    <h2 className="display-1 mb-2 font-weight-light"> {item.title} </h2>
                                    <Link to={item.link} className="btn btn-sm btn-action" 
                                    style={{backgroundColor:"white", color: "black"}}>Satın Al 
                                    <span className="fas fa-arrow-right"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel__snapper">
                            <a href={item.prev}
                            className="carousel__prev">Go to last slide</a>
                            <a href={item.next}
                            className="carousel__next">Go to next slide</a>
                        </div>
                    </li>)
                })}
            </ol>
            <aside className="carousel__navigation" id="myDiv" ref={myRef}>
                <ol className="carousel__navigation-list">
                    {carouselItems.map((item, i) => {
                        if(i===0){
                            return (
                                <li className="carousel__navigation-item" key={item.id}>
                                    <a href={"#"+ item.id}
                                    className="carousel__navigation-button actif">Go to slide</a>
                                </li>
                            )
                        }
                        return (
                            <li className="carousel__navigation-item" key={item.id}>
                                <a href={"#"+ item.id}
                                className="carousel__navigation-button">Go to slide</a>
                            </li>
                        )})}
                </ol>
            </aside>
        </section>
    )
}
