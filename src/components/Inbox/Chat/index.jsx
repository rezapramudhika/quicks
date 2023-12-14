import React, { useEffect, useRef, useState } from 'react';
import './index.scss';
import Dialog from './Dialog';
import Notification from './Notification';
import Loader from '../../Loader'
import Wrapper from '../../../helper/Wrapper';
import moment from 'moment';

const Chat = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [unreadMessageId, setUnreadMessageId] = useState();
    const [notifIsClicked , setNotifIsClicked] = useState(false)

    const bottomRef = useRef(null);

    useEffect(() => {
        let msg = props.data.message
        let obj = msg[msg.length - 1].data.find(o => o.isRead == false);
        if (obj) {
            setUnreadMessageId(obj.messageId)
        }
    }, []);

    const notifClickHandler = () => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
        setNotifIsClicked(true)
    }

    return (
        <div className='chatContainer'>
            <div className='chatHeader'>
                <button className='backBtn' onClick={props.chatDetailHandler}></button>
                <div className='chatTitleContainer'>
                    <p className='title'>{props.data.title}</p>
                    <p className='participantNumber'>{props.data.participantNumber} Participants</p>
                </div>
                <button className='closeBtn' onClick={props.chatDetailHandler}></button>
            </div>
            <div className='chatBody'>
                {
                    isLoading ?
                        <Loader loadingText='Loading conversation ...' />
                        :
                        props.data && props.data.message.map(item => (
                            <Wrapper>
                                <div className='divider'>
                                    <p className='timeline'>
                                        {
                                            moment(item.date).diff(moment(), 'days') < 0 ?
                                                moment(item.date).format('dddd MMMM DD, YYYY') :
                                                moment(item.date).format('[Today] MMMM DD, YYYY')
                                        }
                                    </p>
                                </div>
                                {
                                    item.data.map((msg, i) => (
                                        <Wrapper key={i}>
                                            {
                                                !msg.isRead && msg.messageId === unreadMessageId &&
                                                <div className={`divider`}>
                                                    <p className='newMessage'>New Message</p>
                                                </div>
                                            }
                                            <Dialog key={props.data.id} data={msg} inboxId={props.data.id} />
                                        </Wrapper>
                                    ))
                                }
                            </Wrapper>
                        ))
                }
                {
                    unreadMessageId && !notifIsClicked &&<Notification type={'newMsg'} onClick={notifClickHandler}/>
                }
                <div ref={bottomRef} />
                {
                    props.data.isSupport && <Notification type={'loadingSupport'} />
                }
            </div>
            <div className='chatFooter'>
                <input className='chatInput' type='text' placeholder='Type a new message'></input>
                <button className='sendBtn'>Send</button>
            </div>
        </div>
    );
}

export default Chat;