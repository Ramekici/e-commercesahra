import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeadingBar from '../common/HeadingBar';
import AdresBox from '../common/AdresBox';
import InputData from '../../UI/input/InputData';
import { sendPaymentData, selectKredikart, getPaymentData, deletePaymentData } from '../../../../features/profiles/profilesSlice';


export default function PaymentData() {

    const [kartNumarası, setkartNumarası] = useState('');
    const [kartIsim, setkartIsim] = useState('');
    const [month, setmonth] = useState(1);
    const [year, setyear] = useState(2020);
    const dispatch = useDispatch();
    const krediKartState = useSelector(selectKredikart);
    useEffect(()=> {
      dispatch(getPaymentData());
    },[dispatch])

    const onDeleteHandler = (id) => { 
      dispatch(deletePaymentData(id));
    }

    const krediKart = [
      {title: "Kart Numarası", type:"text", value: kartNumarası, id: 8100, onChangeHandler:(e) => setkartNumarası(e.target.value)},
      {title: "Kart Üzerindeki İsim", type:"text", value: kartIsim, id: 8101, onChangeHandler:(e)=> setkartIsim(e.target.value)}
    ]
    const onChangeHandlerMonth = (event) => {
      setmonth(event.target.value);
    }
    const onChangeHandlerYear = (event) => {
      setyear(event.target.value);
    }
    const onSubmitHandler = (e) => {
      const payload = {kartNumarasi: kartNumarası, kartIsim: kartIsim, month: month, year: year};
      dispatch(sendPaymentData(payload));
      e.preventDefault();
    }

    const monthValues = [
      { value: "01", id: 8001},{ value: "02", id: 8002},{ value: "03", id: 8003},{ value: "04", id: 8004},
      { value: "05", id: 8005},{ value: "06", id: 8006},{ value: "07", id: 8007},{ value: "08", id: 8008},
      { value: "09", id: 8009},{ value: "10", id: 8010},{ value: "11", id: 8011},{ value: "12", id: 8012}
    ];

    const yearValues = [
      { value: "2020", id: 8013},{ value: "2021", id: 8014}, { value: "2022", id: 8015},{ value: "2023", id: 8016},
      { value: "2024", id: 8017},{ value: "2025", id: 8018}
    ];

    return (
        <div className="tab-pane fade active show">
          <div className="row">
            <HeadingBar heading="Ödeme" veri={krediKartState.length + " Kart"}/>
          </div>
          <div className="row gutter-2 mb-6">
            {krediKartState.map((kart, i) => {
             return <AdresBox 
                  key={kart._id}
                  tanim={"Kart "+ (i+1)}
                  adres={kart.kartNumarasi}
                  id={kart._id}
                  name={kart.adSoyad}
                  onDeleteHandler= {onDeleteHandler}
                  editName="editkredikart"
                  isim="Kart Sahibi"
                  info="Kart Numarası"/>
            })}
            
          </div>
          <div className="row">
            <HeadingBar heading="Yeni Kart Bilgileri"/>
          </div>
            <form className="row gutter-1" onSubmit={onSubmitHandler}>
              {krediKart.map(data => {
              if (data.title === "Kart Üzerindeki İsim") {
                return (
                  <div className="col-md-6" key = {data.id}>
                    <InputData value={data.value} title={data.title} id={data.id} type={data.type}
                    onChangeHandler={data.onChangeHandler}/>
                  </div>)
              }
              return (
                <div className="col-12" key = {data.id}>
                  <InputData value={data.value} title={data.title} id={data.id} type={data.type}
                  onChangeHandler={data.onChangeHandler}/>
                </div>)
            })} 
            <div className="col-6 col-md-3">
                <div className="form-group">
                  <label htmlFor="cardNumber">Ay</label>
                    <select className="custom-select" value={month} onChange= {onChangeHandlerMonth}>
                      {monthValues.map(val => {
                          return (
                          <option value= {val.value} key={val.id}> {val.value} </option>  
                          )
                      })}
                    </select>
                </div>
            </div>  
            <div className="col-6 col-md-3">
              <div className="form-group">
                <label htmlFor="cardNumber">Yıl</label>
                <select className="custom-select" value={year} onChange= {onChangeHandlerYear}>
                      {yearValues.map(val => {
                          return (
                          <option value= {val.value} key={val.id}> {val.value} </option>  
                          )
                      })}
                    </select>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">Ekle</button>
            </div>
          </form>
        </div>
    )
}
