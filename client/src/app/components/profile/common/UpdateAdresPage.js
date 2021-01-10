import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AdresItem from '../../checkout/checkoutItems/checkoutInputArea/AdresItem';
import { selectionAdres, selectAdresSelection } from '../../../../features/profiles/profilesSlice';

export default function UpdateAdresPage() {
    let {id} = useParams();
    const dispatch = useDispatch();
    let adres = useSelector(selectAdresSelection);
    useEffect(() => {
        dispatch(selectionAdres(id))
    }, [dispatch, id])
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                    <h2 className="h3 mb-2 text-muted text-center"> Adres Güncelleme</h2>
                </div>
                <AdresItem adresim={adres}/>  
            </div>
        </div>
    )
}
