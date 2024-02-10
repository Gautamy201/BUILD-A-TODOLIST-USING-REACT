
import React, { useState } from "react";
import TaskItem from "./components/TaskItem";
function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task:"", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormState(formState => ({
      ...formState,
      [name]: newValue
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formState.task.trim() !== "" && formState.taskAssignedTo !== "") {
      setTasks(tasks => [...tasks, { ...formState }]);
      setFormState({
        task: "",
        completed: true,
        taskAssignedTo: ""
      });
    }
  }

  function deletButton (e){
    let result = tasks.filter((value)=>{
      return value !== e
    })
    setTasks(result)
  }

  function ToggleButton(e){
    setTasks(tasks=>tasks.map(Task=>
      Task === e ? {...Task,completed: !Task.completed}: Task))
    
  }
  return (
    <>
      <div style={{margin:"20px 50px"}}>
        <form className="row align-items-center d-flex justify-content-center" onSubmit={handleSubmit}>
          <input className="col-3 fs-2 text" onChange={handleChange}  name="task" type="text" placeholder="Add Task" value={formState.task} />
          <label className="col-2 fs-2 text ">
            Completed:
            <input style={{width:"30px",height:"30px",marginLeft:"20px"}} defaultChecked="unchecked"  onChange={handleChange}  name="completed" type="checkbox" />
          </label>
          <select value={formState.taskAssignedTo} className="col-3 fs-2 text" onChange={handleChange}  name="taskAssignedTo">
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button className=" btn btn-success" style={{margin:"20px"}} type="submit" >Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem key={index} item={item} deletButton={deletButton} ToggleButton={ToggleButton} Key={index}/>
      ))}
    </>
  );
}

export default App;