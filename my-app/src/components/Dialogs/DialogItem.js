import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogItem = ({name, id}) => {
    let path = `/dialogs/${id}`

    return (
        <div className="item">
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;