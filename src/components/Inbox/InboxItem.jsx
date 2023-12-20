import React from 'react';
import './inboxItem.scss';
import { setChatColor } from '../../helper/setChatColor';
import moment from 'moment';

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
                    <div className='avatarSingle support'></div>
                </div>
                <div className='detail'>
                    <div className='firstRow'>
                        <p className='title'>{props.data.title}</p>
                        {
                            window.innerWidth <= 600 ? 
                            <p className='timestamp'>{moment(props.data.date).format('DD/MM/YYYY')} <br/> {moment(props.data.date).format('hh:mm')}</p>
                            :
                            <p className='timestamp'>{props.data.date}</p>
                        }
                    </div>
                    <div className='secondRow'>
                        <p className='senderName'>
                            {
                                props.data.message[props.data.message.length - 1].data[props.data.message[props.data.message.length - 1].data.length - 1].userId === 2 ?
                                'You' :
                                props.data.message[props.data.message.length - 1].data[props.data.message[props.data.message.length - 1].data.length - 1].userName
                            } :</p>
                        <p className='message'>{props.data.message[props.data.message.length - 1].data[props.data.message[props.data.message.length - 1].data.length - 1].message}</p>
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
                        {
                            window.innerWidth <= 600 ? 
                            <p className='timestamp'>{moment(props.data.date).format('DD/MM/YYYY')} <br/> {moment(props.data.date).format('hh:mm')}</p>
                            :
                            <p className='timestamp'>{props.data.date}</p>
                        }
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