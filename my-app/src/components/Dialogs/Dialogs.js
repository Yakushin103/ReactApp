import React from 'react';
import './Dialogs.css'
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="dialog-items">
                <div className="item">
                    <NavLink to="/dialogs/1">Andrey</NavLink>
                </div>
                <div className="item">
                    <NavLink to="/dialogs/2">Valera</NavLink>
                </div>
                <div className="item">
                    <NavLink to="/dialogs/3">Vova</NavLink>
                </div>
            </div>
            <div className="message-items">
                <div className="item">Hi</div>
                <div className="item">Bye</div>
                <div className="item">Yo</div>
            </div>

        </div>
    );
}

export default Dialogs;