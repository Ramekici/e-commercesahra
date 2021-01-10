import React from 'react';
import { Link } from 'react-router-dom';

export default function ElemanList( {id, title, content, link}) {
    return (
        <ul className="col-6 col-md-3 col-lg-2">
            <li><span className="megamenu-title"> {title} </span></li>
            {content.map((con, i) => {
                return (
                  <li key={i}><Link className="dropdown-item" to={link}> {con} </Link></li>  
                )
            })}
        </ul>
    )
}
