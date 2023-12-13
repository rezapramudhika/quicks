import './App.scss';
import React, { useState } from 'react';
import PopUp from './components/PopUp';

function App() {

    const [quicksBtnOpen, setQuicksBtnOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('menu');
    const [chatDetail, setChatDetail] = useState(false);

    const selectMenuHandler = (menu) => {
        setSelectedMenu(menu);
        setQuicksBtnOpen(false)
    }

    const quicksBtnHandler = () => {
        if (selectedMenu == 'menu') {
            if (quicksBtnOpen) {
                setQuicksBtnOpen(false);
            } else {
                setQuicksBtnOpen(true);
            }
        }
    }

    const chatDetailHandler = () => {
        setChatDetail(!chatDetail);
    }

    return (
        <div className='App'>
            <div className='sidebar'></div>
            <div className='content'>
                <div className='searchbar'></div>
                {
                    selectedMenu !== 'menu' &&
                    <PopUp
                        selectedMenu={selectedMenu}
                        chatDetail={chatDetail}
                        chatDetailHandler={chatDetailHandler} />
                }
                <button className={
                    `quicksBtnClose 
                        ${selectedMenu !== 'menu' && 'show'}`
                }
                    onClick={() => selectMenuHandler('menu')} title="Close"></button>

                <button className={
                    `quicksBtn ${selectedMenu}`
                }
                    onClick={quicksBtnHandler} title={`${selectedMenu}`}></button>

                <div className={
                    `inboxBtnContainer 
                        ${quicksBtnOpen && 'open'}
                        ${selectedMenu == 'inbox' && 'selected'}
                        ${selectedMenu == 'task' && 'notSelected'}`
                }>
                    {selectedMenu == 'menu' && <p>Inbox</p>}
                    <button className='inboxBtn' onClick={() => selectMenuHandler('inbox')} title='Inbox'></button>
                </div>

                <div className={
                    `taskBtnContainer 
                        ${quicksBtnOpen && 'open'}
                        ${selectedMenu == 'task' && 'selected'}
                        ${selectedMenu == 'inbox' && 'notSelected'}`
                }>
                    {selectedMenu == 'menu' && <p>Task</p>}
                    <button className='taskBtn' onClick={() => selectMenuHandler('task')} title='Task'></button>
                </div>
            </div>
        </div>
    );
}

export default App;
