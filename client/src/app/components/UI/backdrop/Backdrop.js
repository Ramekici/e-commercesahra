import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {cartModalStatus, searchModalStatus, yorumModalStatus, 
    yorumYapModalStatus, filterModalStatus} from '../../../../features/modals/modalSlice';
import { selectModal } from '../../../../features/profiles/profilesSlice';

export default function Backdrop() {
    const cartOpen = useSelector(cartModalStatus);
    const searchOpen = useSelector(searchModalStatus);
    const yorumOpen = useSelector(yorumModalStatus);
    const yorumYapOpen = useSelector(yorumYapModalStatus);
    const filterOpen = useSelector(filterModalStatus);
    const modalPos = useSelector(selectModal);
    const [statusCart, setCartStatus] = useState("");
    useEffect(() => {
        if(cartOpen | searchOpen | yorumOpen | yorumYapOpen | filterOpen | modalPos) {
            setCartStatus("modal-backdrop fade show")
        } else {
            setCartStatus("")
        } 
    }, [cartOpen, searchOpen, yorumOpen, yorumYapOpen, filterOpen, modalPos])

    return (
        <div className={statusCart}>
        </div>
    )
}
