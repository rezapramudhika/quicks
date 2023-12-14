import React, { useEffect, useState } from 'react';
import './index.scss';
import TaskItem from './TaskItem';
import Loader from '../Loader';

const taskData = [
    {
        id: 1,
        title: 'Close off Case #012920- RODRIGUES, Amiguel',
        dueDate: new Date(),
        description: 'Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!',
        completed: false
    },{
        id: 2,
        title: 'Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203',
        dueDate: new Date(),
        description: 'All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.',
        completed: false
    },{
        id: 3,
        title: 'Set up appointment with Dr Blake',
        dueDate: new Date(),
        description: null,
        completed: false
    },{
        id: 4,
        title: 'Contact Mr Caleb - video conference?',
        dueDate: new Date(),
        description: null,
        completed: true
    },{
        id: 5,
        title: 'Assign 3 homework to Client A',
        dueDate: new Date(),
        description: null,
        completed: true
    }
    
]


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
                    <Loader loadingText={'Loading Task List ...'}/> :
                    data.length !== 0 && data.map(item => <TaskItem data={item}/>)
                }
                {
                    newTask && <TaskItem newTask />
                }
            </div>
        </div>
    );
}

export default Task;