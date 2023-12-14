import React, { useEffect, useState } from 'react';
import './index.scss';
import InboxItem from './InboxItem';
import Loader from '../Loader';
import Wrapper from '../../helper/Wrapper';
import { inboxData } from '../../helper/dummyData';

const Inbox = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setData(inboxData)
            setIsLoading(false)
        }, 1000);
    }, []);
    return (
        <div className='inboxContainer'>
            <div className='inboxHeader'>
                <input className='searchBar' type='text' placeholder='Search'></input>
                <div className='icon'></div>
            </div>
            <div className='inboxBody'>
                {
                    isLoading ?
                        <Loader loadingText={'Loading Chats ...'} /> :
                        <Wrapper>
                            {
                                data.length && data.map(item => <InboxItem key={item.id} data={item} isSupport={item.isSupport} chatDetailHandler={props.chatDetailHandler} selectInboxItem={props.selectInboxItem}/>)
                            }
                        </Wrapper>
                }
            </div>
        </div>
    );
}

export default Inbox;