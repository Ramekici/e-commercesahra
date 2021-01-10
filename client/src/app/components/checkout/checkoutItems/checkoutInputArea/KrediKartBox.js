import React from 'react';

import InputData from '../../../UI/input/InputData';
import SelectData from '../../../UI/input/SelectData';
import KartNumInput from '../../../UI/input/KartNumInput';

export default function KrediKartBox({krediKartData}) {

    const dataSetAy = [ {id:19, value: "01"},{id:29, value: "02"},
                        {id:39, value: "03"},{id:49, value: "04"},
                        {id:59, value: "05"},{id:69, value: "06"},
                        {id:79, value: "07"},{id:89, value: "08"},
                        {id:99, value: "09"},{id:109, value: "10"},
                        {id:119, value: "11"},{id:129, value: "12"}]

    const dataSetYil = [{id:123, value: "2020"},{id:223, value: "2021"},
                        {id:323, value: "2022"},{id:423, value: "2023"},
                        {id:523, value: "2024"},{id:623, value: "2025"},
                        {id:723, value: "2026"},{id:823, value: "2027"}]

    return (             
            
        <div className="tab-pane fade active show" id="home" role="tabpanel" 
            aria-labelledby="home-tab">
            <div className="row gutter-1" > 
                {krediKartData.map(item => {
                    if (item.title === "Kart Numarası"){
                    return (
                        <KartNumInput
                            type="tel"
                            title={item.title}
                            col={item.col}
                            value={item.value}
                            onChangeHandler={item.onChangeHandler}
                            err={item.error} 
                            name={item.name}/>
                    )  
                    } else if (item.title === "Ay" || item.title === "Yil" ){
                        return (
                            <SelectData 
                            id = {item.id}
                            title={item.title}
                            col={item.col}
                            value={item.value}
                            onChangeHandler={item.onChangeHandler}
                            err={item.error} 
                            name={item.name}
                            dataSet={item.title === "Ay" ? dataSetAy : dataSetYil} />
                        )  
                    }else {
                        return (
                            <InputData
                                key={item.id}
                                col= {item.col}
                                title= {item.title}
                                id = {item.id}
                                type ={item.type}
                                value ={item.value}
                                onChangeHandler = {item.onChangeHandler}
                                err={item.error}
                            />
                        )
                    }
                })}              
            </div>
        </div>
    )
}
