import React, {useState} from 'react';
import {useSprings, animated} from 'react-spring';

import  Valiz  from '../../../../assets/canta/valiz.png';
import  Canta from '../../../../assets/canta/canta03.png';
import  Sal  from '../../../../assets/canta/bebek.jpg';
import  Ayak from '../../../../assets/canta/ayak.png';


export default function SpringDenemeler() {
    const [toggle, settoggle] = useState(false);
    const carouselItems = [
        {id:"carousel__slide1", image: Canta, prev:"#carousel__slide4", 
        next:"#carousel__slide2", title:"Bebek Ürünlerinde %50 indirim", link:"/shop/bayan/bebek" },
        {id:"carousel__slide2", image: Valiz, prev:"#carousel__slide1", 
        next:"#carousel__slide3", title:"Yeni Ürünlerimiz", link:"/shop/bayan/bebek"},
        {id:"carousel__slide3", image: Sal, prev:"#carousel__slide2", 
        next:"#carousel__slide4", title:"Okul İhtiyaçları", link:"/shop/bayan/bebek" },
        {id:"carousel__slide4", image: Ayak, prev:"#carousel__slide3", 
        next:"#carousel__slide1", title:"Bebek Ürünlerinde 550 indirim", link:"/shop/bayan/bebek" }
    ];
    const [springs, set, stop] = useSprings(carouselItems.length, index => ({opacity: 1}))
    set(index => ({opacity: 0}));
    stop();

    return springs.map(props => <animated.div style={props} />)

        
        
}
