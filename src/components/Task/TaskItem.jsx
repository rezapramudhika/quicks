import React, { useState } from 'react';
import './taskItem.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TaskItem = (props) => {

    const [startDate, setStartDate] = useState(new Date());
    const [toogleDetail, setToogleDetail] = useState(props.newTask || false);
    const [taskDone, setTaskDone] = useState(props.isDone || false)
    const [optionShow, setOptionShow] = useState(false);
    const [editDesc, setEditDesc] = useState(false);

    const toogleHandler = () => {
        setToogleDetail(!toogleDetail);
    }

    const taskDoneHandler = () => {
        setTaskDone(!taskDone);
    }

    const optionShowHandler = () => {
        setOptionShow(!optionShow);
    }

    const editDescHandler = () => {
        setEditDesc(!editDesc);
    }


    return (
        <div className='taskItem' key={props.id}>
            <div className='itemCheckbox'>
                <input type="checkbox" className='checkbox' onClick={taskDoneHandler} />
            </div>
            <div className='itemBody'>
                <div className='titleContainer'>
                    {
                        props.newTask ?
                            <input className='inputTitle' type='text' placeholder='Type Task Title'></input> :
                            <label className={`title ${taskDone && 'strikethrough'}`}>Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203</label>
                    }
                    <label className={`dueDate ${taskDone && 'hide'} ${props.newTask && 'hide'}`} >2 Days Left</label>
                    <label className='timestamp'>12/06/2021</label>
                    <button className={`dropdown ${toogleDetail && 'open'}`} onClick={toogleHandler}></button>
                </div>
                <div className={`detailContainer ${toogleDetail && 'show'}`}>
                    <div className='time'>
                        <div className='icon'></div>
                        {
                            props.newTask ?
                                <DatePicker
                                    showIcon
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.333 1.99996H12.6663V0.666626H11.333V1.99996H4.66634V0.666626H3.33301V1.99996H2.66634C1.93301 1.99996 1.33301 2.59996 1.33301 3.33329V14C1.33301 14.7333 1.93301 15.3333 2.66634 15.3333H13.333C14.0663 15.3333 14.6663 14.7333 14.6663 14V3.33329C14.6663 2.59996 14.0663 1.99996 13.333 1.99996ZM13.333 14H2.66634V6.66663H13.333V14ZM2.66634 5.33329H13.333V3.33329H2.66634V5.33329Z" fill="#4F4F4F" />
                                        </svg>
                                    }
                                /> :
                                <DatePicker
                                    showIcon
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.333 1.99996H12.6663V0.666626H11.333V1.99996H4.66634V0.666626H3.33301V1.99996H2.66634C1.93301 1.99996 1.33301 2.59996 1.33301 3.33329V14C1.33301 14.7333 1.93301 15.3333 2.66634 15.3333H13.333C14.0663 15.3333 14.6663 14.7333 14.6663 14V3.33329C14.6663 2.59996 14.0663 1.99996 13.333 1.99996ZM13.333 14H2.66634V6.66663H13.333V14ZM2.66634 5.33329H13.333V3.33329H2.66634V5.33329Z" fill="#4F4F4F" />
                                        </svg>
                                    }
                                />
                        }

                    </div>
                    <div className='desc'>
                        <div className={`icon ${!props.description && 'iconGrey'}`} onClick={editDescHandler}></div>
                        {
                            editDesc ?
                                <textarea className='inputDesc'>{props.description || ''}</textarea> :
                                <p className='descText' onClick={editDescHandler}>{props.description || 'No description'}</p>
                        }
                    </div>
                </div>
            </div>
            <div className='option'>
                <button className='optionBtn' onClick={optionShowHandler}></button>
                <div className={`optionMenu right ${optionShow && 'show'}`}>
                    <div className='optionDelete'>Delete</div>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;