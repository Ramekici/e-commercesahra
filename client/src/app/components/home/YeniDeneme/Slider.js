import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import './Style.scss';

import  Valiz  from '../../../../assets/canta/valiz.png';
import  Canta from '../../../../assets/canta/canta03.png';
import  Sal  from '../../../../assets/canta/bebek.jpg';

const carouselItems = [
  {id:"carousel__slide1", title:"Bebek Ürünlerinde %50 indirim"},
  {id:"carousel__slide2", title:"Yeni Ürünlerimiz"},
  {id:"carousel__slide3", title:"Okul İhtiyaçları"},
]

const pages = [
  ({ style }) =>  <animated.div style={{ ...style, backgroundImage: `url(${Canta})` }}>
                    <div className="container">
                      <div className="row align-items-center mt-10">
                        <div className="col-lg-6 text-yellow">
                          <h2 className="display-1 font-weight-dark"> Çantalarda % 50'e varan indirim  </h2>
                          <Link to="/shop/bayan/canta" className="btn btn-action" 
                          style={{backgroundColor:"white", color: "black", transition: "all 0.2s",
                          transitionDelay: "0s"}}>Satın Al 
                                  <span className="fas fa-arrow-right"></span></Link>
                        </div>
                      </div>
                    </div>
                  </animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage: `url(${Valiz})` }}>
                    <div className="container">
                      <div className="row align-items-center mt-10">
                        <div className="col-lg-6 text-dark">
                          <h2 className="display-1 font-weight-light"> Çantalarda % 50'e varan indirim  </h2>
                          <Link to="" className="btn btn-action" 
                          style={{backgroundColor:"white", color: "black", transition: "all 0.2s",
                          transitionDelay: "0s"}}>Satın Al 
                                  <span className="fas fa-arrow-right"></span></Link>
                        </div>
                      </div>
                    </div>
                  </animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage: `url(${Sal})` }}>
                  <div className="container">
                      <div className="row align-items-center mt-10">
                        <div className="col-lg-6 text-dark">
                          <h2 className="display-1 mb-2 font-weight-dark"> Bebek Ürünlerinde % 60'a varan indirim</h2>
                          <Link to="" className="btn btn-action" 
                          style={{backgroundColor:"white", color: "black", transition: "all 0.2s",
                          transitionDelay: "0s"}}>Satın Al 
                                  <span className="fas fa-arrow-right"></span></Link>
                        </div>
                      </div>
                    </div>
                  </animated.div>,
]

export default function Slider() {
  const [index, set] = useState(0);
  const onClickIleri = useCallback(() => set(state => (state + 1) % 3), []);
  const onClickGeri = useCallback(() => set(state => state === 0 ? 2 : (state - 1) % 3), []);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)'},
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)'},
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)'},
  })
  
  const onSetHandler = (i) => set(i);
  useEffect(()=> {
    setTimeout(()=> {
      set(state => (state + 1) % 3);
    },15000)
  },[index])

  return (
    <div className="simple-trans-main">
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props}/>
      })}
      <div className="carousel__snapper">
          <button onClick={onClickGeri}
            className="carousel__prev">Önceki</button>
          <button onClick={onClickIleri}
            className="carousel__next">Sonraki</button>
          </div>
      <aside className="carousel__navigation" id="myDiv">
                <ol className="carousel__navigation-list">
                    {carouselItems.map((item, i) => {
                        return (
                            <li className="carousel__navigation-item" key={item.id} >
                                <button onClick={() => onSetHandler(i)}
                                className={index === i ? "carousel__navigation-button actif": "carousel__navigation-button"}>Go to slide</button>
                            </li>
                        )})}
                </ol>
            </aside>
    </div>
  )
}