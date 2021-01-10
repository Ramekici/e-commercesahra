import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import HeadingBar from '../common/HeadingBar';
import InputData from '../../UI/input/InputData';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../../features/auth/authSlice'

export default function PersonalData(props) {
  let history = useHistory();
  const dispatch = useDispatch();

  const [kisisel, setkisisel] = useState({email:'', oldPassword:'', newPassword:'', rePassword:''});
  const {email, oldPassword, newPassword, rePassword} = kisisel;

  const onHandleChangeKisisel = name => event => {
    setkisisel({...kisisel, [name]: event.target.value})
  }

  const datas = [
    {value: oldPassword, title:"Eski Parola", id:843, name:'email'},
    {value: email, title:"Yeni Email", id:643, name: 'oldPassword'},
    {value: newPassword, title:"Yeni Parola", id:943, name: 'newPassword'},
    {value: rePassword, title:"Parola Tekrarı", id:1043, name: 'rePassword'},
  ]
  const onUpdateUser = (e) => {
    e.preventDefault();
    const data = {
      email: email, oldPassword: oldPassword, newPassword: newPassword
    }
    if (newPassword === rePassword) {
      dispatch(updateUser(data));
      history.push("/profile");
    } else return alert('parolalar uyuşmuyor')
    
  }

    return (
        <form className="tab-pane fade show active" onSubmit={onUpdateUser}
            aria-labelledby="sidebar-1-1">
          <div className="row mb-2">
            <HeadingBar heading="Kişisel Bilgiler"/>
          </div>
          <div className="row gutter-1">
              {datas.map(data => {
                return (
                  <div className="col-md-6" key = {data.id}>
                    <InputData value ={data.value} title={data.title} id={data.id} 
                    onChangeHandler={onHandleChangeKisisel} name={data.name} />
                  </div>)
              })}
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-primary" type="submit" >Değişikleri Kaydet</button>
            </div>
          </div>
        </form>
    )
}
