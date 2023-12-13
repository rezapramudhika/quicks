import React from 'react';
import './notification.scss';

const Notification = (props) => {
    return (
        <div className='notificationContainer'>
            {
                props.type === 'newMsg' ?
                    <div className='notificationNewMsg'>
                        <label>New Message</label>
                        <div className='iconDownward'></div>
                    </div> : props.type === 'loadingSupport' &&
                    <div className='notificationLoadingSupport'>
                        <div className='notificationSpinner'></div>
                        <label className='notificationText'>Please wait while we connect you with one of our team...</label>
                    </div>
            }
        </div>
    );
}

export default Notification;