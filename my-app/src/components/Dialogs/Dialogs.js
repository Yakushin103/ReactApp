import React from 'react';
import './Dialogs.css'
import { NavLink } from 'react-router-dom';

const DialogItem = ({name, id}) => {
    let path = "/dialogs/" + id

    return (
        <div className="item">
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

const Message = ({message}) => {

    return (
        <div className="item">
            {message}
        </div>
    )
}

const Dialogs = () => {

    return (
        <div className="dialogs">
            <div className="dialog-items">
                
                <DialogItem
                    name="Andrey"
                    id="1"
                />
                <DialogItem
                    name="Vova"
                    id="2"
                />
                <DialogItem
                    name="Sveta"
                    id="3"
                />
            </div>
            <div className="message-items">
                <Message 
                    message="Hi"
                />
                <Message 
                    message="Bye"
                />
                <Message 
                    message="Yo"
                />
            </div>

        </div>
    );
}

export default Dialogs;