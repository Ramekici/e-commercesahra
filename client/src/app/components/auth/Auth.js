import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../features/auth/authSlice';


import Login from './login/Login';
import Register from './register/Register';
import Background from '../../../assets/canta/anasayfa.jpg';

export default function Auth(props) {

    const isAuth = useSelector(selectAuth);
    useEffect(() => {
        if(isAuth.isAuthenticated) {
          return props.history.push('/');
        }
    }, [props.history, isAuth.isAuthenticated])
    return (
        <div className="hero mx-auto" 
        style={{background:`url(${Background}) no-repeat center center fixed`, zIndex:"10", 
        backgroundSize:"cover", height:"auto", backgroundColor:"gray"}}>
            
            <div className="row justify-content-center align-items-center vh-md-100" style={{zIndex:"1000"}}>
                <div className="col-md-10 col-lg-6">
                    <div className="accordion accordion-portal" id="accordionExample">
                        <Login/>
                        <Register/>
                    </div>
                </div>
            </div>
        </div>
    )
}
