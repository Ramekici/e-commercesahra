import React from 'react';
import InputData from '../../../UI/input/InputData';
import Sehirler from '../../../UI/input/Sehirler';

export default function AdresItem(props) {

    
  const adresItem = props.adresData.map(data => {
                    if(data.name === "adres") {
                        return(
                            <div className="col-12" key = {data.id}>
                              <InputData value={data.value} onChangeHandler={data.onChangeHandler}
                              title={data.title} id={data.id} type={data.type} name={data.name} 
                              err={data.error}
                              autoComplete={data.autoComplete}/>
                            </div>
                          )
                    } else if (data.name === "il") {
                      return (
                        <div className="col-md-6" key = {data.id}>
                          <Sehirler value={data.value} onChangeHandler={data.onChangeHandler}
                              title={data.title} id={data.id} type={data.type} 
                              name={data.name} err={data.error}/>
                        </div>
                      )
                    }
                    return(
                          <div className="col-md-6" key = {data.id}>
                            <InputData value={data.value} type={data.type}
                            title={data.title} onChangeHandler={data.onChangeHandler} 
                            name={data.name} id={data.id} pattern={data.pattern} 
                            autoComplete={data.autoComplete}
                            format={data.format} err={data.error}/>
                          </div>
                        )
    })
    return adresItem;
    ;
    
}
