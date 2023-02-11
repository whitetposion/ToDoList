import React,{Component} from 'react';
import './App.css';

import { useState } from 'react';


function App() {
  const [newTask, setNewTask] = useState("");

  const [todolist, settodolist] = useState([]);

  const handleChange = (event)=>{
    setNewTask(event.target.value);
  };

  const addTask = ()=> {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length-1].id + 1,
      taskName:newTask
    };
    settodolist([...todolist,task]);
  };

  const deleteTask=(id)=> {
    settodolist(todolist.filter((task) => task.id!==id))};

  return (
  <div className="App">
    <div className="addTask">
      <input onChange={handleChange}/>
      <button onClick={addTask}> Add Task</button>
    </div>
    <div className= "taskList">
      {todolist.map((task)=>{
        return <div>
          <h1>{task.taskName}</h1>
          <button onClick={()=>deleteTask(task.id)}>X</button>
          </div>
      })}

    </div>

  </div>
  
  );
  
}



export default App;
