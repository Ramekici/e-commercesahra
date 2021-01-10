import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser , selectAuth } from '../../../../features/auth/authSlice';
import { productCart,getCartItems } from '../../../../features/products/cartSlice';

const Login = (props) => {

  const cartItems = useSelector(productCart);
  const isAuth = useSelector(selectAuth);
  
  const dispatch = useDispatch();
  const [loginVal, setloginVal] = useState(isAuth.defaultValLog);
  const [errors, setErrors] = useState({emil :'', psswd:''});

  const { email, password } = loginVal;
  const { emil, psswd} = errors;

  useEffect(() => {
    setErrors({...isAuth.errorLogin});
  },[isAuth.errorLogin])

  useEffect(() => {
    if(isAuth.isCompleted ===true){
      setloginVal({...loginVal, ...isAuth.defaultValLog });
    }
  }, [isAuth.isCompleted])

  const handleChange = name => event => {
    setloginVal({ ...loginVal, [name]: event.target.value}); 
  };
    
    
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = {email, password, cartItems}
    dispatch(loginUser(data));  
  }


  const loginData = [
    {id: 6131, title: 'Email Adresi', type: "email", value:email, name:"email", error:emil },
    {id: 6132, title: 'Parola', type: "password", value:password, name:"password", error:psswd }
  ]
    return (
        <div className="card active">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button className="btn btn-link eleman" type="button" data-toggle="collapse" 
                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Üye Girişi
                    </button>
                  </h2>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" 
                  data-parent="#accordionExample">
                  <div className="card-body">
                    <div className="row mt-2">
                      {loginData.map(data => {
                        return (
                          <div className={"form-group col-12 mt-1"} key={data.id} >
                          <label htmlFor= {data.id}> {data.title} </label>
                          <input 
                              id={data.id}
                              type={data.type ? data.type : "text"} 
                              className="form-control" 
                              placeholder = {data.title}
                              value = {data.value}
                              onChange = {handleChange(`${data.name}`)}/>
                            { data.error ? <div className="invalid-feedback" style={{display:"block"}}> {data.error} </div> : null}
                        </div>
                      )})}
                      <div className="col-12 mt-2"> 
                        <button className="btn btn-block btn-primary" 
                          onClick= {onSubmitHandler}> Giriş Yap </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    )
}
export default Login;