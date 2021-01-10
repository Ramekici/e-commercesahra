import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { logoutUser } from '../../../../features/auth/authSlice';


export default function UstBolum({name, lastName, mail}) {
    const dispatch = useDispatch();
    return (
        <section className="hero hero-small text-dark" style={{backgroundColor:"#d8b52e"}}>
            <div className="container">
                <div className="row gutter-2 gutter-md-4 align-items-end">
                <div className="col-md-6 text-center text-md-left">
                    <h1 className="mb-0 text-capitalize"> {name} {lastName} </h1>
                    <span className="text-muted"> {mail} </span>
                </div>
                <div className="col-md-6 text-center text-md-right">
                    <Link onClick= {()=> dispatch(logoutUser())} to='/'
                    className="btn btn-sm btn-outline-white">Çıkış Yap</Link>
                </div>
                </div>
            </div>
        </section>
    )
}
