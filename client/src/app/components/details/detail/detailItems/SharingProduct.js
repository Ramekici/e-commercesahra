import React from 'react';
import { Link } from 'react-router-dom';



export default function SharingProduct() {
    const sosyalMedya =[
        {id: 12345, sosyal:'Facebook', link :"https:www.facebook.com" },
        {id: 12346, sosyal:'Twitter', link : "/twitter" },
        {id: 12347, sosyal:'Instagram', link : "/instagram"},

    ] 
    return (
        <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" 
                data-toggle="dropdown" to="" role="button" 
                aria-haspopup="true" aria-expanded="false">Ürünü Paylaş</Link>
                <ul className="dropdown-menu">
                    {sosyalMedya.map(sos => {
                        return (
                           <li key={sos.id}>
                                <Link className="dropdown-item" to={sos.link}> {sos.sosyal} </Link>
                            </li> 
                        )
                    })}
                </ul>
            </li>
    )
}
