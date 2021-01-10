import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = (props) => (
    <Link className="nav-item dropdown mr-3" to = {props.link}>
        {props.children}
    </Link>
)
        
export default ListItem;