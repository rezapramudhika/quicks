import React, { useEffect, useState } from 'react';
import './taskItem.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
// import { badgeData } from '../../helper/dummyData';

const TaskItem = (props) => {

    const [startDate, setStartDate] = useState(moment().toDate());
    const [toogleDetail, setToogleDetail] = useState(props.newTask || false);
    const [taskDone, setTaskDone] = useState(false)
    const [optionShow, setOptionShow] = useState(false);
    const [editDesc, setEditDesc] = useState(false);
    const [description, setDescription] = useState();

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

    const onChangeDescription = (e) => {
        e.preventDefault();
        setDescription(e.target.value)
    }

    useEffect(() => {
        props.data && setStartDate(moment(props.data.dueDate).toDate());
        props.data && setTaskDone(props.data.completed);
        props.data && setDescription(props.data.description);
    }, []);

    return (
        props.newTask ?
            <div className='taskItem'>
                <div className='itemCheckbox'>
                    <input type="checkbox" className='checkbox' onChange={taskDoneHandler} />
                </div>
                <div className='itemBody'>
                    <div className='titleContainer'>
                        <input className='inputTitle' type='text' placeholder='Type Task Title'></input>
                        <label className='dueDate hide'>12/06/2021</label>
                        <label className='timestamp hide'>2 Days Left</label>
                        <button className={`dropdown ${toogleDetail && 'open'}`} onClick={toogleHandler}></button>
                    </div>
                    <div className={`detailContainer ${toogleDetail && 'show'}`}>
                        <div className='time'>
                            <div className='icon iconGrey'></div>
                            <DatePicker
                                showIcon
                                selected={startDate}
                                onChange={(date) => setStartDate(moment(date).toDate())}
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.333 1.99996H12.6663V0.666626H11.333V1.99996H4.66634V0.666626H3.33301V1.99996H2.66634C1.93301 1.99996 1.33301 2.59996 1.33301 3.33329V14C1.33301 14.7333 1.93301 15.3333 2.66634 15.3333H13.333C14.0663 15.3333 14.6663 14.7333 14.6663 14V3.33329C14.6663 2.59996 14.0663 1.99996 13.333 1.99996ZM13.333 14H2.66634V6.66663H13.333V14ZM2.66634 5.33329H13.333V3.33329H2.66634V5.33329Z" fill="#4F4F4F" />
                                    </svg>
                                }
                            />
                        </div>
                        <div className='desc'>
                            <div className={`icon ${!description && 'iconGrey'}`} onClick={editDescHandler}></div>
                            {
                                editDesc ?
                                    <textarea className='inputDesc' onChange={(e)=>onChangeDescription(e)}></textarea> :
                                    <p className='descText' onClick={editDescHandler}>No description</p>
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
            :
            <div className='taskItem' key={props.id}>
                <div className='itemCheckbox'>
                    <input type="checkbox" checked={taskDone} className='checkbox' onChange={taskDoneHandler} />
                </div>
                <div className='itemBody'>
                    <div className='titleContainer'>
                        {
                            props.newTask ?
                                <input className='inputTitle' type='text' placeholder='Type Task Title'></input> :
                                <label className={`title ${taskDone && 'strikethrough'}`}>{props.data.title}</label>
                        }
                        <label className={`dueDate ${taskDone && 'hide'} ${props.newTask && 'hide'}`} >{moment(props.data.dueDate).toNow(true)} left</label>
                        <label className='timestamp'>{moment(props.data.createdAt).format('MM/DD/YYYY')}</label>
                        <button className={`dropdown ${toogleDetail && 'open'}`} onClick={toogleHandler}></button>
                    </div>
                    <div className={`detailContainer ${toogleDetail && 'show'}`}>
                        <div className='time'>
                            <div className='icon'></div>
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
                        </div>
                        <div className='desc'>
                            <div className={`icon ${!description && 'iconGrey'}`} onClick={editDescHandler}></div>
                            {
                                editDesc ?
                                    <textarea className='inputDesc' defaultValue={description || ''} onChange={(e)=>onChangeDescription(e)}></textarea> :
                                    <p className='descText' onClick={editDescHandler}>{description || 'No description'}</p>
                            }
                        </div>
                        {/* <div className='badgeContainer'>
                            <div className={`icon ${!description && 'iconGrey'}`} onClick={editDescHandler}></div>
                            <div className='selectedBadge'>
                                <div className='badge'>Important ASAP</div>
                            </div>
                        </div> */}
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