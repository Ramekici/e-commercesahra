import React from 'react';
import './ResimEkle.css';


const ResimEkle = (props) => {

        return (
                <div className="col-4">
                    <div className="cz-file-drop-area form-group">
                        <div className="cz-file-drop-icon czi-cloud-upload">
                            <img src={props.image} alt=" " style={{ maxHeight:"200px", objectFit:"cover"}}/>
                        </div>
                        <span className="cz-file-drop-message">Ürün Fotosunu Seç</span>
                            <input className="cz-file-drop-input"
                                onChange={props.onChangeHandler}
                                type="file"
                                name={props.name}
                                accept="image/*"/>
                            { props.error ? <div className="invalid-feedback" style={{display:"block"}}> 
                          {props.error} </div> : null}
                        <small className="form-text text-muted">1000 x 800px ideal boyut</small>
                    </div>
                </div>
            
        )
    }

export default ResimEkle;