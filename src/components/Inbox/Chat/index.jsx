import React, { useState } from 'react';
import './index.scss';
import Dialog from './Dialog';
import Notification from './Notification';
import Loader from '../../Loader'
import Wrapper from '../../../helper/Wrapper';

const Chat = (props) => {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className='chatContainer'>
            <div className='chatHeader'>
                <button className='backBtn' onClick={props.chatDetailHandler}></button>
                <div className='chatTitleContainer'>
                    <p className='title'>I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]</p>
                    <p className='participantNumber'>3 Participants</p>
                </div>
                <button className='closeBtn' onClick={props.chatDetailHandler}></button>
            </div>
            <div className='chatBody'>
                {
                    isLoading ?
                        <Loader loadingText='Loading conversation ...' />
                        :
                        <Wrapper>
                            <Dialog type={1} />
                            <Dialog type={2} />

                            <div className='divider'>
                                <p className='timeline'>Today June 09, 2021</p>
                            </div>

                            <Dialog type={1} />
                            <Dialog type={2} />

                            <div className='divider'>
                                <p className='newMessage'>New Message</p>
                            </div>

                            <Dialog type={3} />

                            <Notification type={'loadingSupport'} />
                        </Wrapper>
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