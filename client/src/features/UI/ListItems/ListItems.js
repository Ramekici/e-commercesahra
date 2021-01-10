import React from 'react';

const ListItems = (props) => (
    <div className="navbar-collapse order-3 order-lg-1 collapse">
        <ul className="navbar-nav mr-auto">
            {props.children}
        </ul>
    </div>
)

export default ListItems;