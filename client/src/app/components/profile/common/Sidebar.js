import React from 'react';
import { useDispatch } from 'react-redux';
import { setGosterilen } from '../../../../features/profiles/profilesSlice';


export default function Sidebar({goster, sidebars}) {
    const dispatch = useDispatch();

    const degistir = (id) => {
        dispatch(setGosterilen(id));
    }

    return (
        <aside className="col-lg-3">
            <div className="nav nav-pills flex-column lavalamp">
                { sidebars.map(side => {
                return (
                    <button 
                        className={goster === side.id ? "nav-link lavalamp-item text-red mb-1" :
                        "nav-link lavalamp-item mb-1"} 
                        id={side.id} key={side.id} type="button" onClick={() => degistir(side.id)}
                        style={{zIndex: "5", position: "relative"}}> {side.name}
                    </button>) 
                })} 
            </div>
        </aside>
    )
}
