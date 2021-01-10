import React from 'react';

export default function CartHeader() {
    const cartHeader = [
        {id: 123456, title: "Ürün" , column:"col-lg-6 text-orange"},
        {id: 123457, title: "Ücret" , column:"col-lg-2 text-center text-orange"},
        {id: 123458, title: "Miktar" , column:"col-lg-2 text-center text-orange"},
        {id: 123459, title: "Toplam" , column:"col-lg-2 text-center text-orange"}
    ]
    return (
        <div className="row pr-6">
            {cartHeader.map(hdr => <div className= {hdr.column} key={hdr.id}><span className="eyebrow"> {hdr.title} </span></div> )}     
        </div>
    )
}
