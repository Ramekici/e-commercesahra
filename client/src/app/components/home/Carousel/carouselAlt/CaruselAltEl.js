import React, {useEffect, useState}  from 'react';
import { useSelector} from 'react-redux';
import { carouselAnasayfaState} from '../../../../../features/carousel/carouselSlice';
import AnaSayfa from '../../../../../assets/canta/anasayfa.jpg';
import BebekCanta from '../../../../../assets/canta/bebekCantas.jpg';

import CarouselAltAltEl from './CarouselAltAltEl';


const CaruselAltEl = ({width}) => {

    const sayfa = useSelector(carouselAnasayfaState);
    const [klass, setklass] = useState("swiper-slide");
    const [carouselItem, setcarouselItem] = useState({clnam: klass, 
        image: AnaSayfa,
        transform :0, title: "Super", link:"/shop/bayan"});

    useEffect(() => {
        if(sayfa===1){ 
            setcarouselItem({clnam:klass, 
            image: AnaSayfa,
            transform :0, title: "Super", link:"/shop/bayan"});
            setTimeout(()=> {
                setklass("swiper-slide swiper-slide-active");
            }, 1000)
        } else {
            setcarouselItem({clnam:klass, 
            image: BebekCanta,
            transform :0, title: "Bebek Urunleri artık Mağazamızda", link:"/shop/bayan"});       
            setTimeout(()=> {
                setklass("swiper-slide swiper-slide-active")
            }, 1000)
        }

    }, [sayfa, klass])



    return (
        <div className="swiper-wrapper" style={{transitionDuration: "1500ms"}}>
                 <CarouselAltAltEl
                    clnam={carouselItem.clnam} width={width}
                    image={carouselItem.image} 
                    transform={carouselItem.transform} 
                    title={carouselItem.title} 
                    link={carouselItem.link}            
                />
         </div>
    )
}
export default CaruselAltEl;