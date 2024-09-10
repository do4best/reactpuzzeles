import React, {useState} from 'react';
import HeaderTask from "./headerTask.jsx";
import AddTask from "./addTask.jsx";
import ShowTask from "./showTask.jsx";

function MainNoteManager(props) {
    const [tasklist,setTaskList] = useState([])
    return (
        <>
<h1>Hello</h1>
            <HeaderTask/>
            <AddTask tasklist={tasklist} setTaskList={setTaskList}/>
            <ShowTask tasklist={tasklist} setTaskList={setTaskList}/>
        </>
    );
}

export default MainNoteManager;