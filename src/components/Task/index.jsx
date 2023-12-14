import React, { useEffect, useState } from 'react';
import './index.scss';
import TaskItem from './TaskItem';
import Loader from '../Loader';
import { taskData } from '../../helper/dummyData';

const Task = (props) => {
    const [selectOpen, setSelectOpen] = useState(false);
    const [newTask, setNewTask] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setData(taskData)
            setIsLoading(false)
        }, 1000);
    }, []);

    const selectHandler = () => {
        setSelectOpen(!selectOpen)
    }

    const createNewTask = () => {
        !isLoading && setNewTask(!newTask);
    }


    return (
        <div className='taskContainer'>
            <div className='taskHeader'>
                <div className='taskCategory'>
                    <div className='select' onClick={selectHandler}>
                        <label id='taskName'>My Task</label>
                        <label className='icon'></label>
                    </div>
                    <div className={`selectOption ${selectOpen && 'show'}`}>
                        <div className='optionItem'>Personal Errands</div>
                        <div className='optionItem'>Urgent To-Do</div>
                    </div>
                </div>
                <button className='sendBtn' onClick={createNewTask}>New Task</button>
            </div>
            <div className='taskBody' id='taskBody'>
                {
                    isLoading ?
                        <Loader loadingText={'Loading Task List ...'} /> :
                        data.length !== 0 && data.map(item => <TaskItem key={item.id} data={item} />)
                }
                {
                    newTask && <TaskItem newTask />
                }
            </div>
        </div>
    );
}

export default Task;