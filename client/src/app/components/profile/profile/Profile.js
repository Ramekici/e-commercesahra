import React from 'react';
import { useSelector} from 'react-redux';
import { selectGosterilen } from '../../../../features/profiles/profilesSlice';
import { selectAuth } from '../../../../features/auth/authSlice';

import Sidebar from '../common/Sidebar';
import PersonalData from './PersonalData';
import OrderData from './OrderData';
import AdresData from './AdresData';
import PaymentData from './PaymentData';
import WishList from './WishList';
import UstBolum from './UstBolum';

export default function Profile() {

    const gosteri = useSelector(selectGosterilen);
    const isAuth = useSelector(selectAuth);
    let gostrilen;

    if ( gosteri === 1){
        gostrilen = <PersonalData/>
    } else if ( gosteri === 2) {
        gostrilen = <OrderData/>
    } else if ( gosteri === 3) {
        gostrilen = <AdresData/>
    } else if ( gosteri === 4) {
        gostrilen = <PaymentData/>
    } else {
        gostrilen =  <WishList/>
    }

    const sidebars = [
        { name: "Profilim", id:1, link: "account-profiles"},
        { name: "Siparişlerim", id:2, link: "account-orders"},
        { name: "Adreslerim", id:3, link: "account-adress"},
        { name: "Ödeme Bilgilerim", id:4, link: "account-payments"},
        { name: "Favorilerim", id:5, link: "account-wishlist"},
    ]

    return (
        <>
        <UstBolum name={isAuth.personelData.name} 
            lastName={isAuth.personelData.lastName} 
            mail={isAuth.personelData.email}/>
        <section className="py-5">
            <div className="container">
                <div className="row gutter-4 justify-content-between">
                    <Sidebar goster={gosteri} sidebars={sidebars}/>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col">
                                <div className="tab-content">         
                                    {gostrilen}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
