import React, { useEffect, useState } from 'react';
import './Dialog.scss';
import moment from 'moment';
import Wrapper from '../../../helper/Wrapper';

const Dialog = (props) => {

    const [color, setColor] = useState('')
    const [optionShow, setOptionShow] = useState(false);
    const optionShowHandler = () => {
        setOptionShow(!optionShow);
    }
    useEffect(() => {
        let localStorageData = JSON.parse(localStorage.getItem(`inbox-${props.inboxId}`))
        localStorageData.forEach(element => {
            if (element.userId === props.data.userId) {
                setColor(element.colors)
            }
        });
    }, []);

    return (
        props.data.fromUsername ?
            <Wrapper>
                <div className='chat myChat'>
                    <p className='name'>You</p>
                    <div className='dialogContainer'>
                        <div className='dialog reply'>
                            <p className='message'>{props.data.fromMessage}</p>
                        </div>
                    </div>
                    <div className='dialogContainer'>
                        <div className='option'>
                            <button className='optionBtn' onClick={optionShowHandler}></button>
                            <div className={`optionMenu left ${optionShow && 'show'}`}>
                                <div className='optionEdit'>Edit</div>
                                <div className='optionDelete'>Delete</div>
                            </div>
                        </div>
                        <div className='dialog'>
                            <p className='message'>{props.data.message}</p>
                            <p className='time'>{moment(props.data.createdAt).format('hh:mm')}</p>
                        </div>
                    </div>
                </div>
            </Wrapper>
            :
            <Wrapper>
                {
                    props.data.userId === 2 ?
                        <div className='chat myChat'>
                            <p className='name'>You</p>
                            <div className='dialogContainer'>
                                <div className='option'>
                                    <button className='optionBtn' onClick={optionShowHandler}></button>
                                    <div className={`optionMenu left ${optionShow && 'show'}`}>
                                        <div className='optionEdit'>Edit</div>
                                        <div className='optionDelete'>Delete</div>
                                    </div>
                                </div>
                                <div className='dialog'>
                                    <p className='message'>{props.data.message}</p>
                                    <p className='time'>{moment(props.data.createdAt).format('hh:mm')}</p>
                                </div>
                            </div>
                        </div> : props.data.userId === 1 ?
                            <div className='chat systemChat'>
                                <p className='name'>{props.data.userName}</p>
                                <div className='dialogContainer'>
                                    <div className='dialog'>
                                        <p className='message'>{props.data.message}</p>
                                        <p className='time'>{moment(props.data.createdAt).format('hh:mm')}</p>
                                    </div>
                                </div>
                            </div> :
                            <div className='chat otherChat'>
                                <p className='name' style={{ color: color.color }}>{props.data.userName}</p>
                                <div className='dialogContainer'>
                                    <div className='option'>
                                        <button className='optionBtn' onClick={optionShowHandler}></button>
                                        <div className={`optionMenu right ${optionShow && 'show'}`}>
                                            <div className='optionEdit'>Share</div>
                                            <div className='optionEdit' onClick={() => props.replyOptionHandler(props.data)}>Reply</div>
                                        </div>
                                    </div>
                                    <div className='dialog' style={{ backgroundColor: color.backgroundColor }}>
                                        <p className='message'>{props.data.message}</p>
                                        <p className='time'>{moment(props.data.createdAt).format('hh:mm')}</p>
                                    </div>
                                </div>
                            </div>
                }
            </Wrapper>


    );
}

export default Dialog;