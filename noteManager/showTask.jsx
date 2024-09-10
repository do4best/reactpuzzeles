import React from 'react';
import {PiNotePencilBold} from "react-icons/pi";
import {FaTrashCan} from "react-icons/fa6";
import PropTypes from "prop-types";

function ShowTask({tasklist,setTaskList,task,setTask}) {

    const handelDelete=(id)=>{

        const deleteTask_item = tasklist.filter((select)=> select.id !== id)
        setTaskList(deleteTask_item)

    }
    const handelEdit=(id)=>{
        const seleteItem = tasklist.find((todo)=> todo.id === id)
        setTask(seleteItem)

    }

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
                {tasklist.map((todo)=>(
                <li key={todo.id}>
                    <p>
                        <span className={"name"}>{todo.name}</span>
                        <span className={"time"}>{todo.time}</span>
                    </p>
                    <PiNotePencilBold onClick={()=>handelEdit(todo.id)}/>
                    <FaTrashCan onClick={()=>handelDelete(todo.id)}/>
                </li>))}
            </ul>
        </section>
        </>
    );
}

export default ShowTask;
ShowTask.propTypes={
    tasklist:PropTypes.any,
    setTaskList:PropTypes.any,
    task:PropTypes.any,
    setTask:PropTypes.any
}