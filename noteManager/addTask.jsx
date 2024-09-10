import React from 'react';
import PropTypes from "prop-types";
import ShowTask from "./showTask.jsx";

function AddTask({tasklist,setTaskList}) {

    const handelSubmit=(e)=>{
        e.preventDefault()
        const date = new Date()


        const newTask = {id:date.getTime(),name:e.target.task.value,time:`${date.toLocaleTimeString()}${date.toLocaleDateString()}`}
        setTaskList([...tasklist,newTask])
        e.target.task.value = ""

    }

    return (
        <>
<section className="addTask">
    <form onSubmit={handelSubmit}>
        <input type="text" name={"task"} autoComplete={"off"} placeholder={"Add Task"}/>
        <button type={"submit"} >Add</button>
    </form>
</section>

        </>
    );
}

export default AddTask;
AddTask.propTypes={
    tasklist:PropTypes.any,
    setTaskList:PropTypes.any
}