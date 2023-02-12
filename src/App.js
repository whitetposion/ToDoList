import React,{Component} from 'react';
import './App.css';
import {Task} from "./components/task" 
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
      taskName:newTask ,
      statusTask: false
    };
    settodolist([...todolist,task]);
  };

  const deleteTask=(id)=> {
    settodolist(todolist.filter((task) => task.id!==id))};

  const completetask = (id)=> {
    settodolist(
      todolist.map( (task) => {
        if (task.id ===id) {
         return {...task , statusTask: true};
        } else {
          return task;
        }
        
      })
    );
  };

  return (
  <div className="App">
    <div className="addTask">
      <input onChange={handleChange}/>
      <button onClick={addTask}> Add Task</button>
    </div>
    <div className= "taskList">
      {todolist.map((task)=>{
        return <Task 
        taskName = {task.taskName}
        id = { task.id}
        statusTask ={ task.statusTask}
        completetask={completetask}
        deleteTask = { deleteTask}/>;
      })}

    </div>

  </div>
  
  );
  
}



export default App;
