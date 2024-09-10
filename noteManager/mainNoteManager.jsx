import React, {useState} from 'react';
import HeaderTask from "./headerTask.jsx";
import AddTask from "./addTask.jsx";
import ShowTask from "./showTask.jsx";

function MainNoteManager() {
    const [tasklist,setTaskList] = useState([])
    const [task,setTask] = useState({})
    return (
        <>
<h1>Hello</h1>
            <HeaderTask/>
            <AddTask tasklist={tasklist} setTaskList={setTaskList} task={task} setTask={setTask}/>
            <ShowTask tasklist={tasklist} setTaskList={setTaskList} task={task} setTask={setTask}/>
        </>
    );
}

export default MainNoteManager;