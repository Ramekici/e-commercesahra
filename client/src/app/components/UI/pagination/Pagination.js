import React from 'react';

export default function Pagination({pageLength, setPage, maxEl, aktifSyf}) {

    let maxCount = Math.ceil(pageLength / maxEl);
    let rows = [];
    for (let i = 1; i < maxCount+1; i++) {
        rows.push( 
            <li className={aktifSyf === i ? "page-item active" : "page-item"}  key={i} >
                <button className= "page-link" onClick = {() => setPage(i-1)}> {i} </button>
            </li>
        );
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {maxCount > 1 && aktifSyf >= 2 ? 
                <li className="page-item">
                    <button className= "page-link" onClick = {() => setPage(aktifSyf-2)}> 
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li> : null}
                {rows}
                {maxCount > 1 && aktifSyf < maxCount ? 
                <li className="page-item">
                    <button className= "page-link" onClick = {() => setPage(aktifSyf)}> 
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li> : null}
                
            </ul>
        </nav>
    )
}
