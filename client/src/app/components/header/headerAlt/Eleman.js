import React from 'react'
import { Link } from 'react-router-dom';
import ElemanList from './ElemanList';
import Bebek from '../../../../assets/canta/bebek.jpg';

export default function Eleman({name, link, megamenu, id}) {

    const urunKategoriler = [
        {id:1234, kategori:"Çantalar", link: "/shop/bayan", 
        content: ["Sırt Çantaları", "Omuz Çantaları", "Bel Çantaları", "El Çantaları"]},
        {id:2235, kategori:"Bebek Ürünleri", link: "/shop/cuzdanlar", 
            content: ["Bebek Kıyafetleri", "Bebek Çantaları"]},
        {id:2239, kategori:"Cüzdanlar", link: "/shop/cuzdanlar", content: ["Bayanlara Özel", "Erkekler Özel"]},
        {id:3233, kategori:"Valizler", link: "/shop/valizler", content: ["Valizler"] }
    ]

    if ( megamenu === "megamenu") {
    return (   
        <li className="nav-item dropdown megamenu">
            <Link className="nav-link dropdown-toggle" id= {id} to={name}
                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {name}
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown-4">
                <div className="row">
                    {urunKategoriler.map(kat => {
                        return (
                            <ElemanList 
                            title = {kat.kategori}
                            content= {kat.content}
                            link = {kat.link}
                            key = {kat.id}
                            id = {kat.id}/>
                        ) 
                    })}
                    <div className="col-lg-4">
                        <div className="promo">
                            <span className="image image-overlay" 
                            style={{background: `url(${Bebek})`}}></span>
                             <div className="promo-footer p-4 text-white">
                            <h3 className="mb-0">Yeni Bebek Ürünleri</h3>
                            <Link to='/shop' className="eyebrow underline text-white">Alışverişe Başla</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
        ) } else {
            return (
                <li className= "nav-item" key={id}>
                    <Link className="nav-link" to={link} id = {id} >
                        {name}
                    </Link>
                </li>
        )}
}
