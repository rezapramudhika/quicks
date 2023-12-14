import React from 'react';
import './inboxItem.scss';
import { setChatColor } from '../../helper/setChatColor';

const InboxItem = (props) => {
    const inboxItemClickHandler = () => {
        props.selectInboxItem(props.data);
        props.chatDetailHandler();
        setChatColor(props.data);
    }

    return (
        props.isSupport ?
            <div className='inboxItem' onClick={inboxItemClickHandler}>
                <div className='avatar'>
                    <div className='avatarSingle'></div>
                </div>
                <div className='detail'>
                    <div className='firstRow'>
                        <p className='title'>{props.data.title}</p>
                        <p className='timestamp'>{props.data.date}</p>
                    </div>
                    <div className='secondRow'>
                        <p className='message'>{props.data.message[props.data.message.length - 1].message}</p>
                    </div>
                </div>
                <div className='indicatorContainer'>
                    {
                        !props.data.isRead && <div className='indicator'></div>
                    }
                </div>
            </div> :
            <div className='inboxItem' onClick={inboxItemClickHandler} >
                <div className='avatar'>
                    <div className='avatarShadow'></div>
                    <div className='avatarMain'></div>
                </div>
                <div className='detail'>
                    <div className='firstRow'>
                        <p className='title'>{props.data.title}</p>
                        <p className='timestamp'>{props.data.date}</p>
                    </div>
                    <div className='secondRow'>
                        <p className='senderName'>{props.data.message[props.data.message.length - 1].data[props.data.message[props.data.message.length - 1].data.length - 1].userName} :</p>
                        <p className='message'>{props.data.message[props.data.message.length - 1].data[props.data.message[props.data.message.length - 1].data.length - 1].message}</p>
                    </div>
                </div>
                <div className='indicatorContainer'>
                    {!props.data.isRead && <div className='indicator'></div>}
                </div>
            </div>
    );
}

export default InboxItem;