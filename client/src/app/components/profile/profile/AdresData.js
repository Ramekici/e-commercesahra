import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as profileActions from '../../../../features/profiles/profilesSlice';
import HeadingBar from '../common/HeadingBar';

import AdresBox from '../common/AdresBox';
import AdresItem from '../../checkout/checkoutItems/checkoutInputArea/AdresItem';
import AdresUpdateMod from '../common/AdresUpdateMod';
import Pagination from '../../UI/pagination/Pagination';


export default function AdresData() {

  const dispatch = useDispatch();
  const profileStatus = useSelector(profileActions.profileState);

  const [adresBilg, setadresBilg] = useState({ad:'', soyad:'', adresTanim:'', tcNo:'', 
    adres:'', il:'', ilce:'', telefon:'', postaKodu:''})
  
  const {ad, soyad, adresTanim, tcNo, 
    adres, il, ilce, telefon, postaKodu} = adresBilg;
  
  const [errors, setErrors] = useState({ ads:'', syd:'', adrsT:'', tcN:'', 
  adrs:'', ill:'', ilc:'', tlfn:''});

  const {ads, syd, adrsT, tcN, adrs, ill, ilc, tlfn} = errors;

  const [gosterilenAdres, setGosterilenAdres] = useState(profileStatus.adres.slice(0, 4));
  const [aktifSyf, setaktifSyf] = useState(1);

  
  const onSetPage = (i) => {
    setaktifSyf(i+1);
  }

  useEffect(() => {
    setGosterilenAdres(profileStatus.adres.slice((aktifSyf-1)*4, (aktifSyf-1)*4+4))
  }, [aktifSyf, profileStatus.adres]);
  // adres getirme side effect

  useEffect(() => {
    const adresGetter = () => dispatch(profileActions.getAdresData());
    adresGetter();
  }, [dispatch]);

  //hataları gönderen side effect
  useEffect(() => {
    setErrors({...errors, ...profileStatus.errors});
  }, [profileStatus.errors])


  
  // form temizleme
  const clearForm = () => {
    setadresBilg({ad:'', soyad:'', adresTanim:'', tcNo:'', 
    adres:'', il:'', ilce:'', telefon:'', postaKodu:''})
  }

  // adres update(bilgileri getirmek) için gerekli komut

  useEffect(() => {  
    if(profileStatus.adresDataId) {
      setadresBilg({...profileStatus.adresDataId});
    }
    return () =>{
      clearForm();
    }
  }, [profileStatus.adresDataId])

  // adresleri state aktarma komutu

  const onHandleAdres = name => event => {
    setadresBilg({...adresBilg, [name]: event.target.value })
  }

  const adresData = [
    {value:ad, type:"text", title: "Ad", id:198981, name:'ad', onChangeHandler:onHandleAdres('ad'), error:ads, autoComplete:'name'},
    {value:soyad, type:"text", title: "Soyad", id:298981, name:'soyad', onChangeHandler:onHandleAdres('soyad'), error:syd},
    {value:tcNo, type:"number", title: "TC Numarası", id:398981, name:'tcNo', onChangeHandler:onHandleAdres('tcNo'), error:tcN},
    {value:adresTanim, type:"text",  title: "Adres Tanım", id:498981, name:'adresTanim', onChangeHandler:onHandleAdres('adresTanim'), error: adrsT},
    {value:adres, type:"text", title: "Adres", id:498982, name:'adres', onChangeHandler:onHandleAdres('adres'), error: adrs},
    {value:ilce, type:"text", title: "İlce", id:598981, name:'ilce', onChangeHandler:onHandleAdres('ilce'), error: ilc},
    {value:il, type:"text", title: "İl", id:698981, name:'il', onChangeHandler:onHandleAdres('il'), error: ill},
    {value:telefon, type:"tel", title:"Telefon Numarası", format:"0-500-1234567", id:798981, name:'telefon', autoComplete:'tel',
    onChangeHandler:onHandleAdres('telefon'), pattern:"[0]{1}-[0-9]{3}-[0-9]{7}", error: tlfn},
    {value:postaKodu, type:"number", title:"Posta Kodu", id:498984, name: 'postaKodu', onChangeHandler:onHandleAdres('postaKodu')},
]

  

  const onDeleteHandler = (id) => { 
      dispatch(profileActions.deleteAdresFromDatabase(id));
  }
  // adresi kayıt yada update komutu
  const onSubmitHandler = (e) => {
    const adresData = { ad, soyad, tcNo, adresTanim, adres, ilce, il, telefon, postaKodu};
    if(profileStatus.adresDataId) {
      dispatch(profileActions.updateAdresFromDatabase(profileStatus.adresDataId._id, adresData));
    } else {
      dispatch(profileActions.setAdresToDatabase(adresData));
    }
    clearForm();
    e.preventDefault();
  }

  const onModalOpen = (pos) => {
      dispatch(profileActions.setModalPos(pos));
  } 

  return (
    <>
        <AdresUpdateMod 
                  adresData={adresData} 
                  onSubmitHandler={onSubmitHandler} 
                  modalPos = {profileStatus.modalPos}
                  onHandleModal = {onModalOpen}/>
        <div className="tab-pane fade show active">
          { profileStatus.adres.length > 0 ? <div className="row">
            <div className="col-6">
              <HeadingBar heading="Adreslerim" veri= {`${profileStatus.adres.length} adres`} /> 
            </div>
           {profileStatus.adres.length > 4 ?
            <div className="col-6" style={{display: "flex", justifyContent : "flex-end"}}>
              <Pagination pageLength = {profileStatus.adres.length} 
                maxEl={4} setPage= {onSetPage} aktifSyf={aktifSyf}/>
            </div> : null }
          </div> : 
          <p> Kayıtlı Adresiniz bulunmamaktadır.</p>}
          <div className="row gutter-2">
            {gosterilenAdres.map (adres => {
                return (
                        <AdresBox 
                          key={adres._id}
                          tanim={adres.adresTanim}
                          adres={adres.adres}
                          ilce={adres.ilce}
                          il={adres.il}
                          id={adres._id}
                          name={adres.ad}
                          surname={adres.soyad}
                          onDeleteHandler={onDeleteHandler}
                          onHandleModal = {onModalOpen}
                          isim="Adres Sahibi"
                          info="Adres Bilgileri"/>
                        )
                })}
          </div>
          <div className="row">
            <button className="btn btn-primary" onClick={()=> dispatch(profileActions.setLoading())}>
                Yeni Adres Ekle
            </button>
          </div>
          { profileStatus.loading ? 
            (<form className="row gutter-1 mb-6" onSubmit={onSubmitHandler}>
              <AdresItem adresData={adresData}/>
              <div className="row">
                <div className="col">
                  <button className="btn btn-primary" type="submit"> Onayla </button>
                </div>
              </div>
            </form>)
            : null}
      </div>
      </>
    )
}
