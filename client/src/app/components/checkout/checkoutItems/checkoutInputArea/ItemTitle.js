import React from 'react';
import {Link} from 'react-router-dom';

export default function ItemTitle({num, title, tar, titleInfo}) {
    return (
        <div className="row align-items-end mb-2">
            <div className="col-md-6">
                <h2 className="h3 mb-0"><span className="text-muted"> {num} </span> {title} </h2>
            </div>
            <div className="col-md-6 text-md-right">
                <Link className="eyebrow underline action" data-toggle="modal" to="/profile" 
                data-target={tar}> {titleInfo} </Link>
            </div>
        </div>
    )
}
