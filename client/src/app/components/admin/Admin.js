import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { selectGosterilen, setGosterilen } from '../../../features/profiles/profilesSlice';
import Sidebar from '../profile/common/Sidebar';
import Siparisler from './adminItems/Siparisler';
import UrunEkveGun from './adminItems/UrunEkveGun';
import SistemUrunleri from './adminItems/SistemUrunleri';
import SiparisAnalizi from './adminItems/SiparisAnaliz';

 const Admin = () => {
    const gosteri = useSelector(selectGosterilen);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setGosterilen(1))
    }, []);

    const sidebars = [
        { name: "Ürün Değişiklik", id:1},
        { name: "Yeni Ürün Ekle/Güncelle", id:2},
        { name: "Gelen Siparişler", id:3},
        { name: "Satış Analizleri", id:4}
    ]

    let gosterilen;
    if ( gosteri === 1){
        gosterilen = <SistemUrunleri/>
    } else if ( gosteri === 2) {
        gosterilen = <UrunEkveGun/>
    } else if ( gosteri === 3) {
        gosterilen = <Siparisler/>
    } else {
        gosterilen = <SiparisAnalizi/>
    }

    return (
            <section className="container mb-5 hero">
                <div className="row">
                    <Sidebar goster={gosteri} sidebars={sidebars}/>
                    <div className="col-lg-9">
                        {gosterilen}
                    </div>
                </div>
            </section>   
        )
}




export default Admin;
