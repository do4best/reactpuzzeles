import React from 'react';
import {PiNotePencilBold} from "react-icons/pi";
import {FaTrashCan} from "react-icons/fa6";
import PropTypes from "prop-types";

function ShowTask({tasklist,setTaskList}) {
    const tasks=[
        {id:10001,name:"Task A",time:"15:22:50 10/09/24"},
        {id:10002,name:"Task B",time:"15:23:50 10/09/24"},
        {id:10003,name:"Task C",time:"15:24:50 10/09/24"}]
    return (
        <>
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{tasklist.length}</span>
                </div>
                <button className="clearAll" onClick={()=>setTaskList([])}>Clear All</button>
            </div>
            <ul>
                {tasklist.map((task)=>(
                <li key={task.id}>
                    <p>
                        <span className={"name"}>{task.name}</span>
                        <span className={"time"}>{task.time}</span>
                    </p>
                    <PiNotePencilBold/>
                    <FaTrashCan/>
                </li>))}
            </ul>
        </section>
        </>
    );
}

export default ShowTask;
ShowTask.propTypes={
    tasklist:PropTypes.any,
    setTaskList:PropTypes.any
}