import React, {useState} from 'react';


export default function UstSekme() {
    const [value, setValue] = useState(0);

    const onClickHandler = (val) => {
        setValue(val);
    }

    return (
            <ul className="nav nav-tabs lavalamp" id="myTab" role="tablist" 
                style={{borderBottom: "none"}}>
                <div className="lavalamp-object ease" 
                style={{transitionDuration: "0.2s",
                 width: "98px", height: "26px", transform: `translate(${value}px, 0px)`}}></div>
                <li className="nav-item lavalamp-item" onClick={()=> onClickHandler(0)}
                    style={{zIndex: "5"}}>
                        <a className="nav-link" id="home-tab" data-toggle="tab" 
                        style={{border:"none"}}
                        href="#home" role="tab" aria-controls="home" aria-selected="true">
                            En Çok Satılanlar</a>
                </li>
                <li className="nav-item lavalamp-item" onClick={()=> onClickHandler(161)}
                    style={{zIndex: "5"}}>
                        <a className="nav-link" id="profile-tab" style={{border:"none"}}
                        data-toggle="tab" href="#profile" role="tab" 
                        aria-controls="profile" aria-selected="false">Yeni Gelenler</a>
                </li>
            </ul>
    )
}
