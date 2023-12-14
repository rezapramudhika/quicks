import React, { useState } from 'react';
import './index.scss';
import Inbox from '../Inbox';
import Chat from '../Inbox/Chat';
import Task from '../Task';

const PopUp = (props) => {
    
    const [chatDetailData, setChatDetailData] = useState([]);

    const selectInboxItem = (data) => {
        setChatDetailData(data);
    }

    return (
        <div className={`popup ${props.selectedMenu !== 'menu' && 'show'}`}>
            {props.selectedMenu == 'inbox' && !props.chatDetail && <Inbox chatDetailHandler={props.chatDetailHandler} selectInboxItem={selectInboxItem}/>}
            {props.selectedMenu == 'inbox' && props.chatDetail && <Chat chatDetailHandler={props.chatDetailHandler} data={chatDetailData}/>}
            {props.selectedMenu == 'task' && <Task />}
        </div>
    );
}

export default PopUp;