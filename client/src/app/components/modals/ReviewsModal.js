import React, {useState, useEffect} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReviewModalItem from '../details/reviews/ReviewModalItem';
import { yorumModalStatus, setYorumModalToggle, setYorumYapModalToggle } from '../../../features/modals/modalSlice';
import { selectAuth, setAuthRedirect } from '../../../features/auth/authSlice';

export default function ReviewsModal({yorumlar}) {

  const yorumStatus = useSelector(yorumModalStatus);
  const isAuth = useSelector(selectAuth);
  const dispatch = useDispatch();
  let history = useHistory();
  let location = useLocation();
  const [cartPosition, setcartPosition] = useState("modal fade sidebar");

  useEffect(() => {
    if (yorumStatus) {
      setcartPosition("modal fade sidebar show d-block");
    } else {
      setcartPosition("modal fade sidebar");
    }
  },[yorumStatus])

  const handleClick = () => {
    history.push("/auth");
    dispatch(setAuthRedirect(location.pathname))
  }
    return (
        <div className={cartPosition} tabIndex="-1">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="reviewsLabel">Yorumlar</h5>
                <button type="button" className="close" onClick={()=> dispatch(setYorumModalToggle())}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row gutter-3">
                  {yorumlar.map(item => {
                    return <ReviewModalItem
                      key={item._id}
                      puan={item.puan} 
                      metin= {item.yorumMetni} 
                      date={item.date} 
                      name={item.email}
                      baslik={item.yorumBaslik} />
                  })}
                </div>
              </div>
              <div className="modal-footer">
                <div className="container-fluid">
                  <div className="row gutter-0">
                    <div className="col">
                      <button className="btn btn-lg btn-block btn-primary" 
                        onClick={()=> {
                          dispatch(setYorumModalToggle());
                          return isAuth.isAuthenticated ? 
                          dispatch(setYorumYapModalToggle()) : handleClick();
                          }} > Yorum Yap </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
