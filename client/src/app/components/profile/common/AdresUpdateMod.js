import React from 'react';
import { useDispatch } from 'react-redux';
import AdresItem from '../../checkout/checkoutItems/checkoutInputArea/AdresItem';
import { clearAdresDataId } from '../../../../features/profiles/profilesSlice';

export default function AdresUpdateMod({adresData, onSubmitHandler, modalPos, onHandleModal}) {
    const dispatch = useDispatch();
    const style = modalPos ? "block": "none" ;
    return (
            <div className={modalPos ? "modal fade show" : "modal fade" } 
            id="exampleModalCenter" tabIndex="-1" style={{display:style}}>
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <form className="modal-content" onSubmit={onSubmitHandler}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Adres Güncelleme</h5>
                                <button type="button" className="close" 
                                onClick={() => {dispatch(clearAdresDataId()); onHandleModal(false);}}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body row">
                            <AdresItem adresData={adresData}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" 
                            onClick={()=> {dispatch(clearAdresDataId()); onHandleModal(false);}}>Kapat</button>
                            <button className="btn btn-primary" 
                            onClick={()=> onHandleModal(false)}
                            type="submit">Değişikleri Kaydet</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}
