import React, {useState, useEffect } from 'react';

export default function CartBox(props) {
    
    const [subTotal, setsubTotal] = useState(0);
    const [total, settotal] = useState(0);
    const [tax, settax] = useState(0);
    const [kargo, setkargo] = useState(7.99);
    const arrayEl = [
      {id: 123456789, name: "Vergi Öncesi", veri: subTotal},
      {id: 123456788, name: "Vergi", veri: tax},
      {id: 123456787, name: "Kargo", veri: kargo}
    ]
    
    useEffect(() => {
      const sepetim = props.sepetim;
      let totalIlk = 0;
      sepetim.map(spt => {
        let totalSon = (spt.fiyat * spt.count);
        return totalIlk = totalIlk + totalSon;   
      });
      settotal(totalIlk.toFixed(2));
      setsubTotal((total * 0.82).toFixed(2));
      settax((totalIlk * 0.18).toFixed(2))
      if (totalIlk > 100) {
        setkargo(0);
      }
    }, [ props.sepetim, total ])
    
    return (
            <div className="card card-data bg-light">
              <div className="card-header py-2 px-3">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="fs-18 mb-0"> Sipariş Özeti </h3>
                  </div>
                </div>
              </div>
            <div className="card-body">
                <ul className="list-group list-group-minimal">
                  {arrayEl.map(el => {
                    return (
                    <li className="list-group-item d-flex justify-content-between 
                    align-items-center" key={el.id}>
                      { el.name}
                      <span> { el.veri} ₺ </span>
                    </li>)
                  })}
                </ul>
              </div> 
              <div className="card-footer py-2">
                <ul className="list-group list-group-minimal">
                  <li className="list-group-item d-flex justify-content-between 
                  align-items-center text-dark fs-18">
                      Toplam Ücret
                      <span> {total} ₺ </span>
                  </li>
                </ul>
              </div>
            </div>     



    )
}
