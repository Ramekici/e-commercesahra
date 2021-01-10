import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { selectAdresSelection  } from '../../../../features/profiles/profilesSlice';
import { productCart} from '../../../../features/products/cartSlice';
import { sendOrderData, stateOrder, setErrors } from '../../../../features/orders/orderSlice';

import CheckoutRight from'./checkoutInputArea/CheckoutRight';
import AdresItem from './checkoutInputArea/AdresItem';
import PaymentItem from './checkoutInputArea/PaymentItem';
import ItemTitle from './checkoutInputArea/ItemTitle';
import ModalCreditKartPayment from './checkoutInputArea/ModalCreditKartPayment';


const CheckoutInputArea = () => {
    let location = useLocation();
    const cart = useSelector(productCart);
    const orderStatus = useSelector(stateOrder);
    const dispatch = useDispatch();
    
    let adresim = useSelector(selectAdresSelection);
    const [adresBilg, setadresBilg] = useState({ad:'', soyad:'', adresTanim:'', tcNo:'', adres:'', il:'', ilce:'', telefon:'', postaKodu:''})
    const {ad, soyad, adresTanim, tcNo, adres, il, ilce, telefon, postaKodu} = adresBilg;

    const [errors, setError] = useState(
        { ads:'', syd:'', adrsT:'', tcN:'', adrs:'', ill:'', 
        ilc:'', tlfn:'', adS:'', kartN:'', ayy:'', yl:'', cv:'', errorMessage:''});

    const {ads, syd, adrsT, tcN, adrs, ill, ilc, tlfn, adS, kartN, ayy, yl, cv, errorMessage} = errors;

    const [krediKart, setKrediKart] = useState({kartNo:'', adSoyad:'', ay:'', yil:'', cvc:''})
    const {kartNo, adSoyad, ay, yil, cvc} = krediKart;
    
    useEffect(() => {
        setError({ ...orderStatus.errors});     
    }, [orderStatus.errors])


    const onHandleAdres = name => event => {
        setadresBilg({...adresBilg, [name]: event.target.value })
    }
    const onHandleKrediKart = name => event => {
        setKrediKart({...krediKart, [name]: event.target.value })
    }

    const adresData = [
        {value:ad, type:"text", title: "Ad", id:1989812, name:'ad', 
        onChangeHandler:onHandleAdres('ad'), error:ads, autoComplete:'name'},
        {value:soyad, type:"text", title: "Soyad", id:2989812, name:'soyad', 
        onChangeHandler:onHandleAdres('soyad'), error:syd},
        {value:tcNo, type:"number", title: "TC Numarası", id:3989812, name:'tcNo', 
        onChangeHandler:onHandleAdres('tcNo'), error:tcN},
        {value:adresTanim, type:"text",  title: "Adres Tanım", id:4989812, name:'adresTanim', 
        onChangeHandler:onHandleAdres('adresTanim'), error: adrsT},
        {value:adres, type:"text", title: "Adres", id:4989822, name:'adres', 
        onChangeHandler:onHandleAdres('adres'), error: adrs},
        {value:ilce, type:"text", title: "İlce", id:5989812, name:'ilce', 
        onChangeHandler:onHandleAdres('ilce'), error: ilc},
        {value:il, type:"text", title: "İl", id:6989812, name:'il', 
        onChangeHandler:onHandleAdres('il'), error: ill},
        {value:telefon, type:"tel", title:"Telefon Numarası", format:"0-500-1234567", id:7989812, name:'telefon', autoComplete:'tel',
        onChangeHandler:onHandleAdres('telefon'), pattern:"[0]{1}-[0-9]{3}-[0-9]{7}", error: tlfn},
        {value:postaKodu, type:"number", title:"Posta Kodu", id:4989842, name: 'postaKodu', 
        onChangeHandler:onHandleAdres('postaKodu')},
    ] 

    const krediKartData = [
        {value:kartNo, type:"tel", col:"col-12", name:'kartNo', title: "Kart Numarası", id:198982,  
        onChangeHandler: onHandleKrediKart('kartNo'), error:kartN},
        {value:adSoyad, type:"text", col:"col-md-6", name:'adSoyad', title: "Kart Üzerindeki İsim", id:298982, 
        onChangeHandler: onHandleKrediKart('adSoyad'), error:adS},
        {value:ay, type:"text", col:"col-md-2", name:'ay', title: "Ay", id:398982, 
        onChangeHandler: onHandleKrediKart('ay'), error:ayy},
        {value:yil, type:"text", col:"col-md-2", name:'yil', title: "Yil", id:398982,
        onChangeHandler: onHandleKrediKart('yil'), error: yl},
        {value:cvc, type:"password", col:"col-md-2", name:'cvc', title: "CVC", id:498982, 
        onChangeHandler: onHandleKrediKart('cvc'), error: cv}
    ]

    useEffect(() => {
        if(adresim) {setadresBilg({...adresim})}
    }, [adresim])
  
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const kartNumarasi= kartNo;
        const adresData = { ad, soyad, tcNo, adresTanim, adres, ilce, il, telefon, postaKodu};
        const kartBilgileri = { kartNumarasi, adSoyad, cvc, ay, yil};
        const payload = { cart, kartBilgileri, adresData,
            kargo: {
                firma:"yurtiçi",
                ucret:12
            }
        }
        dispatch(sendOrderData(payload));
    }

    const onResetErrorMessage = () => {
        dispatch(setErrors(null));
    }

    useEffect(() => {
        setadresBilg({ad:'', soyad:'', adresTanim:'', tcNo:'', adres:'', il:'', ilce:'', telefon:'', postaKodu:''});
        setKrediKart({kartNo:'', adSoyad:'', ay:'', yil:'', cvc:''})
    }, [location])


    return (
        <>
        <ModalCreditKartPayment errorMessage={errorMessage} onClickHandler={onResetErrorMessage}/>
        <form className="row gutter-4 justify-content-between" onSubmit={onSubmitHandler}>
            <div className="col-lg-8">
                <ItemTitle title="Adres" num="01." titleInfo="Adreslerim" tar="#addresses"/>
                <div className="row gutter-1 mb-6">
                    <AdresItem adresData={adresData}/>
                </div>
                <ItemTitle title="Ödemelerim" num="02." titleInfo="Ödemelerim" tar="#payment"/>
                <PaymentItem krediKartData= {krediKartData}/>
            </div>
            <CheckoutRight cart={cart}/>             
        </form>
        </>
        
    )
}

export default CheckoutInputArea;
