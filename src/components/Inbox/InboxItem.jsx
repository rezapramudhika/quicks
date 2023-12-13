import React from 'react';
import './inboxItem.scss';

const InboxItem = (props) => {
    return (
        <div className='inboxItem' onClick={props.chatDetailHandler}>
            <div className='avatar'>
                <div className='avatarShadow'></div>
                <div className='avatarMain'></div>
            </div>
            <div className='detail'>
                <div className='firstRow'>
                    <p className='title'>109220-Naturalization</p>
                    <p className='timestamp'>January 1,2021 19:10</p>
                </div>
                <div className='secondRow'>
                    <p className='senderName'>Cameron Phillips :</p>
                    <p className='message'>Please check this out!</p>
                </div>
            </div>
            <div className='indicatorContainer'>
                <div className='indicator'></div>
            </div>
        </div>
    );
}

export default InboxItem;