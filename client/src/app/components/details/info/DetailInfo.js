import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { setYorumModalToggle } from '../../../../features/modals/modalSlice';


export default function DetailInfo({pId, sektor, yorumlar}) {
  const dispatch = useDispatch();
  const [ort, setort] = useState(0);

  useEffect(() => {
    let puanOrtalamas = 0;
    yorumlar.map(item => {
        return puanOrtalamas = puanOrtalamas + item.puan;
    });
    setort(puanOrtalamas/yorumlar.length);
    console.log(ort);
  }, [ort, yorumlar])

    return (
        <section className="separator-bottom">
          <div className="container" style={{margin:"4rem auto"}}>
            <div className="row gutter-2 gutter-lg-4">
              <div className="col-md-4 col-lg-2">
                <div className="rate">
                   {yorumlar.length === 0 ? <span style={{fontSize:"1.4rem"}}> Yorum Yok </span>: 
                   <span> {ort.toFixed(1)}</span>} 
                  <Link onClick={()=> dispatch(setYorumModalToggle())}
                  className="eyebrow text-primary underline">Yorumları İncele</Link>
                </div>
              </div>
              <div className="col-md-8 col-lg-6">
                <p>Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit. Sed pretium.</p>
              </div>
              <div className="col-lg-4">
                <ul className="list-group list-group-line">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Kodu
                    <span className="text-dark"> {pId.slice(16,24).toUpperCase()} </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Kategori
                    <span className="text-dark">
                        <Link to="/shop" className="underline text-dark"> {sektor} </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    )
}
