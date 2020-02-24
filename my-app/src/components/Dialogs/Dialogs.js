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

    let dialogsData = [
        { id: 1, name: 'Andrey'},
        { id: 2, name: 'Vova'},
        { id: 3, name: 'Sveta'},
        { id: 4, name: 'Bob'}
    ];

    let messageData =[
        { id: 1, message: 'Hi'},
        { id: 2, message: 'Bye'},
        { id: 3, message: 'Yo'},
        { id: 4, message: 'What`s up'}
    ] 

    return (
        <div className="dialogs">
            <div className="dialog-items">
                {
                    dialogsData &&
                    dialogsData.map(item => (
                        <DialogItem
                            name={item.name}
                            id={item.id}
                        />
                    ))
                }
            </div>
            <div className="message-items">
                {
                    messageData &&
                    messageData.map(item => (
                        <Message 
                            message={item.message}
                        />
                    ))
                }
            </div>

        </div>
    );
}

export default Dialogs;