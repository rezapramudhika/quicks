import React, { useEffect, useState } from 'react';
import './index.scss';
import TaskItem from './TaskItem';
import Loader from '../Loader';
import { taskData } from '../../helper/dummyData';
import axios from 'axios';
import Notification from '../Inbox/Chat/Notification';

const Task = (props) => {
    const [selectOpen, setSelectOpen] = useState(false);
    const [newTask, setNewTask] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                let responseData = [];
                if (response.data) {
                    response.data.forEach((item, i) => {
                        if (i < 10) {
                            responseData.push(item)
                        } else {
                            return;
                        }
                    });
                }
                setData([...taskData, ...responseData]);
                setIsLoading(false)
            })
            .catch(function (error) {
                setIsError(true)
                setIsLoading(false)
            })
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
                        data.length !== 0 && data.map(item => <TaskItem key={item.title} data={item} />)
                }
                {
                    newTask && <TaskItem newTask />
                }
            </div>
            {
                isError && <Notification type='error' />
            }
        </div>
    );
}

export default Task;