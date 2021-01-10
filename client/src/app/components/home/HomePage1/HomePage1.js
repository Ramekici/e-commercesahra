import React from 'react';
import { Link } from 'react-router-dom';
import  Cuzdan from '../../../../assets/canta/cuzdan04.png';
import  Valiz  from '../../../../assets/canta/valiz.png';
import  Canta from '../../../../assets/canta/canta03.png';
import  Sal  from '../../../../assets/canta/bebek.jpg';
import  Ayak from '../../../../assets/canta/ayak.png';

const HomePage1 = () => {
    const urunUst = [
        {name: "Çanta", link : "shop/bayan/canta", kaynak: Canta},
        {name: "Cüzdan", link : "shop/bayan/cuzdan", kaynak: Cuzdan}
    ];

    const urunAlt = [
        {name: "Valiz", link : "shop/valiz", kaynak: Valiz},
        {name: "Ayakkabı", link : "shop/bayan/ayakkabi", kaynak: Ayak},
        {name: "Şal", link : "shop/bayan/sal", kaynak: Sal}
    ];

    return (

            <div className="container">
                <div className="row gutter-1">
                    { urunUst.map(urun => {
                     return(<div className="col-md-6" key={urun.name}>
                                <Link to={urun.link.toLowerCase()} className="card card-equal card-scale">
                                <span className="image" style={{backgroundImage: `url(${urun.kaynak})`, backgroundColor:"#f0eded"}}></span>
                                <div className="card-footer">
                                    <span className="btn btn-white btn-lg btn-action">{urun.name} 
                                    <span className="fas fa-arrow-right"></span></span>
                                </div>
                                </Link>
                            </div>) 
                    })}
                    {urunAlt.map(urun => {
                        return(
                            <div className="col-md-4" key={urun.name}>
                                <Link to={urun.link.toLowerCase()}className="card card-equal card-scale">
                                <span className="image" style={{backgroundImage: `url(${urun.kaynak})`, backgroundColor:"#f0eded"}}></span>
                                <div className="card-footer">
                                    <span className="btn btn-white btn-lg btn-action"> {urun.name} 
                                        <span className="fas fa-arrow-right"></span>
                                    </span>
                                </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>      
        </div>
    )
}
export default HomePage1;