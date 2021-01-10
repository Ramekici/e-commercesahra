import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { yorumYapModalStatus, setYorumYapModalToggle } from '../../../features/modals/modalSlice';
import {addYorum} from '../../../features/products/productSlice';

export default function WriteModals({id}) {
    const dispatch = useDispatch();
    const yorumYapStatus= useSelector(yorumYapModalStatus);
    const [cartPosition, setcartPosition] = useState("modal fade sidebar");
  
    useEffect(() => {
      if (yorumYapStatus) {
        setcartPosition("modal fade sidebar show d-block");
      } else {
        setcartPosition("modal fade sidebar");
      }
    },[yorumYapStatus])



    const [baslik, setbaslik] = useState("");
    const [metin, setmetin] = useState("");
    const [puan, setpuan] = useState(5);

    const onSubmitHandler = (e) => {
        const payload = {
            yorumBaslik:baslik,
            yorumMetni:metin,
            puan:puan
        }
        dispatch(addYorum(id, payload));
        e.preventDefault();
    }
    return (
        <div className={cartPosition} tabIndex="-1">
            <div className="modal-dialog">
                <form className="modal-content" onSubmit={onSubmitHandler}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="writeReviewLabel">Yeni Yorum</h5>
                            <button type="button" className="close" onClick={()=> dispatch(setYorumYapModalToggle())}>
                            <span>×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row gutter-2" >
                            <div className="form-group col-12">
                                <label htmlFor="exampleFormControlInput1">Yorum Başlık</label>
                                <input type="text" className="form-control" value={baslik}
                                    id="exampleFormControlInput1" onChange={(e)=> setbaslik(e.target.value)}
                                    placeholder="name@example.com"/>
                            </div>
                            <div className="form-group col-12">
                                <label htmlFor="exampleFormControlSelect1">Puan</label>
                                <select className="form-control custom-select" value={puan}
                                    id="exampleFormControlSelect1"
                                    onChange={(e)=> setpuan(e.target.value)}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group col-12">
                                <label htmlFor="exampleFormControlTextarea1">Yorum</label>
                                <textarea className="form-control" 
                                    value={metin}
                                    onChange={(e)=> setmetin(e.target.value)}
                                    id="exampleFormControlTextarea1" rows="5">
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="container-fluid">
                        <div className="row gutter-0">
                            <div className="col">
                                <button type="submit" onClick={()=> dispatch(setYorumYapModalToggle())}
                                className="btn btn-lg btn-block btn-primary" >Yorumu Gönder</button>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}
