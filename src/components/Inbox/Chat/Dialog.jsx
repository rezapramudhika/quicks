import React, { useState } from 'react';
import './Dialog.scss';

const Dialog = (props) => {
    const [optionShow, setOptionShow] = useState(false);

    const optionShowHandler = () => {
        setOptionShow(!optionShow);
    }

    return (
        props.type === 1 ?
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
                        <p className='message'>No worries! It will be completed ASAP. I've asked him yesterday.</p>
                        <p className='time'>19.32</p>
                    </div>
                </div>
            </div> : props.type === 2 ?
                <div className='chat otherChat'>
                    <p className='name' style={{ color: '#E5A443' }}>Mary Hilda</p>
                    <div className='dialogContainer'>
                        <div className='option'>
                            <button className='optionBtn' onClick={optionShowHandler}></button>
                            <div className={`optionMenu right ${optionShow && 'show'}`}>
                                <div className='optionEdit'>Share</div>
                                <div className='optionEdit'>Reply</div>
                            </div>
                        </div>
                        <div className='dialog' style={{ backgroundColor: '#FCEED3' }}>
                            <p className='message'>Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.</p>
                            <p className='time'>19.32</p>
                        </div>
                    </div>
                </div> :
                <div className='chat systemChat'>
                    <p className='name'>FastVisa Support</p>
                    <div className='dialogContainer'>
                        <div className='dialog'>
                            <p className='message'>Hey there. Welcome to your inbox! Contact us for more information and help about anything! We'll send you a response as soon as possible.</p>
                            <p className='time'>19.32</p>
                        </div>
                    </div>
                </div>
    );
}

export default Dialog;