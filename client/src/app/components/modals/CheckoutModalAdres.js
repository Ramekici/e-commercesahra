import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdresData, selectAdres, selectionAdres } from '../../../features/profiles/profilesSlice';

export default function CheckoutModalAdres() {
  const dispatch = useDispatch();
  const [adresId, setAdresId] = useState(null);
  useEffect(() => {
    dispatch(getAdresData());
    dispatch(selectionAdres(adresId))
  }, [dispatch, adresId])
  
  const adreslerim = useSelector(selectAdres);


    return (
    <div className="modal sidebar fade" id="addresses" tabIndex="-1" role="dialog" 
        aria-labelledby="addressesLabel" style={{display: "none" }} aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addressesLabel">Kayıtlı Adreslerim</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row gutter-3">
              {adreslerim.map(adres => {
                return (
                  <div className="col-12" key={adres._id}>
                    <div className="custom-control custom-choice" style={{paddingLeft:"0px"}}>
                      <input type="radio" name="choiceRadio" className="custom-control-input" 
                      id= {adres._id} onChange={()=> setAdresId(adres._id)}/>
                      <label className="custom-control-label text-dark" htmlFor={adres._id}>
                        <span className="text-orange text-capitalize"> {adres.adresTanim} </span> <br/>
                        <span className="text-orange text-capitalize"> {adres.ad} {adres.soyad} </span> <br/>
                        {adres.adres}, {adres.ilce}, {adres.il}, {adres.telefon}
                      </label>
                      <span className="choice-indicator"></span>
                    </div>
                  </div>
                )
              })}   
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
