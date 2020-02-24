import React from 'react';
import './Dialogs.css';
import DialogItem from './DialogItem';
import Message from './Message';

const Dialogs = ({ state }) => {

    return (
        <div className="dialogs">
            <div className="dialog-items">
                {
                    state.dialogsData &&
                    state.dialogsData.map(item => (
                        <DialogItem
                            name={item.name}
                            id={item.id}
                        />
                    ))
                }
            </div>
            <div className="message-items">
                {
                    state.messageData &&
                    state.messageData.map(item => (
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