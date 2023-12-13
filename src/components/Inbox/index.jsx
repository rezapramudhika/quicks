import React, { useState } from 'react';
import './index.scss';
import InboxItem from './InboxItem';
import Loader from '../Loader';

const Inbox = (props) => {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className='inboxContainer'>
            <div className='inboxHeader'>
                <input className='searchBar' type='text' placeholder='Search'></input>
            </div>
            <div className='inboxBody'>
                {
                    isLoading ?
                        <Loader loadingText={'Loading Chats ...'}/> :
                        <InboxItem chatDetailHandler={props.chatDetailHandler} />
                }
            </div>
        </div>
    );
}

export default Inbox;