import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {createUser, selectAuth } from '../../../../features/auth/authSlice';

import Toast from './Toast';



export default function Register() {
    const isAuth = useSelector(selectAuth);
    const dispatch = useDispatch();
    const [registerVal, setRegisterVal] = useState(isAuth.defaultValReg);
    const [errors, setErrors] = useState({nme:'', lstName:'', emil :'', psswd:'', rePsswd:''});
    const {name, lastName, email, password, rePassword} = registerVal;
    const {nme, lstName, emil, psswd, rePsswd} = errors;

    useEffect(() => {
      setErrors({...isAuth.errorRegister});
    },[isAuth.errorRegister])

    useEffect(() => {
      if(isAuth.isCompleted ===true){
        setRegisterVal({...registerVal, ...isAuth.defaultValReg});
      }
    }, [isAuth.isCompleted])

    const handleChange = name => event => {
      setRegisterVal({ ...registerVal, [name]: event.target.value}); 
    };

    const onSubmitHandler = (event) => {
      event.preventDefault();
      if(password === rePassword) {
        dispatch(createUser(registerVal));
      } else return alert("parolalar uyumsuz");
    }
    
    const registerData = [
        {id: 6121, title: 'Ad', type: "text", value:name ,
         name:'name', col:'col-6 mt-1', error:nme},
        {id: 6122, title: 'Soyad', type: "text", value:lastName,
         name:'lastName', col:'col-6 mt-1', error:lstName},
        {id: 6123, title: 'Email adres', type: "email", value:email,
         name:'email', col:'col-12 mt-1', error:emil},
        {id: 6124, title: 'Parola', type: "password", value:password, name:'password', 
        col:'col-6 mt-1', error:psswd},
        {id: 6125, title: 'Parola Tekrarı', type: "password", value:rePassword, 
        name:'rePassword', col:'col-6 mt-1', error:rePsswd},
    ]
    return (
        <div className="card mb-5">
            <div className="card-header" id="headingTwo">
                <h2 className="mb-0" >
                    <button className="btn btn-link eleman" type="button" data-toggle="collapse" 
                    data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Hesap Oluştur
                    </button>
                </h2>
            </div>
            { isAuth.message ? <Toast message={isAuth.message} /> : 
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" 
                data-parent="#accordionExample">
                  <div className="card-body">
                    <div className="row mt-2">
                        {registerData.map(data => {
                            return (
                              <div className={"form-group " + data.col} key={data.id} >
                                <label htmlFor= {data.id}> {data.title} </label>
                                <input 
                                    id={data.id}
                                    type={data.type ? data.type : "text"} 
                                    className="form-control" 
                                    placeholder= {data.title}
                                    value={data.value}
                                    onChange={handleChange(`${data.name}`)}/>
                                  { data.error ? <div className="invalid-feedback" style={{display:"block"}}> {data.error} </div> : null}
                                  {data.name === 'password' ? 
                                  <small id="passwordHelpInline" className="text-muted">
                                    <sup>*</sup>8-20 karakter uzunluğunda girilmelidir.
                                  </small> : null}
                              </div>
                            )
                        })}
                      <div className="col-12 mt-2">
                        <button className="btn btn-primary" onClick={onSubmitHandler} 
                        type="submit">Üye Ol</button>
                      </div>
                    </div>
                  </div>
                </div>
                }
              </div>
    )
}
