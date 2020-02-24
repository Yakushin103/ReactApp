import React from 'react';
import './Dialogs.css';
import DialogItem from './DialogItem';
import Message from './Message';

const Dialogs = ({ dialogsData, messageData }) => {

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