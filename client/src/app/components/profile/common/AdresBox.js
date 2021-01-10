import React from 'react';
import { useDispatch } from 'react-redux';
import { selectionAdres } from '../../../../features/profiles/profilesSlice';

export default function AdresBox({name, surname, tanim, 
  adres, ilce, il, id, onDeleteHandler, isim, info, onHandleModal}) {
    const dispatch = useDispatch();
    const onClickHandler= (id) => {
      dispatch(selectionAdres(id));
    }

    

    return (
        <div className="col-md-6">
        <div className="card card-data">
          <div className="card-header card-header-options">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="card-title"> {tanim} </h3>
              </div>
              <div className="col text-right">
                <div className="dropdown">
                  <button id="dropdownMenuButton" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="false" type="button" 
                    className="btn btn-lg btn-secondary btn-ico">
                      <i className="fas fa-bars"></i>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li>
                      <button type="button" className="dropdown-item" onClick={()=> {
                          onClickHandler(id); onHandleModal(true)}}>
                          Düzenle
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" 
                      onClick={()=> onDeleteHandler(id)}> Sil </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body w-75">
            <h5 className="eyebrow text-muted"> {isim} </h5>
            <p className="card-text text-capitalize"> {name} {surname} </p>
            <h5 className="eyebrow text-muted"> {info} </h5>
            <p className="card-text text-capitalize"> {adres}, {ilce}, {il} </p>       
          </div>
        </div>
      </div>
    )
}
