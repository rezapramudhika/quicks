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
    const [notifIsClicked, setNotifIsClicked] = useState(false);
    const [replyFromMessageData, setReplyFromMessageData] = useState();
    const [messageInput, setMessageInput] = useState();

    const bottomRef = useRef(null);

    useEffect(() => {
        let msg = props.data.message
        let obj = msg[msg.length - 1].data.find(o => o.isRead == false);
        if (obj) {
            setUnreadMessageId(obj.messageId)
        }
    }, []);

    const notifClickHandler = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        setNotifIsClicked(true)
    }

    const replyOptionHandler = (data) => {
        setReplyFromMessageData(data)
    }

    const replyCloseHandler = () => {
        setReplyFromMessageData(undefined);
    }

    const messageInputHandler = (e) => {
        e.preventDefault();
        setMessageInput(e.target.value)
    }

    const sendBtn = () => {
        if (replyFromMessageData && messageInput.trim()) {
            let data = {
                fromUsername: replyFromMessageData.userName,
                fromMessage: replyFromMessageData.message,
                messageId: 100,
                userId: 2,
                userName: 'Claren',
                message: messageInput,
                createdAt: moment().format('MMMM DD, YYYY hh:mm'),
                isRead: true
            }
            let msg = props.data.message
            msg[msg.length - 1].data.push(data)
            setReplyFromMessageData();
            setMessageInput('')
            bottomRef.current?.scrollIntoView({ behavior: 'smooth', inline: "end" });
        }
    }

    return (
        <div className='chatContainer'>
            <div className='chatHeader'>
                <button className='backBtn' onClick={props.chatDetailHandler}></button>
                <div className='chatTitleContainer'>
                    <p className='title'>{props.data.title}</p>
                    {
                        !props.data.isSupport &&
                        <p className='participantNumber'>{props.data.participantNumber} Participants</p>
                    }
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
                                            <Dialog key={props.data.id} data={msg} inboxId={props.data.id} replyOptionHandler={replyOptionHandler} />
                                        </Wrapper>
                                    ))
                                }
                            </Wrapper>
                        ))
                }
                {
                    unreadMessageId && !notifIsClicked && <Notification type={'newMsg'} onClick={notifClickHandler} />
                }
                <div ref={bottomRef} />
                {
                    props.data.isSupport && <Notification type={'loadingSupport'} />
                }
            </div>
            <div className='chatFooter'>
                <div className='chatInputContainer'>
                    <div className={`reply ${!replyFromMessageData && 'hide'}`}>
                        <div className='closeReply' onClick={replyCloseHandler}></div>
                        <p className='title'>Replying to {replyFromMessageData && replyFromMessageData.userName}</p>
                        <p className='text'>{replyFromMessageData && replyFromMessageData.message}</p>
                    </div>
                    <input className={`chatInput ${replyFromMessageData && 'noBorderTop'}`} type='text' value={messageInput} placeholder='Type a new message' onChange={(e) => messageInputHandler(e)}></input>
                </div>
                <button className='sendBtn' onClick={sendBtn}>Send</button>
            </div>
        </div>
    );
}

export default Chat;