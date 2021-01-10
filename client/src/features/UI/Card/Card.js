import React from 'react';
import AdderButton from '../Adder/AdderButton';
import EditButton from '../Adder/EditButton';

const Card = (props) => {
    return (
        <div className="col-6 col-md-6 col-lg-3 mb-3">
            <div className="card">
            <div className="card-header text-center">
                {props.title}
            </div>
            <div className="card-image-overlay">
            </div>
            <div className="card-body text-center">
              {props.urun}  
            </div>
            <div className="card-footer align-items-stretch">
                <div className="btn-group">
                    <AdderButton/>
                    <EditButton/> 
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Card;