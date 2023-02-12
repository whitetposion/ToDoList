export const Task = (props) =>{
     return (< div className = "task" style = {{backgroundColor : props.statusTask ? "green": "#3278cc" }}>
     <h1 >{props.taskName}</h1>
     <button onClick={()=>props.completetask(props.id)} > complete</button>
     <button onClick={()=>props.deleteTask(props.id)}>X</button>
     </div>);
}

