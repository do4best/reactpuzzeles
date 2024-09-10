import React from 'react';
import PropTypes from "prop-types";
import ShowTask from "./showTask.jsx";

function AddTask({tasklist,setTaskList,task,setTask}) {

    const handelSubmit=(e)=>{
        e.preventDefault()
        if(task.id){
            const date = new Date()
            const updateTask = tasklist.map((todo)=>(task.id === todo)?{id:task.id,name:task.name,time:`${date.toLocaleTimeString()}${date.toLocaleDateString()}`} :todo)
setTaskList(updateTask)
        }else{

        const date = new Date()


        const newTask = {id:date.getTime(),name:e.target.task.value,time:`${date.toLocaleTimeString()}${date.toLocaleDateString()}`}
            setTaskList([...tasklist,newTask])

        e.target.task.value = ""

      }}

    return (
        <>
<section className="addTask">
    <form onSubmit={handelSubmit}>
        <input type="text" name={"task"} autoComplete={"off"} value={task.name} placeholder={"Add Task"} maxLength={"25"} onChange={(e)=>setTask({...task,name:e.target.value})}/>
        <button type={"submit"} >Add</button>
    </form>
</section>

        </>
    );
}

export default AddTask;
AddTask.propTypes={
    tasklist:PropTypes.any,
    setTaskList:PropTypes.any,
    task:PropTypes.any,
    setTask:PropTypes.any
}