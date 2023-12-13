import React, { useState } from 'react';
import './index.scss';
import TaskItem from './TaskItem';


const Task = (props) => {
    const [selectOpen, setSelectOpen] = useState(false);
    const [newTask, setNewTask] = useState(false)

    const selectHandler = () => {
        setSelectOpen(!selectOpen)
    }

    const createNewTask = () => {
        setNewTask(!newTask);
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
                <TaskItem id={1} isDone={true} />
                <TaskItem id={2} />
                <TaskItem id={3} />
                {
                    newTask && <TaskItem newTask />
                }
            </div>
        </div>
    );
}

export default Task;