import React from 'react';
import './index.scss';
import Inbox from '../Inbox';
import Chat from '../Inbox/Chat';
import Task from '../Task';

const PopUp = (props) => {
    // console.log(props)
    return (
        <div className={`popup ${props.selectedMenu !== 'menu' && 'show'}`}>
            {props.selectedMenu == 'inbox' && !props.chatDetail && <Inbox chatDetailHandler={props.chatDetailHandler} />}
            {props.selectedMenu == 'inbox' && props.chatDetail && <Chat chatDetailHandler={props.chatDetailHandler} />}
            {props.selectedMenu == 'task' && <Task />}
        </div>
    );
}

export default PopUp;