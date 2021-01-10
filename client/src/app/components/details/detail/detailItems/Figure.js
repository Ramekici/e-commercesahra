import React from 'react';
import { setZoom } from '../../../../../features/carousel/carouselSlice';
import { useDispatch} from 'react-redux';

export default function Figure(props) {
    const dispatch = useDispatch();
    return (
        <figure className="equal" >
            <div className="image" onClick={()=> dispatch(setZoom(props.image))}
                style={{background: `url(${props.image}) no-repeat scroll center`, 
                    backgroundSize:"100% 100%",
                    maxHeight:"500px"}}>
            </div>
        </figure>
    )
}
