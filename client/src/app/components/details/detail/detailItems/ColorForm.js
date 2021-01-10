import React, { useState } from 'react';
import SepetEkle from './SepetEkle';

export default function ColorForm({renkler, id, detailP}) {

    const [renk, setrenk] = useState(null);
    const onChangeHandler = (e) => {
        e.preventDefault();
        setrenk(e.target.value);
    }

    const renkGosteri = renkler.map((c,i)=> {
        const textI = c=== renk ? "btn active text-" : "btn text-";
        const textC = textI.concat(`${c}`);
        return (
            <label className= {textC} htmlFor={i+12322} key={i+12322}>
                <input type="radio" id={i+12322} check="false"
                value={c} onClick = {onChangeHandler}/>
            </label> 
        )
    });

    return (
        <>
        <div className="row mb-4">
            <div className="col-12">
                <div className="form-group">
                    <label> Renk </label>
                    <div className="btn-group-toggle btn-group-square btn-group-colors">
                        {renkGosteri}
                    </div>
                </div>
            </div>
        </div>
        <SepetEkle id={id} detailP={detailP} renk={renk}/>
        </>
    )
}
