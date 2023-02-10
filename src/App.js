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
    settodolist([...todolist, newTask]);
  };

  const delete=(taskname)=> {
    settodolist(todolist.filter()=>{
      return
    })
  };

  return (
  <div className="App">
    <div className="addTask">
      <input onChange={handleChange}/>
      <button onClick={addTask}> Add Task</button>
    </div>
    <div className= "taskList">
      {todolist.map((task)=>{
        return <div>
          <h1>{task}</h1>
          <button onClick={()=>delete(task)}>X</button>
          </div>
      })}

    </div>

  </div>
  
  );
  
}



export default App;
