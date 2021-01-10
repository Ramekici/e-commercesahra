import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { searchModalStatus, setSearchModalToggle } from '../../../features/modals/modalSlice';


export default function SearchModal() {
    const [searchItems, setsearchItems] = useState('');
    const searchBarStatus= useSelector(searchModalStatus);
    const [searchBar, setSearchBar] = useState("modal fade search");
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        setsearchItems(e.target.name);
    }

    const onSearchHandler = () => {
        console.log(setsearchItems);
    }

    useEffect(() => {
        if (searchBarStatus) {
            setSearchBar("modal fade search show d-block");
        } else {
            setSearchBar("modal fade search");
        }
    },[searchBarStatus])

    return (
        <form className={searchBar} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content" onSubmit={onSearchHandler}>
                    <div className="modal-header">
                        <input type="text" className="form-control"
                            name={searchItems} 
                            onChange={onChangeHandler}
                            placeholder="Ürün Ara" />
                        <button type="submit" className="btn btn-sm">
                            <span className="fas fa-search"></span>
                        </button>
                        <button type="button" className="close" 
                        onClick={()=> dispatch(setSearchModalToggle())}>
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
